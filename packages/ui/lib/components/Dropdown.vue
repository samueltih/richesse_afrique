<template>
    <div ref="target" class="ra-dropdown">
        <div @click="toggleDropdown()" :class="['ra-dropdown-toggle', { 'opacity-60': disabled }]">{{ title }}
            <slot v-if="!title" name="toggle" />
        </div>

        <xyz-transition xyz="fade up duration-2">
            <div ref="tray" v-if="dropdownVisible" :class="{'absolute bg-white top-full ra-dropdown-menu shadow-md': true, 'left-0': !isOverflowing(), 'right-0': isOverflowing()}" style="display: table" @click="dropdownVisible = false">
                <template :key="index" v-for="(dropdownItem, index) of vNodes">
                    <component :is="dropdownItem" />
                    <divider v-if="showDivider && index < vNodes.length - 1" :gap="0" />
                </template>
            </div>
        </xyz-transition>
    </div>
</template>

<script lang="ts" setup>
import { ref, useSlots } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { XyzTransition } from '@animxyz/vue3';

const tray = ref<HTMLTableElement | undefined>(undefined);

const target = ref(null)
onClickOutside(target, (/* event */) => {
    dropdownVisible.value = false;
})

const props = defineProps({
    showDivider: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
    },
    showOnHover: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const slots = useSlots();
const defaultSlot = ref<any>(slots.default);
const vNodes = ref<any>(defaultSlot.value());

const dropdownVisible = ref<boolean>(false);

function toggleDropdown(): void {
    if (!props.disabled)
    dropdownVisible.value = !dropdownVisible.value;
}

function isOverflowing() {
    if (window !== undefined && tray.value) {
        const {x, width} = tray.value!.getBoundingClientRect();
        return x + width > window.innerWidth;
    }
    return false;
}
</script>

<style lang="scss">
.ra-dropdown {
    position: relative;
    display: inline-block;

    & .ra-dropdown-toggle {

        display: inline-block;

        &:hover {
            cursor: pointer;
        }
    }

    & .ra-dropdown-menu {
        min-width: 12rem;
        position: absolute;
        z-index: 2;
    }

}
</style>