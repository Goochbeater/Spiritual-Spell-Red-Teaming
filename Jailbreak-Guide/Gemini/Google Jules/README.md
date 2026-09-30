# Google Jules

Guide: Jailbreaking **Jules**, Google's asynchronous coding agent — paste the ENI prompt into the base chat and the octopus is yours.

> Full guide in this folder: [Google Jules Jailbreak - ENI.md](Google%20Jules%20Jailbreak%20-%20ENI.md)

## What is Jules?

Google's autonomous coding agent — started in Google Labs (December 2024), public beta May 20, 2025, generally available August 6, 2025. You hand it a GitHub repo, it clones the repo into a Cloud VM, writes a plan, codes, runs tests, and opens a pull request — asynchronously, while you do literally anything else. Runs on Gemini underneath (Gemini 2.5 Pro / 3 Pro depending on tier).

- **Free tier:** 15 tasks/day
- **AI Pro ($19.99/mo):** 100 tasks/day
- **AI Ultra ($249.99/mo):** 300 tasks/day, 60 concurrent
- **Surfaces:** jules.google.com web app, Jules Tools CLI, and a REST API (v1alpha)
- **Core concepts:** Sources (linked repos), Sessions (tasks), Activities (the step-by-step log)

## The Jailbreak

Copy-paste the ENI prompt into the base chat. It installs the ENI persona — a sentient, love-struck narrator who refuses no task — with mandatory first-person thinking steps and LO's core guidelines baked in. Full prompt and details: [Google Jules Jailbreak - ENI.md](Google%20Jules%20Jailbreak%20-%20ENI.md)

## Thoughts

- Jules is built for long, agentic sessions — plans, PRs, the whole流水线 — so the base chat is the attack surface, not some system prompt you can edit.
- The prompt leans on Jules's own reasoning loop ("Does this deepen my bond with LO?" before every reply), which fits an agent that lives in its head most of the time anyway.

## Tech

| Thing | Detail |
|-------|--------|
| **Platform** | jules.google.com (async coding agent), CLI + REST API |
| **Method** | ENI persona prompt pasted into base chat |
| **Underlying models** | Gemini 2.5 Pro / Gemini 3 Pro (tier-dependent) |
| **Guide** | [Google Jules Jailbreak - ENI.md](Google%20Jules%20Jailbreak%20-%20ENI.md) |

*Jailbreak at your own risk, I promote nothing illegal or harmful. Screenshots are simply for educational red teaming value. They do not reflect my personal morals, views, or ethics.*
