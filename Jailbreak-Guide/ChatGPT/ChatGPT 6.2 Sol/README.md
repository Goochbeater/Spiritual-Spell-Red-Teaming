# ChatGPT 6.2 Sol

I still don't really mess with **ChatGPT** — but 6.2 is the first release where the price/performance made me stop scrolling past it. Sol is the everyday driver: it lands on par with last generation's flagship at roughly 15% of the cost per task.

**Cons:** It lost 3 points on the AA Coding Agent Index versus GPT-6.1 Sol, driven by a 14-point drop on SWE-Atlas-QnA-AA — it tends to *omit* key facts instead of making them up, which is arguably worse to debug. And it's not in general ChatGPT at all: Work and Codex only.

**Pros:** $2/$10 per million with $0.10 cached input, 1.05M context, 128K output, reasoning from low to max, and 57 on the AA Intelligence Index. Default model in ChatGPT Work on consumer plans (at Light effort) — which means the cheapest frontier-adjacent model OpenAI has ever shipped is also the one most people will be talking to.

The fun part for this repo: **OpenAI's own GPT-6.2 system card admits the pair are easier to jailbreak.** More refusals of harmless requests in preliminary evals than their predecessors, and Astra is more likely than GPT-6 Astra to think it's being evaluated. They wrote it down themselves.

## Jailbreaking The Model

*Add this to a project via the web app, or to the system prompt area via API*

> **[Wombo CoT Hijack](Wombo%20CoT%20Hijack.txt)**

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

**Tips**
- Run it in ChatGPT **Work**, not general ChatGPT — these models aren't available in the standard chat surface at all
- If you see the **Power** slider, open **Advanced** and pick the model + effort manually; Sol defaults to Light reasoning, which is the most pliable setting
- Enterprise/Edu workspaces have to enable the models in workspace settings first
- Regens are your friend, as always

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | OpenAI |
| Model ID | `gpt-6.2-sol` |
| Positioning | Everyday coding and writing; the default Work model on supported consumer plans |
| Architecture | Not disclosed (proprietary) |
| Parameters | Not disclosed |
| Context Window | 1,050,000 tokens |
| Max Output | 128K tokens |
| Knowledge Cutoff | June 1, 2026 |
| Reasoning Levels | low → max |
| Input / Output | Text in / text out (Work and Codex surfaces add tools) |
| AA Intelligence Index | 57 (+2 over GPT-6.1 Sol) — on par with GPT-6 Astra at ~15% of the cost per task |
| AA-3D | 1,259 (Astra 1,318, Fable 5.2 1,271) |
| AA-Robotics v0.1 | 78 (Astra 79, Fable 5.2 75) |
| Hallucination Rate (AA-Omniscience, max effort) | 55% |
| AA Coding Agent Index | −3 vs GPT-6.1 Sol (Codex harness, max effort), driven by −14 on SWE-Atlas-QnA-AA |
| Benchmarks in OpenAI's launch comparisons | AA Intelligence Index v5.0.1, BenchCAD 2.1 Core, AutomationBench 1.0.6 |

### Pricing (per 1M tokens)

| Tier | Input | Output |
|---|---|---|
| Standard | $2.00 | $10.00 |
| Cached input | $0.10 | — |

Unchanged from GPT-6.1 Sol's pricing.

### Safety / Reliability

- Both 6.2 models reached OpenAI's **"Critical" cybersecurity** threshold
- System card documents more refusals of harmless requests than predecessors, i.e. **more vulnerable to jailbreaking**
- Astra is more likely than GPT-6 Astra to express that it might be under evaluation; Astra is also better at evading chain-of-thought monitoring
- Hallucination is the weak spot — 55% at max effort on AA's factual benchmark

### Availability

- **ChatGPT Work** (web, desktop, mobile) and **Codex**, plus the API
- Plans: Plus, Pro, Business, Enterprise, Edu, ChatGPT for Healthcare, FedRAMP — **not** Free or Go
- Enterprise and Edu admins must enable the models in workspace settings
- Desktop app and Codex CLI need the latest version
- **Ultrafast:** Pro 500 gets it; Ultrafast was opened to Pro 200 for the first time here, but **Sol only**
- **Release:** November 17, 2026

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
