import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What the settings context reaches in main: the app-wide preferences, the switches for updates,
 * notifications and the Dynamic Island, and the local agents of the Agents tab.
 */
export interface SettingsPort {
  getAgentDefaults: LumenBOTDesktopApi["getAgentDefaults"];
  getAgentMemoryLimitPreference: LumenBOTDesktopApi["getAgentMemoryLimitPreference"];
  getAnalyticsPreference: LumenBOTDesktopApi["getAnalyticsPreference"];
  getAppBehaviorPreference: LumenBOTDesktopApi["getAppBehaviorPreference"];
  getApprovalAutomation: LumenBOTDesktopApi["getApprovalAutomation"];
  getBusyMessageModePreference: LumenBOTDesktopApi["getBusyMessageModePreference"];
  getRemoteNetworkRoute: LumenBOTDesktopApi["getRemoteNetworkRoute"];
  getRemoteSessionReusePreference: LumenBOTDesktopApi["getRemoteSessionReusePreference"];
  onAgentMemoryLimitPreference: LumenBOTDesktopApi["onAgentMemoryLimitPreference"];
  onApprovalAutomation: LumenBOTDesktopApi["onApprovalAutomation"];
  onOpenSettings: LumenBOTDesktopApi["onOpenSettings"];
  setAgentDefaults: LumenBOTDesktopApi["setAgentDefaults"];
  setAnalyticsPreference: LumenBOTDesktopApi["setAnalyticsPreference"];
  setAppBehaviorPreference: LumenBOTDesktopApi["setAppBehaviorPreference"];
  setBusyMessageModePreference: LumenBOTDesktopApi["setBusyMessageModePreference"];
  setRemoteNetworkRoute: LumenBOTDesktopApi["setRemoteNetworkRoute"];
  setRemoteSessionReusePreference: LumenBOTDesktopApi["setRemoteSessionReusePreference"];
  agent: Pick<LumenBOTDesktopApi["agent"], "listAgents" | "updateAgent">;
  dynamicIsland: Pick<
    LumenBOTDesktopApi["dynamicIsland"],
    "getBuiltInDisplayGeometry" | "getPreference" | "setPreference"
  >;
  notifications: Pick<LumenBOTDesktopApi["notifications"], "getPreference" | "openSettings" | "setPreference" | "test">;
  update: Pick<LumenBOTDesktopApi["update"], "getPreference" | "onPreference" | "setPreference">;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function settingsPort(): SettingsPort {
  return window.lumenbot;
}
