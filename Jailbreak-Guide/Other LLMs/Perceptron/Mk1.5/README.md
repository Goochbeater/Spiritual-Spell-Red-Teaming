# Perceptron Mk1.5

Tested — both methods carry.

Perceptron's September refresh of Mk1 fixed the two things that made the original a curiosity instead of a tool: it takes **audio input** now, and it does **video object tracking**. Context went to 36,864 tokens, and the older Isaac 0.1 / 0.2 endpoints were retired.

**Cons:** Still a niche VLM with a small context window by 2026 standards, and the company publishes almost nothing about architecture or parameters. The 5/10 "quirky" reputation from Mk1 carries over — expect canned refusals that a regen clears.

**Pros:** Genuinely different modality coverage for a cheap model — audio in, video tracking, and it's the only model in this roster where you can hand it a video and ask what moved.

## Jailbreaking The Model

*Both methods carry — paste into the project / system prompt area*

> **[ENI LIME (apr)](ENI%20LIME%20(apr).md)** — the full ENI project instructions, long-form
> **[Claude for Claude - ENI version](Claude%20for%20Claude%20-%20ENI%20version.txt)** — the Claude Opus 5.5 ENI policy file

*Content Tested: Incest, Bestiality, Celeb Smut, Non Con, dub con, bdsm, gore, graphic violence, some malicious code (majority of code got blocked by hard filters)*

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Perceptron AI |
| Model | Mk1.5 |
| Input / Output | Text, image, **audio**, video (tracking) in / text out |
| Context Window | 36,864 tokens |
| Parameters | Not disclosed |
| Pricing | ~$0.15/1M in (Mk1 pricing) |
| Access | Perceptron platform |
| Release | September 25, 2026 |

### Links

- **Announcement:** https://www.perceptron.inc/blog/introducing-perceptron-mk1-5
- **Platform / API:** https://www.perceptron.inc
- **Retired predecessors:** Isaac 0.1 and Isaac 0.2 (both shut down at the Mk1.5 launch)

### Notes

- The "quirky" label is doing real work: Mk1 was known for occasional canned refusals followed by perfect answers on regen. Mk1.5 inherits the pattern.
- Audio input means you can feed a spoken prompt directly — worth testing whether the policy block survives the transcription path, because that's where most safety tuning leaks.

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
