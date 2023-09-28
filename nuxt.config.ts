// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/devtools", "@bootstrap-vue-next/nuxt"],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
});
