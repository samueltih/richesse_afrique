<template>
    <div :class="{ 'flex items-center': true, 'vertical-gap h-full': vertical, 'horizontal-gap': !vertical }"
        :style="`--divider-gap: ${gap * 0.5}rem`">
        <span :class="{ 'flex-1': true, 'horizontal-line': !vertical, 'vertical-line': vertical }" />
        <span v-if="!vertical" class="content">
            <slot />    
        </span>
        <span v-if="!vertical" class="horizontal-line flex-1" />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    vertical: {
        type: Boolean,
        default: false
    },
    gap: {
        type: Number,
        default: 1
    }
})
</script>

<style scoped>
.horizontal-gap {
    margin: var(--divider-gap) 0px;
}

.vertical-gap {
    margin: 0px var(--divider-gap);
    align-items: stretch;
}

.horizontal-line {
    height: 0px;
    border-bottom: 1px solid lightgrey;
}

.vertical-line {
    height: 100%;
    width: 0px;
    border-right: 1px solid lightgrey;
}

.content:not(:empty) {
    padding: 0px 10px;
}
</style>