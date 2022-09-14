import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt', 'nuxt-graphql-client'],
  css: ['@/assets/styles/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/global.scss"',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://mockend.com/manoj-ap/mockbackend/graphql'
    }
  }
});
