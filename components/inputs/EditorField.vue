<template>
  <FormKit
    :type="input"
    :name="props.name"
    label="tinymce"
    api-key="p6i7viifvnu002auem8a1cq1ylr6j6bsby4ny0exig4kvypq"
    :init="{
      menubar: false,
      plugins: 'lists link image table code help wordcount searchreplace',
    }"
  />
</template>

<script lang="ts" setup>
import { createInput } from '@formkit/vue';
import Editor from './Editor.vue';

const input = createInput(Editor);

const props = defineProps({
    name: {
        type: String,
    }
})
</script>