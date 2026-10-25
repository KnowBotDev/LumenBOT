import type { DeleteSharedTableInput, LumenBOTDesktopApi, SharedTable } from "@lumenbot/contracts/ipc";

/**
 * What the conversation domain reaches in main: agent and direct message pages, sends, reads,
 * shared tables, and the browser seams a view takes when no runtime is injected.
 */
export interface ConversationPort {
  agent: Pick<
    LumenBOTDesktopApi["agent"],
    | "readAgentSessionSettings"
    | "askSideQuestion"
    | "setAgentSessionSetting"
    | "resetAgentSessionSetting"
    | "onScopedEvent"
    | "deleteTable"
    | "listMemories"
    | "listRoutines"
    | "listTables"
    | "markConversationRead"
    | "readConversationPage"
    | "releaseFilePreview"
    | "searchConversationMessages"
    | "sendMessage"
  >;
  browser: Pick<
    LumenBOTDesktopApi["browser"],
    | "capturePreview"
    | "finishLocalSignIn"
    | "onLiveViewEvent"
    | "openLocalSignIn"
    | "sendLiveViewInput"
    | "startLiveView"
    | "stopLiveView"
  >;
  servers: Pick<
    LumenBOTDesktopApi["servers"],
    | "listDirectThreads"
    | "markDirectRead"
    | "onDirectMessage"
    | "onDirectTyping"
    | "readDirectConversationPage"
    | "sendDirectMessage"
    | "setDirectTyping"
  >;
  storage: Pick<LumenBOTDesktopApi["storage"], "openLocation">;
  browserDock: Pick<LumenBOTDesktopApi["browserDock"], "publishPresentation" | "onAction" | "onShown">;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function conversationPort(): ConversationPort {
  return window.lumenbot;
}

/** Cleanup can run after IPC shuts down; process shutdown also frees these in-memory pages. */
export function releaseFilePreviewPage(pageUrl: string | undefined): void {
  if (!pageUrl) return;
  void conversationPort()
    .agent.releaseFilePreview(pageUrl)
    .catch(() => undefined);
}

/** The tables every agent shares. The web client reaches them on the host through the Team API. */
export interface SharedTableCalls {
  listTables(): Promise<SharedTable[]>;
  deleteTable(input: DeleteSharedTableInput): Promise<void>;
}
