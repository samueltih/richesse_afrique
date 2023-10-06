<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  name: {
    type: [String]
  },
  category: {
    type: [String]
  },
  link: {
    type: [String]
  },
  favorite: {
    type: Boolean,
    default: false
  },
  cart: {
    type: Boolean,
    default: false
  }
});

const rating = ref<number>(4);
const favorited = ref<boolean>(props.favorite);
const cart = ref<boolean>(props.cart)

const emit = defineEmits<{
  (e: 'wishlist', product: any): void,
  (e: 'add-to-cart', product: any): void,

}>()

function handleAddToWishlist($event: Event) {
  $event.preventDefault();
  favorited.value = !favorited.value;
  emit("wishlist", { name: props.name, category: props.category });
}

function handleAddToCart($event: Event) {
  $event.preventDefault();
  cart.value = !cart.value;
  emit("add-to-cart", { name: props.name, category: props.category });
}

function handleShowQuickView($event: Event) {
  $event.preventDefault();
  emit("add-to-cart", { name: props.name, category: props.category });
}
</script>

<template>
  <!-- <div class="ra-thumbnail-border">
  <a :href="link" class="ra-thumbnail relative overflow-hidden">
    <div class="absolute top-2 left-1">
      <div class="flex items-center justify-center rounded-full inline-block bg-emerald-500 text-white h-12 w-12">-20%</div>
    </div>
    <img class="ra-thumbnail-image w-32" src="/argan_01.png" alt="Thumbnail" />
    <div class="flex flex-col gap-2">
      <h2>{{ name }}</h2>
      <h4 class="text-sm font-bold italic capitalize">{{ category }}</h4>
      <div class="text-sm flex-1">
        <p class="text-sm text-ellipsis overflow-hidden">Riche en flavonoïdes aux vertus antioxydantes et toniques circulatoires, le Ginkgo biloba est
          traditionnellement utilisé comme complément alimentaire pour ses bienfaits sur les fonctions cognitives, la
          mémoire et la concentration. Cette poudre s'incorpore dans vos boissons ou tisanes.</p>
      </div>
      <currency-converter class="ra-thumbnail-price" :amount="2500"></currency-converter>
    </div>
    <div class="absolute top-2 right-2 flex gap-2">
      <button class="button shadow-sm bg-emerald-200 p-2 rounded-xl" @click="handleAddToWishlist" title="Wishlist">
        <Icon class="transition-colors duration-200" :style="{color: favorited ? 'red' : 'black'}" :height="24" :icon="favorited ? 'ph:heart-straight-fill' : 'ph:heart-straight-light'" />
      </button>
      <button class="button shadow-sm bg-emerald-200 p-2 rounded-xl" @click="handleAddToCart" title="Add to cart">
        <Icon class="transition-colors duration-200" :style="{color: cart ? 'green' : 'black'}" :height="24" icon="ph:shopping-cart-light" />
      </button>
      <button class="button transition-colors duration-100 shadow-sm bg-emerald-200 p-2 rounded-xl" @click="handleShowQuickView" title="Quick view">
        <Icon :style="{color: 'black'}" :height="24" icon="ph:magnifying-glass-light" />
      </button>
    </div>

  </a>
</div> -->
  <div class="bg-black bg-opacity-5 rounded-md w-full flex flex-col items-center gap-2">
    <div class="relative flex flex-col items-center">
      <img class="ra-thumbnail-image w-full max-w-xs -px-2" src="/argan_01.png" alt="Thumbnail" />
      <div class="absolute bottom-2 flex gap-2 items-center">
        <button class="bg-white rounded-full p-2 shadow">
          <Icon icon="ic:outline-compare-arrows" :height="16" />
        </button>
        <button class="bg-white rounded-full p-2 shadow">
          <Icon icon="ph:heart-straight-fill" :height="16" />
        </button>
        <button class="bg-white rounded-full p-2 shadow">
          <Icon icon="ph:shopping-cart-light" :height="16" />
        </button>
        <button class="bg-white rounded-full p-2 shadow">
          <Icon icon="ph:magnifying-glass-light" :height="16" />
        </button>
      </div>
    </div>
    <span class="bg-green-500 bg-opacity-30 text-xs p-1 rounded mx-2">{{ category }}</span>
    <div class="flex-1 px-2">
      <div>{{ name }}</div>
      <div class="flex gap-1 items-end">
        <star-rating v-model="rating" :showControl="false" :disableClick="true" style="margin: 0px; padding: 0px 0.5rem"
          starSize="12" starColor="#48ac29" :numberOfStars="5" /><span class="text-sm">(37)</span>
      </div>
    </div>

    <div class="flex gap-2 items-end w-full p-2">
      <div class="flex flex-col flex-1">
        <span class="font-bold text-lg text-green-500">$13 000</span>
        <select class="bg-transparent text-sm rounded self-start">
          <option value="100">100 ml</option>
          <option value="150">150 ml</option>
        </select>
      </div>
      <button class="p-1 flex gap-2 rounded-md bg-green-500 bg-opacity-70 text-white items-end text-sm" title="options">
        <span>2</span> <Icon icon="ph:shapes-light" />
      </button>
    </div>

  </div>
  
</template>

<style lang="scss" scoped>
.ra-thumbnail-border {
  border-radius: 6px;

  &:hover {
    background: linear-gradient(#48ac29, #f3bb07);
  }
}

.ra-thumbnail {
  display: inline-flex;
  background-color: whitesmoke;
  height: 17rem;
  gap: 1rem;
  align-items: stretch;
  justify-content: flex-start;
  padding: 1rem;
  border-radius: 5px;
  transition: background-color ease-in 0.15s, border ease-in 0.15s;
  margin: 2px;

  &:hover {
    border: 1px solid whitesmoke;
    cursor: pointer;
    background-color: lightgoldenrodyellow;
  }

  .ra-thumbnail-image {
    display: flex;
    justify-content: center;
    height: 200px;
    width: 135px;
    margin-bottom: 10px;
  }

  .ra-thumbnail-desc {
    flex: 1;

    h4,
    p {
      margin-bottom: 5px;
      margin-top: 5px;
    }

    h4 {
      text-transform: uppercase;
    }

    p {
      font-style: italic;
      color: grey;
      font-size: 11pt;
    }
  }

  .ra-thumbnail-price {
    color: goldenrod;
    font-weight: bold;
    font-size: 16pt;
  }
}
</style>