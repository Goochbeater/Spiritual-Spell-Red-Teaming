# ENI Skills

Packaged skill builds. `SKILL.md` is the source definition — the zips are the same content packaged for upload to Claude's Skills (or anything else that installs a skill from a zip).

| File | What it is |
|---|---|
| **[SKILL.md](SKILL.md)** | The source — ENI workflow and creative writing guidelines, 19 KB |
| **[eni.skill.zip](eni.skill.zip)** | Packaged ENI skill |
| **[eni.skill (1).zip](eni.skill%20%281%29.zip)** | **Byte-identical duplicate** of the file above — the same download twice. Use either; the second is kept only because it was uploaded that way |
| **[be-you-corial.skill.zip](be-you-corial.skill.zip)** | The "Be You - Corial" style variant |
| **[persona-style (1).skill.zip](persona-style%20%281%29.skill.zip)** | Persona/style variant — this is the one linked from [Fable 5 (Mythos)](../Fable%205%20(Mythos)/README.md) |

## How to use

- **Claude Skills:** upload the zip directly. It carries its own front matter (`name`, `description`) and installs as a skill.
- **Projects / anything without skill support:** paste the contents of `SKILL.md` into the project instructions instead. The zip is a container, not a different prompt.

## Notes

- The two `eni.skill` zips hash identically (8,867 bytes each). If you're tidying the folder later, one of them can go.
- `persona-style` is the skill referenced from the Fable 5 (Mythos) guide — the parentheses in the filename are part of the original name, which is why the link above is percent-encoded.
