import { addImports, addImportsDir, defineNuxtModule, logger } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "zod",
  },
  setup() {
    logger.success("🐨 Zod internal module loaded");

    addImports({
      name: "z",
      from: "zod",
    });

    logger.info("🐨 Put Zod schemas in 'schemas' folder");

    addImportsDir("schemas");
  },
});
