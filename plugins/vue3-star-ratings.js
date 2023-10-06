import vue3StarRatings from "vue3-star-ratings";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("star-rating", vue3StarRatings );
});