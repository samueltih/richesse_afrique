<template>
    <div class="relative overflow-show">
        <slot />
        <span v-if="visible" :class="{'absolute bg-red-500 text-white text-sm flex items-center justify-center rounded-full': true, 'h-5 w-5 -top-2 -right-2': expanded, 'h-2 w-2 -top-1 -right-1': !expanded}">
            {{ expanded ? content : '' }}
        </span>
    </div>
    
</template>

<script lang="ts" setup>
defineProps({
    expanded: {
        type: Boolean,
        default: false
    },
    content: {
        type: String
    },
    visible: {
        type: Boolean,
        default: true
    }
})
</script>