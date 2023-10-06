import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component(VueMagnifier);
});