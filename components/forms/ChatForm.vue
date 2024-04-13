<template>
    <FormKit>
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
    </FormKit>
</template>

<script lang="ts" setup>
import RichTextArea from '../inputs/RichTextArea.vue';


</script>