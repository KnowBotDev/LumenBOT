import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/menu";

export const messages = {
  "menu.stopAllAgents": "Alle Agenten stoppen",
  "menu.checkForUpdates": "Nach Updates suchen…",
  "menu.preferences": "Einstellungen…",
  "menu.actualSize": "Originalgröße",
  "menu.zoomIn": "Vergrößern",
  "menu.zoomOut": "Verkleinern",
  "menu.copyLink": "Link kopieren",
  "menu.trayOpen": "LumenBOT öffnen",
  "menu.trayQuit": "LumenBOT beenden",
  "menu.trayTooltip": "LumenBOT",
} as const satisfies PartialTranslation<typeof source>;
