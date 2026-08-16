import { fileURLToPath } from "node:url";

import { runRendererRuntimeTest } from "./renderer-runtime.test.mjs";

await runRendererRuntimeTest(fileURLToPath(new URL("../assets", import.meta.url)));
