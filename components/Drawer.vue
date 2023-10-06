<template>
    <Teleport to="body" v-if="open">
        <div :class="['fixed top-0 h-screen w-screen transition-colors duration-1000 z-80 bg-black', { 'bg-opacity-50': init }, { 'bg-opacity-0': !init }]"
            @click="close()">
        </div>
        <div
            :class="['fixed h-screen w-96 top-0 shadow-lg bg-white transition-all z-90 p-4', { '-translate-x-96': !init }]">
            <slot></slot>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>

const init = ref<boolean>(false);
watch(() => props.open, (value, oldValue) => {
    setTimeout(() => init.value = value, 0);
});

const props = defineProps({
    open: {
        type: Boolean,
        default: false
    }
});

function close() {
    init.value = false;
    setTimeout(() => emit('close', {}), 1000)
}

const emit = defineEmits<{
    (e: 'close', data: any): void
}>()
</script>