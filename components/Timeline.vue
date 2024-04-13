<template>
    <table class="h-fit">
        <template v-for="(node, index) in vNodes" :key="index">
            <component :is="node" />
        </template>
    </table>
</template>

<script lang="ts" setup>
const slots = useSlots();
const defaultSlot = ref<any>(slots.default);
const vNodes = ref<any>(defaultSlot.value());
</script>