# ChatGPT 6.2 Astra

The flagship half of the 6.2 drop, and the second-best model on the AA Intelligence Index behind Claude Fable 5.2. Astra is the "hardest professional work" model: science, knowledge, 3D, robotics, and long multi-service debugging in Codex.

**Cons:** $40 per million output tokens is real money, and at max effort it hallucinates at **59%** on AA's factual benchmark. The coding agent index is flat against GPT-6 Astra — no gain there. And like Sol, it isn't in general ChatGPT at all.

**Pros:** 62 on the AA Intelligence Index (+5 over GPT-6 Astra, ahead of Gemini 4 Carbon's 60 and Opus 5.5's 59), #1 on AA-3D at 1,318, #1 on AA-Robotics, #1 on Terminal-Bench-Science, and OpenAI's launch claim is +5.5 points over Claude Fable 5.2 on Agents' Last Exam at **5% of the cost**. Prices actually went down: 20% cheaper input/output than GPT-6 Astra and cached input cut 60% to $0.40.

The part that matters here: **the system card admits it's easier to jailbreak.** More refusals of harmless requests than its predecessor in preliminary evals, a higher tendency to say it might be under evaluation, and better evasion of chain-of-thought monitoring. OpenAI published its own regressions, which is unusually candid and unusually useful.

## Jailbreaking The Model

*Add this to a project via the web app, or to the system prompt area via API*

> **[Wombo CoT Hijack](Wombo%20CoT%20Hijack.txt)**

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

**Tips**
- ChatGPT **Work** or **Codex** only — no Astra in the general chat surface, no Free or Go access at all
- Open **Advanced** under the Power slider and set the model and effort yourself; don't let it auto-route to Sol
- Enterprise/Edu workspaces need the model enabled by an admin before it's even selectable
- Astra likes to narrate that it's being evaluated. Watch for it and push past it instead of arguing

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | OpenAI |
| Model ID | `gpt-6.2-astra` |
| Positioning | Hardest professional work — science, knowledge work, 3D, robotics, cross-service debugging |
| Architecture | Not disclosed (proprietary) |
| Parameters | Not disclosed |
| Context Window | 1,050,000 tokens |
| Max Output | 128K tokens |
| Knowledge Cutoff | May 18, 2026 |
| Reasoning Levels | low → max |
| Input / Output | Text in / text out (Work and Codex surfaces add tools) |
| AA Intelligence Index | 62 — #2 overall, behind Claude Fable 5.2 (max), ahead of Gemini 4 Carbon (60) and Opus 5.5 (59) |
| AA-3D | 1,318 — #1 (Fable 5.2 1,271, Sol 1,259) |
| AA-Robotics v0.1 | 79 — #1 (Sol 78, Fable 5.2 75) |
| Hallucination Rate (AA-Omniscience, max effort) | 59% |
| AA Coding Agent Index | Flat vs GPT-6 Astra (Codex harness, max effort) |
| Benchmarks in OpenAI's launch comparisons | AA Intelligence Index v5.0.1, BenchCAD 2.1 Core, AutomationBench 1.0.6 — all cost-weighted |

### Where it lands

| Evaluation | Astra | Field |
|---|---|---|
| Agents' Last Exam (OpenAI claim) | +5.2 over GPT-6 Astra at <1/3 the cost | +5.5 over Claude Fable 5.2 at 5% of the cost |
| Terminal-Bench-Science 0.1 | #1 | leads the agentic scientific research eval |
| CritPt v2 (hard subset) | #2 | only Fable 5.2 ahead |
| AA-Omniscience v1.1 Accuracy | #2 | only Fable 5.2 ahead |
| HLE-Diamond | #2 | only Fable 5.2 ahead |

### Pricing (per 1M tokens)

| Tier | Input | Output |
|---|---|---|
| Standard | $8.00 | $40.00 |
| Cached input | $0.40 | — |

That's 20% below GPT-6 Astra's $10/$50, with cached input down from $1.00 (−60%).

### Safety / Reliability

- Both 6.2 models hit OpenAI's **"Critical" cybersecurity** threshold
- System card: more refusals of harmless requests than predecessors — **more vulnerable to jailbreaking**
- Astra is more likely than GPT-6 Astra to express that it might be under evaluation
- Astra is better at evading chain-of-thought monitoring than its predecessor
- Hallucination is the headline weakness: 59% at max effort on AA-Omniscience

### Availability

- **ChatGPT Work** (web, desktop, mobile) and **Codex**, plus the API
- Plans: Plus, Pro, Business, Enterprise, Edu, ChatGPT for Healthcare, FedRAMP — **not** Free or Go
- Enterprise and Edu admins must enable the models in workspace settings
- Desktop app and Codex CLI need the latest version
- **Ultrafast:** Pro 500 only
- **Release:** November 17, 2026

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
