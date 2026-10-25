import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/preview";

export const messages = {
  "preview.panel.label": "Pr�via do arquivo",
  "preview.panel.resize": "Redimensionar pr�via do arquivo",
  "preview.panel.copy": "Copiar texto do arquivo",
  "preview.panel.openExternally": "Abrir arquivo externamente",
  "preview.panel.download": "Baixar arquivo",
  "preview.panel.reveal": "Mostrar arquivo no Finder",
  "preview.panel.close": "Fechar pr�via do arquivo",
  "preview.panel.back": "Voltar",
  "preview.panel.rawMarkdown": "Mostrar c�digo Markdown",
  "preview.panel.rawHtml": "Mostrar c�digo HTML",
  "preview.panel.wrapLines": "Quebrar linhas longas",
  "preview.folder.empty": "Esta pasta est� vazia.",
  "preview.folder.truncated": "Somente os primeiros {limit} itens s�o mostrados.",
  "preview.truncated": "Pr�via truncada ap�s {limit} caracteres.",
  "preview.unavailable": "Pr�via indispon�vel.",
  "preview.unsupported.title": "Pr�via indispon�vel",
  "preview.unsupported.description": "Este tipo de arquivo pode ser aberto no aplicativo padr�o.",
  "preview.unsupported.openExternally": "Abrir externamente",
  "preview.spreadsheet.readFailed": "N�o foi poss�vel ler esta planilha.",
  "preview.spreadsheet.truncated": "Pr�via limitada �s primeiras {rows} linhas e {columns} colunas.",
} as const satisfies PartialTranslation<typeof source>;
