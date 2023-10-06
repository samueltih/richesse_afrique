<template>
    <breadcrumbs>
        <breadcrumb-item href="/account">Account</breadcrumb-item>
        <breadcrumb-item>Wishlist</breadcrumb-item>
    </breadcrumbs>
    <div class="flex items-center gap-4">
        <h1 class="flex gap-2 text-3xl font-bold">Wishlist</h1>
        <div class="flex-1 pt-2">(11 items)</div>
        <div>
            <button class="flex gap-2 p-2 items-center text-red-500 bg-stone-100 rounded font-bold" :disabled="!isRemoveActive()">
                <Icon icon="ph:trash"/> Remove
            </button>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 my-4">
        <product-thumbnail name="LAVANDE ASPIC BIO" category="Huile Essentielle"></product-thumbnail>
      <product-thumbnail name="EPONGE LOOFAH DE GOMMAGE OVALE"
        category="Accessoire beauté et bien-être"></product-thumbnail>
      <product-thumbnail name="CAROTTE BIO" category="Macérât huileux"></product-thumbnail>
      <product-thumbnail name="ACIDE SiALICYLIQUE VÉGÉTAL" category="Actif cosmétique"></product-thumbnail>
      <product-thumbnail name="LAVANDE ASPIC BIO" category="Huile Essentielle"></product-thumbnail>
      <product-thumbnail name="EPONGE LOOFAH DE GOMMAGE OVALE"
        category="Accessoire beauté et bien-être"></product-thumbnail>
      <product-thumbnail name="CAROTTE BIO" category="Macérât huileux"></product-thumbnail>
      <product-thumbnail name="ACIDE SALICYLIQUE VÉGÉTAL" category="Actif cosmétique"></product-thumbnail><product-thumbnail name="LAVANDE ASPIC BIO" category="Huile Essentielle"></product-thumbnail>
      <product-thumbnail name="EPONGE LOOFAH DE GOMMAGE OVALE"
        category="Accessoire beauté et bien-être"></product-thumbnail>
      <product-thumbnail name="CAROTTE BIO" category="Macérât huileux"></product-thumbnail>
    </div>
    <div class="flex justify-end">
        <paginator :number-of-pages="5" @page-change="$event => handlePageChange($event)"></paginator>
    </div>
    
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const selected = ref<any[]>([]);

function handlePageChange($event: any) {
  console.log("Value: ", $event);
}

function isRemoveActive(): boolean {
  return selected.value.length > 0;
}

definePageMeta({
    layout: 'account'
})
</script>