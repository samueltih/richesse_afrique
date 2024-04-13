<template>
    <breadcrumbs>
        <breadcrumb-item href="/admin">Home</breadcrumb-item>
        <breadcrumb-item>Catalog</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2">
        <h1 class="flex-1 text-3xl font-bold my-4">Catalog</h1>
        <span class="flex gap-2 items-center">
            <Button><Icon icon="ph:plus" />Add</Button>
        </span>
    </div>

    <Card></Card>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

definePageMeta({
    layout: 'console'
})
</script>