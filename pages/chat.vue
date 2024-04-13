<template>
    <breadcrumbs>
        <breadcrumb-item href="/account">Account</breadcrumb-item>
        <breadcrumb-item>Message</breadcrumb-item>
    </breadcrumbs>
    <h1 class="text-3xl font-bold my-4">Messages</h1>
    <div class="bg-stone-50 flex flex-col gap-2 p-4 rounded h-screen">
        <div class="flex flex-col gap-2">
            <div class="flex justify-center sticky top-4">
                <span class="p-2 bg-white shadow">10/06/2023</span>
            </div>
            <div class="flex justify-end">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-right">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sapiente expedita consequuntur, facere
                        doloremque, labore aut qui voluptatibus reiciendis quia ad, eum quae natus rem mollitia laudantium.
                  
                   ''      Nulla, ad! Excepturi!</p>
                    <div class="text-sm text-gray-400">15:46</div>
                </span>
            </div>
            <div class="flex justify-start">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-left">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sapiente expedita consequuntur, facere
                        doloremque, labore aut qui voluptatibus reiciendis quia ad, eum quae natus rem mollitia laudantium.
                        Nulla, ad! Excepturi!</p>
                    <div class="text-sm text-gray-400">16:00</div>
                </span>
            </div>
            <div class="flex justify-start">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-left">
                    <p>Lorem ipsum dolor</p>
                    <div class="text-sm text-gray-400">16:05</div>
                </span>
            </div>
        </div>
    </div>
    <div class="flex gap-4 bg-stone-50 items-center px-4 py-2 relative">
        <span ref="picker" class="relative">
            <button class="hover:bg-black hover:bg-opacity-20 hover:cursor-pointer p-2 rounded"
                @click="handleToggleEmojiPicker" @mousedown="$event.preventDefault()">
                <Icon icon="ph:smiley" :height="24" />
            </button>
            <ClientOnly>
            <xyz-transition xyz="fade down duration-2">
                <emoji-picker v-if="showEmojiPicker" class="absolute bottom-full left-4" :native="true"
                    @select="onSelectEmoji" @mousedown="$event.preventDefault()"/>
            </xyz-transition>
        </ClientOnly>
        </span>
        <span class="flex-1 flex gap-2 p-2 bg-white">
            <textarea v-model="message" placeholder="Ecrivez votre message" class="bg-transparent flex-1 outline-none" />
            <button class="hover:bg-black hover:bg-opacity-20 hover:cursor-pointer p-2 rounded">
                <Icon icon="ph:paperclip" :height="24" />
            </button>
        </span>
        <span>
            <button class="hover:bg-black hover:bg-opacity-20 hover:cursor-pointer p-2 rounded">
                <Icon icon="ph:paper-plane-right" :height="24" />
            </button>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const picker = ref(null);
const showEmojiPicker = ref<boolean>(false);
const message = ref<string>('');

if (process.client) {

    const listener = (event: MouseEvent) => {
        if (event.target !== picker.value && !event.composedPath().includes(picker.value!)) {
            showEmojiPicker.value = false;
        }
    };

    onMounted(() => { document.addEventListener('click', listener) })
    onBeforeUnmount(() => {document.removeEventListener('click', listener)})
}

function handleToggleEmojiPicker() {
    showEmojiPicker.value = !showEmojiPicker.value;
}

function onSelectEmoji(emoji: any) {
    message.value += emoji.v && emoji.t != 'neutral' ? String.fromCodePoint(parseInt(`0x${emoji.u}`), parseInt(`0x${emoji.t}`)) : String.fromCodePoint(parseInt(`0x${emoji.u}`));
}

</script>