import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What the account context reaches in main: the LumenBOT account session, its devices, and the
 * usage the page rail and the Usage page show.
 */
export interface AccountPort {
  agent: Pick<LumenBOTDesktopApi["agent"], "getUsage">;
  auth: Pick<
    LumenBOTDesktopApi["auth"],
    | "cancelMobileConnect"
    | "createMobileConnect"
    | "createMobileConnectLink"
    | "getMobileConnectLink"
    | "getState"
    | "listAccountSessions"
    | "listMobileConnectedDevices"
    | "logout"
    | "onEvent"
    | "requestEmailCode"
    | "retry"
    | "revokeAccountSession"
    | "revokeMobileConnectedDevice"
    | "revokeMobileConnectLink"
    | "updateAvatar"
    | "updateName"
    | "verifyEmailCode"
  >;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function accountPort(): AccountPort {
  return window.lumenbot;
}
