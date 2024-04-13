export const useSettings = defineStore("settings", {
  state: () => ({
      site: {
        name: 'Richesse d\'afrique',
        title: '',
        slogan: 'Essayez le naturel et le naturel vous sourira',
        metaDescription: '',
        metaKeywords: '',
        logo: "/logo.png",
        emailLogo: "",
        favicon: "",
      },
      app: [
        {
          platform: 'android',
          link: ''
        },
        {
          platform: 'ios',
          link: ''
        },
      ],
      address: [
        {
          zipCode: '',
          streetName: '',
          city: '',
          country: ''
        }
      ],
      social: [
        {
          platform: "instagram",
          link: "https://instagram.com/jaellelagazelle"
        },
        {
          platform: "facebook",
          link: "https://facebook.com/richesseafrique"
        },
        {
          platform: "x",
          link: "https://twitter.com/richesseafrique"
        },
        {
          platform: "tiktok",
          link: "https://tiktok.com/richesseafrique"
        }
      ],
      mapProvider: 'google' // Can be leaflet
  }),
  actions: {
    set(settings: any) {
      this.site = { ...this.site, ...settings.site };
      this.social = { ...this.social, ...settings.social }
      this.app = {...this.app, ...settings.app}
    },
  },
});
