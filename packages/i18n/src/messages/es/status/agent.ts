import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/agent";

export const messages = {
  "status.agent.claudeWriteOutside":
    "Escribir en {path}, fuera del espacio de trabajo del agente, la carpeta compartida y las carpetas temporales.",
  "status.agent.contextCleared": "Contexto borrado. Aqu� empieza un nuevo chat.",
  "status.agent.modelSwitchedForLimit": "L�mite de uso alcanzado. Se cambi� a {model}.",
  "status.agent.modelReturnedAfterLimit": "El l�mite de uso termin�. Se volvi� a {model}.",
  "status.agent.modelSwitchedForError": "Error del proveedor. Se cambi� a {model}.",
  "status.agent.modelReturnedAfterError": "Se volvi� a {model} tras el error del proveedor.",
  "status.agent.marketplaceSuggested": "Se sugiri� una aplicaci�n de Marketplace: {app}.",
  "status.agent.channelMemberAdded": "{agent} agreg� a {member} al canal. {person} lo pidi�.",
  "status.agent.channelMemberRemoved": "{agent} quit� a {member} del canal. {person} lo pidi�.",
  "status.agent.channelInstructionsChanged": "{agent} cambi� las instrucciones del canal. {person} lo pidi�.",
  "status.agent.channelRoutineCreated": "{agent} cre� la rutina {routine}. {person} lo pidi�.",
  "status.agent.channelRoutineUpdated": "{agent} cambi� la rutina {routine}. {person} lo pidi�.",
  "status.agent.channelRoutineDeleted": "{agent} elimin� la rutina {routine}. {person} lo pidi�.",
  "status.agent.screenCaptureScreen": "Capturar la pantalla principal y enviar la imagen al modelo del agente.",
  "status.agent.screenCaptureChannel":
    "La imagen aparece en el canal {channel}, y cada miembro de este servidor que lee el canal puede verla.",
  "status.agent.screenCaptureDisplay": "Capturar la pantalla {name} y enviar la imagen al modelo del agente.",
  "status.agent.screenCaptureWindow": "Capturar la ventana {name} y enviar la imagen al modelo del agente.",
  "status.agent.screenCaptureRegion":
    "Capturar el �rea de la pantalla en {x}, {y}, de {width} � {height} puntos, y enviar la imagen al modelo del agente.",
  "status.agent.screenCaptureProgress": "Pidiendo permiso para capturar la pantalla�",
  "status.agent.screenCaptureReviewing": "Revisando la captura de pantalla�",
  "status.agent.memoriesSearching": "Buscando en sus recuerdos�",
  "status.agent.memoriesSearched": {
    one: "Busc� en sus recuerdos: {count} encontrado",
    other: "Busc� en sus recuerdos: {count} encontrados",
  },
  "status.agent.memoriesUpdating": "Actualizando sus recuerdos�",
  "status.agent.skillUsing": "Usando la habilidad {name}�",
  "status.agent.skillReading": "Leyendo una habilidad�",
  "status.agent.memoryChanges": "Recuerdos: {saved} guardados, {updated} actualizados, {forgotten} olvidados.",
} as const satisfies PartialTranslation<typeof source>;
