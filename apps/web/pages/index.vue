<template>
  <h1 class="text-5xl font-semibold">Richesse Afrique</h1>
  <logo />
  <div class="flex">
    <Badge expanded content="5">
      <span class="px-4">-</span>
    </Badge>
  </div>

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
