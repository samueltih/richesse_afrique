<template>
  <ul :class="['flex gap-2', 'list-style-none', {'flex-col': vertical, 'items-stretch mx-4': !vertical}]">
    <slot />
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps({
  vertical: {
    type: Boolean,
    default: false
  }
})

</script>

<style>
.ra-menu {
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    align-items: stretch;
    list-style-type: none;
}
</style>
