import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "LumenBOT – lokalny host",
  "window.localClientTitle": "LumenBOT – lokalny klient",
  "window.computerUsePermissionTitle": "Włącz Sterowanie komputerem",
} as const satisfies PartialTranslation<typeof source>;
