<template>
    <breadcrumbs>
    <breadcrumb-item href="/admin">Admin</breadcrumb-item>
    <breadcrumb-item href="/admin/blog">Blog</breadcrumb-item>
    <breadcrumb-item>{{ id }}</breadcrumb-item>
  </breadcrumbs>
  <div class="flex gap-2 items-center">
    <h1 class="flex-1 text-3xl font-bold my-4">Blog</h1>
    <Button><Icon icon="ph:floppy-disk" />Save Draft</Button>
    <Button><Icon icon="ph:trash" />Preview</Button>
    <Button><Icon icon="ph:trash" />Publish</Button>
  </div>
  <Formkit type="form">
    <div class="w-full flex gap-8">
    <div class="flex-1">
        <BlogPostForm />
    </div>
    <div class="w-80">
        <FormKit type="form" class="flex flex-col gap-2">
            <TextField name="title" label="Title" placeholder="Title" />
            <TextArea name="summary" label="Summary" placeholder="Summary" />
            <FormKit type="checkbox" label="Published" name="published"/>
        </FormKit>
    </div>
  </div>
  </Formkit>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
const id = ref(1);
</script>