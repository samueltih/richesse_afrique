<template>
    <span class="inline-flex gap-2 items-center p-2 bg-opacity-10 bg-black rounded-md text-sm">
        <slot />
    </span>
</template>

<script lang="ts" setup>
defineProps({
  content: {
    type: [String],
  },
});
</script>