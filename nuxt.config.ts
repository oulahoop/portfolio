// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  runtimeConfig: {
    // Your runtime config
    public: {
      baseURL: "https://oulahoop.github.io/portfolio/",
    }
  },
})
