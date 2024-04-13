<template>
  <FormKit
    form-class="flex flex-col gap-2"
    wrapper-class="flex flex-col gap-2"
    type="form"
    @submit="handleSubmit"
  >
    <TextField name="title" label="Title" placeholder="Title" />
    <TextArea name="summary" label="Summary" placeholder="Summary" />
    <h4>Content</h4>
    <ClientOnly>
      <Editor></Editor>
    </ClientOnly>
  </FormKit>
</template>

<script lang="ts" setup>
const emit = defineEmits<{ (e: "submit", data: any): void }>();

function handleSubmit($event: Event): void {
  emit("submit", $event);
}
</script>
