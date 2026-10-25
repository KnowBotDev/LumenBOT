import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What turn state reaches in main: the queue, the routine ids, and the answers to prompts,
 * approvals and browser takeovers.
 */
export interface TurnsPort {
  agent: Pick<
    LumenBOTDesktopApi["agent"],
    | "cancelQueuedMessage"
    | "cancelWait"
    | "clearContext"
    | "compactContext"
    | "interrupt"
    | "listQueue"
    | "listRoutines"
    | "listWaits"
    | "reorderQueue"
    | "respondToApproval"
    | "respondToBrowserTakeover"
    | "respondToPrompt"
    | "steerQueuedMessage"
    | "updateQueuedMessage"
  >;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function turnsPort(): TurnsPort {
  return window.lumenbot;
}
