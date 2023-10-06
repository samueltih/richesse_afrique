// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },

  imports: {
    dirs: ["stores"],
  },

  modules: [
    "@formkit/nuxt",
    "@vueuse/nuxt",
    /*"nuxt-graphql-client",*/
    /*"nuxt-graphql-server",*/
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
  ],

  css: [
    "@/assets/styles/global.scss",
    "@/assets/styles/tailwind.css",
    "@/assets/styles/animatexyz.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

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
}
