<template>
    <span v-if="!href" class="flex gap-2 items-center"><slot />
        <Icon v-if="dropdown" icon='ph:caret-down' />
    </span>
    <a v-if="href" :href="href" class="flex gap-2 items-center"><slot />
        <Icon v-if="dropdown" icon='ph:caret-down' />
    </a>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

defineProps({
    href: {
        type: String,
    },
  dropdown: {
    type: Boolean,
    default: false
  }
});
</script>