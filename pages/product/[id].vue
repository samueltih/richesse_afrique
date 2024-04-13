<template>
  <div>
    <div class="flex my-2 gap-4 w-full items-center text-sm">
      <breadcrumbs>
        <breadcrumb-item href="/">Accueil</breadcrumb-item>
        <breadcrumb-item>
          <dropdown>
            <template #toggle>Huiles essentielles</template>
            <dropdown-item>Bijoux</dropdown-item>
            <dropdown-item>Poudre</dropdown-item>
          </dropdown>
        </breadcrumb-item>
      </breadcrumbs>
    </div>
    <div style="display: flex; flex-direction: column; align-items: stretch">
      <div class="flex gap-4">
        <div class="flex flex-col gap-4 my-2">
          <div class="h-24 w-24 rounded bg-green-100"></div>
          <div class="h-24 w-24 rounded bg-stone-100"></div>
          <div class="h-24 w-24 rounded bg-stone-100"></div>
          <div class="h-24 w-24 rounded bg-stone-100"></div>
          <div class="h-24 w-24 rounded bg-stone-100"></div>
        </div>
        <div class="w-[30rem]">
          <Carousel>
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">
                <ClientOnly>
                  <VueMagnifier style="height: 100%" src="/argan_01.png" alt="Product image" width="500" />
                </ClientOnly>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>

          <!-- <div style="
                                height: 350px;
                                width: 350px;
                                background-color: whitesmoke;
                                border-radius: 5px;
                                display: flex;
                                justify-content: center;
                              ">
            <img style="height: 100%" src="/argan_01.png" alt="Product image" />
          </div> -->
        </div>
        <div class="flex-1">
          <h1 class="text-3xl font-bold my-2">HUILE ESSENTIELLE DE LAVANDE ASPIC BIO</h1>
          <h3 class="my-2">Bulletin qualité</h3>
          <div class="flex gap-4 text-lg font-bold items-stretch">
            <span class="flex gap-2 items-center">
              <star-rating v-model="rating" :showControl="false" :disableClick="true" style="margin: 0px; padding: 0px"
                starSize="18" starColor="green" inactiveColor="lightgrey" /> <span>4.4
                (5)</span></span>
            <divider vertical />
            <span class="flex gap-2 items-center">
              <Icon class="text-green-500" icon="ph:heart-fill" />
              <span>26.5 K</span>
            </span>
            <div class="flex-1 flex gap-4 justify-end">
              <button class="hover:bg-stone-100 rounded-full">
                <Icon icon="ph:heart-straight-light" :height="24" />
              </button>
              <button class="hover:bg-stone-100 rounded-full">
                <Icon icon="ph:share-network-light" :height="24" />
              </button>
            </div>
          </div>
          <p class="text-sm my-4">
            Offrez à votre peau une cure de beauté vitaminée grâce à ce duo de sérums Perfecteur Eclat ! Spécialement
            pensé pour les peaux ternes et fatiguées, ce rituel de soin composé du sérum concentré d’Acide Hyaluronique et
            du sérum concentré Vitamine C 10% & Astaxanthine est idéal pour protéger des radicaux libres, booster l’éclat,
            réduire l’apparence des taches et unifier le teint tout en offrant une hydratation intense. Revitalisée et
            repulpée, la peau est plus ferme, plus lumineuse, son éclat est ravivé !

            Un coffret à s'offrir ou à offrir pour découvrir les bienfaits de nos sérums concentrés !
          </p>

          <div class="my-2">
            <h4 class="font-semibold uppercase">Contenance (ml)</h4>
            <div class="flex gap-2 py-4">
              <div
                class="flex gap-2 items-center py-2 px-4 rounded-full bg-emerald-500 text-white transition-colors hover:cursor-pointer hover:bg-emerald-200">
                <input type="radio" /><span class="text-sm">10ml</span> - <span class="font-bold">6500
                  F</span>
              </div>
              <div
                class="flex gap-2 items-center py-2 px-4 rounded-full bg-stone-200 transition-colors hover:cursor-pointer hover:bg-emerald-200">
                <input type="radio" /><span class="text-sm">25ml</span> - <span class="font-bold text-green-600">10000
                  F</span>
              </div>
              <div
                class="flex gap-2 items-center p-3 rounded-full bg-stone-200 transition-colors hover:cursor-pointer hover:bg-emerald-200">
                <input type="radio" /><span class="text-sm">50ml</span> - <span class="font-bold text-green-600">20000
                  F</span>
              </div>
              <div
                class="flex gap-2 items-center p-3 rounded-full bg-stone-200 transition-colors hover:cursor-pointer hover:bg-emerald-200">
                <input type="radio" /><span class="text-sm">100ml</span> - <span class="font-bold text-green-600">50000
                  F</span>
              </div>

            </div>
          </div>

          <div class="flex gap-4 items-center my-2">
            <h4 class="font-semibold uppercase">Delivery Options</h4>
            <div class="flex gap-2">
              <div
                class="flex gap-2 items-center rounded-lg p-2 bg-yellow-200 transition-colors hover:cursor-pointer hover:bg-emerald-200 border-1">
                <input type="radio" />
                <Icon icon="ph:truck-light" :height="24" /> <span class="text-sm">Get it Shipped</span>
              </div>
              <div
                class="flex gap-2 items-center rounded-lg p-2 bg-yellow-200 transition-colors hover:cursor-pointer hover:bg-emerald-200">
                <input type="radio" />
                <Icon icon="ph:package-light" :height="24" /> <span class="text-sm">Same day delivery</span>
              </div>
              <div
                class="flex gap-2 items-center rounded-lg p-2 bg-yellow-200 transition-colors hover:cursor-pointer hover:bg-emerald-200">
                <input type="radio" />
                <Icon icon="ph:storefront-light" :height="24" /> <span class="text-sm">Buy online and pick-up</span>
              </div>
            </div>
          </div>


          <div class="flex gap-4 my-4">
            <p class="flex-1">
              <a href="#" class="text-green-500">Sign in</a>
              or
              <a href="#" class="text-green-500">create an account</a> to enjoy
              FREE standard shipping.
              <a href="#" class="text-green-500">Shipping & Returns</a>
            </p>
            <div
              class="flex items-stretch gap-4 px-6 py-2 bg-emerald-500 text-white rounded-2xl shadow-md overflow-hidden">
              <div class="flex flex-col">
                <span class="text-sm">Quantity</span>
                <span class="pt-1 font-bold">
                  <input type="number" class="bg-transparent w-16" value="1" />
                </span>
              </div>
              <divider vertical />
              <div class="flex flex-col">
                <span class="text-sm">Total Price</span>
                <span class="font-bold text-2xl">
                  <currency-converter class="font-bold text-yellow-300" target-currency="XAF"
                    :amount="2500"></currency-converter>
                </span>
              </div>
              <divider vertical />
              <button class="flex gap-2 items-center" @click="(event) => handleAddToCart(product)">
                <Icon icon="ph:shopping-cart-light" :height="24" />Ajouter au panier
              </button>
            </div>
          </div>

        </div>
      </div>

      <div class="flex my-8 gap-4">
        <span class="p-2"><a href="#presentation" class="hover:text-green-500 transition-colors">Présentation</a></span>
        <span class="p-2"><a href="#properties" class="hover:text-green-500 transition-colors">Propriétés</a></span>
        <span class="p-2"><a href="#how-to-use" class="hover:text-green-500 transition-colors">En pratique</a></span>
        <span class="p-2"><a href="#ingredients" class="hover:text-green-500 transition-colors">Ingredient</a></span>
        <span class="p-2"><a href="#bibliography" class="hover:text-green-500 transition-colors">Bibliographie</a></span>
        <span class="p-2"><a href="#similar-products" class="hover:text-green-500 transition-colors">Produit.s
            similaire.s</a></span>
        <span class="p-2"><a href="#reviews" class="hover:text-green-500 transition-colors">Avis (47)</a></span>
      </div>

      <section id="presentation" class="my-4 border-b-2 border-grey-200" aria-label="presentation">
        <div class="flex gap-4 mb-8">
          <div class="w-[30rem]">
            <h1 class="text-2xl font-bold">Présentation</h1>
          </div>
          <div class="flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!</div>
        </div>
      </section>

      <section id="properties" class="my-4 border-b-2 border-grey-200" aria-label="presentation">
        <div class="flex gap-4 mb-8">
          <div class="w-[30rem]">
            <h1 class="text-2xl font-bold">Propriétés</h1>
          </div>
          <div class="flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!</div>
        </div>
      </section>

      <section id="how-to-use" class="my-4 border-b-2 border-grey-200" aria-label="presentation">
        <div class="flex gap-4 mb-8">
          <div class="w-[30rem]">
            <h1 class="text-2xl font-bold">Guide d'utilisation</h1>
          </div>
          <div class="flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!</div>
        </div>
      </section>

      <section id="ingredients" class="my-4 border-b-2 border-grey-200" aria-label="presentation">
        <div class="flex gap-4 mb-8">
          <div class="w-[30rem] py-2">
            <h1 class="text-2xl font-bold">Ingredients</h1>
          </div>
          <div class="flex-1 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias officia
            officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!</div>
        </div>
      </section>

      <section id="bibliography" class="my-4 border-b-2 border-grey-200" aria-label="presentation">
        <div class="flex gap-4 mb-8">
          <div class="w-[30rem] py-2">
            <h1 class="text-2xl font-bold">Bibliographie</h1>
          </div>
          <div class="flex-1 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias officia
            officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus alias officia officiis
            sit, repudiandae quia culpa ipsam commodi animi quas beatae, necessitatibus doloremque debitis rerum
            blanditiis accusantium, laboriosam recusandae quos!</div>
        </div>
      </section>

      <section id="similar-products" role="similar-products">
        <h1 class="text-2xl font-bold my-4">Similar product(s)</h1>
        <div class="flex gap-2 my-4">
          <product-thumbnail name="Parfum Paule Gaby" category="Parfum"></product-thumbnail>
          <product-thumbnail name="Huile d'Argan Richesse d'Afrique" category="Huiles essentiels" :price="85"></product-thumbnail>
          <product-thumbnail name="Huile de Jojoba" category="Huiles essentiels"></product-thumbnail>
        </div>
        <div class="flex my-2 justify-end">
          <paginator :number-of-pages="5" />
        </div>
      </section>

      <section role="reviews">
        <h1 class="text-2xl font-bold my-4">Summary</h1>
        <div class="flex gap-4">
          <table>
            <tr>
              <td class="pr-2 text-right">5</td>
              <td class="w-64"><progress-bar class="w-80" :value="85" :max-value="170" /></td>
              <td class="pl-2">85</td>
            </tr>
            <tr>
              <td class="pr-2 text-right">4</td>
              <td class="w-64"><progress-bar class="w-80" :value="50" :max-value="170" /></td>
              <td class="pl-2">50</td>
            </tr>
            <tr>
              <td class="pr-2 text-right">3</td>
              <td class="w-64"><progress-bar class="w-80" :value="10" :max-value="170" /></td>
              <td class="pl-2">10</td>
            </tr>
            <tr>
              <td class="pr-2 text-right">2</td>
              <td class="w-64"><progress-bar class="w-80" :value="20" :max-value="170" /></td>
              <td class="pl-2">20</td>
            </tr>
            <tr>
              <td class="pr-2 text-right">1</td>
              <td class="w-64"><progress-bar class="w-80" :value="5" :max-value="170" /></td>
              <td class="pl-2">5</td>
            </tr>
          </table>
          <div class="flex flex-col items-center">
            <span class="text-4xl font-bold flex gap-4 items-center justify-center">4.4 <star-rating v-model="rating"
                :showControl="false" :disableClick="true" style="margin: 0px; padding: 0px" starSize="30"
                starColor="#48ac29" :numberOfStars="1" /></span>
            <div class="text-sm">170 reviews</div>
            <span class="text-4xl font-bold">64%</span>
            <div class="text-sm">Recommended</div>
          </div>
        </div>
      </section>

      <section role="comments" class="mt-8">
        <h3 class="font-semibold">Reviews 1 - 10 of ({{ 10 }})</h3>
        <ul>
          <comment v-for="count in 10" style="border-bottom: 1px solid grey" author="Tih Samuel Mbiyimo'o"
            title="Produit très frais" content="Dés l'ouverture du sachet on sent que le produit et bien conservé"
            :key="count"></comment>
        </ul>
        <div class="flex my-2 justify-end">
          <paginator :number-of-pages="5" />
        </div>
      </section>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import VueMagnifier from '@websitebeaver/vue-magnifier';

const cart = useCart();
const { convert } = useCurrency();

console.log(await convert(5000, 'USD', 'EUR'));

const product = ref<any>({name: 'Product 1', price: 8000, quantity: 2})
const rating = ref<number>(4.4);
const reviews = ref<Array<any>>([]);

function handleAddToCart(product: any) {
  cart.addToCart({name: product.name, quantity: product.quantity, price: product.price});
}

definePageMeta({
  layout: 'product-view'
})
</script>

<style>.carousel__item {
  min-height: 350px;
  width: 100%;
  background-color: whitesmoke;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}

#product-volume .formkit-wrapper {
  display: flex;
  gap: 1rem;
}</style>