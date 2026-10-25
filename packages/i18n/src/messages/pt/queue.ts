import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/queue";

export const messages = {
  "queue.label": "Fila de mensagens",
  "queue.moved": "Mensagem na fila movida para a posi��o {position} de {total}.",
  "queue.attachment": "Anexo",
  "queue.hold.named": "Aguardando - {name} est� trabalhando em {channel}",
  "queue.hold.unnamed": "Aguardando - este agente est� trabalhando em {channel}",
  "queue.item.label": "Mensagem na fila {position}: {preview}",
  "queue.item.labelEditing": "Mensagem na fila {position}, em edi��o: {preview}",
  "queue.item.editing": "Editando",
  "queue.item.steerLabel": "Orientar com a mensagem na fila {position}",
  "queue.item.steerTooltip": "Orientar com a mensagem",
  "queue.item.steering": "Orientando",
  "queue.item.steer": "Orientar",
  "queue.item.notSteered": "N�o orientada",
  "queue.item.steerFallback.providerUnsupported":
    "Este provedor n�o pode orientar um turno em andamento, ent�o a mensagem espera na fila.",
  "queue.item.steerFallback.steerFailed": "A orienta��o falhou, ent�o a mensagem espera na fila.",
  "queue.item.runAsTask": "Executar como tarefa",
  "queue.item.runAsTaskLabel": "Executar a mensagem na fila {position} como tarefa",
  "queue.item.deleteLabel": "Excluir mensagem na fila {position}",
  "queue.item.deleteTooltip": "Excluir mensagem",
  "queue.item.editLabel": "Editar mensagem na fila {position}",
  "queue.item.editTooltip": "Editar mensagem",
  "queue.deleteHeld.title": "Excluir mensagem na fila?",
  "queue.deleteHeld.body": "Outro dispositivo est� editando esta mensagem. O agente n�o vai receb�-la.",
  "queue.deleteHeld.keep": "Manter",
} as const satisfies PartialTranslation<typeof source>;
