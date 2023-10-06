<template>
  <div class="flex flex-col">
    <navigation-bar />
    <div class="bg-stone-100 flex justify-center py-2">
      <div class="max-w-screen-xl w-full px-2">
        <my-menu>
          <menu-item link="/account/orders">Orders</menu-item>
          <menu-item link="/account/refunds">Refunds</menu-item>
          <menu-item link="/account/wishlist">Wishlist</menu-item>
          <menu-item link="/account/profile">Profile</menu-item>
          <menu-item link="/account/history">History</menu-item>
          <menu-item link="/account/messages">Messages</menu-item>
          <menu-item link="/account/preferences">Preferences</menu-item>
        </my-menu>
      </div>
    </div>
    <main class="flex flex-col items-center">
      <div class="max-w-screen-xl w-full flex flex-col px-8">
        <slot />
      </div>
    </main>
  </div>
</template>