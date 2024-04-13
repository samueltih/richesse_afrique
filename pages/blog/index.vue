<template>
    <div class="flex flex-col justify-center p-4">
        <div class="max-w-screen-xl w-full">
            <breadcrumbs>
                <breadcrumb-item href="/">
                    <Icon icon="ph:home" /> Home
                </breadcrumb-item>
                <breadcrumb-item>Blog</breadcrumb-item>
            </breadcrumbs>
            <h1 class="text-3xl font-bold my-4">Blog</h1>

            <div>
                <h2 class="font-bold text-lg">Trending topics</h2>
                <div class="flex gap-2">
                    <span>Beauty</span>
                    <span>Skin care</span>
                    <span>Jewelry</span>
                    <span>Beauty</span>
                </div>
            </div>

            <div class="flex flex-col justify-center">
                <h1 class="font-bold text-xl max-w-screen-xl w-full">Articles</h1>
                <div class="grid grid-cols-3 gap-4 max-w-screen-xl w-full">
                    <article-thumbnail />
                    <article-thumbnail />
                    <article-thumbnail />
                    <article-thumbnail />
                </div>
            </div>
            <div class="flex justify-center">
                <div class="flex justify-end max-w-screen-xl w-full">
                    <paginator :number-of-pages="5" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'blog'
})
</script>