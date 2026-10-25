import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/provider";

export const messages = {
  "status.provider.downloadStopped": "T�l�chargement arr�t�. R�essayez.",
  "status.provider.downloadFailed": "�chec du t�l�chargement. R�essayez.",
  "status.provider.updateWaiting": "La mise � jour d�marre � la fin du tour en cours.",
  "status.provider.confirmContinue": "Continuer",
  "status.provider.confirmCancel": "Annuler",
} as const satisfies PartialTranslation<typeof source>;
