<template>
  <breadcrumbs>
    <breadcrumb-item>
      <NuxtLink to="/">Accueil</NuxtLink>
    </breadcrumb-item>
    <breadcrumb-item :dropdown="true">
      <dropdown>
        <template #toggle>Catalogue</template>
        <dropdown-item>
          <template #left>
            o
            <!-- <Icon icon="ph:shopping-cart-light" :height="24" /> -->
          </template>
          Item 1
        </dropdown-item>
        <dropdown-item
          >Item 2
          <template #submenu>
            <dropdown-item>Item 4</dropdown-item>
            <dropdown-item>Item 5</dropdown-item>
          </template></dropdown-item
        >
        <dropdown-item>Item 3</dropdown-item>
      </dropdown>
    </breadcrumb-item>
  </breadcrumbs>

  <div class="w-full flex gap-8">
    <aside class="w-48">
      <h4>Filters</h4>
    </aside>
    <main class="flex-1 flex flex-col items-stretch gap-4">
      <div class="flex items-center justify-between p-4">
        <span class="text-sm font-bold"
          >{{ data?.searchProducts?.length ?? 0 }} items found</span
        >
        <span>Sort</span>
      </div>
      <div v-if="data?.searchProducts" class="grid grid-cols-4 gap-4">
        <NuxtLink to="" v-for="product in data.searchProducts">
          <div
            class="flex flex-col items-center gap-2 hover:cursor-pointer hover:bg-yellow-300 transition-colors"
          >
            <picture>
              <img
                src="/necklace.jpg"
                :alt="product!.description ?? ''"
                class="h-32 w-32 rounded"
              />
            </picture>
            <span>{{ product!.name }}</span>
            <span>{{ product!.price }}</span>
            <button @click="addToCart(product)">Add to cart</button>
          </div>
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0.d.ts" />
import type { Product, SearchFilter } from '@richesse-afrique/domain';

const filters = ref<SearchFilter[]>([])
const products = ref<Product[]>();

const { addToCart } = useCart();

const { data, error } = await useAsyncGql({
  operation: "searchProducts",
  variables: { query: "" },
  options: {
    server: false,
  },
  // variables: { query: "name:Bijoux" },
});

useHead({
  //   title: [site.name, site.slogan].join(' - '),
  title: "Catalogue | Richesse d'Afrique",
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
