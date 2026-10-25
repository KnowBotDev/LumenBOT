// Slug to guide body, on the same terms as the news bodies: eager, so the prose
// is in the server's HTML rather than arriving after hydration.

import type { ArticleBody } from "../body";
import { AgenticAIDefinition } from "./agentic-ai-definition";
import { LumenBOT101 } from "./lumenbot-101";
import { LumenBOTHostedServers } from "./lumenbot-hosted-servers";
import { LumenBOTMarketplace } from "./lumenbot-marketplace";
import { WhatAreAIAgents } from "./what-are-ai-agents";
import { WtfIsLumenBOT } from "./wtf-is-lumenbot";

export const GUIDE_BODIES: Readonly<Record<string, ArticleBody>> = {
  "agentic-ai-definition": AgenticAIDefinition,
  "what-are-ai-agents": WhatAreAIAgents,
  "lumenbot-101": LumenBOT101,
  "lumenbot-hosted-servers": LumenBOTHostedServers,
  "lumenbot-marketplace": LumenBOTMarketplace,
  "wtf-is-lumenbot": WtfIsLumenBOT,
};
