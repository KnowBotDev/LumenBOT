import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/marketplace";

export const messages = {
  "error.marketplace.timezoneInvalid": "O fuso hor�rio local � inv�lido.",
  "error.marketplace.installedAgentMissing": "O agente instalado n�o existe mais.",
  "error.marketplace.differentListing": "Este agente local foi instalado a partir de outro agente da loja.",
  "error.marketplace.marketplaceAvatarInvalid": "O avatar do agente da loja � inv�lido.",
  "error.marketplace.shareCardInvalid": "O cart�o de compartilhamento � inv�lido.",
  "error.marketplace.cannotPublish": "Este agente n�o pode ser publicado.",
  "error.marketplace.templateName": {
    one: "D� a este agente um nome de 1 a {count} caractere.",
    other: "D� a este agente um nome de 1 a {count} caracteres.",
  },
  "error.marketplace.templateRole": {
    one: "A fun��o tem mais de {count} caractere. Encurte o texto.",
    other: "A fun��o tem mais de {count} caracteres. Encurte o texto.",
  },
  "error.marketplace.templateNoInstructions": "Adicione instru��es a este agente antes de public�-lo.",
  "error.marketplace.templateInstructions": {
    one: "As instru��es t�m mais de {count} caractere. Encurte o texto.",
    other: "As instru��es t�m mais de {count} caracteres. Encurte o texto.",
  },
  "error.marketplace.templateAvatar":
    "O avatar deste agente � inv�lido. Escolha-o novamente nas configura��es do agente.",
  "error.marketplace.templateSkills": {
    one: "Um agente pode publicar at� {count} habilidade. Remova algumas.",
    other: "Um agente pode publicar at� {count} habilidades. Remova algumas.",
  },
  "error.marketplace.templateLocalSkills": {
    one: "Um agente pode publicar at� {count} habilidade local. Remova algumas.",
    other: "Um agente pode publicar at� {count} habilidades locais. Remova algumas.",
  },
  "error.marketplace.templateSkill":
    'A habilidade "{name}" n�o pode ser publicada. Verifique o nome e o arquivo SKILL.md.',
  "error.marketplace.templateRoutines": {
    one: "Um agente pode publicar at� {count} rotina. Remova algumas.",
    other: "Um agente pode publicar at� {count} rotinas. Remova algumas.",
  },
  "error.marketplace.templateRoutine": {
    one: 'A rotina "{name}" precisa de um nome de at� {count} caractere e uma instru��o.',
    other: 'A rotina "{name}" precisa de um nome de at� {count} caracteres e uma instru��o.',
  },
  "error.marketplace.templateRoutineNoName": "sem nome",
  "error.marketplace.templateTooLarge":
    "Este agente � grande demais para publicar. Encurte suas instru��es, habilidades ou rotinas.",
  "error.marketplace.linkInvalid": "O link do agente � inv�lido.",
  "error.marketplace.changedSinceOpened":
    "Este agente mudou depois de voc� abri-lo. Abra o link novamente para revisar a nova vers�o.",
  "error.marketplace.skillNameConflict":
    'Voc� j� tem outra habilidade local chamada "{name}". Renomeie ou remova essa habilidade e adicione este agente novamente.',
  "error.marketplace.avatarInvalid": "O avatar do agente � inv�lido.",
  "error.marketplace.secretInName": "Remova o segredo ou endere�o de e-mail do nome antes de publicar.",
  "error.marketplace.secretInTitle": "Remova o segredo ou endere�o de e-mail do t�tulo antes de publicar.",
  "error.marketplace.secretInInstructions": "Remova o segredo ou endere�o de e-mail das instru��es antes de publicar.",
  "error.marketplace.secretInRoutine": 'Remova o segredo ou endere�o de e-mail da rotina "{name}" antes de publicar.',
  "error.marketplace.secretInSkill": 'Remova o segredo ou endere�o de e-mail da habilidade "{name}" antes de publicar.',
  "error.marketplace.catalogLoadFailed": "N�o foi poss�vel carregar a loja. Tente novamente.",
  "error.marketplace.templateUnreadable":
    "N�o foi poss�vel ler este agente compartilhado. O propriet�rio pode t�-lo removido.",
} as const satisfies PartialTranslation<typeof source>;
