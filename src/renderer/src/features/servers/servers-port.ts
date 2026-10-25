import type { LumenBOTDesktopApi, ServerSummary } from "@lumenbot/contracts/ipc";

/**
 * What the servers domain reaches in main: the server list and selection, the account changes, the local host, the
 * settings of one server, the name, logo and update of a joined server's host, and the remote desktop
 * setup of a server.
 */
export interface ServersPort {
  agent: Pick<
    LumenBOTDesktopApi["agent"],
    | "getStatus"
    | "listAgents"
    | "listConversationReads"
    | "listHiddenAgents"
    | "listMcpServers"
    | "listModels"
    | "removeMcpServer"
    | "saveMcpServer"
    | "setMcpServerEnabled"
    | "testMcpServer"
    | "signInMcpServer"
    | "mcpSignInPage"
    | "mcpSignInRelay"
    | "openMcpSignInRelay"
    | "completeMcpSignInRelay"
    | "cancelMcpSignIn"
    | "signOutMcpServer"
    | "listMcpSignIns"
    | "mcpSignInApp"
    | "saveMcpSignInApp"
    | "removeMcpSignInApp"
  >;
  events: LumenBOTDesktopApi["events"];
  auth: Pick<LumenBOTDesktopApi["auth"], "onEvent">;
  browser: Pick<LumenBOTDesktopApi["browser"], "setVisible">;
  hostAdmin: Pick<
    LumenBOTDesktopApi["hostAdmin"],
    "cancelUpdate" | "getUpdateStatus" | "startUpdate" | "updateIdentity"
  >;
  hostedServers: Pick<LumenBOTDesktopApi["hostedServers"], "list" | "restart" | "wake">;
  host: Pick<
    LumenBOTDesktopApi["host"],
    | "configure"
    | "getStatus"
    | "onEvent"
    | "recheckScreenRecording"
    | "rotateIdentityKey"
    | "start"
    | "stop"
    | "updateIdentity"
  >;
  notifications: Pick<LumenBOTDesktopApi["notifications"], "onOpened">;
  remoteDesktop: Pick<
    LumenBOTDesktopApi["remoteDesktop"],
    "checkSetup" | "connect" | "disconnect" | "list" | "openSetup" | "test"
  >;
  servers: Pick<
    LumenBOTDesktopApi["servers"],
    | "getPresenceFor"
    | "join"
    | "list"
    | "onEvent"
    | "onPresence"
    | "refreshIdentity"
    | "remove"
    | "reorder"
    | "retryConnection"
    | "select"
    | "setMuted"
    | "setNotificationLevel"
  >;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function serversPort(): ServersPort {
  return window.lumenbot;
}

/**
 * The member and invite calls for one server. This computer answers them for the local server
 * through `host`; a remote server answers them through `servers`, addressed by its id.
 */
export type ServerAdminPort = Pick<
  LumenBOTDesktopApi["host"],
  "getPresence" | "listMembers" | "listInvites" | "createInvite" | "updateMember" | "removeMember" | "revokeInvite"
>;

export function serverAdminPort(server: Pick<ServerSummary, "id" | "kind">): ServerAdminPort {
  if (server.kind === "local") return window.lumenbot.host;
  const serverId = server.id;
  return {
    getPresence: () => window.lumenbot.servers.getPresenceFor(serverId),
    listMembers: () => window.lumenbot.servers.listMembers(serverId),
    listInvites: () => window.lumenbot.servers.listInvites(serverId),
    createInvite: (input) => window.lumenbot.servers.createInvite(input, serverId),
    updateMember: (input) => window.lumenbot.servers.updateMember(input, serverId),
    removeMember: (memberId) => window.lumenbot.servers.removeMember(memberId, serverId),
    revokeInvite: (inviteId) => window.lumenbot.servers.revokeInvite(inviteId, serverId),
  };
}

/** The server main marks active. A test teardown can remove the bridge while a join is pending. */
export async function activeServerId(): Promise<string> {
  if (!window.lumenbot) return "local";
  return (await window.lumenbot.servers.list()).find((item) => item.active)?.id ?? "local";
}
