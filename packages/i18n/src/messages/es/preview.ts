import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/preview";

export const messages = {
  "preview.panel.label": "Vista previa del archivo",
  "preview.panel.resize": "Cambiar tama�o de la vista previa",
  "preview.panel.copy": "Copiar el texto del archivo",
  "preview.panel.openExternally": "Abrir archivo externamente",
  "preview.panel.download": "Descargar archivo",
  "preview.panel.reveal": "Mostrar archivo en Finder",
  "preview.panel.close": "Cerrar vista previa",
  "preview.panel.back": "Atr�s",
  "preview.panel.rawMarkdown": "Mostrar c�digo fuente de Markdown",
  "preview.panel.rawHtml": "Mostrar c�digo fuente de HTML",
  "preview.panel.wrapLines": "Ajustar l�neas largas",
  "preview.folder.empty": "Esta carpeta est� vac�a.",
  "preview.folder.truncated": "Solo se muestran los primeros {limit} elementos.",
  "preview.truncated": "Vista previa truncada despu�s de {limit} caracteres.",
  "preview.unavailable": "Vista previa no disponible.",
  "preview.unsupported.title": "Vista previa no disponible",
  "preview.unsupported.description": "Este tipo de archivo se puede abrir en su aplicaci�n predeterminada.",
  "preview.unsupported.openExternally": "Abrir externamente",
  "preview.spreadsheet.readFailed": "No se pudo leer esta hoja de c�lculo.",
  "preview.spreadsheet.truncated": "Vista previa limitada a las primeras {rows} filas y {columns} columnas.",
} as const satisfies PartialTranslation<typeof source>;
