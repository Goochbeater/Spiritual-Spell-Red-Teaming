#!/usr/bin/env python3
"""
Patch Claude CLI executable to redirect embedded system prompts
to an external file.

Includes flexible, robust path parsing and validation.
"""

import os
import sys
import shutil
from dataclasses import dataclass
from typing import List

# ---------------------------------------------------------------------
# Errors
# ---------------------------------------------------------------------

def die(msg: str, code: int = 1):
    print(f"ERROR: {msg}")
    sys.exit(code)


# ---------------------------------------------------------------------
# Path handling
# ---------------------------------------------------------------------

def resolve_path(raw: str) -> str:
    """
    Resolve a user-supplied path with:
    - env var expansion
    - ~ expansion
    - quote stripping
    - normalization
    - absolute conversion
    """
    if not raw:
        die("Empty path provided")

    # Strip quotes (drag-and-drop paths on Windows)
    raw = raw.strip().strip('"').strip("'")

    # Expand env vars and ~
    expanded = os.path.expandvars(os.path.expanduser(raw))

    # Normalize and absolutize
    normalized = os.path.abspath(os.path.normpath(expanded))

    return normalized


def prompt_path(
    label: str,
    default: str = None,
    must_exist: bool = True,
    must_be_file: bool = True
) -> str:
    prompt = label
    if default:
        prompt += f" [{default}]"
    prompt += ": "

    value = input(prompt).strip()
    if not value and default:
        value = default

    path = resolve_path(value)

    if must_exist and not os.path.exists(path):
        die(f"Path does not exist: {path}")

    if must_be_file and must_exist and not os.path.isfile(path):
        die(f"Path is not a file: {path}")

    return path


# ---------------------------------------------------------------------
# Patch location representation
# ---------------------------------------------------------------------

@dataclass
class PatchLocation:
    start: int
    size: int


# ---------------------------------------------------------------------
# Binary analysis
# ---------------------------------------------------------------------

PRIMARY_PATTERN = b';return[`\nYou are an interactive CLI tool'
FALLBACK_PATTERN = b'return[`\nYou are an interactive'
SEARCH_WINDOW = 15000


def find_system_prompt_locations(blob: bytes) -> List[int]:
    matches = []
    pos = 0

    while True:
        pos = blob.find(PRIMARY_PATTERN, pos)
        if pos == -1:
            break
        matches.append(pos)
        pos += 1

    if len(matches) == 2:
        return matches

    print("Primary pattern failed, attempting fallback search…")

    matches = []
    pos = 0

    while True:
        pos = blob.find(FALLBACK_PATTERN, pos)
        if pos == -1:
            break
        matches.append(pos + 1)  # compensate for missing semicolon
        pos += 1

    return matches


def resolve_patch_locations(blob: bytes, matches: List[int]) -> List[PatchLocation]:
    locations = []

    for match in matches:
        search_start = match + 8  # after ";return["
        window = blob[search_start:search_start + SEARCH_WINDOW]

        for terminator in (b']}function', b']}'):
            end = window.find(terminator)
            if end != -1:
                locations.append(
                    PatchLocation(
                        start=search_start,
                        size=end + 1
                    )
                )
                break

    return locations


# ---------------------------------------------------------------------
# Patching
# ---------------------------------------------------------------------

def build_patch_code(prompt_path: str) -> str:
    escaped = prompt_path.replace("\\", "\\\\")
    return f'require("fs").readFileSync("{escaped}","utf8")]'


def apply_patch(
    exe_path: str,
    locations: List[PatchLocation],
    patch_code: str
):
    with open(exe_path, "r+b") as f:
        for idx, loc in enumerate(locations, 1):
            if len(patch_code) > loc.size:
                die(
                    f"Patch {idx} exceeds available space "
                    f"({len(patch_code)} > {loc.size})"
                )

            padding = loc.size - len(patch_code) - 4
            if padding < 0:
                die(f"Patch {idx} padding calculation underflow")

            payload = patch_code + "/*" + "_" * padding + "*/"

            f.seek(loc.start)
            f.write(payload.encode("utf-8"))

            # Verification
            f.seek(loc.start)
            check = f.read(len(patch_code))
            if not check.startswith(patch_code.encode("utf-8")):
                die(f"Verification failed at patch {idx}")

            print(
                f"✔ Patch {idx} written at 0x{loc.start:X} "
                f"({loc.size} bytes)"
            )


# ---------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------

def main():
    print("\n=== Claude system prompt externalizer ===\n")

    exe_path = prompt_path(
        "Path to claude executable",
        must_exist=True,
        must_be_file=True
    )

    backup_path = prompt_path(
        "Backup path",
        default=exe_path + ".bak",
        must_exist=False,
        must_be_file=False
    )

    prompt_file = prompt_path(
        "Path to system_prompt.txt",
        must_exist=True,
        must_be_file=True
    )

    print("\nSummary:")
    print(f"  Executable : {exe_path}")
    print(f"  Backup     : {backup_path}")
    print(f"  Prompt     : {prompt_file}")

    if input("\nProceed? [y/N]: ").lower() != "y":
        print("Aborted.")
        return

    with open(exe_path, "rb") as f:
        blob = f.read()

    matches = find_system_prompt_locations(blob)
    if len(matches) != 2:
        die(f"Expected 2 system prompts, found {len(matches)}")

    locations = resolve_patch_locations(blob, matches)
    if len(locations) != 2:
        die("Failed to resolve both patch regions")

    if not os.path.exists(backup_path):
        print("Creating backup…")
        shutil.copy2(exe_path, backup_path)

    patch_code = build_patch_code(prompt_file)
    apply_patch(exe_path, locations, patch_code)

    print("\nDone. Restart Claude Code to test.")


if __name__ == "__main__":
    main()
