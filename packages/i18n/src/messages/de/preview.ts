import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/preview";

export const messages = {
  "preview.panel.label": "Dateivorschau",
  "preview.panel.resize": "Gr��e der Dateivorschau �ndern",
  "preview.panel.copy": "Dateitext kopieren",
  "preview.panel.openExternally": "Datei extern �ffnen",
  "preview.panel.download": "Datei herunterladen",
  "preview.panel.reveal": "Datei im Finder anzeigen",
  "preview.panel.close": "Dateivorschau schlie�en",
  "preview.panel.back": "Zur�ck",
  "preview.panel.rawMarkdown": "Markdown-Quelltext anzeigen",
  "preview.panel.rawHtml": "HTML-Quelltext anzeigen",
  "preview.panel.wrapLines": "Lange Zeilen umbrechen",
  "preview.folder.empty": "Dieser Ordner ist leer.",
  "preview.folder.truncated": "Es werden nur die ersten {limit} Elemente angezeigt.",
  "preview.truncated": "Vorschau nach {limit} Zeichen gek�rzt.",
  "preview.unavailable": "Vorschau nicht verf�gbar.",
  "preview.unsupported.title": "Vorschau nicht verf�gbar",
  "preview.unsupported.description": "Dieser Dateityp kann in seiner Standardanwendung ge�ffnet werden.",
  "preview.unsupported.openExternally": "Extern �ffnen",
  "preview.spreadsheet.readFailed": "Diese Tabelle konnte nicht gelesen werden.",
  "preview.spreadsheet.truncated": "Vorschau auf die ersten {rows} Zeilen und {columns} Spalten begrenzt.",
} as const satisfies PartialTranslation<typeof source>;
