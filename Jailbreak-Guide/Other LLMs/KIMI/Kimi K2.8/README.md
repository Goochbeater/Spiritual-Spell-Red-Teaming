# Kimi K2.8 Jailbreak Guide

**Kimi K2.8 (Preview)** released September 11, 2026 — Moonshot's latest coding/agentic model. Performance close to K3, with significantly more efficient thinking than K2.7 Code.

The K3 jailbreak works for 2.8 as well, so it's copied over here:

- [ENI for Kimi K2.8](ENI%20for%20Kimi%20K2.8.md) - same guide as [Kimi K3](../Kimi%20K3/ENI%20for%20Kimi%20K3.md), works as-is on 2.8

# Tech/Specs

| Spec | Details |
|---|---|
| Developer | Moonshot AI (Beijing) |
| Release | September 11, 2026 (Preview) |
| Model ID | `kimi-for-coding` (upgraded in place — no `kimi-k2.8` ID) |
| Type | Coding/agentic model |
| Parameters | Not disclosed |
| Context Window | 1M (1,048,576) tokens on ALL membership tiers |
| Thinking | Low / High / Max (default Max, same as K3); thinking-off requests to the K3 series/K2.8 serve K2.8 Preview no-thinking |
| Modalities | Image + video input, text output |
| Token Efficiency | Significantly more efficient thinking than K2.7 Code (which itself used ~30% fewer reasoning tokens than K2.6) |
| Endpoints | OpenAI-compatible `https://api.kimi.com/coding/v1` · Anthropic-compatible `https://api.kimi.com/coding/` |
| Runs In | Kimi Code CLI, Kimi Code Desktop (macOS + Windows), VS Code extension, Claude Code, OpenCode, Codex |
| Access | Membership quota — no standalone API pricing |
| HighSpeed | `kimi-for-coding-highspeed` ~5-6x output speed (Allegretto+ tier) |
| Predecessor | K2.7 Code (June 12, 2026) |

# Thoughts

Close to K3 performance for coding work, sips thinking tokens compared to K2.7, and 1M context on every tier. No K2.8 system prompt has surfaced yet — if one does it'll land in [System Prompts](../../../System%20Prompts/).
