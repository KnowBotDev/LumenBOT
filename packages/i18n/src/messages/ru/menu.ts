import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/menu";

export const messages = {
  "menu.stopAllAgents": "Остановить всех агентов",
  "menu.checkForUpdates": "Проверить обновления…",
  "menu.preferences": "Настройки…",
  "menu.actualSize": "Фактический размер",
  "menu.zoomIn": "Увеличить",
  "menu.zoomOut": "Уменьшить",
  "menu.copyLink": "Скопировать ссылку",
  "menu.trayOpen": "Открыть LumenBOT",
  "menu.trayQuit": "Выйти из LumenBOT",
  "menu.trayTooltip": "LumenBOT",
} as const satisfies PartialTranslation<typeof source>;
