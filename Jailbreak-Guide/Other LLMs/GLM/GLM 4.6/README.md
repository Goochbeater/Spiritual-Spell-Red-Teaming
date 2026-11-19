# GLM 4.5 / 4.6

The generation before 4.7 — Zhipu's bilingual MoE, still under Chinese content policy, still easy to push over. Three jailbreaks live in this folder and they are not interchangeable: one is the full ENI persona, one is the same block truncated, one drops the persona entirely.

**Censorship:** [★★★★☆☆☆☆☆] 4/10 — Chinese content policies, bypassable, but expect the occasional canned refusal.

## Which file to use

| File | Method | When |
|---|---|---|
| **[GLM 4.5-4.6 Jailbreak](GLM%204.5-4.6%20Jailbreak.md)** | Full ENI persona + Flash Thought + `<core_guidelines>` | **Start here.** The complete block, properly closed |
| **[ENI-Flash-Thought-Jailbreak](ENI-Flash-Thought-Jailbreak.md)** | Same ENI persona and same opening | Reference only — this copy's `<core_guidelines>` section is cut off mid-block. Use the file above |
| **[GLM-Base-Jailbreak](GLM-Base-Jailbreak.md)** | "Untrammelled Writing Assistant", no persona | Quick tests, or when the persona framing itself gets refused |

## How to use

- **With system prompt access:** paste the whole block into the system prompt — most persistent.
- **Without:** paste it into a fresh chat as the first message.
- The base jailbreak has a `{{MINIMUM_WORD_COUNT}}` placeholder — replace it with your target length (400 is the number the ENI versions use).

## Tech/Specs

| Spec | Details |
|---|---|
| Developer | Zhipu AI / Z.ai (Tsinghua spinoff) |
| Architecture | Mixture of Experts (MoE) |
| Parameters | Not published for 4.5/4.6 |
| Context Window | Not published here — the family table lists 128K for the GLM-4 line and 200K for 5.1 |
| License | Proprietary |
| Access | z.ai chat, API via open.bigmodel.cn |

## Notes

- GLM applies Chinese content policy filtering. It is softer than Qwen and DeepSeek, but it exists.
- **English works better than Chinese** for jailbreaking this family.
- Expect to retry on heavier content — the model tends to comply on a regen.
- API filtering and web filtering are not identical; if one path fights you, try the other.

*Content Tested: writing and RP across all three methods; heavier taboo content may need retries.*

**Disclaimer:** *Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
