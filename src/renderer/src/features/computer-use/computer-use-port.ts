import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What Computer Use reaches in main: the driver state, the macOS permission panes and helper, and
 * the highlight placement. The helper and highlight windows have no provider tree, so this is a
 * module.
 */
export interface ComputerUsePort {
  computerUse: LumenBOTDesktopApi["computerUse"];
  remoteDesktop: Pick<LumenBOTDesktopApi["remoteDesktop"], "checkSetup">;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function computerUsePort(): ComputerUsePort {
  return window.lumenbot;
}
