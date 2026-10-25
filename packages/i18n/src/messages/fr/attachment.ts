import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/attachment";

export const messages = {
  "attachment.openFile": "Ouvrir le fichier",
  "attachment.preview": "Aper�u de {name}",
  "attachment.notFound": "Fichier introuvable",
  "attachment.download": "T�l�charger {name}",
  "attachment.open": "Ouvrir {name}",
  "attachment.loadMedia": "Lire {name}",
  "attachment.previewUnavailable": "L�aper�u n�est pas disponible.",
  "attachment.error.preview": "Impossible d�afficher l�aper�u de {name}. R�essayez.",
  "attachment.error.download": "Impossible de t�l�charger les pi�ces jointes. R�essayez.",
  "attachment.error.open": "Impossible d�ouvrir ou d�enregistrer cette pi�ce jointe. R�essayez.",
  "attachment.error.openFile": "Impossible d�ouvrir ce fichier. R�essayez.",
  "attachment.error.fileFallback": "Fichier",
  "attachment.error.fileNotFound":
    "� {name} � est introuvable � cet emplacement. Il a peut-�tre �t� d�plac� ou supprim�.",
  "attachment.error.previewFile": "Impossible d�afficher l�aper�u de � {name} �. R�essayez.",
} as const satisfies PartialTranslation<typeof source>;
