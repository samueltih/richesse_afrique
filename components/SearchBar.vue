<template>
    <div class="bg-black bg-opacity-5 p-2 flex w-full gap-4 items-center rounded relative">
        <Icon icon="pepicons-pencil:loop" :height="24" />
        <input ref="" class="flex-1 rounded-sm text-sm bg-transparent outline-none" type="search" placeholder="What are you searching for....." @change="handleInputChange($event)">
        <Icon :class="{'invisible': !input?.value }" icon="ph:x-light" :height="24" />
    </div>
</template>

<script lang="ts" setup>
import {Icon} from "@iconify/vue";
const emit = defineEmits<{(e: 'search', inputText: string): void}>();
const input = ref<HTMLInputElement | null>(null);

const handleInputChange = ($event: any) => {
    if ($event.target.value.length > 3) {
        emit('search', $event.target.value);
    }
}
</script>