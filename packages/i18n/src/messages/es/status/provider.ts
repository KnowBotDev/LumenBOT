import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/provider";

export const messages = {
  "status.provider.downloadStopped": "Descarga detenida. Int�ntalo de nuevo.",
  "status.provider.downloadFailed": "La descarga fall�. Int�ntalo de nuevo.",
  "status.provider.updateWaiting": "La actualizaci�n empieza cuando termine el turno actual.",
  "status.provider.confirmContinue": "Continuar",
  "status.provider.confirmCancel": "Cancelar",
} as const satisfies PartialTranslation<typeof source>;
