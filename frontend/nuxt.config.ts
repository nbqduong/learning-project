export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    apiInternalBaseUrl: process.env.NUXT_API_INTERNAL_BASE_URL || "http://backend:8080",
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
    },
  },
  app: {
    head: {
      title: "Udemy-like Marketplace",
    },
  },
});
