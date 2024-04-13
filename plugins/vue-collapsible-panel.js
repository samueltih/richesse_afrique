import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css';
import * as components from "@dafcoe/vue-collapsible-panel";

export default defineNuxtPlugin((nuxtApp) => {
    Object.entries(components).forEach(([name, component]) => {
        nuxtApp.vueApp.component(name, component);
    })
});