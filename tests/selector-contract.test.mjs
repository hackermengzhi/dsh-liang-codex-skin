import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contract = JSON.parse(await fs.readFile(path.join(root, "assets/selectors.json"), "utf8"));

assert.equal(contract.schema, "codex-dream-skin-selectors/1");
assert.ok(Array.isArray(contract.selectors) && contract.selectors.length > 0);

const keys = new Set();
for (const entry of contract.selectors) {
  assert.equal(typeof entry.key, "string");
  assert.equal(typeof entry.selector, "string");
  assert.ok(entry.selector.length > 0);
  assert.ok(!keys.has(entry.key), `duplicate selector key: ${entry.key}`);
  keys.add(entry.key);
}

const main = contract.selectors.find((entry) => entry.key === "shell-main");
assert.ok(main, "shell-main selector is required");
assert.match(main.selector, /data-app-shell-main-surface|_MainContentSurface_/);

for (const filename of ["dream-skin.css", "renderer-inject.js"]) {
  const source = await fs.readFile(path.join(root, "assets", filename), "utf8");
  assert.doesNotMatch(source, /__DREAM_SELECTOR_[A-Z0-9_]+__/);
}

console.log("PASS: standalone selector contract");
