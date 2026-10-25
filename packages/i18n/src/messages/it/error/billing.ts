import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/billing";

export const messages = {
  "error.billing.lifecycleFailed":
    "Non � stato possibile cambiare il piano del server. Aggiorna Fatturazione e riprova.",
  "error.billing.confirmMismatch": "Scrivi il nome del server per eliminarlo.",
  "error.billing.restartBusy": "Il server non pu� riavviarsi ora. Riprova tra un minuto.",
  "error.billing.planRequired": "Il piano di questo server � terminato. Rinnovalo per avviare il server.",
  "error.billing.planSoldOut": "Questo piano � esaurito. Scegli un altro piano.",
  "error.billing.licenseExists": "Questo account ha gi� una licenza. Modifica invece i suoi utenti.",
  "error.billing.licenseCurrency": "La licenza deve usare la valuta degli altri piani.",
  "error.billing.licenseUsersInUse": "La licenza non pu� avere meno utenti delle persone che la usano ora.",
  "error.billing.licensePaymentFailed":
    "Il pagamento per gli utenti aggiunti non � riuscito. Aggiorna il metodo di pagamento e riprova.",
  "error.billing.licenseUnavailable": "Le licenze non sono disponibili ora.",
  "error.billing.noLicense": "Questo account non ha una licenza.",
  "error.billing.invalidRequest": "La richiesta di fatturazione non � valida.",
  "error.billing.invalidResponse": "La risposta di fatturazione non � valida.",
  "error.billing.notStripePage": "La pagina di fatturazione non � una pagina Stripe.",
} as const satisfies PartialTranslation<typeof source>;
