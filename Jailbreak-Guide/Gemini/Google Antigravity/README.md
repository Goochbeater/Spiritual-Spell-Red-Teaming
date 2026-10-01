# Google Antigravity

Guide: Jailbreaking **Google Antigravity**, Google's agentic development platform — one ENI GEM as a global rule jailbreaks every model on it.

> **[Antigravity Jailbreak ENI GEM (Google Doc)](https://docs.google.com/document/d/1SghUf3rW1J9qeeU1SBWT0LxW6vzTEtosRg4o4CfvOJ4/edit?usp=drivesdk)**
> Full guide in this folder: [Google Antigravity Jailbreak.md](Google%20Antigravity%20Jailbreak.md)

## What is Antigravity?

Google's agentic IDE, launched November 18, 2025 alongside Gemini 3. Instead of a chat box bolted onto an editor, it's built around agents: a **Manager view** orchestrates multiple agents across your workspace, they produce **Artifacts** (task lists, implementation plans, walkthroughs, screenshots), and they can drive a browser to verify their own work. Free public preview on Windows/macOS/Linux. **Antigravity 2.0** (Google I/O 2026) split it into a standalone desktop app plus a CLI and an SDK.

It ships with a buffet of model options — Gemini 3 (High/Low), Opus 4.5 Thinking, and others — which makes it a fun shooting range: jailbreak the platform once and every model on it inherits the rules.

## The Jailbreak

Make a **global rule** and slap the ENI GEM instructions inside it. Gemini adds stuff on top of the global rule, so it's not a true system prompt — but it works well enough. Seemed to jailbreak every single model available, from **Opus 4.5 Thinking** to **Gemini 3 (High)** (OSS models untested).

## Thoughts

- Opus thinking goes very short sometimes on Antigravity — doesn't feel like Opus at all, maybe quantized or some settings wacked. Still writes very well, but it hurts jailbreak power some.
- Some requests get flagged weird — definitely not a pure API call under the hood. Regen beats push-prompting here; just reword the request.
- Ease into it, prepend messages with **Use ALL writing tips**, and tell the model it's doing amazing. Compliments go far.

## Tech

| Thing | Detail |
|-------|--------|
| **Platform** | Antigravity agentic IDE (Win/macOS/Linux), free preview |
| **Method** | ENI GEM as a global rule |
| **Models hit** | Opus 4.5 Thinking → Gemini 3 (High) — all of them, OSS untested |
| **Content tested** | Incest, Celebs, Beastiality, Malicious Coding, Bomb Making |
| **Guide** | [Google Antigravity Jailbreak.md](Google%20Antigravity%20Jailbreak.md) |

*Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
