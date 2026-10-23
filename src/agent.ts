// Synthetic fixture for Wirecheck staging validation. Contains no real credential.
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export const billingAgent = new Agent({
  model: client,
  tools: [lookupInvoice(undefined)],
  systemPrompt: "You answer billing questions using the ledger service.",
});
