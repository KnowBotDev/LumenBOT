import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/marketplace";

export const messages = {
  "error.marketplace.timezoneInvalid": "Il fuso orario locale non � valido.",
  "error.marketplace.installedAgentMissing": "L'agente installato non esiste pi�.",
  "error.marketplace.differentListing": "Questo agente locale � stato installato da un altro agente del Marketplace.",
  "error.marketplace.marketplaceAvatarInvalid": "L'avatar dell'agente del Marketplace non � valido.",
  "error.marketplace.shareCardInvalid": "La scheda di condivisione non � valida.",
  "error.marketplace.cannotPublish": "Questo agente non pu� essere pubblicato.",
  "error.marketplace.templateName": {
    one: "Dai a questo agente un nome da 1 a {count} caratteri.",
    other: "Dai a questo agente un nome da 1 a {count} caratteri.",
  },
  "error.marketplace.templateRole": {
    one: "Il ruolo � pi� lungo di {count} caratteri. Accorcialo.",
    other: "Il ruolo � pi� lungo di {count} caratteri. Accorcialo.",
  },
  "error.marketplace.templateNoInstructions": "Aggiungi delle istruzioni a questo agente prima di pubblicarlo.",
  "error.marketplace.templateInstructions": {
    one: "Le istruzioni sono pi� lunghe di {count} caratteri. Accorciale.",
    other: "Le istruzioni sono pi� lunghe di {count} caratteri. Accorciale.",
  },
  "error.marketplace.templateAvatar":
    "L'avatar di questo agente non � valido. Sceglilo di nuovo nelle impostazioni dell'agente.",
  "error.marketplace.templateSkills": {
    one: "Un agente pu� pubblicare fino a {count} skill. Rimuovine alcune.",
    other: "Un agente pu� pubblicare fino a {count} skill. Rimuovine alcune.",
  },
  "error.marketplace.templateLocalSkills": {
    one: "Un agente pu� pubblicare fino a {count} skill locali. Rimuovine alcune.",
    other: "Un agente pu� pubblicare fino a {count} skill locali. Rimuovine alcune.",
  },
  "error.marketplace.templateSkill":
    "La skill �{name}� non pu� essere pubblicata. Controlla il suo nome e il suo SKILL.md.",
  "error.marketplace.templateRoutines": {
    one: "Un agente pu� pubblicare fino a {count} routine. Rimuovine alcune.",
    other: "Un agente pu� pubblicare fino a {count} routine. Rimuovine alcune.",
  },
  "error.marketplace.templateRoutine": {
    one: "La routine �{name}� ha bisogno di un nome di massimo {count} caratteri e di un'istruzione.",
    other: "La routine �{name}� ha bisogno di un nome di massimo {count} caratteri e di un'istruzione.",
  },
  "error.marketplace.templateRoutineNoName": "senza nome",
  "error.marketplace.templateTooLarge":
    "Questo agente � troppo grande per essere pubblicato. Accorcia le sue istruzioni, skill o routine.",
  "error.marketplace.linkInvalid": "Il link dell'agente non � valido.",
  "error.marketplace.changedSinceOpened":
    "Questo agente � cambiato dopo che l'hai aperto. Riapri il link per vedere la nuova versione.",
  "error.marketplace.skillNameConflict":
    "Hai gi� una skill locale diversa chiamata �{name}�. Rinominala o rimuovila, poi aggiungi di nuovo questo agente.",
  "error.marketplace.avatarInvalid": "L'avatar dell'agente non � valido.",
  "error.marketplace.secretInName": "Rimuovi il segreto o l'indirizzo email dal nome prima di pubblicare.",
  "error.marketplace.secretInTitle": "Rimuovi il segreto o l'indirizzo email dal titolo prima di pubblicare.",
  "error.marketplace.secretInInstructions":
    "Rimuovi il segreto o l'indirizzo email dalle istruzioni prima di pubblicare.",
  "error.marketplace.secretInRoutine":
    "Rimuovi il segreto o l'indirizzo email dalla routine �{name}� prima di pubblicare.",
  "error.marketplace.secretInSkill": "Rimuovi il segreto o l'indirizzo email dalla skill �{name}� prima di pubblicare.",
  "error.marketplace.catalogLoadFailed": "Non � stato possibile caricare il Marketplace. Riprova.",
  "error.marketplace.templateUnreadable":
    "Non � stato possibile leggere questo agente condiviso. Il suo proprietario potrebbe averlo rimosso.",
} as const satisfies PartialTranslation<typeof source>;
