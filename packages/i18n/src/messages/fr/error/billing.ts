import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/billing";

export const messages = {
  "error.billing.lifecycleFailed":
    "L�offre du serveur n�a pas pu �tre modifi�e. Actualisez � Facturation � et r�essayez.",
  "error.billing.confirmMismatch": "Saisissez le nom du serveur pour le supprimer.",
  "error.billing.restartBusy": "Le serveur ne peut pas red�marrer maintenant. R�essayez dans une minute.",
  "error.billing.planRequired": "L�offre de ce serveur a pris fin. Renouvelez-la pour d�marrer le serveur.",
  "error.billing.planSoldOut": "Cette offre est �puis�e. Choisissez une autre offre.",
  // Billing errors.
  "error.billing.licenseExists": "Ce compte a d�j� une licence. Modifiez plut�t son nombre d'utilisateurs.",
  "error.billing.licenseCurrency": "La licence doit utiliser la devise de vos autres forfaits.",
  "error.billing.licenseUsersInUse":
    "La licence ne peut pas avoir moins d'utilisateurs que les personnes qui l'utilisent maintenant.",
  "error.billing.licensePaymentFailed":
    "Le paiement des utilisateurs ajout�s a �chou�. Mettez � jour le moyen de paiement et r�essayez.",
  "error.billing.licenseUnavailable": "Les licences ne sont pas disponibles pour le moment.",
  "error.billing.noLicense": "Ce compte n'a pas de licence.",
  "error.billing.invalidRequest": "La demande de facturation n�est pas valide.",
  "error.billing.invalidResponse": "La r�ponse de facturation n�est pas valide.",
  "error.billing.notStripePage": "La page de facturation n�est pas une page Stripe.",
} as const satisfies PartialTranslation<typeof source>;
