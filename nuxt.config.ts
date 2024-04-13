// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },

  //Suoabase
  supabase: {
    redirectOptions: {
      login: "/sign-in",
      callback: "/confirm",
      exclude: ["/", "/catalog", "/about-us", "/sign-up"],
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  imports: {
    dirs: ["stores"],
  },

  modules: [
    "@nuxtjs/supabase",
    "@formkit/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",

    /*"nuxt-graphql-client",*/
    /*"nuxt-graphql-server",*/
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
      GQL_HOST: "https://mockend.com/manoj-ap/mockbackend/graphql",
    },
  },

};
