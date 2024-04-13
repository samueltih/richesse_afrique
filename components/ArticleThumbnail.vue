<template>
    <div class="p-6 w-96 bg-emerald-100 rounded">

        <div class="relative">
            <img src="/skincare.jpg" />
            <span class="flex gap-4 justify-end absolute top-2 right-2">
                <button>
                    <Icon icon="ph:heart-straight" :height="24" />
                </button>
                <button>
                    <Icon icon="ph:bookmark" :height="24" />
                </button>
            </span>
            <span class="absolute bottom-2 left-2 flex gap-2">
                <span class="flex gap-2 text-sm items-center">123
                    <Icon icon="ph:eye-light" :height="24" />
                </span>
                <divider vertical />
                <span class="flex gap-2 text-sm items-center">78
                    <Icon icon="ph:heart-straight-light" :height="24" />
                </span>
            </span>
        </div>


        <div class="my-2 flex gap-2">
            <tag>Cheveux</tag>
            <tag>Huiles</tag>
        </div>
        <h2 class="text-xl font-bold">Comment prendre soins de vos pointes</h2>
        <p class="py-2s">
            Avez-vous déjà eu des difficultés à rendre vos cheveux soigneux? Ils se cassent régulièrement et sont très
            rugueuses?
        </p>
        <div class="flex mt-4 gap-4">

            <span class="flex-1 flex gap-2 items-center text-sm">
                <Icon icon="ph:pen-light" :height="24" /> <a href="/#">Jaelle Bassong</a>
            </span>

            <span class="flex-1 flex gap-2 items-center justify-end italic text-sm text-slate-500">
                <icon icon="ph:calendar-light" :height="24" />6 avril 2023
            </span>

        </div>

    </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

defineProps({
    link: {
        type: String
    }
})
</script>
