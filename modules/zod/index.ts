import { addImports, defineNuxtModule, logger } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "zod",
  },
  setup() {
    logger.info("🐨 Zod internal module loaded");
    addImports({
      name: "z",
      from: "zod",
    });
  },
});
