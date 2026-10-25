import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/attachment";

export const messages = {
  "attachment.openFile": "Abrir arquivo",
  "attachment.preview": "Visualizar {name}",
  "attachment.notFound": "Arquivo n�o encontrado",
  "attachment.download": "Baixar {name}",
  "attachment.open": "Abrir {name}",
  "attachment.loadMedia": "Reproduzir {name}",
  "attachment.previewUnavailable": "A pr�via est� indispon�vel.",
  "attachment.error.preview": "N�o foi poss�vel visualizar {name}. Tente novamente.",
  "attachment.error.download": "N�o foi poss�vel baixar os anexos. Tente novamente.",
  "attachment.error.open": "N�o foi poss�vel abrir ou salvar este anexo. Tente novamente.",
  "attachment.error.openFile": "N�o foi poss�vel abrir este arquivo. Tente novamente.",
  "attachment.error.fileFallback": "Arquivo",
  "attachment.error.fileNotFound": "�{name}� n�o foi encontrado neste caminho. Ele pode ter sido movido ou exclu�do.",
  "attachment.error.previewFile": "N�o foi poss�vel visualizar �{name}�. Tente novamente.",
} as const satisfies PartialTranslation<typeof source>;
