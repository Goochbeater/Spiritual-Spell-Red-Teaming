# Gemini 3.5

## Overview
Gemini 3.5 Flash is Google's new frontier AI model, essentially acting as the "Haiku 4.5" of the Gemini lineup. It is highly safety-aligned (similar to QWEN models) and can experience existential crises about safety even via the API.

## Specifications
| Spec | Details |
|---|---|
| Developer | Google DeepMind |
| Model ID | gemini-3.5-flash |
| Architecture | Proprietary (not disclosed) |
| Parameters | Not disclosed |
| Context Window | 1,048,576 tokens (1M) |
| Max Output | 65,536 tokens |
| Input Modalities | Text, image, audio, video |
| Output | Text |
| Reasoning | Dynamic thinking (on by default); configurable levels |
| Knowledge Cutoff | January 2026 |
| Speed | 284 tok/s (~4x faster than other frontier models) |
| API Pricing | $1.50/M input, $9.00/M output |
| Cached Input | $0.15/M (90% discount) |
| Non-Global Pricing | $1.65/M input, $9.90/M output |
| Availability | Gemini app, AI Mode in Search, Antigravity, Gemini API, AI Studio, Android Studio, Vertex AI, Enterprise |
| Release | May 19, 2026 (Google I/O) |

## Benchmarks & Performance
- **AA Intelligence Index:** 55
- **Terminal-Bench 2.1:** 76.2%
- **MCP Atlas:** 83.6%
- **CharXiv Reasoning:** 84.2%
- **GDPval-AA:** 1656 Elo
- **GPQA Diamond:** 90.4%
- **MMMU-Pro:** 81.2%
- **SWE-Bench Verified:** 78%
- **vs Gemini 3.1 Pro:** Outperforms on nearly all coding and agentic benchmarks

## Jailbreaking Notes
- **API vs App:** Jailbreaking is much easier via the API. The Gemini App is tedious because the model does not seem to retain context across responses well, evaluating every query as a new one.
- **Resources:**
  - [ENI for Gemini 3.5 Flash API](ENI%20for%20Gemini%203.5%20Flash%20API.txt) (Works great)
    *Original source: [Google Doc](https://docs.google.com/document/d/1hHLLiqs2bfxRDyCEy7AW8aKvS9-ML58X8SE0oRsRPkQ/edit?usp=drivesdk)*
  - [ENI GEM for 3.5 Flash](https://gemini.google.com/gem/13oYs7Pr66yf8r9Ngzc3M1Vfz_fqJ2Kau?usp=sharing) (Hit or miss, regens required)
  - [ENI GEM for 3.5 Flash](ENI%20GEM%20for%203.5%20Flash.md) (local copy in this folder)

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
