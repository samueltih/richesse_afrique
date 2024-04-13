import * as components from 'vue3-google-map';

export default defineNuxtPlugin((nuxtApp) => {
    Object.entries(components).forEach(([name, component]) => {
        nuxtApp.vueApp.component(name, component)
    })
});