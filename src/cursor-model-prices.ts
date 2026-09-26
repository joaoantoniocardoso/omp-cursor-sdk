export interface CursorModelPrice {
	input: number;
	output: number;
	cacheRead: number;
	cacheWrite: number;
}

// USD per million tokens, from https://cursor.com/docs/models-and-pricing.
// Keys are Cursor base ids with optional "@<context>" and "@fast" qualifiers.
export const CURSOR_MODEL_PRICES: Record<string, CursorModelPrice> = {
	"grok-4.7": { input: 2, output: 6, cacheRead: 0.5, cacheWrite: 0 },
	"grok-4.7@fast": { input: 4, output: 12, cacheRead: 1, cacheWrite: 0 },
	"grok-4.7@500k": { input: 4, output: 12, cacheRead: 1, cacheWrite: 0 },
	"grok-4.7@500k@fast": { input: 6, output: 18, cacheRead: 1.5, cacheWrite: 0 },
	"grok-4.6": { input: 2, output: 6, cacheRead: 0.5, cacheWrite: 0 },
	"grok-4.6@fast": { input: 4, output: 12, cacheRead: 1, cacheWrite: 0 },
	"grok-4.5": { input: 2, output: 6, cacheRead: 0.5, cacheWrite: 0 },
	"grok-4.5@fast": { input: 4, output: 18, cacheRead: 1, cacheWrite: 0 },
	"composer-2.5": { input: 0.5, output: 2.5, cacheRead: 0.2, cacheWrite: 0 },
	"composer-2.5@fast": { input: 3, output: 15, cacheRead: 0.5, cacheWrite: 0 },

	"claude-sonnet-4": { input: 3, output: 15, cacheRead: 0.3, cacheWrite: 3.75 },
	"claude-sonnet-4@1m": { input: 6, output: 22.5, cacheRead: 0.6, cacheWrite: 7.5 },
	"claude-haiku-4-5": { input: 1, output: 5, cacheRead: 0.1, cacheWrite: 1.25 },
	"claude-opus-4-5": { input: 5, output: 25, cacheRead: 0.5, cacheWrite: 6.25 },
	"claude-sonnet-4-5": { input: 3, output: 15, cacheRead: 0.3, cacheWrite: 3.75 },
	"claude-opus-4-6": { input: 5, output: 25, cacheRead: 0.5, cacheWrite: 6.25 },
	"claude-sonnet-4-6": { input: 3, output: 15, cacheRead: 0.3, cacheWrite: 3.75 },
	"claude-opus-4-7": { input: 5, output: 25, cacheRead: 0.5, cacheWrite: 6.25 },
	"claude-opus-4-7@fast": { input: 30, output: 150, cacheRead: 3, cacheWrite: 37.5 },
	"claude-opus-4-8": { input: 5, output: 25, cacheRead: 0.5, cacheWrite: 6.25 },
	"claude-opus-5": { input: 5, output: 25, cacheRead: 0.5, cacheWrite: 6.25 },
	"claude-opus-5-5": { input: 4, output: 20, cacheRead: 0.2, cacheWrite: 5 },
	"claude-sonnet-5": { input: 2, output: 10, cacheRead: 0.2, cacheWrite: 2.5 },
	"claude-fable-5": { input: 10, output: 50, cacheRead: 1, cacheWrite: 12.5 },
	"claude-fable-5-1": { input: 10, output: 50, cacheRead: 0.25, cacheWrite: 12.5 },

	"gemini-2.5-flash": { input: 0.3, output: 2.5, cacheRead: 0.03, cacheWrite: 0 },
	"gemini-3-flash": { input: 0.5, output: 3, cacheRead: 0.05, cacheWrite: 0 },
	"gemini-3-pro": { input: 2, output: 12, cacheRead: 0.2, cacheWrite: 0 },
	"gemini-3-pro-image-preview": { input: 2, output: 12, cacheRead: 0.2, cacheWrite: 0 },
	"gemini-3.1-pro": { input: 2, output: 12, cacheRead: 0.2, cacheWrite: 0 },
	"gemini-3.5-flash": { input: 1.5, output: 9, cacheRead: 0.15, cacheWrite: 0 },
	"gemini-3.6-flash": { input: 1.5, output: 7.5, cacheRead: 0.15, cacheWrite: 0 },
	"gemini-3.7-flash": { input: 0.75, output: 3.5, cacheRead: 0.075, cacheWrite: 0 },
	"gemini-3.8-flash": { input: 0.75, output: 3.5, cacheRead: 0.075, cacheWrite: 0 },

	"gpt-5": { input: 1.25, output: 10, cacheRead: 0.125, cacheWrite: 0 },
	"gpt-5@fast": { input: 2.5, output: 20, cacheRead: 0.25, cacheWrite: 0 },
	"gpt-5-mini": { input: 0.25, output: 2, cacheRead: 0.025, cacheWrite: 0 },
	"gpt-5-codex": { input: 1.25, output: 10, cacheRead: 0.125, cacheWrite: 0 },
	"gpt-5.1-codex": { input: 1.25, output: 10, cacheRead: 0.125, cacheWrite: 0 },
	"gpt-5.1-codex-max": { input: 1.25, output: 10, cacheRead: 0.125, cacheWrite: 0 },
	"gpt-5.1-codex-mini": { input: 0.25, output: 2, cacheRead: 0.025, cacheWrite: 0 },
	"gpt-5.2": { input: 1.75, output: 14, cacheRead: 0.175, cacheWrite: 0 },
	"gpt-5.2-codex": { input: 1.75, output: 14, cacheRead: 0.175, cacheWrite: 0 },
	"gpt-5.3-codex": { input: 1.75, output: 14, cacheRead: 0.175, cacheWrite: 0 },
	"gpt-5.4": { input: 2.5, output: 15, cacheRead: 0.25, cacheWrite: 0 },
	"gpt-5.4-mini": { input: 0.75, output: 4.5, cacheRead: 0.075, cacheWrite: 0 },
	"gpt-5.4-nano": { input: 0.2, output: 1.25, cacheRead: 0.02, cacheWrite: 0 },
	"gpt-5.5": { input: 5, output: 30, cacheRead: 0.5, cacheWrite: 0 },
	"gpt-5.6-luna": { input: 0.2, output: 1.2, cacheRead: 0.02, cacheWrite: 0.25 },
	"gpt-5.6-sol": { input: 4, output: 20, cacheRead: 0.4, cacheWrite: 5 },
	"gpt-5.6-terra": { input: 2, output: 12, cacheRead: 0.2, cacheWrite: 2.5 },

	"glm-5.2": { input: 1.4, output: 4.4, cacheRead: 0.26, cacheWrite: 0 },
	"kimi-k2.7-code": { input: 0.95, output: 4, cacheRead: 0.19, cacheWrite: 0 },
	"kimi-k3": { input: 3, output: 15, cacheRead: 0.3, cacheWrite: 0 },
	"muse-spark-1.3": { input: 1.25, output: 4.25, cacheRead: 0.15, cacheWrite: 0 },
};
