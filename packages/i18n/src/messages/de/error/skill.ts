import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/error/skill";

export const messages = {
  "error.skill.symlinks": "F�higkeitspakete d�rfen keine symbolischen Links enthalten.",
  "error.skill.expandedTooLarge": "Die entpackte F�higkeit muss unter 10 MB gro� sein.",
  "error.skill.irregularEntry": "F�higkeitspakete d�rfen nur regul�re Dateien und Ordner enthalten.",
  "error.skill.packageTooLarge": "Das F�higkeitspaket muss unter 10 MB gro� sein.",
  "error.skill.missingSkillFile": "Das F�higkeitspaket muss SKILL.md in seinem Stammverzeichnis enthalten.",
  "error.skill.frontmatterMissing": "SKILL.md muss mit YAML-Frontmatter beginnen.",
  "error.skill.metadataInvalid": "Die Metadaten von SKILL.md sind ung�ltig.",
  "error.skill.nameAndDescriptionRequired": "SKILL.md ben�tigt einen g�ltigen Namen und eine Beschreibung.",
  "error.skill.zipInvalid": "Die gew�hlte ZIP-Datei ist ung�ltig.",
  "error.skill.fileCountInvalid": "Das F�higkeitspaket hat eine ung�ltige Anzahl an Dateien.",
  "error.skill.slugInvalid": "Aus dem F�higkeitsnamen kann kein g�ltiger Slug gebildet werden.",
  "error.skill.tooManyFiles": "Eine F�higkeit kann h�chstens {limit} Dateien enthalten.",
  "error.skill.unsafeFile": "Das F�higkeitspaket enth�lt eine unsichere Datei: {name}",
  "error.skill.markdownTooLarge": "SKILL.md ist gr��er als 256 KB.",
  "error.skill.markdownUnreadable": "SKILL.md konnte nicht gelesen werden.",
  "error.skill.frontmatterInvalid": "Das Frontmatter von SKILL.md ist kein g�ltiges YAML.",
  "error.skill.descriptionLength": "SKILL.md ben�tigt eine Beschreibung mit 1 bis {limit} Zeichen.",
  "error.skill.nameMismatch": "SKILL.md ben�tigt �name: {slug}�, passend zum Ordnernamen.",
  "error.skill.draftExpired": "Das gew�hlte F�higkeitspaket ist abgelaufen. W�hle es erneut.",
  "error.skill.localHasNoVersion": "Eine lokale F�higkeit hat keine ver�ffentlichte Version.",
  "error.skill.publishLocalFirst":
    "Ver�ffentliche lokale F�higkeiten einzeln, bevor du diesen Agenten ver�ffentlichst.",
  "error.skill.bundleMismatch":
    "Die heruntergeladene F�higkeit stimmt nicht mit ihrem signierten Katalogeintrag �berein.",
  "error.skill.metadataMismatch":
    "Die Metadaten der heruntergeladenen F�higkeit stimmen nicht mit dem Katalog �berein.",
  "error.skill.folderTaken": "Eine andere installierte F�higkeit verwendet diesen Ordnernamen.",
  "error.skill.replaceModified": "Diese F�higkeit hat lokale �nderungen. Best�tige das Ersetzen, um fortzufahren.",
  "error.skill.removeModified": "Diese F�higkeit hat lokale �nderungen. Best�tige das Entfernen, um sie zu l�schen.",
  "error.skill.notFound": "F�higkeit nicht gefunden.",
  "error.skill.disableModified":
    "Diese F�higkeit hat lokale �nderungen. Speichere beide Anbieterkopien oder gleiche sie ab, bevor du sie deaktivierst.",
  "error.skill.disableNeedsRepair": "Diese F�higkeit muss repariert werden, bevor sie deaktiviert werden kann.",
  "error.skill.enableNeedsRepair": "Diese F�higkeit muss repariert werden, bevor sie aktiviert werden kann.",
  "error.skill.providerFolderOccupied":
    "Der Anbieterordner dieser F�higkeit ist belegt. Verschiebe seine Dateien oder gleiche sie ab, bevor du sie aktivierst.",
  "error.skill.chooseLocalAgent": "W�hle zuerst einen lokalen Agenten.",
  "error.skill.localLibraryUnavailable": "Die lokale F�higkeitsbibliothek ist nicht verf�gbar.",
  "error.skill.lockInvalid": "Der Eintrag der installierten F�higkeit ist ung�ltig. Er wurde unver�ndert belassen.",
  "error.skill.installPathSymlink": "Installationspfade f�r F�higkeiten d�rfen keine symbolischen Links enthalten.",
  "error.skill.duplicateSlug": "Zwei F�higkeiten hei�en �{slug}�. Benenne eine davon vor dem Ver�ffentlichen um.",
  "error.skill.publishNeedsRepair": "{name} hat lokale �nderungen oder muss vor dem Ver�ffentlichen repariert werden.",
  "error.skill.publishUntracked":
    "{name} wurde vor der Einf�hrung der genauen Versionserfassung installiert. Aktualisiere oder repariere sie vor dem Ver�ffentlichen.",
  "error.skill.tooManySkills": "Ein Agent kann bis zu {limit} F�higkeiten haben.",
  "error.skill.unmanagedExists": "Unter {path} existiert bereits eine nicht verwaltete F�higkeit.",
  "error.skill.templateMarkdownTooLarge":
    "{name}: SKILL.md ist gr��er als 64 KB. K�rze die Datei vor dem Ver�ffentlichen.",
  "error.skill.localNoRevisions": "Die lokale F�higkeit hat keine ver�ffentlichten �berarbeitungen.",
  "error.skill.localNameTaken":
    "Eine lokale F�higkeit mit diesem Namen existiert bereits. �berarbeite sie stattdessen.",
  "error.skill.localKeepName": "Behalte den Namen der F�higkeit bei der �berarbeitung bei.",
  "error.skill.localRelativeFolder":
    "Verwende einen relativen F�higkeitsordner im Arbeitsbereich des aktuellen Agenten.",
  "error.skill.localSourceOutside": "Die F�higkeitsquelle muss im Arbeitsbereich des Agenten liegen.",
  "error.skill.localSourceNotFolder": "Die F�higkeitsquelle muss ein Ordner sein.",
  "error.skill.localMissingSkillFile": "Der F�higkeitsordner ben�tigt SKILL.md in seinem Stammverzeichnis.",
  "error.skill.pathSymlink": "F�higkeitspfade d�rfen keine symbolischen Links enthalten.",
  "error.skill.folderNotRead": "{provider} liest {folder} nicht. Kopiere diesen Ordner nach {target}.",
} as const satisfies PartialTranslation<typeof source>;
