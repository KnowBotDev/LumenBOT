import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  // Native window titles.
  "window.localHostTitle": "LumenBOT ローカルホスト",
  "window.localClientTitle": "LumenBOT ローカルクライアント",
  "window.computerUsePermissionTitle": "Computer Use をオンにする",
} as const satisfies PartialTranslation<typeof source>;
