<template>
  <FormKit
    form-class="flex flex-col gap-2"
    wrapper-class="flex flex-col gap-2"
    type="form"
    @submit="handleSubmit"
  >
    <TextField name="name" label="name" placeholder="Name" />
    <RichTextArea />
    <TextField type="number" name="price" label="price" placeholder="Price" />
    <TextField name="sku" label="SKU" placeholder="SKU" />

    <section>
      <h4>Media</h4>
      <FormKit
        type="file"
        label="Your files"
        help="This input starts with files already “attached”."
        multiple="true"
        :value="[
          { name: 'purple-taste.pdf' },
          { name: 'chocolate-recipe.docx' },
        ]"
      />
    </section>
  </FormKit>
</template>

<script lang="ts" setup>
const emit = defineEmits<{ (e: "submit", data: any): void }>();

function handleSubmit($event: Event): void {
  emit("submit", $event);
}
</script>
