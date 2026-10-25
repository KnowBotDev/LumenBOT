import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What team presence reaches in main: who is online, and whether this member is typing.
 */
export interface TeamPort {
  servers: Pick<LumenBOTDesktopApi["servers"], "onPresence" | "setTyping">;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function teamPort(): TeamPort {
  return window.lumenbot;
}
