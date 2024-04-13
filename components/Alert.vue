<template>
    <div class="p-2 rounded shadow flex flex-col gap-2">
        <div class="flex gap-2">
            <h4>{{ title }}</h4>
            <button @click="handleClose"><Icon icon="ph:x" /></button>
        </div>
        <p>
            {{ message }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

defineProps({
    title: String,
    message: String,
    type: {
        type: String,
        default: 'info'
    },
    closable: {
        type: Boolean,
        default: true
    }
})

function handleClose(e: Event) {
    console.log("Close alert");
}
</script>