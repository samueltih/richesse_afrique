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
  wrongPrice: {
    type: Number
  },
  price: {
    type: Number,
    default: 0
  },
  wishlist: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number
  }
});

const rating = ref<number>(4);

const emit = defineEmits<{
  (e: 'wishlist', product: any): void,
  (e: 'add-to-cart', product: any): void,
  (e: 'compare', product: any): void,
  (e: 'quick-view', product: any): void
}>();

const { locale } = useI18n();
const { format } = useCurrency();

function handleAddToWishlist($event: Event) {
  $event.preventDefault();
  emit("wishlist", { name: props.name, category: props.category });
}

function handleAddToCart($event: Event) {
  $event.preventDefault();
  emit("add-to-cart", { name: props.name, category: props.category });
}

function handleShowQuickView($event: Event) {
  $event.preventDefault();
  emit("quick-view", { name: props.name, category: props.category });
}

function handleCompare($event: Event) {
  emit("compare", { name: props.name, category: props.category});
}
</script>

<template>
  <a id="ctn" :href="link" class="bg-black bg-opacity-5 rounded-md w-full relative flex flex-col items-stretch gap-2 hover:cursor-pointer hover:bg-yellow-200 transition-colors">
    <button @click="handleAddToWishlist($event)" class="absolute top-4 right-4 z-20">
      <Icon icon="ph:heart-straight" :height="32" />
      <Icon v-if="wishlist" class="absolute top-0 left-0 text-red-600 -z-10" icon="ph:heart-straight-fill" :height="32" />
    </button>

    <div v-if="discount" class="absolute top-4 left-4 flex">
      <div class="h-16 w-16 flex items-center justify-center font-bold rounded-full bg-yellow-500 text-lg">
        -{{ discount }}%
      </div>
    </div>
    
    <div class="relative flex flex-col items-center self-center">
      <img class="ra-thumbnail-image w-full lg:h-[23rem] max-w-sm -px-2" src="/argan_01.png" alt="Thumbnail" />
      <div id="actions" class="absolute bottom-2 flex gap-2 items-center transition-all">
        <button class="bg-white rounded-full p-2 shadow" @click="handleCompare($event)" title="Compare">
          <Icon icon="ic:outline-compare-arrows" :height="28" />
        </button>
        <button class="bg-white rounded-full p-2 shadow" @click="handleAddToCart($event)" title="Add to cart">
          <Icon icon="ph:shopping-cart-light" :height="28" />
        </button>
        <button class="bg-white rounded-full p-2 shadow">
          <Icon icon="ph:magnifying-glass-light" :height="28" @click="handleShowQuickView($event)" title="Quick view"/>
        </button>
      </div>
    </div>
    <span class="bg-green-500 self-center bg-opacity-30 text-xs p-1 rounded mx-2">{{ category }}</span>
    <div class="flex-1 flex flex-col items-center text-center px-4 uppercase">
      <div class="text-sm md:text-base">{{ name }}</div>
      <div class="flex gap-1 items-end">
        <star-rating v-model="rating" :showControl="false" :disableClick="true" style="margin: 0px; padding: 0px 0.5rem"
          starSize="12" starColor="#48ac29"  inactiveColor="#00000045" :numberOfStars="5" /><span class="text-sm">(37)</span>
      </div>
    </div>
    <div class="flex gap-2 items-center p-4">
      <div class="flex flex-col flex-1">
        <div class="flex gap-2 items-end">
          <span class="font-bold md:text-xl">{{ format(props.price, locale, 'USD') }}</span>
          <span v-if="props.wrongPrice" class="line-through text-sm md:text-base">{{ format(props.price, locale, 'USD') }}</span>
        </div>
        <div class="text-sm text-stone-500">150 MG</div>
      </div> 
      <div>
        <button class="flex gap-2 items-center">3 <Icon icon="ph:shapes-light" :height="28" @click="handleShowQuickView($event)" title="Variants" /></button>
      </div>
    </div>
  </a>
  
</template>

<style lang="scss" scoped>
#ctn:hover #actions {
  opacity: 1;
}

#ctn #actions {
  opacity: 0;
}


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