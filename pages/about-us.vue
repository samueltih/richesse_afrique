<template>
  <breadcrumbs>
    <breadcrumb-item href="/">Home</breadcrumb-item>
    <breadcrumb-item>About us</breadcrumb-item>
  </breadcrumbs>
  <h1 class="text-3xl font-bold my-4 w-full">About Us</h1>
  <p>Our products are sold in various stores. Feel free to visit one of them</p>
</template>

<script lang="ts" setup>

const { site } = useSettings();

useHead({
  title: [site.name, 'A Propos'].join(' - ')
})

definePageMeta({
  layout: 'main'
})
</script>