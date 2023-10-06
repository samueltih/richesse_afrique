<template>
  <nav class="flex justify-center flex gap-4">
    <div class="flex items-center max-w-screen-xl w-full">
      <div class="flex-1 flex">
        <my-menu class="lg:hidden">
          <menu-item>
            <Icon icon="ph:list-light" :height="24" />
          </menu-item>
        </my-menu>
        <my-menu class="hidden md:flex flex-1 justify-end">
          <menu-item link="/">Accueil</menu-item>
          <menu-item link="/catalog">Catalogue</menu-item>
        </my-menu>
      </div>
      <div class="hidden md:block">
        <logo />
      </div>
      <div class="flex-1 flex">
        <my-menu class="hidden md:flex flex-1">
          <menu-item link="/about-us">A Propos</menu-item>
          <menu-item link="/blog">Blog</menu-item>
        </my-menu>
        <my-menu class="hidden md:flex">
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

// function mounted() {
//   const socket = $nuxtSocket({
//     channel: "/notifications"
//   })
// }

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
