<template>
  <FormKit
    form-class="flex flex-col gap-2"
    wrapper-class="flex flex-col gap-2"
    type="form"
    @submit="handleSubmit"
  >
    <TextField name="enterprise" placeholder="Entreprise" />
    <TextField name="slogan" placeholder="Slogan" />
    <TextField name="description" placeholder="Description" />

    <ImageUploader name="favicon" />
    <ImageUploader name="logo" />

    <SocialForm></SocialForm>
  </FormKit>
</template>

<script lang="ts" setup>
const emit = defineEmits<{ (e: "submit", data: any): void }>();

function handleSubmit($event: Event): void {
  emit("submit", $event);
}
</script>
