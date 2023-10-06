<template>
    <div ref="target" class="ra-dropdown">
        <div @click="toggleDropdown()" class="ra-dropdown-toggle">{{ title }}
            <slot v-if="!title" name="toggle" />
        </div>

        <xyz-transition xyz="fade up duration-2">
            <table v-if="dropdownVisible" class="absolute left-0 bg-white top-full ra-dropdown-menu shadow-md" @click="dropdownVisible = false">
                <template :key="index" v-for="(dropdownItem, index) of vNodes">
                    <component :is="dropdownItem" />
                    <divider v-if="showDivider && index < vNodes.length - 1" :gap="0" />
                </template>
            </table>
        </xyz-transition>
    </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';

const target = ref(null)
onClickOutside(target, (event) => {
    dropdownVisible.value = false;
})

defineProps({
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
    }
})

const slots = useSlots();
const defaultSlot = ref<any>(slots.default);
const vNodes = ref<any>(defaultSlot.value());

const dropdownVisible = ref<boolean>(false);

function toggleDropdown(): void {
    dropdownVisible.value = !dropdownVisible.value;
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