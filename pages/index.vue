<template>
  <img class="w-full" src="/cover.jpg" alt="cover picture" />
  <h2 class="text-center text-4xl font-bold my-4">Popular Product.s</h2>
  <div class="flex justify-center">
    <div style="
          display: grid;
          grid-template-columns: repeat(3, 300px);
          column-gap: 10px;
          row-gap: 10px;
        ">
      <product-thumbnail name="LAVANDE ASPIC BIO" category="Huile Essentielle"></product-thumbnail>
      <product-thumbnail name="EPONGE LOOFAH DE GOMMAGE OVALE"
        category="Accessoire beauté et bien-être"></product-thumbnail>
      <product-thumbnail name="CAROTTE BIO" category="Macérât huileux"></product-thumbnail>
      <product-thumbnail name="ACIDE SALICYLIQUE VÉGÉTAL" category="Actif cosmétique"></product-thumbnail>
    </div>
  </div>
  <h1 class="text-center text-4xl font-bold my-4">Category</h1>
  <div class="grid grid-cols-5 gap-4">
    <div class="p-4 rounded">Jewelry</div>
    <div class="p-4 rounded">Powders</div>
    <div class="p-4 rounded">Oil</div>
    <div class="p-4 rounded">Oil</div>
    <div class="p-4 rounded">Oil</div>
  </div>
</template>

<script lang="ts" setup>

const { site } = useSettings();

definePageMeta({
  layout: 'main'
})

useHead({
  title: [site.name, site.slogan].join(' - '),
  meta: [
    { name: "description", content: "Votre site de vente en ligne pour vos produits naturels" }
  ],
  link: [{
    rel: 'stylesheet',
    href: '/favicon.ico'
  }]
})
</script>

<style>
.ra-main {
  background-color: whitesmoke;
}
</style>
