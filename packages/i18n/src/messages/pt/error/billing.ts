import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/billing";

export const messages = {
  "error.billing.lifecycleFailed": "N�o foi poss�vel mudar o plano do servidor. Atualize a Cobran�a e tente de novo.",
  "error.billing.confirmMismatch": "Digite o nome do servidor para exclu�-lo.",
  "error.billing.restartBusy": "O servidor n�o pode reiniciar agora. Tente de novo em um minuto.",
  "error.billing.planRequired": "O plano deste servidor terminou. Renove-o para iniciar o servidor.",
  "error.billing.planSoldOut": "Este plano est� esgotado. Escolha outro plano.",
  "error.billing.licenseExists": "Esta conta j� tem uma licen�a. Altere os usu�rios dela em vez disso.",
  "error.billing.licenseCurrency": "A licen�a precisa usar a moeda dos seus outros planos.",
  "error.billing.licenseUsersInUse": "A licen�a n�o pode ter menos usu�rios do que as pessoas que a usam agora.",
  "error.billing.licensePaymentFailed":
    "O pagamento dos usu�rios adicionados falhou. Atualize a forma de pagamento e tente novamente.",
  "error.billing.licenseUnavailable": "As licen�as n�o est�o dispon�veis agora.",
  "error.billing.noLicense": "Esta conta n�o tem licen�a.",
  "error.billing.invalidRequest": "A solicita��o de cobran�a � inv�lida.",
  "error.billing.invalidResponse": "A resposta de cobran�a � inv�lida.",
  "error.billing.notStripePage": "A p�gina de cobran�a n�o � uma p�gina do Stripe.",
} as const satisfies PartialTranslation<typeof source>;
