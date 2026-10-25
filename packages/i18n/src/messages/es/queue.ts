import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/queue";

export const messages = {
  "queue.label": "Cola de mensajes",
  "queue.moved": "Se movi� el mensaje en cola a la posici�n {position} de {total}.",
  "queue.attachment": "Archivo adjunto",
  "queue.hold.named": "En espera: {name} est� trabajando en {channel}",
  "queue.hold.unnamed": "En espera: este agente est� trabajando en {channel}",
  "queue.item.label": "Mensaje en cola {position}: {preview}",
  "queue.item.labelEditing": "Mensaje en cola {position}, en edici�n: {preview}",
  "queue.item.editing": "En edici�n",
  "queue.item.steerLabel": "Orientar con el mensaje en cola {position}",
  "queue.item.steerTooltip": "Orientar con el mensaje",
  "queue.item.steering": "Orientando",
  "queue.item.steer": "Orientar",
  "queue.item.notSteered": "No orientado",
  "queue.item.steerFallback.providerUnsupported":
    "Este proveedor no puede orientar un turno en curso, as� que el mensaje espera en la cola.",
  "queue.item.steerFallback.steerFailed": "No se pudo orientar, as� que el mensaje espera en la cola.",
  "queue.item.runAsTask": "Ejecutar como tarea",
  "queue.item.runAsTaskLabel": "Ejecutar el mensaje en cola {position} como tarea",
  "queue.item.deleteLabel": "Eliminar mensaje en cola {position}",
  "queue.item.deleteTooltip": "Eliminar mensaje",
  "queue.item.editLabel": "Editar mensaje en cola {position}",
  "queue.item.editTooltip": "Editar mensaje",
  "queue.deleteHeld.title": "�Eliminar mensaje en cola?",
  "queue.deleteHeld.body": "Otro dispositivo est� editando este mensaje. El agente no lo recibir�.",
  "queue.deleteHeld.keep": "Conservar",
} as const satisfies PartialTranslation<typeof source>;
