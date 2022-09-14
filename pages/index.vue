<template>
  <div>
    <navigation-bar />
    <img style="width: 100%" src="/public/cover.jpg" />
    <h2 style="text-align: center">Category</h2>
    <div style="display: flex; justify-content: center">
      <div
        style="
          display: grid;
          grid-template-columns: repeat(3, 300px);
          column-gap: 10px;
          row-gap: 10px;
        "
      >
        <product-thumbnail name="LAVANDE ASPIC BIO" category="Huile Essentielle"></product-thumbnail>
        <product-thumbnail name="EPONGE LOOFAH DE GOMMAGE OVALE" category="Accessoire beauté et bien-être"></product-thumbnail>
        <product-thumbnail name="CAROTTE BIO" category="Macérât huileux"></product-thumbnail>
        <product-thumbnail name="ACIDE SALICYLIQUE VÉGÉTAL" category="Actif cosmétique"></product-thumbnail>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<style>
</style>
