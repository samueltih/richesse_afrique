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

  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },

  // Internationalisation
  i18n: {},

  /* runtimeConfig: {
    public: {
      GQL_HOST: "./server/graphql/schema.graphql",
    },
  }, */
  plugins: [
    "~/plugins/animxyz.js",
    "~/plugins/google-maps.js",
    "~/plugins/leaflet.js",
    "~/plugins/vue3-carousel.js",
    "~/plugins/vue3-star-ratings.js",
    // "~/plugins/vue3-emoji-picker.js",
    "~/plugins/vue-magnifier.js",
    "~/plugins/vue-collapsible-panel.js",
  ],

  devtools: {
    enabled: true,
  },
};
