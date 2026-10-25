import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/marketplace";

export const messages = {
  "error.marketplace.timezoneInvalid": "Die lokale Zeitzone ist ung�ltig.",
  "error.marketplace.installedAgentMissing": "Der installierte Agent existiert nicht mehr.",
  "error.marketplace.differentListing": "Dieser lokale Agent wurde aus einem anderen Marketplace-Agenten installiert.",
  "error.marketplace.marketplaceAvatarInvalid": "Der Avatar des Marketplace-Agenten ist ung�ltig.",
  "error.marketplace.shareCardInvalid": "Die Freigabekarte ist ung�ltig.",
  "error.marketplace.cannotPublish": "Dieser Agent kann nicht ver�ffentlicht werden.",
  "error.marketplace.templateName": {
    one: "Gib diesem Agenten einen Namen mit 1 bis {count} Zeichen.",
    other: "Gib diesem Agenten einen Namen mit 1 bis {count} Zeichen.",
  },
  "error.marketplace.templateRole": {
    one: "Die Rolle ist l�nger als {count} Zeichen. K�rze sie.",
    other: "Die Rolle ist l�nger als {count} Zeichen. K�rze sie.",
  },
  "error.marketplace.templateNoInstructions": "F�ge diesem Agenten Anweisungen hinzu, bevor du ihn ver�ffentlichst.",
  "error.marketplace.templateInstructions": {
    one: "Die Anweisungen sind l�nger als {count} Zeichen. K�rze sie.",
    other: "Die Anweisungen sind l�nger als {count} Zeichen. K�rze sie.",
  },
  "error.marketplace.templateAvatar":
    "Der Avatar dieses Agenten ist ung�ltig. W�hle ihn erneut in den Agenteneinstellungen.",
  "error.marketplace.templateSkills": {
    one: "Ein Agent kann bis zu {count} F�higkeit ver�ffentlichen. Entferne einige.",
    other: "Ein Agent kann bis zu {count} F�higkeiten ver�ffentlichen. Entferne einige.",
  },
  "error.marketplace.templateLocalSkills": {
    one: "Ein Agent kann bis zu {count} lokale F�higkeit ver�ffentlichen. Entferne einige.",
    other: "Ein Agent kann bis zu {count} lokale F�higkeiten ver�ffentlichen. Entferne einige.",
  },
  "error.marketplace.templateSkill":
    "Die F�higkeit �{name}� kann nicht ver�ffentlicht werden. Pr�fe ihren Namen und ihre SKILL.md.",
  "error.marketplace.templateRoutines": {
    one: "Ein Agent kann bis zu {count} Routine ver�ffentlichen. Entferne einige.",
    other: "Ein Agent kann bis zu {count} Routinen ver�ffentlichen. Entferne einige.",
  },
  "error.marketplace.templateRoutine": {
    one: "Die Routine �{name}� ben�tigt einen Namen mit bis zu {count} Zeichen und eine Anweisung.",
    other: "Die Routine �{name}� ben�tigt einen Namen mit bis zu {count} Zeichen und eine Anweisung.",
  },
  "error.marketplace.templateRoutineNoName": "ohne Namen",
  "error.marketplace.templateTooLarge":
    "Dieser Agent ist zu gro� zum Ver�ffentlichen. K�rze seine Anweisungen, F�higkeiten oder Routinen.",
  "error.marketplace.linkInvalid": "Der Agentenlink ist ung�ltig.",
  "error.marketplace.changedSinceOpened":
    "Dieser Agent wurde ge�ndert, nachdem du ihn ge�ffnet hast. �ffne den Link erneut, um die neue Version zu pr�fen.",
  "error.marketplace.skillNameConflict":
    "Du hast bereits eine andere lokale F�higkeit mit dem Namen �{name}�. Benenne sie um oder entferne sie und f�ge diesen Agenten erneut hinzu.",
  "error.marketplace.avatarInvalid": "Der Agentenavatar ist ung�ltig.",
  "error.marketplace.secretInName":
    "Entferne das Geheimnis oder die E-Mail-Adresse aus dem Namen, bevor du ver�ffentlichst.",
  "error.marketplace.secretInTitle":
    "Entferne das Geheimnis oder die E-Mail-Adresse aus dem Titel, bevor du ver�ffentlichst.",
  "error.marketplace.secretInInstructions":
    "Entferne das Geheimnis oder die E-Mail-Adresse aus den Anweisungen, bevor du ver�ffentlichst.",
  "error.marketplace.secretInRoutine":
    "Entferne das Geheimnis oder die E-Mail-Adresse aus der Routine �{name}�, bevor du ver�ffentlichst.",
  "error.marketplace.secretInSkill":
    "Entferne das Geheimnis oder die E-Mail-Adresse aus der F�higkeit �{name}�, bevor du ver�ffentlichst.",
  "error.marketplace.catalogLoadFailed": "Der Marketplace konnte nicht geladen werden. Versuche es erneut.",
  "error.marketplace.templateUnreadable":
    "Dieser geteilte Agent konnte nicht gelesen werden. Sein Eigent�mer hat ihn m�glicherweise entfernt.",
} as const satisfies PartialTranslation<typeof source>;
