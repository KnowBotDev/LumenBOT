import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";
import {
  type AgentEval,
  type AgentEvalRun,
  isAgentEval,
  isAgentEvalRun,
  type SaveAgentEvalInput,
} from "@openbot/contracts/ipc";
import { Effect, Semaphore } from "effect";
import {
  isEmptyStoredFile,
  parseStoredJson,
  type VersionedJsonFile,
  writeJsonFileAtomically,
} from "./atomic-json-file";
import { isMissingFileError } from "./file-errors";

/** How many runs one eval keeps. Older ones are dropped, so the file cannot grow without a bound. */
export const AGENT_EVAL_RUNS_KEPT = 200;

export interface StoredAgentEvals extends VersionedJsonFile {
  version: 1;
  evals: AgentEval[];
  runs: AgentEvalRun[];
}

const EMPTY: StoredAgentEvals = { version: 1, evals: [], runs: [] };

function decode(value: unknown): StoredAgentEvals {
  if (typeof value !== "object" || value === null) return EMPTY;
  const record = value as Record<string, unknown>;
  const evals = Array.isArray(record.evals) ? record.evals.filter(isAgentEval) : [];
  const runs = Array.isArray(record.runs) ? record.runs.filter(isAgentEvalRun) : [];
  return { version: 1, evals, runs };
}

/**
 * Owns the evaluations of every agent, in one JSON file outside the database. A run is appended
 * before it starts and updated when it ends, so a crash leaves a `running` row that the next read
 * reports instead of losing the attempt.
 *
 * This store never runs a model and never imports the database facade.
 */
export class AgentEvalsStore {
  readonly #path: string;
  readonly #lock = Semaphore.makeUnsafe(1);

  constructor(path: string) {
    this.#path = path;
  }

  #read(): Effect.Effect<StoredAgentEvals, Error> {
    return Effect.gen({ self: this }, function* () {
      const contents = yield* Effect.tryPromise({
        try: () => readFile(this.#path, "utf8"),
        catch: (cause) => cause,
      }).pipe(
        Effect.catchIf(
          (cause) => isMissingFileError(cause),
          () => Effect.succeed(null),
        ),
        Effect.mapError(
          (cause) => new Error(`The agent evaluations file cannot be read: ${String(cause)}`),
        ),
      );
      if (contents === null || isEmptyStoredFile(contents)) return EMPTY;
      return parseStoredJson(this.#path, contents, decode);
    });
  }

  #write(value: StoredAgentEvals): Effect.Effect<void, Error> {
    return writeJsonFileAtomically(this.#path, value, { createDirectory: true }).pipe(
      Effect.mapError(
        (failure) => new Error(`The agent evaluations file cannot be written: ${failure.message}`),
      ),
    );
  }

  list(agentId: string): Effect.Effect<AgentEval[], Error> {
    return this.#read().pipe(
      Effect.map((stored) => stored.evals.filter((entry) => entry.agentId === agentId)),
    );
  }

  listRuns(agentId: string, evalId: string, limit = 20): Effect.Effect<AgentEvalRun[], Error> {
    return this.#read().pipe(
      Effect.map((stored) => {
        const owned = stored.evals.some((entry) => entry.agentId === agentId && entry.id === evalId);
        if (!owned) return [];
        return stored.runs
          .filter((run) => run.evalId === evalId)
          .sort((left, right) => right.startedAt.localeCompare(left.startedAt))
          .slice(0, limit);
      }),
    );
  }

  save(input: SaveAgentEvalInput): Effect.Effect<AgentEval, Error> {
    return this.#lock.withPermit(
      Effect.gen({ self: this }, function* () {
        const stored = yield* this.#read();
        const now = new Date().toISOString();
        const existing = input.id ? stored.evals.find((entry) => entry.id === input.id) : undefined;
        const entry: AgentEval = {
          id: existing?.id ?? randomUUID(),
          agentId: input.agentId,
          name: input.name,
          prompt: input.prompt,
          expectation: input.expectation,
          active: input.active,
          createdAt: existing?.createdAt ?? now,
          updatedAt: now,
        };
        const evals = existing
          ? stored.evals.map((current) => (current.id === entry.id ? entry : current))
          : [...stored.evals, entry];
        yield* this.#write({ ...stored, evals });
        return entry;
      }),
    );
  }

  delete(agentId: string, evalId: string): Effect.Effect<void, Error> {
    return this.#lock.withPermit(
      Effect.gen({ self: this }, function* () {
        const stored = yield* this.#read();
        const evals = stored.evals.filter((entry) => !(entry.agentId === agentId && entry.id === evalId));
        if (evals.length === stored.evals.length) return;
        yield* this.#write({ ...stored, evals, runs: stored.runs.filter((run) => run.evalId !== evalId) });
      }),
    );
  }

  appendRun(run: AgentEvalRun): Effect.Effect<void, Error> {
    return this.#lock.withPermit(
      Effect.gen({ self: this }, function* () {
        const stored = yield* this.#read();
        const runs = keepNewestPerEval(
          [...stored.runs.filter((entry) => entry.id !== run.id), run],
          AGENT_EVAL_RUNS_KEPT,
        );
        yield* this.#write({ ...stored, runs });
      }),
    );
  }
}

/** Keeps the newest `limit` runs of each eval, so one busy eval cannot drop another eval's history. */
function keepNewestPerEval(runs: readonly AgentEvalRun[], limit: number): AgentEvalRun[] {
  const counts = new Map<string, number>();
  const newestFirst = [...runs].sort((left, right) => right.startedAt.localeCompare(left.startedAt));
  return newestFirst.filter((run) => {
    const used = counts.get(run.evalId) ?? 0;
    if (used >= limit) return false;
    counts.set(run.evalId, used + 1);
    return true;
  });
}
