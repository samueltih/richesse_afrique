<template>
  <nav class="flex justify-center flex gap-4">
    <div class="flex items-center max-w-screen-2xl w-full">
      <div class="flex-1 flex">
        <my-menu class="lg:hidden">
          <menu-item>
            <Icon icon="ph:list-light" :height="24" />
          </menu-item>
        </my-menu>
        <my-menu class="hidden md:flex flex-1 justify-end">
          <menu-item link="/">{{ $t('home') }}</menu-item>
          <menu-item link="/catalog">{{ $t('catalog') }}</menu-item>
        </my-menu>
      </div>
      <div class="hidden md:block">
        <logo />
      </div>
      <div class="flex-1 flex">
        <my-menu class="hidden md:flex flex-1">
          <menu-item link="/about-us">{{ $t('aboutUs') }}</menu-item>
          <menu-item link="/blog">{{ $t('blog') }}</menu-item>
        </my-menu>
        <my-menu class="hidden md:flex">
          <button type="button" @click="handleLocaleChange">
            {{ locale }}
          </button>
          <menu-item link="/chat">
            <Icon icon="ph:chat-centered-light" :height="24" />
          </menu-item>
          <menu-item link="/wishlist">
            <Icon icon="ph:heart-straight-light" :height="24" />
          </menu-item>
          <menu-item link="/cart">
            <Icon icon="ph:shopping-cart-light" :height="24" />
          </menu-item>
          <menu-item link="/account">
            <Icon icon="ph:user-light" :height="24" />
          </menu-item>
        </my-menu>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const user = useSupabaseUser();

// function mounted() {
//   const socket = $nuxtSocket({
//     channel: "/notifications"
//   })
// }

const { site } = useSettings();

const { locale, setLocale } = useI18n();

function handleLocaleChange(event: Event) {
  console.log("Event: ", event)
  setLocale(locale.value === 'fr-FR' ? 'en-GB' : 'fr-FR');
}

</script>

<style lang="scss">
.ra-navbar {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo-section {
  flex: 0 0 150px;
}

.menu-section {
  flex: 1;

  ul.menu-item {
    display: inline-flex;
    list-style-type: none;
    width: 100%;

    li {
      flex: 1;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}

.user-section {
  margin-left: 15px;
}
</style>
