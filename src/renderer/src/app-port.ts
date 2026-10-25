import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What the app shell and the cross-domain root modules reach in main, plus the shell actions
 * (`openUrl`, `openExternal`) that several domains share.
 */
export interface AppPort {
  getAppInfo: LumenBOTDesktopApi["getAppInfo"];
  getAppAppearancePreference: LumenBOTDesktopApi["getAppAppearancePreference"];
  getAppInterfaceSizePreference: LumenBOTDesktopApi["getAppInterfaceSizePreference"];
  getAppLanguagePreference: LumenBOTDesktopApi["getAppLanguagePreference"];
  getAppLogoColorPreference: LumenBOTDesktopApi["getAppLogoColorPreference"];
  onAppAppearancePreference: LumenBOTDesktopApi["onAppAppearancePreference"];
  onAppInterfaceSizePreference: LumenBOTDesktopApi["onAppInterfaceSizePreference"];
  onAppLanguagePreference: LumenBOTDesktopApi["onAppLanguagePreference"];
  onAppLogoColorPreference: LumenBOTDesktopApi["onAppLogoColorPreference"];
  openExternal: LumenBOTDesktopApi["openExternal"];
  openUrl: LumenBOTDesktopApi["openUrl"];
  openChatWindow: LumenBOTDesktopApi["openChatWindow"];
  getChatWindows: LumenBOTDesktopApi["getChatWindows"];
  onChatWindows: LumenBOTDesktopApi["onChatWindows"];
  setAppAppearancePreference: LumenBOTDesktopApi["setAppAppearancePreference"];
  setAppInterfaceSizePreference: LumenBOTDesktopApi["setAppInterfaceSizePreference"];
  setAppLanguagePreference: LumenBOTDesktopApi["setAppLanguagePreference"];
  setAppLogoColorPreference: LumenBOTDesktopApi["setAppLogoColorPreference"];
  agent: Pick<
    LumenBOTDesktopApi["agent"],
    "readConversationPage" | "searchConversationMessages" | "searchConversationFiles" | "listRoutines" | "listAgents"
  >;
  agentTemplates: Pick<LumenBOTDesktopApi["agentTemplates"], "onOpenLink" | "takePendingLink">;
  acpRegistry: LumenBOTDesktopApi["acpRegistry"];
  hostedSites: LumenBOTDesktopApi["hostedSites"];
  billing: LumenBOTDesktopApi["billing"];
  license: LumenBOTDesktopApi["license"];
  hostedServers: LumenBOTDesktopApi["hostedServers"];
  routineFeed: LumenBOTDesktopApi["routineFeed"];
  events: LumenBOTDesktopApi["events"];
  plugins: Pick<LumenBOTDesktopApi["plugins"], "onOpenListing" | "takePendingListing">;
  servers: Pick<LumenBOTDesktopApi["servers"], "onInvite" | "takePendingInvite">;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function appPort(): AppPort {
  return window.lumenbot;
}
