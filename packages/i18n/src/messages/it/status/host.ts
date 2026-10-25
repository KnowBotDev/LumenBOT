import type { PartialTranslation } from "../../../message";
import type { messages as source } from "../../en/status/host";

export const messages = {
  "status.host.registered": "Questo LumenBOT è stato registrato per l'accesso WebRTC.",
  "status.host.keyRotated": "Chiave del server cambiata. I dispositivi associati restano associati.",
  "status.host.identityUpdated": "Identità del server aggiornata.",
  "status.host.starting": "Avvio dell'host WebRTC…",
  "status.host.ready": "Questo LumenBOT è pronto per le connessioni WebRTC.",
  "status.host.stopping": "Questo LumenBOT sta diventando privato…",
  "status.host.private": "Questo LumenBOT è privato.",
} as const satisfies PartialTranslation<typeof source>;
