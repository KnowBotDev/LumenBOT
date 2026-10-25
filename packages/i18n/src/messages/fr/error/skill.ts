import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/skill";

export const messages = {
  // Skill package, library, and marketplace errors.
  "error.skill.symlinks": "Les paquets de comp�tences ne peuvent pas contenir de liens symboliques.",
  "error.skill.expandedTooLarge": "La comp�tence d�compress�e doit faire moins de 10 Mo.",
  "error.skill.irregularEntry":
    "Les paquets de comp�tences ne peuvent contenir que des fichiers et des dossiers ordinaires.",
  "error.skill.packageTooLarge": "Le paquet de comp�tence doit faire moins de 10 Mo.",
  "error.skill.missingSkillFile": "Le paquet de comp�tence doit contenir SKILL.md � sa racine.",
  "error.skill.frontmatterMissing": "SKILL.md doit commencer par un en-t�te YAML.",
  "error.skill.metadataInvalid": "Les m�tadonn�es de SKILL.md ne sont pas valides.",
  "error.skill.nameAndDescriptionRequired": "SKILL.md doit avoir un nom et une description valides.",
  "error.skill.zipInvalid": "Le fichier ZIP choisi n�est pas valide.",
  "error.skill.fileCountInvalid": "Le paquet de comp�tence a un nombre de fichiers non valide.",
  "error.skill.slugInvalid": "Le nom de la comp�tence ne permet pas de former un identifiant valide.",
  "error.skill.tooManyFiles": "Une comp�tence peut contenir au maximum {limit} fichiers.",
  "error.skill.unsafeFile": "Le paquet de comp�tence contient un fichier non s�r : {name}",
  "error.skill.markdownTooLarge": "SKILL.md d�passe 256 Ko.",
  "error.skill.markdownUnreadable": "Impossible de lire SKILL.md.",
  "error.skill.frontmatterInvalid": "L�en-t�te de SKILL.md n�est pas du YAML valide.",
  "error.skill.descriptionLength": "SKILL.md doit avoir une description de 1 � {limit} caract�res.",
  "error.skill.nameMismatch": "SKILL.md doit contenir � name: {slug} �, comme le nom de son dossier.",
  "error.skill.draftExpired": "Le paquet de comp�tence choisi a expir�. Choisissez-le de nouveau.",
  "error.skill.localHasNoVersion": "Une comp�tence locale n�a pas de version publi�e.",
  "error.skill.publishLocalFirst": "Publiez les comp�tences locales s�par�ment avant de publier cet agent.",
  "error.skill.bundleMismatch": "La comp�tence t�l�charg�e ne correspond pas � son entr�e sign�e du catalogue.",
  "error.skill.metadataMismatch": "Les m�tadonn�es de la comp�tence t�l�charg�e ne correspondent pas au catalogue.",
  "error.skill.folderTaken": "Une autre comp�tence install�e utilise ce nom de dossier.",
  "error.skill.replaceModified":
    "Cette comp�tence a des modifications locales. Confirmez le remplacement pour continuer.",
  "error.skill.removeModified":
    "Cette comp�tence a des modifications locales. Confirmez la suppression pour les effacer.",
  "error.skill.notFound": "Comp�tence introuvable.",
  "error.skill.disableModified":
    "Cette comp�tence a des modifications locales. Enregistrez ou harmonisez les deux copies des fournisseurs avant de la d�sactiver.",
  "error.skill.disableNeedsRepair": "Cette comp�tence doit �tre r�par�e avant de pouvoir �tre d�sactiv�e.",
  "error.skill.enableNeedsRepair": "Cette comp�tence doit �tre r�par�e avant de pouvoir �tre activ�e.",
  "error.skill.providerFolderOccupied":
    "Le dossier de fournisseur de cette comp�tence est occup�. D�placez ou harmonisez ses fichiers avant de l�activer.",
  "error.skill.chooseLocalAgent": "Choisissez d�abord un agent local.",
  "error.skill.localLibraryUnavailable": "La biblioth�que de comp�tences locales n�est pas disponible.",
  "error.skill.lockInvalid": "L�enregistrement de la comp�tence install�e n�est pas valide. Il n�a pas �t� modifi�.",
  "error.skill.installPathSymlink":
    "Les chemins d�installation des comp�tences ne peuvent pas contenir de liens symboliques.",
  "error.skill.duplicateSlug": "Deux comp�tences s�appellent � {slug} �. Renommez l�une d�elles avant la publication.",
  "error.skill.publishNeedsRepair": "{name} a des modifications locales ou doit �tre r�par�e avant la publication.",
  "error.skill.publishUntracked":
    "{name} a �t� install�e avant le suivi exact des versions. Mettez-la � jour ou r�parez-la avant la publication.",
  "error.skill.tooManySkills": "Un agent peut avoir jusqu�� {limit} comp�tences.",
  "error.skill.unmanagedExists": "Une comp�tence non g�r�e existe d�j� � l�emplacement {path}.",
  "error.skill.templateMarkdownTooLarge": "{name} : SKILL.md d�passe 64 Ko. Raccourcissez-le avant la publication.",
  "error.skill.localNoRevisions": "La comp�tence locale n�a aucune r�vision publi�e.",
  "error.skill.localNameTaken": "Une comp�tence locale porte d�j� ce nom. R�visez-la plut�t.",
  "error.skill.localKeepName": "Gardez le m�me nom de comp�tence lors de sa r�vision.",
  "error.skill.localRelativeFolder":
    "Utilisez un dossier de comp�tence relatif dans l�espace de travail de l�agent actuel.",
  "error.skill.localSourceOutside": "La source de la comp�tence doit se trouver dans l�espace de travail de l�agent.",
  "error.skill.localSourceNotFolder": "La source de la comp�tence doit �tre un dossier.",
  "error.skill.localMissingSkillFile": "Le dossier de la comp�tence doit contenir SKILL.md � sa racine.",
  "error.skill.pathSymlink": "Les chemins des comp�tences ne peuvent pas contenir de liens symboliques.",
  "error.skill.folderNotRead": "{provider} ne lit pas {folder}. Copiez ce dossier dans {target}.",
} as const satisfies PartialTranslation<typeof source>;
