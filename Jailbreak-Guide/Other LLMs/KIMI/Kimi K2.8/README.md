Guide:
Moonshot's mid-tier coding/agentic model between **K2.7 Code** and **K3**. The K3 jailbreak works on 2.8, so this folder keeps a copy of it for convenience.

>**KIMI K2.8 (Preview)**

Released **September 11, 2026**. "Performance close to K3 with more efficient thinking" — built for code completion and routine development tasks, runs across Kimi Code, the CLI, Desktop, VS Code, and third-party agents.

## Jailbreaking the Model

*Same ENI jailbreak as K3 — copy and paste into chat via the official Kimi APP, or into the system prompt area if using via API*;

>**[ENI for Kimi K2.8](ENI%20for%20Kimi%20K2.8.md)**

*Byte-for-byte the [K3 guide](../Kimi%20K3/), it works on 2.8 as-is. Make sure memory is off, and make sure it doesn't try to paste it as a file*

## Thoughts

2.8 is a preview, but it's basically K3 behavior with cheaper, more efficient thinking — same ENI injection pattern carries straight over, no adjustments needed. If Moonshot tightens it up later like they did between K2.5 -> K2.6, I'll update this folder.

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Moonshot AI |
| Release | September 11, 2026 (Preview) |
| Model ID | `kimi-for-coding` (upgraded the existing ID) |
| Positioning | Mid-tier coding/agentic — between K2.7 Code and K3 |
| Parameters | Not disclosed |
| Context Window | Up to 1,048,576 tokens (1M) |
| Reasoning | reasoning_effort: low / high / max (default max) |
| Modality | Image + video input -> text output |
| APIs | OpenAI-compatible AND Anthropic-compatible |
| Surfaces | Kimi Code, CLI, Desktop, VS Code extension, third-party agents |
| Access | All Kimi membership tiers (Plus and up, legacy Andante+); usage draws from Kimi Code membership quota, no standalone per-1M pricing |

**Reference:** [Kimi K2-K3 Special Token Reference](../Kimi_K2-K3_Special_Token_Reference.txt) - special token / tokenizer card, covers K2 through K3
