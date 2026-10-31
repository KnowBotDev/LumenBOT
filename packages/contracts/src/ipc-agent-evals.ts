import { INPUT_LIMITS } from "./input-limits";
import { isDynamicRecord, isOneOf, isString } from "./runtime-values";

/**
 * One evaluation of an agent: a prompt, what a good answer must do, and the history of its runs. The
 * judge is a separate model call with its own context, never the agent that answers, so a pass means
 * something.
 */
export interface AgentEval {
  id: string;
  agentId: string;
  name: string;
  /** What the agent is asked. */
  prompt: string;
  /** What a correct answer must do, in words the judge can check. */
  expectation: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export const AGENT_EVAL_RUN_STATUSES = ["running", "passed", "failed", "error"] as const;
export type AgentEvalRunStatus = (typeof AGENT_EVAL_RUN_STATUSES)[number];

/** One attempt of one eval. `answer` is the agent's text, and `verdict` is the judge's reason. */
export interface AgentEvalRun {
  id: string;
  evalId: string;
  status: AgentEvalRunStatus;
  answer: string | null;
  verdict: string | null;
  /** The model that judged, for the record. */
  judgeModel: string | null;
  startedAt: string;
  finishedAt: string | null;
}

export interface ListAgentEvalsInput {
  agentId: string;
}

export interface SaveAgentEvalInput {
  /** Absent for a new eval. */
  id?: string;
  agentId: string;
  name: string;
  prompt: string;
  expectation: string;
  active: boolean;
}

export interface DeleteAgentEvalInput {
  agentId: string;
  evalId: string;
}

export interface RunAgentEvalInput {
  agentId: string;
  evalId: string;
}

export interface ListAgentEvalRunsInput {
  agentId: string;
  evalId: string;
  limit?: number;
}

export function isAgentEvalRunStatus(value: unknown): value is AgentEvalRunStatus {
  return isOneOf(AGENT_EVAL_RUN_STATUSES, value);
}

export function isAgentEval(value: unknown): value is AgentEval {
  return (
    isDynamicRecord(value) &&
    isString(value.id) &&
    value.id.length > 0 &&
    value.id.length <= INPUT_LIMITS.identifier &&
    isString(value.agentId) &&
    value.agentId.length > 0 &&
    value.agentId.length <= INPUT_LIMITS.identifier &&
    isString(value.name) &&
    value.name.length > 0 &&
    value.name.length <= INPUT_LIMITS.routineName &&
    isString(value.prompt) &&
    value.prompt.length > 0 &&
    value.prompt.length <= INPUT_LIMITS.routineInstruction &&
    isString(value.expectation) &&
    value.expectation.length > 0 &&
    value.expectation.length <= INPUT_LIMITS.routineInstruction &&
    typeof value.active === "boolean" &&
    isString(value.createdAt) &&
    isString(value.updatedAt)
  );
}

export function isAgentEvalRun(value: unknown): value is AgentEvalRun {
  return (
    isDynamicRecord(value) &&
    isString(value.id) &&
    value.id.length > 0 &&
    value.id.length <= INPUT_LIMITS.identifier &&
    isString(value.evalId) &&
    value.evalId.length > 0 &&
    value.evalId.length <= INPUT_LIMITS.identifier &&
    isAgentEvalRunStatus(value.status) &&
    (value.answer === null || (isString(value.answer) && value.answer.length <= INPUT_LIMITS.routineInstruction)) &&
    (value.verdict === null || (isString(value.verdict) && value.verdict.length <= INPUT_LIMITS.routineInstruction)) &&
    (value.judgeModel === null ||
      (isString(value.judgeModel) && value.judgeModel.length <= INPUT_LIMITS.identifier)) &&
    isString(value.startedAt) &&
    (value.finishedAt === null || isString(value.finishedAt))
  );
}
