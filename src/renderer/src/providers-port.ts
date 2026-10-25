import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What provider state reaches in main: connecting, signing in and refreshing providers, and the
 * runtimes LumenBOT installs for them, on this computer or on a host the account administers.
 */
export interface ProvidersPort {
  cancelProviderCodeLogin: LumenBOTDesktopApi["cancelProviderCodeLogin"];
  connectProvider: LumenBOTDesktopApi["connectProvider"];
  cancelProviderSignIn: LumenBOTDesktopApi["cancelProviderSignIn"];
  refreshAgentProviders: LumenBOTDesktopApi["refreshAgentProviders"];
  setProviderOn: LumenBOTDesktopApi["setProviderOn"];
  restartProvider: LumenBOTDesktopApi["restartProvider"];
  cancelProviderRestart: LumenBOTDesktopApi["cancelProviderRestart"];
  startProviderCodeLogin: LumenBOTDesktopApi["startProviderCodeLogin"];
  providerRuntimes: LumenBOTDesktopApi["providerRuntimes"];
  connectProviderAccount: LumenBOTDesktopApi["connectProviderAccount"];
  cancelProviderAccountSignIn: LumenBOTDesktopApi["cancelProviderAccountSignIn"];
  renameProviderAccount: LumenBOTDesktopApi["renameProviderAccount"];
  removeProviderAccount: LumenBOTDesktopApi["removeProviderAccount"];
  providerUsageResets: LumenBOTDesktopApi["providerUsageResets"];
  resetProviderUsage: LumenBOTDesktopApi["resetProviderUsage"];
  /** The same, for the host of a joined server the account administers. */
  providerAdmin: LumenBOTDesktopApi["providerAdmin"];
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function providersPort(): ProvidersPort {
  return window.lumenbot;
}
