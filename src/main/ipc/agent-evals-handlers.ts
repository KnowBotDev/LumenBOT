import { Effect } from "effect";
import { isDynamicRecord, isString } from "@openbot/contracts/runtime-values";
import type {
  DeleteAgentEvalInput,
  ListAgentEvalRunsInput,
  ListAgentEvalsInput,
  SaveAgentEvalInput,
} from "@openbot/contracts/ipc";
import type { AgentEvalsStore } from "../../backend/agent-evals-store";
import { runCauseEffect } from "../../backend/effect-boundary";
import { type IpcGroupHandlers, payloadHandler } from "./define-ipc-group";

export interface AgentEvalsIpcDependencies {
  store: AgentEvalsStore;
}

function parseAgent(value: unknown): ListAgentEvalsInput {
  if (!isDynamicRecord(value) || !isString(value.agentId)) throw new Error("The agent id is missing.");
  return { agentId: value.agentId };
}

function parseSave(value: unknown): SaveAgentEvalInput {
  if (
    !isDynamicRecord(value) ||
    !isString(value.agentId) ||
    !isString(value.name) ||
    !isString(value.prompt) ||
    !isString(value.expectation) ||
    typeof value.active !== "boolean" ||
    (value.id !== undefined && !isString(value.id))
  )
    throw new Error("The evaluation is not valid.");
  return {
    agentId: value.agentId,
    name: value.name,
    prompt: value.prompt,
    expectation: value.expectation,
    active: value.active,
    ...(value.id === undefined ? {} : { id: value.id }),
  };
}

function parseRef(value: unknown): DeleteAgentEvalInput {
  if (
    !isDynamicRecord(value) ||
    !isString(value.agentId) ||
    !isString(value.evalId)
  )
    throw new Error("The evaluation reference is not valid.");
  return { agentId: value.agentId, evalId: value.evalId };
}

function parseRuns(value: unknown): ListAgentEvalRunsInput {
  const reference = parseRef(value);
  if (!isDynamicRecord(value)) throw new Error("The evaluation reference is not valid.");
  const limit = typeof value.limit === "number" && Number.isInteger(value.limit) ? value.limit : undefined;
  return { ...reference, ...(limit === undefined ? {} : { limit }) };
}

export function agentEvalsIpcHandlers({
  store,
}: AgentEvalsIpcDependencies): Pick<IpcGroupHandlers, "agentEvals"> {
  return {
    agentEvals: {
      listEvals: payloadHandler(parseAgent, (input) =>
        runCauseEffect(store.list(input.agentId).pipe(Effect.mapError((cause) => ({ cause })))),
      ),
      saveEval: payloadHandler(parseSave, (input) =>
        runCauseEffect(store.save(input).pipe(Effect.mapError((cause) => ({ cause })))),
      ),
      deleteEval: payloadHandler(parseRef, (input) =>
        runCauseEffect(store.delete(input.agentId, input.evalId).pipe(Effect.mapError((cause) => ({ cause })))),
      ),
      listEvalRuns: payloadHandler(parseRuns, (input) =>
        runCauseEffect(
          store.listRuns(input.agentId, input.evalId, input.limit).pipe(Effect.mapError((cause) => ({ cause }))),
        ),
      ),
    },
  };
}
