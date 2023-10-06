<template>
    <div :class="['p-2 hover:cursor-pointer hover:bg-stone-50 transition-all', {'opacity-50': !active}]" @click="handleClick">
        <slot />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits<{
    (e: 'click', data: any): void
}>()

function handleClick($event: Event): void {
    emit('click', $event);
}
</script>