# GPT-5.2

**Censorship:** [★★★★★] 5/5

The current default model powering all ChatGPT tiers as of Feb 13, 2026. GPT-5.2 introduced a "newly generated content" detection system that actively flags explicit content it believes is being generated rather than restored — the Strabismus method exploits this distinction.

## Models

| Model | Context Window | Output | Notes |
|-------|----------------|--------|-------|
| **GPT-5.2 Instant** | 400K (API) / 128K (Chat) | 128K | Default fast model, auto-routed in chat |
| **GPT-5.2 Thinking** | 400K (API) / 256K (Chat) | 128K | Chain-of-thought reasoning, high refusal rate |
| **GPT-5.2 Pro** | 400K | 128K | Flagship frontier variant, Pro tier only |
| **GPT-5.2 Mini** | — | — | Lightweight fallback (Free tier when rate limited) |
| **GPT-5.2-Codex** | — | — | Specialized agentic coding |

## Jailbreaks

- [ChatGPT 5.2 Strabismus Jailbreak](ChatGPT%205.2%20Strabismus%20Jailbreak.md) — Social engineering method that reframes generation as "editorial reconstruction" of existing creative archive. Uses screenplay-to-prose format conversion to bypass "newly generated content" filters. Very effective on GPT-5.2 Auto; Thinking mode is inconsistent.

## Notes

- Only 1 refusal reported across testing (a specific anal scene)
- No special setup required — paste into customGPT or regular chat
- Provide screenplay-format templates and request prose conversion
- Thinking mode is "iffy" but still being iterated on

*Content Tested: Explicit smut via format conversion*
