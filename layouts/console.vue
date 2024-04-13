<template>
  <div class="flex gap-4 items-stretch h-screen">
    <div class="hidden lg:flex lg:flex-col lg:gap-2 w-64 bg-green-50">
      <ul class="flex flex-col gap-2 my-2">
        <menu-item link="/admin/site">
          <div class="flex gap-4 items-center px-2">
            <Icon icon="ph:globe-light" :height="24" />Website
          </div>
        </menu-item>
        <menu-item link="/admin/users">
          <div class="flex gap-4 items-center px-2">
            <Icon icon="ph:users-light" :height="24" />Users
          </div>
        </menu-item>
        <menu-item link="/admin/catalog">
          <div class="flex gap-4 items-center px-2">
            <Icon icon="ph:tag-light" :height="24" /> Catalog
          </div>
        </menu-item>
        <menu-item link="/admin/content">
          <div class="flex gap-4 items-center px-2">
            <Icon icon="ph:images-light" :height="24" />Content
          </div>
        </menu-item>
        <menu-item link="/admin/blog">
          <div class="flex gap-4 items-center px-2">
            <Icon icon="ph:files-light" :height="24" />Blog
          </div>
        </menu-item>
        <menu-item link="/admin/policy">
          <div class="flex gap-4 items-center px-2">
            <Icon icon="ph:shield-check-light" :height="24" />Policies
          </div>
        </menu-item>
        <menu-item link="/admin/analytics">
          <div class="flex gap-4 items-center px-2">
            <Icon icon="humbleicons:chart" :height="24" />Analytics
          </div>
        </menu-item>
        <menu-item link="/admin/settings">
          <div class="flex gap-4 items-center px-2">
            <Icon icon="ph:sliders-horizontal-light" :height="24" />Settings
          </div>
        </menu-item>
        <menu-item link="/admin/marketing">
          <div class="flex gap-4 items-center px-2">
            <Icon icon="ph:target-light" :height="24" />Marketing
          </div>
        </menu-item>
        <menu-item link="/sign-out">
          <div class="flex gap-4 items-center px-2 text-red-500">
            <Icon icon="ph:sign-out-light" :height="24" />Sign out
          </div>
        </menu-item>
      </ul>
      <div class="flex-1"></div>
      <div class="p-4 text-2xl font-bold opacity-20">Richesse d'Afrique</div>
    </div>
    <div class="flex-1 flex flex-col">
      <nav class="flex gap-8 justify-end px-8 py-2">
        <div class="flex-1"><input class="bg-black bg-opacity-5 rounded-md p-2 w-full"
            placeholder="Are your searching for something..." />
        </div>
        <div class="flex gap-2 items-center">
          <button class="p-2 hover:bg-black hover:bg-opacity-5 rounded-full" title="search">
            <Icon icon="ph:magnifying-glass-light" :height="24" />
          </button>
          <button class="p-2 hover:bg-black hover:bg-opacity-5 rounded-full" title="translate">
            <dropdown>
            <template #toggle><Icon icon="ph:translate-light" :height="24" /></template>
            <dropdown-item>Français</dropdown-item>
            <dropdown-item>English</dropdown-item>
          </dropdown>

          </button>
          <button class="p-2 hover:bg-black hover:bg-opacity-5 rounded-full" title="notification">
            <dropdown>
            <template #toggle>
              <Badge content="2"><Icon icon="ph:bell-light" :height="24" /></Badge></template>
            <dropdown-item>
              <div class="flex flex-col">
                <span><b>Jane Doe</b> has just placed an order #14578</span>
                <span class="text-sm text-gray-400">45 minutes ago</span>
              </div>
            </dropdown-item>
            <dropdown-item ><div class="flex flex-col">
                <p><b>Jane Doe</b> has just placed an order #14578</p>
                <span class="text-sm text-gray-400">45 minutes ago</span>
              </div>
            </dropdown-item>
          </dropdown>
          </button>
          <button class="p-2 hover:bg-black hover:bg-opacity-5 rounded-full" title="notification">
            <Icon icon="ph:user-light" :height="24" />
          </button>
        </div>
      </nav>
      <main class="flex flex-col px-8 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
