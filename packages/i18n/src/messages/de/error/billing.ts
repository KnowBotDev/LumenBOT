import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/billing";

export const messages = {
  "error.billing.lifecycleFailed":
    "Der Servertarif konnte nicht ge�ndert werden. Lade �Abrechnung� neu und versuche es erneut.",
  "error.billing.confirmMismatch": "Gib den Servernamen ein, um ihn zu l�schen.",
  "error.billing.restartBusy": "Der Server kann jetzt nicht neu starten. Versuche es in einer Minute erneut.",
  "error.billing.planRequired": "Der Tarif dieses Servers ist abgelaufen. Verl�ngere ihn, um den Server zu starten.",
  "error.billing.planSoldOut": "Dieser Tarif ist ausverkauft. W�hle einen anderen Tarif.",
  "error.billing.licenseExists": "Dieses Konto hat bereits eine Lizenz. �ndern Sie stattdessen ihre Nutzerzahl.",
  "error.billing.licenseCurrency": "Die Lizenz muss die W�hrung Ihrer anderen Pl�ne verwenden.",
  "error.billing.licenseUsersInUse":
    "Die Lizenz kann nicht weniger Nutzer haben als die Personen, die sie jetzt nutzen.",
  "error.billing.licensePaymentFailed":
    "Die Zahlung f�r die zus�tzlichen Nutzer ist fehlgeschlagen. Aktualisieren Sie die Zahlungsmethode und versuchen Sie es erneut.",
  "error.billing.licenseUnavailable": "Lizenzen sind derzeit nicht verf�gbar.",
  "error.billing.noLicense": "Dieses Konto hat keine Lizenz.",
  "error.billing.invalidRequest": "Die Abrechnungsanfrage ist ung�ltig.",
  "error.billing.invalidResponse": "Die Abrechnungsantwort ist ung�ltig.",
  "error.billing.notStripePage": "Die Abrechnungsseite ist keine Stripe-Seite.",
} as const satisfies PartialTranslation<typeof source>;
