<template>
    <div style="display: table-row" class="hover:bg-slate-200 hover:cursor-pointer relative transition-colors" @mouseenter="submenuVisible = true"
        @mouseleave="submenuVisible = false" @click="handleClick">
        <div style="display: table-cell" class="content !pl-2">
            <slot name="left" />
        </div>
        <div style="display: table-cell" class="w-full px-1 py-2">
            <span class="flex flex-1 gap-2">
                <slot />
            </span>
        </div>
        <div style="display: table-cell" class="content">
            <slot name="right" />
        </div>
        <div style="display: table-cell" class="content" v-if="slots.submenu">
            <Icon icon="ph:caret-right-light" :height="16" />
        </div>
        <xyz-transition xyz="fade up duration-2">
            <div style="display: table" v-if="submenuVisible" ref="tray" :class="{'absolute top-0 bg-white ra-dropdown-menu shadow-md': true, 'left-full': !isOverflowing(), 'right-full': isOverflowing()}"
                @click="submenuVisible = false">
                <slot name="submenu" />
            </div>
        </xyz-transition>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { ref, useSlots } from 'vue';

const slots = useSlots()
const submenuVisible = ref<boolean>(false);
const tray = ref<HTMLTableElement | undefined>(undefined);

function handleClick($event: MouseEvent) {
    console.log("Clicked drop item: ", $event);
    emit('click', {});
}

const emit = defineEmits<(e: 'click', data: any) => void>()

defineProps({
    showOnHover: {
        type: Boolean,
        default: true
    }
})

function isOverflowing() {
    if (window !== undefined && tray.value) {
        const {x, width} = tray.value.getBoundingClientRect();
        return x + width > window.innerWidth;
    }
    return false;
}
</script>

<style scoped>
.content {
    padding: 0.5rem 0.25rem;
}

.content:empty {
    padding:  0px;
}

tr {
    height: 42px;
}
</style>