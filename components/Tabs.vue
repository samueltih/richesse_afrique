<template>
    <div class="flex gap-2">
        <template :key="index" v-for="(tab, index) in vNodes">
            <component :is="tab" v-bind:active="active == index" @click="handleClick(index)"/>
        </template>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    active: {
        type: Number,
        default: 1
    }
});

const active = ref<number>(props.active);

const slots = useSlots();
const defaultSlot = ref<any>(slots.default);
const vNodes = ref<any>(defaultSlot.value());

function handleClick(activeIndex: number): void {
    active.value = activeIndex;
}

</script>