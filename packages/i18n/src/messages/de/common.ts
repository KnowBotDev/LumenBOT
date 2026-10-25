import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/common";

export const messages = {
  "common.cancel": "Abbrechen",
  "common.save": "Speichern",
  "common.close": "Schlie�en",
  "common.delete": "L�schen",
  "common.remove": "Entfernen",
  "common.edit": "Bearbeiten",
  "common.rename": "Umbenennen",
  "common.retry": "Wiederholen",
  "common.copy": "Kopieren",
  "common.copied": "Kopiert",
  "common.done": "Fertig",
  "common.back": "Zur�ck",
  "common.continue": "Weiter",
  "common.add": "Hinzuf�gen",
  "common.create": "Erstellen",
  "common.open": "�ffnen",
  "common.search": "Suchen",
  "common.loading": "Wird geladen�",
  "common.saving": "Wird gespeichert�",
  "common.tryAgain": "Wiederholen",
  "common.connecting": "Wird verbunden�",
  "common.download": "Herunterladen",
  "common.removing": "Wird entfernt�",
  "common.sending": "Wird gesendet�",
} as const satisfies PartialTranslation<typeof source>;
