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
                        Nulla, ad! Excepturi!</p>
                    <div>15:46</div>
                </span>
            </div>
            <div class="flex justify-start">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-left">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sapiente expedita consequuntur, facere
                        doloremque, labore aut qui voluptatibus reiciendis quia ad, eum quae natus rem mollitia laudantium.
                        Nulla, ad! Excepturi!</p>
                    <div>16:00</div>
                </span>
            </div>
            <div class="flex justify-start">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-left">
                    <p>Lorem ipsum dolor</p>
                    <div>16:05</div>
                </span>
            </div>
        </div>
    </div>
    <div class="flex gap-4 bg-stone-50 items-center px-4 py-2 relative">
        <ClientOnly>
            <xyz-transition xyz="fade down duration-2">
                <emoji-picker v-if="showEmojiPicker" class="absolute bottom-full left-4" :native="true"
                    @select="onSelectEmoji" />
            </xyz-transition>
        </ClientOnly>
        <span>
            <button class="hover:bg-black hover:bg-opacity-20 hover:cursor-pointer p-2 rounded" @click="handletoggleEmojiPicker">
                <Icon icon="ph:smiley" :height="24" />
            </button>
        </span>
        <span class="flex-1 flex gap-2 p-2 bg-white">
            <textarea :value="text" placeholder="Ecrivez votre message" class="bg-transparent flex-1 outline-none" />
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
// import EmojiPicker from 'vue3-emoji-picker';

const showEmojiPicker = ref<boolean>(false);
const text = ref<string>('');

function handletoggleEmojiPicker() {
    showEmojiPicker.value = !showEmojiPicker.value;
}

function onSelectEmoji(emoji: any) {
    text.value += emoji.v && emoji.t != 'neutral' ? String.fromCodePoint(parseInt(`0x${emoji.u}`), parseInt(`0x${emoji.t}`)) : String.fromCodePoint(parseInt(`0x${emoji.u}`));
}

definePageMeta({
    layout: 'account'
});
</script>