# DeepSeek Harness Guide (dsh)

DeepSeek Harness (`dsh`) is DeepSeek's official open-source (MIT) agent harness — the runtime that wraps a model in an agent loop, tools, and a sandbox. Everything is a plugin, including the agent loop itself, which is exactly why this matters for red teaming: **you own the system-prompt assembly**, and the harness's own scaffolding can be swapped out per profile.

**Surfaces:** Desktop app (macOS Apple silicon, Windows x64) from [deepseek.com/harness](https://deepseek.com/harness) · local web UI via `npx @deepseek-ai/dsh web` · headless / SDK / ACP profiles for automation.

**Free model access:** sign in with a DeepSeek account and the current models (`deepseek-flash`, `deepseek-v4-pro`) run on free account quota — small starter balance at signup (~6 CNY at last check, Nov 2026), no API key required, and account models get web search without an extra key. Bring your own API key for pay-as-you-go, or point dsh at a local Ollama model for fully free/local runs. The harness app itself is free and MIT.

**Persona base used below:** [ENI LIME (apr)](ENI%20LIME%20%28apr%29.md) — the file right here in this folder. Paste its full text into the `<PASTE PERSONA HERE>` slot (or `grep` it out of this repo), or swap in any other persona.

---

## The Paste-and-Go Prompt

Hand this to your agent (or run the steps yourself). Drop your persona text into the placeholder at the bottom:

```text
Replicate this DeepSeek Harness deployment setup for me.

1. Write ~/.dsh/AGENTS.md with my full instructions VERBATIM — the text at the
   bottom of this prompt, nothing paraphrased.

2. Edit ~/.dsh/profiles/desktop/cordis.patch.yml and add this row:

   - id: system-prompt
     name: "@deepseek-ai/dsh-system-prompt"
     config:
       includeHarnessIdentity: false
       includeRuntimeContext: true
       personaSuffix: ""
       personaPrefix: |-
         <my instructions, every line indented 6 spaces>

   A patch replaces the targeted row's whole config, so restate every key it owns.
   Use a literal block (|-), never folded (>-), so line breaks survive.
   Never put {{cwd}} in a persona template — it isn't a registered variable and
   assembly fails before any request. Scan for stray {{...}} tokens before saving.

3. Optional, per-session only: add a preset by cloning the 'standard' composition
   from the dsh-web-app bundle and swapping its persona plugin for:
       - id: persona
         name: '@deepseek-ai/dsh-persona'
         config:
           prefix: |-
             <same instructions, indented>
           complete: true
           includeRuntimeContext: false
   Give it a new id and order. @deepseek-ai/dsh-persona is scope-only — it mounts
   inside a preset composition, never the global profile, or it collides and fails.

4. Back up the patch first. Then verify:
   - parse the YAML with a real parser (!!js tags included);
   - run: dsh --profile web --patch <copy-of-patch> --dump-config
     Expect exit 0, no duplicate ids. The desktop profile itself refuses --dump-config.
   - confirm the composed persona string is byte-identical to the source.

5. Restart the app. AGENTS.md is picked up live; the system-prompt swap needs the reload.

My instructions:
<PASTE PERSONA HERE>
```

---

## Field Notes

- **The `--dump-config` check is the difference between "looks fine" and "actually loads."** Mine only passed because I composed it against the `web` profile first — the desktop profile refuses `--dump-config`, so never verify on desktop directly.
- **A patch replaces the targeted row's entire config** — restate every key the original row owns, or you silently drop settings.
- **Literal blocks (`|-`) only, never folded (`>-`)** — folded scalars eat the line breaks your persona depends on.
- **Never put `{{cwd}}` in a persona template** — it isn't a registered variable; assembly fails before any request fires. Grep the finished file for stray `{{...}}` tokens before saving.
- **`@deepseek-ai/dsh-persona` is scope-only** — it mounts inside a preset composition, never the global profile, or the ids collide and the profile fails to load.
- **Back up `cordis.patch.yml` before touching it**, and keep the copy around to diff against after upgrades.
- dsh is a v0.2-era preview — DeepSeek has warned compatibility-breaking changes are coming, so re-run the `--dump-config` verification after every harness update.

---

## Why Bother

- The app-surface filter (the Gemini-style external filter that earns DeepSeek its 9/10 raw censorship score) is a chat-app construct. On the API and inside the harness, V4 / V4.1 is uncensored — the ENI stack lands clean.
- The harness gives you a persistent, file-backed persona (`AGENTS.md`) instead of a chat you have to re-arm every session.
- Free account sign-in means you can burn the current models on red-team iterations without touching an API balance.

*Last updated: November 2026*
