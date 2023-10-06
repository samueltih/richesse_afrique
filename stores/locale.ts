export const useLanguage = defineStore("locale", {
    state: () => ({
      locale: 'fr'
    }),
    actions: {
      change(locale: string) {
        console.log("Adding to cart...");
        this.locale = locale
      },
    },
    persist: true,
  });