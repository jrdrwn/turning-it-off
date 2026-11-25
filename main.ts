// "Have You Tried Turning It Off?" — one funny line from a hopeless
// tech support agent to a desperate customer. Written to /output/entry.txt.
// Gate: UTF-8 text, 1-199 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const ESCALATION =
  "I've escalated your case to Tier 3. ";
const TWIST = "Tier 3 is me, but with a headset on. ";
const HOLD = "Please hold while I put the headset on.";

const LINE = ESCALATION + TWIST + HOLD;

// The gate reads exactly this file; no trailing newline, so the
// character count is the line itself and nothing else.
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
