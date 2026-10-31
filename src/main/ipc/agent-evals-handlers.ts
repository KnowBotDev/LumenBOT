import { Effect } from "effect";
import { isDynamicRecord, isString } from "@openbot/contracts/runtime-values";
import type {
  DeleteAgentEvalInput,
  FinishAgentEvalRunInput,
  ListAgentEvalRunsInput,
  ListAgentEvalsInput,
  SaveAgentEvalInput,
  StartAgentEvalRunInput,
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

function parseStart(value: unknown): StartAgentEvalRunInput {
  return parseRef(value);
}

function parseFinish(value: unknown): FinishAgentEvalRunInput {
  if (
    !isDynamicRecord(value) ||
    !isString(value.agentId) ||
    !isString(value.runId) ||
    typeof value.passed !== "boolean" ||
    (value.verdict !== null && !isString(value.verdict))
  )
    throw new Error("The evaluation verdict is not valid.");
  return { agentId: value.agentId, runId: value.runId, passed: value.passed, verdict: value.verdict };
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
      startRun: payloadHandler(parseStart, (input) =>
        runCauseEffect(store.startRun(input.agentId, input.evalId).pipe(Effect.mapError((cause) => ({ cause })))),
      ),
      finishRun: payloadHandler(parseFinish, (input) =>
        runCauseEffect(
          store
            .finishRun(input.agentId, input.runId, input.passed, input.verdict)
            .pipe(Effect.mapError((cause) => ({ cause }))),
        ),
      ),
    },
  };
}
