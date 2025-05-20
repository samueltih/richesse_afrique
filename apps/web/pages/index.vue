<template>
  <h1 class="text-5xl font-semibold">Home Page</h1>
</template>

<script setup lang="ts">

if (window != undefined) {
const { data, error } = await useAsyncGql<any, any, any, any>({
  operation: "products",
  // variables: { limit: 5 },
});

console.log("Result: ", error, data);
}

useHead({
  //   title: [site.name, site.slogan].join(' - '),
  title: "Richesse d'Afrique | Essayez le naturel et le naturel vous sourira",
  meta: [
    {
      name: "description",
      content: "Votre site de vente en ligne pour vos produits naturels",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "/favicon/favicon.ico",
    },
  ],
});
</script>
