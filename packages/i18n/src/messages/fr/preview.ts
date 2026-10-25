import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/preview";

export const messages = {
  "preview.panel.label": "Aper�u du fichier",
  "preview.panel.resize": "Redimensionner l�aper�u du fichier",
  "preview.panel.copy": "Copier le texte",
  "preview.panel.openExternally": "Ouvrir le fichier dans une autre application",
  "preview.panel.download": "T�l�charger le fichier",
  "preview.panel.reveal": "Afficher le fichier dans le Finder",
  "preview.panel.close": "Fermer l�aper�u du fichier",
  "preview.panel.back": "Retour",
  "preview.panel.rawMarkdown": "Afficher la source Markdown",
  "preview.panel.rawHtml": "Afficher la source HTML",
  "preview.panel.wrapLines": "Renvoyer les longues lignes � la ligne",
  "preview.folder.empty": "Ce dossier est vide.",
  "preview.folder.truncated": "Seuls les {limit} premiers �l�ments sont affich�s.",
  "preview.truncated": "Aper�u tronqu� apr�s {limit} caract�res.",
  "preview.unavailable": "Aper�u indisponible.",
  "preview.unsupported.title": "Aper�u indisponible",
  "preview.unsupported.description": "Vous pouvez ouvrir ce type de fichier dans son application par d�faut.",
  "preview.unsupported.openExternally": "Ouvrir en externe",
  "preview.spreadsheet.readFailed": "Impossible de lire cette feuille de calcul.",
  "preview.spreadsheet.truncated": "Aper�u limit� aux {rows} premi�res lignes et aux {columns} premi�res colonnes.",
} as const satisfies PartialTranslation<typeof source>;
