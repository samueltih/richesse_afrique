<template>
<breadcrumbs>
        <breadcrumb-item href="/admin">Admin</breadcrumb-item>
        <breadcrumb-item href="/admin/orders">Orders</breadcrumb-item>
        <breadcrumb-item>1</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2 items-center">
        <h1 class=" flex-1 text-3xl font-bold my-4">Order #15A2</h1>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'console'
})
</script>