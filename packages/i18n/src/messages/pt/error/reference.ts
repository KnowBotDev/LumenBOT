import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/reference";

export const messages = {
  "error.reference.label": "C�digo: {code}",
  "error.reference.copy": "Copiar c�digo de erro",
  "error.reference.copied": "C�digo de erro copiado",
} as const satisfies PartialTranslation<typeof source>;
