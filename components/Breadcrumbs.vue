<template>
    <div v-if="$slots" class="flex my-2 gap-4 w-full items-center text-sm">
        <template :key="index" v-for="(breadcrumb, index) of vNodes">
            <component :is="breadcrumb" />
            <Icon v-if="index < vNodes.length - 1" icon="ph:caret-right" />
        </template>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const slots = useSlots();
const nodes = ref<any>(slots.default);
const vNodes = ref<any>(nodes.value());
</script>

