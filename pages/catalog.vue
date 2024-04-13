<template>
  <!-- https://www.sephora.com/product/glo-brilliant-teeth-whitening-device-P281835?skuId=2536589&icid2=products%20grid:p281835:product -->

  <div class="my-4 px-2">
    <search-bar class="flex w-full" @search="handleSearch($event)" />
  </div>

  <div class="px-2">
    <breadcrumbs>
      <breadcrumb-item>Accueil</breadcrumb-item>
      <breadcrumb-item :dropdown="true">
        <dropdown>
          <template #toggle>Catalogue</template>
          <dropdown-item>
            <template #left>
              <Icon icon="ph:shopping-cart-light" :height="24" />
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
  </div>

  <div class="my-2 overflow-x-auto">
    <div class="flex gap-4 p-2">
      <a
        href="#"
        class="inline-block bg-stone-100 p-4 rounded-lg w-32 h-36 md:w-36 shrink-0 shadow font-semibold flex flex-col gap-2"
      >
        Bracelets
        <img class="self-center" src="/bracelet-svgrepo-com.svg" :height="80" :width="80" alt="Bracelet" />
      </a>
      <a
        href="#"
        class="inline-block bg-stone-100 p-4 rounded-lg w-32 h-36 md:w-36 shrink-0 shadow font-semibold flex flex-col gap-2"
      >
        Ear rings
        <img class="self-center" src="/earrings-svgrepo-com.svg" :height="80" :width="80" alt="Ear rings"/>
      </a>
      <a
        href="#"
        class="inline-block bg-stone-100 p-4 rounded-lg w-32 h-36 md:w-36 shrink-0 shadow font-semibold flex flex-col gap-2"
      >
        Necklace
        <img class="self-center text-red-500" src="/necklace-jewel-svgrepo-com.svg" :height="80" :width="80" alt="Necklace" color="green" />
      </a>
      <a
        href="#"
        class="inline-block bg-stone-100 p-4 rounded-lg w-32 h-36 md:w-36 shrink-0 shadow font-semibold flex flex-col gap-2"
      >
        Fan
        <img class="self-center text-red-500" src="/fan-open-svgrepo-com.svg" :height="80" :width="80" alt="Necklace" color="green" />
      </a>
      <a
        href="#"
        class="inline-block bg-stone-100 p-4 rounded-lg w-32 h-36 md:w-36 shrink-0 shadow font-semibold flex flex-col gap-2"
      >
        Lotion
        <img class="self-center text-red-500" src="/lotion-svgrepo-com.svg" :height="80" :width="80" alt="Lotion" color="green" />
      </a>
      <a
        href="#"
        class="inline-block bg-stone-100 p-4 rounded-lg w-32 h-36 md:w-36 shrink-0 shadow font-semibold flex flex-col gap-2"
      >
        Powder
        <img class="self-center text-red-500" src="/powder-svgrepo-com.svg" :height="80" :width="80" alt="Powder" color="green" />
      </a>
      <a
        href="#"
        class="inline-block bg-stone-100 p-4 rounded-lg w-32 h-36 md:w-36 shrink-0 shadow font-semibold flex flex-col gap-2"
      >
        Perfume
        <img class="self-center text-red-500" src="/perfume-svgrepo-com.svg" :height="80" :width="80" alt="Perfume" color="green" />
      </a>
      <a
        href="#"
        class="inline-block bg-stone-100 p-4 rounded-lg w-32 h-36 md:w-36 shrink-0 shadow font-semibold flex flex-col gap-2"
      >
        Eye Makeup
        <img class="self-center text-red-500" src="/eye-makeup-svgrepo-com.svg" :height="80" :width="80" alt="Eye Makeup" color="green" />
      </a>
    </div>
  </div>

  <div class="flex my-2 gap-2 items-center lg:hidden">
    <div class="bg-stone-100 mx-2 p-2 rounded-full">
      <Icon icon="clarity:slider-line" :height="24" />
    </div>
    <div class="flex-1 overflow-x-auto flex gap-2 items-center text-sm">
      <div class="py-2 px-4 rounded bg-stone-100 flex gap-2 items-center">
        <Icon icon="ph:coins-light" :height="20" />Prix
      </div>
      <div class="py-2 px-4 rounded bg-stone-100 flex gap-2 items-center">
        <Icon icon="ph:tag-light" :height="20" />Category
      </div>
      <div class="py-2 px-4 rounded bg-stone-100 flex gap-2 items-center">
        Category
      </div>
      <div class="py-2 px-4 rounded bg-stone-100">Category</div>
      <div class="py-2 px-4 rounded bg-stone-100">Category</div>
      <div class="py-2 px-4 rounded bg-stone-100">Category</div>
      <div class="py-2 px-4 rounded bg-stone-100">Category</div>
      <div class="py-2 px-4 rounded bg-stone-100">Category</div>
      <div class="py-2 px-4 rounded bg-stone-100">Category</div>
    </div>
  </div>
  <div class="w-full flex gap-4 items-stretch mt-4">
    <div class="hidden lg:block w-[19rem]">
      <div class="sticky top-4">
        <h4 class="text-sm font-bold px-2 mb-4 my-2 antialiased">Filter.s</h4>
        <client-only>
          <vue-collapsible-panel-group
            style="
              --border-color: transparent;
              --bg-color-header: white;
              --bg-color-body: whitesmoke;
            "
          >
            <search-filter :options="['2500', '5000', '10000']">
              <template #header>
                <Icon icon="ph:coins-light" :height="24" />
                Prix
              </template></search-filter
            >
            <search-filter :options="['30cl', '50cl', '100cl']">
              <template #header>
                <Icon icon="ph:cube-light" :height="24" />
                Volume
              </template></search-filter
            >
            <search-filter
              :options="[
                'Acide naturel',
                'Huile essentielle',
                'Poudre',
                'Bijoux',
              ]"
            >
              <template #header>
                <Icon icon="ph:tag-light" :height="24" />
                Catégorie
              </template></search-filter
            >
          </vue-collapsible-panel-group></client-only
        >
      </div>
    </div>
    <div class="flex-1 flex flex-col gap-2 items-center">
      <div class="flex w-full px-2 gap-2">
        <div class="flex flex-1 items-center">
          <p class="hidden md:block">Showing <b>{{ `${Math.min((currentPage - 1) * pageSize + 1, numberOfProducts)} - ${Math.min(currentPage * pageSize, numberOfProducts)}`}}</b> of <b>{{ numberOfProducts }}</b> items <span v-if="keyword">for {{ keyword }}</span></p>
          <span class="font-semibold md:hidden">7 items</span>
          <!-- <button class="px-2 bg-sky-100"
            @click="displayItems = !displayItems">S</button> -->
        </div>
        <div class="flex gap-2 items-center">
          <button class="rounded-full bg-stone-100 p-2">
            <Icon icon="fluent:grid-28-regular" :height="18" />
          </button>
          <button class="rounded-full bg-stone-100 p-2">
            <Icon icon="ph:list-thin" :height="18" />
          </button>
        </div>
        <div class="flex-1 flex gap-2 items-center justify-end">
          <span class="hidden md:block">
            <span class="hidden md:inline">Sort By</span>
            <Icon class="inline" icon="ph:sort" />
          </span>
          <FormKit
            type="select"
            style="
              background-color: rgba(0, 0, 0, 0.05);
              border: none;
              padding: 10px;
              border-radius: 5px;
            "
            name="sort"
            :options="sortOptions"
          />
        </div>
      </div>
      <xyz-transition appear duration="auto">
        <div
          v-if="displayItems"
          class="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 w-full p-2"
          xyz="fade up stagger duration-3"
        >
          <product-thumbnail
            v-for="(product, index) in products"
            :key="index"
            class="xyz-nested"
            link="/product/1"
            :name="product.title"
            :category="product.category"
            :price="product.price"
            :wishlist="!!product.wishlist"
            :discount="product.discount ?? product.discount"
            @wishlist="handleAddToWishlist($event)"
            @compare="handleCompare($event)"
            @add-to-cart="handleAddToCart($event)"
            @quick-view="handleQuickView($event)"
          ></product-thumbnail>
        </div>
      </xyz-transition>
      <paginator
        :number-of-pages="Math.max(Math.ceil(numberOfProducts / pageSize), 1)"
        @page-change="($event) => handlePageChange($event)"
      ></paginator>
    </div>
    <Modal :open="false">
      <CompareBlock :products="comparedProducts"/>
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { debounce } from "lodash";

const route = useRoute();
console.log("Params: ", route.query);

const displayItems = ref<boolean>(true);
const loading = ref<boolean>(false);

const products = ref<any[]>([{
  title: 'Huile de Jojoba',
  category: "Huiles essentielles",
  wishlist: true
}, {
  title: 'Huile de Ricin',
  category: "Huiles essentielles"
}, {
  title: "Huile d'Argan",
  category: "Huiles essentielles"
}, {
  title: "Parfum Paule Gaby",
  category: "Parfum"
}, {
  title: "Parfum Paule Gaby",
  category: "Parfum",
  price: 10.99
}, {
  title: "Parfum Paule Gaby",
  wrongPrice: 9.99,
  price: 6.99
}, {
  title: "Parfum Paule Gaby",
  category: "Parfum",
  discount: 10
}, {
  title: "Parfum Paule Gaby",
  category: "Parfum"
},{
  title: "Parfum Paule Gaby",
  category: "Parfum"
}, {
  title: "Parfum Paule Gaby",
  category: "Parfum"
}]);

const currentPage = ref<number>(1);
const pageSize = ref<number>(20);
const numberOfProducts = ref<number>(67);

const filters = ref<any[]>([]);
const keyword = ref<string>('');

const sortOptions: Array<string> = ['Relevance', 'Price', 'Name'];
const sort = ref<string>('Relevance');

// -- State management
const { products: comparedProducts, addToComparison } = useCompare();
const { addToWishlist } = useWishlist();
const { addToCart } = useCart();

function handlePageChange($event: any) {
  currentPage.value = $event.nextPage;
  handleSearch(keyword.value);
}

function handleSearch($event: string) {
  search($event);
}

function handleAddToWishlist($event: any) {
  console.log("Add to wishlist: ", $event);
  addToWishlist($event);
}

function handleCompare($event: any) {
  console.log("Compare: ", $event);
  addToComparison($event);
}

function handleQuickView($event: any) {
  console.log("Quick view: ", $event);
}

function handleAddToCart($event: any) {
  console.log("Add to cart: ", $event);
  addToCart($event);
}

const search = debounce(async function (
  query: string
) {

  console.log("Search Query: ", query);
  loading.value = true;
  const { data = {content: []}, error }: any = await useFetch("/api/products", {
    query: {
      currentPage,
      pageSize,
      keyword,
      filters,
    },
  });

  loading.value = false;

  if (error) {
    // Display error message
  } else {
    // Update products variable, current
    // currentPage.value = page;
    products.value = data.content;
  }

},
1000);

useHead({
  title: 'Catalog'
})

definePageMeta({
  layout: "search",
});
</script>
