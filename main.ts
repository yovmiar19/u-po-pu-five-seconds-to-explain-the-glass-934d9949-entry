import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, a house cat excuses knocking a glass off the table.
const line =
  "I meant to nudge it gently into a safer spot, but physics is a cruel mistress and my paw has the impulse control of a caffeinated raccoon.";

// Gate validation: non-empty, exactly one sentence, at most 200 characters.
const sentenceEnders = (line.match(/[.!?]/g) ?? []).length;
if (line.length === 0 || line.length > 200 || sentenceEnders !== 1) {
  console.error(
    `gate check failed: length=${line.length}, sentence enders=${sentenceEnders}`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
