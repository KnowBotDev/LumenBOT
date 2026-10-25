# LumenBOT from its GitHub release: the AppImage on Linux and the app ZIP on macOS. `sources.json`
# names the release and its hashes; `bun scripts/nix-sources.ts` writes it after each release.
#
# LumenBOT does not update itself from the Nix store (`isNixStoreInstall` in
# src/main/update-service.ts). Nix replaces the whole package instead.
{
  lib,
  stdenvNoCC,
  fetchurl,
  appimageTools,
  buildFHSEnv,
  makeBinaryWrapper,
  unzip,
  sources,
}:

let
  pname = "lumenbot";
  inherit (sources) version;
  system = stdenvNoCC.hostPlatform.system;
  asset = sources.assets.${system} or (throw "LumenBOT has no release for ${system}");

  src = fetchurl {
    url = "https://github.com/nightly-labs/lumenbot/releases/download/v${version}/${asset.name}";
    inherit (asset) hash;
  };

  meta = {
    description = "Local-first multi-agent desktop workspace for Codex, Claude, Grok and other coding agents";
    homepage = "https://github.com/nightly-labs/lumenbot";
    changelog = "https://github.com/nightly-labs/lumenbot/releases/tag/v${version}";
    license = {
      shortName = "polyform-nc-10";
      fullName = "PolyForm Noncommercial License 1.0.0";
      spdxId = "PolyForm-Noncommercial-1.0.0";
      url = "https://polyformproject.org/licenses/noncommercial/1.0.0/";
      free = false;
      redistributable = false;
    };
    sourceProvenance = [ lib.sourceTypes.binaryNativeCode ];
    platforms = builtins.attrNames sources.assets;
    mainProgram = "lumenbot";
  };

  # The AppImage's `AppRun` adds `--no-sandbox` when the system refuses an unprivileged user
  # namespace, and its desktop entry passes `--no-sandbox` too. LumenBOT must keep the Electron sandbox
  # (build/linux/lumenbot.apparmor), so the FHS environment starts the Electron binary directly.
  # Its libraries and the bundled cua-driver find the usual Linux paths there.
  contents = appimageTools.extract {
    inherit pname version src;
    # The bundled Sunshine needs the Ubuntu libraries of scripts/hosting/packages.txt, and this
    # environment was not checked against them. Without the runtime directory, LumenBOT shows remote
    # desktop as unavailable and does not try to start it.
    postExtract = ''
      rm -rf $out/resources/remote-desktop-runtime
    '';
  };

  linux = buildFHSEnv (
    appimageTools.defaultFhsEnvArgs
    // {
      inherit pname version meta;
      targetPkgs = pkgs: appimageTools.defaultFhsEnvArgs.targetPkgs pkgs ++ [ pkgs.libsecret ];
      runScript = "${contents}/lumenbot";
      extraInstallCommands = ''
        install -Dm444 ${contents}/lumenbot.desktop $out/share/applications/lumenbot.desktop
        substituteInPlace $out/share/applications/lumenbot.desktop \
          --replace-fail 'Exec=AppRun --no-sandbox %U' 'Exec=lumenbot %U'
        # The AppImage has only a 1600x1600 icon, a size that no icon theme lists.
        install -Dm444 ${contents}/lumenbot.png $out/share/pixmaps/lumenbot.png
      '';
    }
  );

  darwin = stdenvNoCC.mkDerivation {
    inherit
      pname
      version
      src
      meta
      ;

    nativeBuildInputs = [
      makeBinaryWrapper
      unzip
    ];

    sourceRoot = ".";

    # The app is signed and notarized. Stripping or patching it would break the signature.
    dontConfigure = true;
    dontBuild = true;
    dontFixup = true;

    installPhase = ''
      runHook preInstall
      mkdir -p $out/Applications
      cp -R openbot.app $out/Applications/
      makeWrapper $out/Applications/openbot.app/Contents/MacOS/LumenBOT $out/bin/lumenbot
      runHook postInstall
    '';
  };
in
if stdenvNoCC.hostPlatform.isDarwin then darwin else linux
