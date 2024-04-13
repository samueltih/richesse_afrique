<template>
    <div class="flex w-full items-center gap-2">
        <span v-if="$slots.left || leftLabel">
            <slot name="left" />{{ leftLabel }}
        </span>

        <div class="flex-1 bg-slate-200 h-2 overflow-hidden">

            <div class="progress-bar-indicator"
                :style="`--progress-bar-indicator: ${(value / maxValue) * 100}%; --progress-bar-color: ${color}`" />

        </div>
        <span v-if="$slots.right || rightLabel">
            <slot name="right" />{{ rightLabel }}
        </span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    value: {
        type: Number,
        default: 50,
    },
    maxValue: {
        type: Number,
        default: 100
    },
    color: {
        type: String,
        default: 'springgreen'
    },
    leftLabel: {
        type: String
    },
    rightLabel: {
        type: String
    }
})

</script>

<style scoped>
.progress-bar-indicator {
    width: var(--progress-bar-indicator);
    background-color: var(--progress-bar-color);
    height: 100%;
}</style>