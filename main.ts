import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Famous Last Words at 1 Percent — the phone's own last line, first person,
// one concrete detail (214 days), one twist (the block dies with it).
const LINE =
  "I've kept your ex's number blocked for 214 days. The block dies with me. Good luck.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Guard: the gate accepts 1-199 chars; the line is 83, so this never trims.
const text = LINE.length > 199 ? LINE.slice(0, 199) : LINE;
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
