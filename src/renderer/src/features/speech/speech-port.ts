import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What spoken replies reach in main: the speech model and settings, the synthesis, the finished
 * answer, and the recording a voice turn keeps with its message.
 */
export interface SpeechPort {
  voice: Pick<
    LumenBOTDesktopApi["voice"],
    | "getSpeechSettings"
    | "getSpeechModelStatus"
    | "downloadSpeechModel"
    | "onSpeechModelStatus"
    | "speak"
    | "warmSpeech"
    | "keepRecording"
  >;
  agent: Pick<LumenBOTDesktopApi["agent"], "readConversationPage" | "discardDraftAttachment">;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function speechPort(): SpeechPort {
  return window.lumenbot;
}
