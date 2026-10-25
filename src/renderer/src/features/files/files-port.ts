import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What the storage panels reach in main: the stored files of a server, and the agent names that
 * label them.
 */
export interface FilesPort {
  agent: Pick<LumenBOTDesktopApi["agent"], "listAgents">;
  /** The old provider CLI versions are optional: a client with no store of its own, such as the web client, has none. */
  storage: Pick<LumenBOTDesktopApi["storage"], "clear" | "deleteFile" | "getUsage" | "openFile"> &
    Partial<Pick<LumenBOTDesktopApi["storage"], "getOldRuntimeVersions" | "removeOldRuntimeVersions">>;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function filesPort(): FilesPort {
  return window.lumenbot;
}
