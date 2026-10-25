import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What the sidebar reaches in main: the saved sidebar layout and its changes, and the free space
 * on the disk of a server for the storage card.
 */
export interface SidebarPort {
  agent: Pick<LumenBOTDesktopApi["agent"], "getSidebarLayout" | "mutateSidebarLayout">;
  storage: Pick<LumenBOTDesktopApi["storage"], "getDisk">;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function sidebarPort(): SidebarPort {
  return window.lumenbot;
}
