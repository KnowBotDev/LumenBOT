import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/agent";

export const messages = {
  "status.agent.claudeWriteOutside":
    "�crire {path}, hors de l�espace de travail de l�agent, du dossier partag� et des dossiers temporaires.",
  "status.agent.contextCleared": "Contexte effac�. Une nouvelle discussion commence ici.",
  "status.agent.modelSwitchedForLimit": "Limite d�utilisation atteinte. Passage � {model}.",
  "status.agent.modelReturnedAfterLimit": "Limite d�utilisation termin�e. Retour � {model}.",
  "status.agent.modelSwitchedForError": "Erreur du fournisseur. Passage � {model}.",
  "status.agent.modelReturnedAfterError": "Retour � {model} apr�s l�erreur du fournisseur.",
  "status.agent.marketplaceSuggested": "Application de la Marketplace sugg�r�e : {app}.",
  "status.agent.channelMemberAdded": "{agent} a ajout� {member} au canal. {person} l�a demand�.",
  "status.agent.channelMemberRemoved": "{agent} a retir� {member} du canal. {person} l�a demand�.",
  "status.agent.channelInstructionsChanged": "{agent} a modifi� les instructions du canal. {person} l�a demand�.",
  "status.agent.channelRoutineCreated": "{agent} a cr�� la routine {routine}. {person} l�a demand�.",
  "status.agent.channelRoutineUpdated": "{agent} a modifi� la routine {routine}. {person} l�a demand�.",
  "status.agent.channelRoutineDeleted": "{agent} a supprim� la routine {routine}. {person} l�a demand�.",
  "status.agent.screenCaptureScreen": "Capturer l��cran principal et envoyer l�image au mod�le de l�agent.",
  "status.agent.screenCaptureChannel":
    "L�image s�affiche dans le canal {channel}, et chaque membre de ce serveur qui lit le canal peut la voir.",
  "status.agent.screenCaptureDisplay": "Capturer l��cran {name} et envoyer l�image au mod�le de l�agent.",
  "status.agent.screenCaptureWindow": "Capturer la fen�tre {name} et envoyer l�image au mod�le de l�agent.",
  "status.agent.screenCaptureRegion":
    "Capturer la zone de l��cran � {x}, {y}, {width} � {height} points et envoyer l�image au mod�le de l�agent.",
  "status.agent.screenCaptureProgress": "Demande de capture d��cran�",
  "status.agent.screenCaptureReviewing": "Analyse de la capture d��cran�",
  "status.agent.memoriesSearching": "Recherche dans ses souvenirs�",
  "status.agent.memoriesSearched": {
    one: "Souvenirs consult�s : {count} trouv�",
    other: "Souvenirs consult�s : {count} trouv�s",
  },
  "status.agent.memoriesUpdating": "Mise � jour de ses souvenirs�",
  "status.agent.skillUsing": "Utilisation de la comp�tence {name}�",
  "status.agent.skillReading": "Lecture d�une comp�tence�",
  "status.agent.memoryChanges": "Souvenirs : {saved} enregistr�s, {updated} mis � jour, {forgotten} oubli�s.",
} as const satisfies PartialTranslation<typeof source>;
