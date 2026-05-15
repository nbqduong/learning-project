export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    apiInternalBaseUrl: process.env.NUXT_API_INTERNAL_BASE_URL || "http://backend:8080",
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || "https://NUCLEAR-TEST-API.com",
    },
  },
  app: {
    head: {
      title: "Udemy-like Marketplace",
    },
  },
});
