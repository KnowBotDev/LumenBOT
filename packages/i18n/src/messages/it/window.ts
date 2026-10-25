import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "LumenBOT — host locale",
  "window.localClientTitle": "LumenBOT — client locale",
  "window.computerUsePermissionTitle": "Attiva il Controllo del computer",
} as const satisfies PartialTranslation<typeof source>;
