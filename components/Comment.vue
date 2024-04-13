<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  author: {
    type: [String],
  },
  title: {
    type: [String],
  },
  content: {
    type: [String],
  },
  rating: {
    type: Number,
    default: 3
  }
});

const emit = defineEmits<{
  (e: 'feedback', helpful: any): void
}>()

const rating = ref<any>(props.rating);

function handleFeedback($event: any) {
  emit('feedback', $event);
}
</script>


<template>
  <div class="flex gap-4 my-2">
    <div class="flex flex-col items-center p-2 gap-2">
      <avatar />
      <div class="text-sm">{{ $props.author }}</div>
    </div>
    <div class="flex-1">
      <div class="flex gap-2 items-stretch">
        <span class="flex gap-2 items-center">
          <star-rating v-model="rating" :showControl="false" :disableClick="true" style="margin: 0px; padding: 0px"
            starSize="18" starColor="#48ac29" inactiveColor="lightgrey" />
          <span>5</span>
        </span>
        <divider vertical />
        <span class="text-sm text-stone-400 flex items-center">
          3 hours ago
        </span>
      </div>
      <h3>{{ $props.title }}</h3>
      <p class="text-sm">{{ $props.content }}</p>
      <div class="flex gap-2 my-2 items-stretch">
        <span class="text-sm flex items-center mr-2">Helpful?</span>
        <span class="flex gap-2 ">
          <button @click="handleFeedback({})">
            <Icon icon="ph:thumbs-up-light" :height="18" />
          </button> (1)</span>
        <divider vertical />
        <span class="flex gap-2">
          <button @click="handleFeedback({})">
            <Icon icon="ph:thumbs-down-light" :height="18" />
          </button> (1)</span>
      </div>
  </div>
</div></template>