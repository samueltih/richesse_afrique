<template>
    <breadcrumbs>
        <breadcrumb-item href="/">Admin</breadcrumb-item>
        <breadcrumb-item>Users</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2 items-center">
        <h1 class=" flex-1 text-3xl font-bold">Overview</h1>
    </div>
    <div class="my-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="flex-1 h-36 bg-stone-100 rounded-md p-4">Total Orders</div>
      <div class="flex-1 h-36 bg-stone-100 rounded-md p-4">Orders</div>
      <div class="flex-1 h-36 bg-stone-100 rounded-md p-4">Orders</div>
      <div class="flex-1 h-36 bg-stone-100 rounded-md p-4">Orders</div>
    </div>
    <Editor
      api-key="p6i7viifvnu002auem8a1cq1ylr6j6bsby4ny0exig4kvypq"
      :init="{
        plugins: 'lists link image table code help wordcount'
      }"
    />
</template>

<script lang="ts" setup>
import Editor from '@tinymce/tinymce-vue';

definePageMeta({
    layout: 'console'
})
</script>