import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/attachment";

export const messages = {
  "attachment.openFile": "Datei �ffnen",
  "attachment.preview": "Vorschau von {name}",
  "attachment.notFound": "Datei nicht gefunden",
  "attachment.download": "{name} herunterladen",
  "attachment.open": "{name} �ffnen",
  "attachment.loadMedia": "{name} abspielen",
  "attachment.previewUnavailable": "Die Vorschau ist nicht verf�gbar.",
  "attachment.error.preview": "Die Vorschau von {name} konnte nicht angezeigt werden. Versuche es erneut.",
  "attachment.error.download": "Die Anh�nge konnten nicht heruntergeladen werden. Versuche es erneut.",
  "attachment.error.open": "Dieser Anhang konnte nicht ge�ffnet oder gespeichert werden. Versuche es erneut.",
  "attachment.error.openFile": "Diese Datei konnte nicht ge�ffnet werden. Versuche es erneut.",
  "attachment.error.fileFallback": "Datei",
  "attachment.error.fileNotFound":
    "�{name}� wurde unter diesem Pfad nicht gefunden. Die Datei wurde m�glicherweise verschoben oder gel�scht.",
  "attachment.error.previewFile": "Die Vorschau von �{name}� konnte nicht angezeigt werden. Versuche es erneut.",
} as const satisfies PartialTranslation<typeof source>;
