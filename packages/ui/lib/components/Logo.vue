<template>
    <img class="logo" :src="img" :alt="alt">
</template>

<script lang="ts" setup>
defineProps({
  img: {
    type: String,
    default: '/logo.jpeg'
  },
  alt: {
    type: String,
    default: 'Company Logo'
  }
})
</script>

<style>
.logo {
    width: 80px;
    height: 80px;
}
</style>
