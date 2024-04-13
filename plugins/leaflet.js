import * as components from "@vue-leaflet/vue-leaflet";

export default defineNuxtPlugin((nuxtApp) => {
    Object.entries(components).forEach(([name, component]) => {
        nuxtApp.vueApp.component(name, component);
    })
});