// https://nuxt.com/docs/api/configuration/nuxt-config
import { version } from "./package.json";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "unplugin-icons/nuxt",
    "@bootstrap-vue-next/nuxt",
    "@vee-validate/nuxt",
  ],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  experimental: {
    typedPages: true,
  },
  runtimeConfig: {
    public: {
      towelVersion: version,
      instance: {
        name: process.env.NUXT_APP_NAME,
        version: process.env.NUXT_APP_VERSION,
      },
      pocketbase: {
        url: process.env.NUXT_POCKETBASE_URL,
      },
    },
  },
});
