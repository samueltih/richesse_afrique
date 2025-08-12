<template>
  <breadcrumbs>
    <breadcrumb-item>
      <NuxtLink to="/">Accueil</NuxtLink>
    </breadcrumb-item>
    <breadcrumb-item>Panier</breadcrumb-item>
  </breadcrumbs>
  <h1 class="text-3xl font-bold my-4">Cart</h1>
  <div class="flex-1 flex gap-4 items-stretch">
    <div class="flex-1">
      <table class="ra-table w-full">
        <thead>
          <tr>
            <th></th>
            <th class="text-left">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>
              <button
                @click="handleRemove(index)"
                class="rounded-full shadow-md h-12 w-12 flex items-center justify-center button bg-emerald-100"
              >
                <!-- <Icon icon="ph:x-light" :height="24" /> -->
              </button>
            </td>
            <td>
              <div class="flex gap-4 items-center">
                <img class="h-36 w-36" :src="product.thumbnail" />
                <div class="flex flex-col">
                  <h3>{{ product.name }}</h3>
                  <p>Color: {{ product.color }}</p>
                  <p>WEIGHT: {{ product.weight }}</p>
                </div>
              </div>
            </td>
            <td class="text-center">${{ product.price }}</td>
            <td class="text-center">
              <input
                class="text-center"
                type="number"
                :value="product.quantity"
                @change="
                  (event) => handleQuantityChange(index, event.target?.value)
                "
              />
            </td>
            <td>
              {{ format(product.quantity * product.price, locale, "USD") }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-80 m-4">
      <div class="sticky top-4">
        <FormKit type="form" @submit="handleSubmit">
          <div>
            <h1 class="font-semibold">Coupon</h1>
            <div class="flex gap-2">
              <span class="flex-1"
                ><input placeholder="Put in your coupon code"
              /></span>
              <button>Apply coupon</button>
            </div>
          </div>
          <div>
            <h1>Note</h1>
            <p>Add special instructions to your seller...</p>
            <textarea placeholder="Put in your coupoon code" />
          </div>
          <ul>
            <li class="flex">
              <span class="flex-1">Subtotal</span>
              <span class="flex-1">{{
                format(totalExclTax(), locale, "USD")
              }}</span>
            </li>
            <li class="flex text-green-500">
              <span class="flex-1">Discount</span>
              <span class="flex-1"
                >-{{ format(discount(totalExclTax()), locale, "USD") }} ({{
                  discountRate * 100
                }}%)</span
              >
            </li>
            <li class="flex">
              <span class="flex-1">VAT</span>
              <span class="flex-1"
                >{{ format(vat(totalExclTax()), locale, "USD") }} ({{
                  vatRate * 100
                }}%)</span
              >
            </li>
            <li class="flex">
              <span class="flex-1">Total</span>
              <span class="flex-1">{{
                format(totalInclTax(), locale, "USD")
              }}</span>
            </li>
          </ul>
          <p>Shipping and taxes calculated at checkout</p>
          <button>Checkout</button>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { Icon } from '@iconify/vue';

const vatRate = ref<number>(0.1925);
const discountRate = ref<number>(0.1);
// const products = ref<any[]>([{
//     thumbnail: "https://risingtheme.com/html/demo-becute/becute/assets/img/product/big-product/product1.webp",
//     name: "Creme solaire",
//     color: "Red",
//     weight: "500g",
//     price: 68,
//     quantity: 1
// }, {
//     thumbnail: "https://risingtheme.com/html/demo-becute/becute/assets/img/product/big-product/product1.webp",
//     name: "Creme solaire",
//     color: "Red",
//     weight: "500g",
//     price: 68,
//     quantity: 2
// }]);

const { products, removeFromCart } = useCart();
// const { locale } = useI18n();
const locale = "en";

const { format } = useCurrency();

function handleRemove(index: number): void {
    removeFromCart(index);
}

function handleQuantityChange(index: number, value: number): void {
    if (value > 0) products[index].quantity = value;
}

function totalExclTax() {
    return products.reduce(
        (previous, current, currentIndex, array) => previous + (current.price * current.quantity), 0);
}

function vat(price: number): number {
    return price * vatRate.value;
}

function discount(price: number): number {
    return price * discountRate.value;
}

function totalInclTax(): number {
    const price = totalExclTax();
    return price - discount(price) + vat(price);
}

function handleSubmit(data: any) {
    console.log("Data: ", data);
}

useHead({
  //   title: [site.name, site.slogan].join(' - '),
  title: "Panier | Richesse d'Afrique",
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
