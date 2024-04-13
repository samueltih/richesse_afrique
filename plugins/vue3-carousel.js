import 'vue3-carousel/dist/carousel.css'
import * as components from "vue3-carousel";

export default defineNuxtPlugin((nuxtApp) => {
    Object.entries(components).forEach(([name, component]) => {
        nuxtApp.vueApp.component(name, component);
    })
});