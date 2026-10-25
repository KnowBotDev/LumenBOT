import type { PartialTranslation } from "../../message";
import type { messages as source } from "../en/common";

export const messages = {
  "common.cancel": "Annuler",
  "common.save": "Enregistrer",
  "common.close": "Fermer",
  "common.delete": "Supprimer",
  "common.remove": "Retirer",
  "common.edit": "Modifier",
  "common.rename": "Renommer",
  "common.retry": "R�essayer",
  "common.copy": "Copier",
  "common.copied": "Copi�",
  "common.done": "Termin�",
  "common.back": "Retour",
  "common.continue": "Continuer",
  "common.add": "Ajouter",
  "common.create": "Cr�er",
  "common.open": "Ouvrir",
  "common.search": "Rechercher",
  "common.loading": "Chargement�",
  "common.saving": "Enregistrement�",
  "common.tryAgain": "R�essayer",
  "common.connecting": "Connexion�",
  "common.download": "T�l�charger",
  "common.removing": "Suppression�",
  "common.sending": "Envoi�",
} as const satisfies PartialTranslation<typeof source>;
