import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What the usage panel reaches in main: the analytics of a server, its agents, and the events that
 * make the report stale.
 */
export interface UsagePort {
  agent: Pick<LumenBOTDesktopApi["agent"], "getHostAnalytics" | "listAgents" | "onScopedEvent">;
  servers: Pick<LumenBOTDesktopApi["servers"], "onEvent">;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function usagePort(): UsagePort {
  return window.lumenbot;
}
