import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/agent";

export const messages = {
  "status.agent.claudeWriteOutside":
    "Gravar em {path}, fora do espa�o de trabalho do agente, da pasta compartilhada e das pastas tempor�rias.",
  "status.agent.contextCleared": "Contexto limpo. Um novo chat come�a aqui.",
  "status.agent.modelSwitchedForLimit": "Limite de uso atingido. O modelo mudou para {model}.",
  "status.agent.modelReturnedAfterLimit": "O limite de uso terminou. O modelo voltou para {model}.",
  "status.agent.modelSwitchedForError": "Erro do provedor. O modelo mudou para {model}.",
  "status.agent.modelReturnedAfterError": "Ap�s o erro do provedor, o modelo voltou para {model}.",
  "status.agent.marketplaceSuggested": "App da loja sugerido: {app}.",
  "status.agent.channelMemberAdded": "{agent} adicionou {member} ao canal. {person} pediu.",
  "status.agent.channelMemberRemoved": "{agent} removeu {member} do canal. {person} pediu.",
  "status.agent.channelInstructionsChanged": "{agent} mudou as instru��es do canal. {person} pediu.",
  "status.agent.channelRoutineCreated": "{agent} criou a rotina {routine}. {person} pediu.",
  "status.agent.channelRoutineUpdated": "{agent} mudou a rotina {routine}. {person} pediu.",
  "status.agent.channelRoutineDeleted": "{agent} excluiu a rotina {routine}. {person} pediu.",
  "status.agent.screenCaptureScreen": "Capturar a tela principal e enviar a imagem ao modelo do agente.",
  "status.agent.screenCaptureChannel":
    "A imagem aparece no canal {channel}, e cada membro deste servidor que l� o canal pode v�-la.",
  "status.agent.screenCaptureDisplay": "Capturar o monitor {name} e enviar a imagem ao modelo do agente.",
  "status.agent.screenCaptureWindow": "Capturar a janela {name} e enviar a imagem ao modelo do agente.",
  "status.agent.screenCaptureRegion":
    "Capturar a �rea da tela em {x}, {y}, {width} � {height} pontos e enviar a imagem ao modelo do agente.",
  "status.agent.screenCaptureProgress": "Pedindo para capturar a tela�",
  "status.agent.screenCaptureReviewing": "Analisando a captura de tela�",
  "status.agent.memoriesSearching": "Pesquisando suas mem�rias�",
  "status.agent.memoriesSearched": {
    one: "Pesquisou suas mem�rias: {count} encontrada",
    other: "Pesquisou suas mem�rias: {count} encontradas",
  },
  "status.agent.memoriesUpdating": "Atualizando suas mem�rias�",
  "status.agent.skillUsing": "Usando a habilidade {name}�",
  "status.agent.skillReading": "Lendo uma habilidade�",
  "status.agent.memoryChanges": "Mem�rias: {saved} salvas, {updated} atualizadas, {forgotten} esquecidas.",
} as const satisfies PartialTranslation<typeof source>;
