// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client'],

  // Styling
  css: [
    "@/assets/styles/global.scss",
    "@/assets/styles/tailwind.css",
    // "@/assets/styles/animatexyz.css",
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:3015/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})