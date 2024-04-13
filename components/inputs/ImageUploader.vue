<template>
    <div class="relative w-72 shadow-md overflow-hidden rounded-">
        <input ref="input" class="hidden" type="file" :name="name" :value="file" @change="handleUpload"/>
        <img ref="preview" alt="Preview" src="https://cdn.explorecams.com/storage/photos/LEFEikw0MR_1600.jpg" />
        <div class="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 bg-opacity-20 bg-black absolute top-0 left-0 hover:cursor-pointer transition-all">
            <button class="text-white" type="button" @click="launchFileDialog">Change image</button>
        </div>
        <button v-if="file" class="absolute top-2 right-2 z-10 text-white" @click="handleRemove">
            <Icon icon="ph:trash"/> Remove
        </button>
    </div>

</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

let input = ref<HTMLInputElement | undefined>(undefined);
let preview = ref<HTMLImageElement | undefined>(undefined);

let file = ref<String>('');
let fileReader: FileReader = new FileReader();

fileReader.onloadend = (event: any) => {
    if (preview.value) preview.value.src = event.target.result;
}

function launchFileDialog() {
    input?.value?.click();
}

function handleUpload($event: any) {
    file.value = $event.target.value;
    fileReader.readAsDataURL($event.target.files[0]);
}

function handleRemove() {
        file.value = '';
        if (preview.value) preview.value.src = 'https://cdn.explorecams.com/storage/photos/LEFEikw0MR_1600.jpg';
}

defineProps({
    name: {
        type: String
    }
})
</script>