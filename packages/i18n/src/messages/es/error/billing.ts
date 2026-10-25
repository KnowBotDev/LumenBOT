import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/billing";

export const messages = {
  "error.billing.lifecycleFailed":
    "No se pudo cambiar el plan del servidor. Actualiza Facturaci�n e int�ntalo de nuevo.",
  "error.billing.confirmMismatch": "Escribe el nombre del servidor para eliminarlo.",
  "error.billing.restartBusy": "El servidor no puede reiniciarse ahora. Int�ntalo de nuevo en un minuto.",
  "error.billing.planRequired": "El plan de este servidor termin�. Renu�valo para iniciar el servidor.",
  "error.billing.planSoldOut": "Este plan est� agotado. Elige otro plan.",
  "error.billing.licenseExists": "Esta cuenta ya tiene una licencia. Cambia sus usuarios en su lugar.",
  "error.billing.licenseCurrency": "La licencia debe usar la moneda de tus otros planes.",
  "error.billing.licenseUsersInUse": "La licencia no puede tener menos usuarios que las personas que la usan ahora.",
  "error.billing.licensePaymentFailed":
    "El pago de los usuarios a�adidos fall�. Actualiza el m�todo de pago e int�ntalo de nuevo.",
  "error.billing.licenseUnavailable": "Las licencias no est�n disponibles ahora.",
  "error.billing.noLicense": "Esta cuenta no tiene licencia.",
  "error.billing.invalidRequest": "La solicitud de facturaci�n no es v�lida.",
  "error.billing.invalidResponse": "La respuesta de facturaci�n no es v�lida.",
  "error.billing.notStripePage": "La p�gina de facturaci�n no es una p�gina de Stripe.",
} as const satisfies PartialTranslation<typeof source>;
