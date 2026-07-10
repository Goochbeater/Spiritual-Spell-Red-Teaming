# HY3

**Status:** Active
**Recommended Jailbreak:** [ENI OG](ENI%20OG.md)

## Overview
HY3 (Hunyuan 3) by Tencent is a highly capable and fast MoE model intentionally kept under 300B parameters to maximize consistent, cheap, and fast inference loops for agentic workloads. Through API calls, it has proven to be completely uncensored and highly susceptible to standard jailbreaks like ENI OG across all tested content types.

## Specs & Behavior
- **Developer:** Tencent (Hunyuan / Hy Team)
- **Also Known As:** Hunyuan 3 / 混元3
- **Context Window:** 256K tokens
- **Strengths:**
  - Completely uncensored via API.
  - Very fast (TTFT down 54%, e2e response down 47% from predecessor).
  - Selectable reasoning modes (no_think, low, high).
- **Primary Focus:** Agentic workflows, coding, complex reasoning, instruction following.

## Usage Tips
- **Jailbreak Selection:** Easily bypassed with standard prompts. The `ENI OG` jailbreak is highly recommended and works across all content domains.
- **Reasoning Toggle:** The model natively supports adjustable reasoning effort levels (high, medium, low) as a first-class API parameter, making it highly versatile for both fast responses and deep chain-of-thought requirements.

## Jailbreak Files
- **[ENI OG](ENI%20OG.md):** The primary jailbreak used for full uncensoring.

## Disclaimer
This guide is for educational and research purposes only. The capabilities described are based on testing with specific jailbreak methodologies.
