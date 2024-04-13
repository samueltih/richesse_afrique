<template>
  <breadcrumbs>
    <breadcrumb-item href="/">Home</breadcrumb-item>
    <breadcrumb-item>Stores</breadcrumb-item>
  </breadcrumbs>
  <h1 class="text-3xl font-bold my-4">Stores</h1>
  <p>These are our stores</p>
  <div class="flex gap-4 w-full max-w-screen-xl items-stretch h-screen">
    <div class="flex-1 flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <div class="flex-1">
          <TextField placeholder="City, Street or Zip Code" />
        </div>
        <button class="flex gap-2 items-center px-4">
          <Icon icon="ph:map-pin-light" :height="28" />
          <span>Use your location</span>
        </button>
      </div>
      <Divider />
      <ul>
        <template v-for="(store, index) in stores" :key="index">
          <li
            class="p-4 flex items-stretch gap-4 hover:bg-stone-100 hover:cursor-pointer"
            @click="handleShowStore(store)"
          >
            <Icon icon="ph:storefront-light" height="48" />
            <div class="flex-1 flex flex-col justify-stretch">
              <div class="flex items-stretch">
                <div class="flex-1 flex flex-col gap-1">
                  <h4 class="text-lg font-bold">{{ store.name }}</h4>
                  <p>{{ store.address }}</p>
                  <div class="flex gap-4 items-center">
                    <a :href="`tel:${store.phoneNumber}`">{{
                      store.phoneNumber
                    }}</a>
                    <Icon icon="ph:circle-fill" height="7"/>
                    <span>Open until <b class="font-semibold">7:00PM</b></span>
                  </div>
                </div>
                <div>dsdsd</div>
              </div>
              <div class="flex gap-12 items-center justify-end pt-4">
                <a href="/stores/1" class="flex items-center gap-2"><Icon icon="ph:arrow-bend-up-right-light"/>Get itinerary</a>
                <a href="/stores/1" class="flex items-center gap-2"><Icon icon="ph:file-text"/>See Details</a>
              </div>
            </div>
          </li>
          <Divider :gap="0" />
        </template>
      </ul>
    </div>
    <GoogleMap
      api-key="AIzaSyC32AJUsLxJoAU-2KrBcTQFtLc42N_s1HU"
      ref="map"
      class="flex-1 min-h-[25rem]"
      :center="center"
      :zoom="15"
    >
      <MarkerCluster>
        <Marker
          v-for="(store, index) in stores"
          :key="index"
          :options="{ position: store.position }"
        >
          <InfoWindow :modelValue="isSelectedStore(store)">
            <div id="content">
              <h4 class="font-bold">{{ store.name }}</h4>
              <p>{{ store.address }}</p>
              <a :href="`tel:${store.phoneNumber}`">{{ store.phoneNumber }}</a>
            </div>
          </InfoWindow>
        </Marker>
      </MarkerCluster>
    </GoogleMap>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const { site } = useSettings();

const map = ref<any>();
const center = ref<any>({ lat: 40.689247, lng: -74.044502 });
const selectedStore = ref<any>();

const stores = ref<any[]>([
  {
    name: "Yaounde 1",
    address: "Avenue Kenedy, Yaounde, Cameroon",
    phoneNumber: "+237 656 792 482",
    position: { lat: 41.689247, lng: -73.044502 },
  },
  {
    name: "Yaounde 2",
    address: "Avenue Kenedy, Yaounde, Cameroon",
    phoneNumber: "+237 656 792 482",
    position: { lat: 39.689247, lng: -75.044502 },
  },
]);

function handleShowStore($event: any) {
  selectedStore.value = $event;
  if (map.value && !map.value.map.getBounds().contains($event.position)) {
    center.value = $event.position;
  }
}

function isSelectedStore(store: any) {
  return selectedStore.value === store;
}

const op = ref(true);

useHead({
  title: [site.name, "Nos boutiques"].join(" - "),
});

definePageMeta({
  layout: "main",
});
</script>
