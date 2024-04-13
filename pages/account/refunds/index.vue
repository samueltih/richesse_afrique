<template>
    <div class="mt-2 mb-4">
        <breadcrumbs>
            <breadcrumb-item><a href="/account">Account</a></breadcrumb-item>
            <breadcrumb-item>Refunds</breadcrumb-item>
        </breadcrumbs>
        <div class="flex gap-12 items-center">
            <h1 class="flex-1 text-3xl font-bold capitalize">Refunds</h1>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'account'
})
</script>