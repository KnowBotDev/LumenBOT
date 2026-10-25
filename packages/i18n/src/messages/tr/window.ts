import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/window";

export const messages = {
  "window.localHostTitle": "LumenBOT Yerel Ana Makine",
  "window.localClientTitle": "LumenBOT Yerel İstemci",
  "window.computerUsePermissionTitle": "Bilgisayar Kullanımını aç",
} as const satisfies PartialTranslation<typeof source>;
