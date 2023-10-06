<template>
    <Teleport to="body" v-if="open">
        <div :class="['fixed top-0 h-screen w-screen transition-colors z-80 bg-black flex items-center justify-center', { 'bg-opacity-50': init }, { 'bg-opacity-0': !init }]"
            @click="close()">
            <xyz-transition xyz="fade up duration-2">
                <div v-if="init"
                    :class="['w-96 h-96 p-6 bg-white shadow rounded-md transition-opacity', { 'opacity-100': init }, { 'opacity-0': !init }]">
                    <slot></slot>
                </div>
            </xyz-transition>
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
    setTimeout(() => emit('close', {}), 200)
}

const emit = defineEmits<{
    (e: 'close', data: any): void
}>()
</script>