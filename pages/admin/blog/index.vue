<template>
    <breadcrumbs>
        <breadcrumb-item href="/admin">Admin</breadcrumb-item>
        <breadcrumb-item>Blog</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2 items-center">
        <h1 class="flex-1 text-3xl font-bold my-4">Blog</h1>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'console'
})
</script>