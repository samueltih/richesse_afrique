<template>
    <FormKit
      :type="type"
      :name="name"
      :id="id"
      :label="label"
      :placeholder="placeholder"
      :disabled="disabled"
      inner-class="p-2 bg-stone-100"
      input-class="bg-transparent w-full outline-none"
    />
  </template>
  
  <script lang="ts" setup>
  const props = defineProps({
    id: String,
    type: {
      type: String,
      default: "text",
    },
    name: String,
    placeholder: String,
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    validation: {
      type: String,
      default: ''
    }
  });
  </script>
  