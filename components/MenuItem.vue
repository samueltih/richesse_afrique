<script setup>
const props = defineProps({
  link: {
    type: [String]
  }
})
</script>

<template>
  <a :href="link" class="ra-menu-item">
    <slot />
  </a>
</template>

<style lang="scss">
.ra-menu-item {
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;

  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
}
</style>
