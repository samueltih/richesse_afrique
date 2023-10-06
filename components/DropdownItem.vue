<template>
    <tr class="hover:bg-slate-200 hover:cursor-pointer relative transition-colors" @mouseenter="submenuVisible = true"
        @mouseleave="submenuVisible = false" @click="handleClick">
        <td class="content !pl-2">
            <slot name="left" />
        </td>
        <td class="w-full px-1 py-2">
            <span class="flex flex-1 gap-2">
                <slot />
            </span>
        </td>
        <td class="content">
            <slot name="right" />
        </td>
        <td class="content" v-if="slots.submenu">
            <Icon icon="ph:caret-right-light" :height="16" />
        </td>
        <xyz-transition xyz="fade up duration-2">
            <table v-if="submenuVisible" class="absolute left-full top-0 bg-white ra-dropdown-menu shadow-md"
                @click="submenuVisible = false">
                <slot name="submenu" />
            </table>
        </xyz-transition>
    </tr>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const slots = useSlots()
const submenuVisible = ref<boolean>(false);

function handleClick($event: MouseEvent) {
    console.log("Clicked drop item");
    emit('click', {});
}

const emit = defineEmits<{
    (e: 'click', data: any): void
}>()

const props = defineProps({
    showOnHover: {
        type: Boolean,
        default: true
    }
})

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