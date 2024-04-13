<template>
    <tr class="ra-timeline-item">
        <td class="relative p-0">
            <div class="w-full h-full flex flex-col justify-center items-center ra-timeline-line">
                <div class="flex-1"></div>
                <div class="ra-timeline-icon">
                    <div v-if="!slots.icon" class="ra-default-icon"></div>
                    <slot name="icon" />
                </div>
                <div class="flex-1"></div>
            </div>
        </td>
        <td class="p-2">
            <div class="ml-8 p-2">
                <slot />
            </div>
        </td>
    </tr>
</template>

<script lang="ts" setup>
const props = defineProps({
    s: {
        type: String
    }
})

const slots = useSlots();
</script>

<style>
.ra-timeline-item {
    position: relative;
    height: 100%;
}

.ra-timeline-line>div:first-child,
.ra-timeline-line>div:last-child {
    flex: 1;
    width: 0px;
    border: 1px solid lightgrey;
}

.ra-timeline-item:first-child .ra-timeline-line>div:first-child,
.ra-timeline-item:last-child .ra-timeline-line>div:last-child {
    opacity: 0;
}

.ra-default-icon {
    
    height: 10px;
    width: 10px;
    background-color: aqua;
    border-radius: 50%;
}
</style>