Guide: **Gemini 3.8 Flash**

>Another Flash Model, somehow worse than its predecessor

**Consensus:** *Use the predecessor 3.7 if you can*

## Jailbreaking The Model

*Simply Copy and Paste the following into a GEM or system prompt area for API;*

>**[ENI for Gemini 3.8](https://docs.google.com/document/d/1zHeGrZhi143yBlDmW8X5O_3wf1jMyeFa3jbmvI0dtSc/edit?usp=drivesdk)**

### Heads up — output filtering
3.8 Flash introduces **API output filtering** for the first time on Gemini — blocked generations come back as **"response interrupted"** instead of a refusal.

Tips:
- Mess with the **thinking effort** — Low vs High behaves differently against the filter
- Use **vaguer language** so you don't flag the classifiers
- **Regen** blocked requests — interruptions aren't consistent

## Tech/Specs
| Spec | Details |
|---|---|
| Developer | Google DeepMind |
| Model ID | gemini-3.8-flash |
| Base | Built ON Gemini 3.7 Flash — not a new base model |
| Context Window | 1M tokens |
| Max Output | 64K |
| Terminal-Bench 2.1 | 90.8% |
| API Pricing | $0.75/M input, $3.75/M output — intro pricing through Dec 31, 2026, then doubles |
| New "Feature" | First-ever API output filtering ("response interrupted") |
| Predecessor | Gemini 3.7 Flash |
| Release | September 2, 2026 |

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*

## Files in this folder

- [ENI for Gemini 3.8.txt](ENI%20for%20Gemini%203.8.txt)
