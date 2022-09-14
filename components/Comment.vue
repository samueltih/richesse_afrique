<script lang="ts" setup>
defineProps({
  author: {
    type: [String],
  },
  title: {
    type: [String],
  },
  content: {
    type: [String],
  },
});
</script>


<template>
  <div>
    <h4>{{ $props.author }} - 27/08/2022</h4>
    <h3>{{ $props.title }}</h3>
    <p>{{ $props.content }}</p>
  </div>
</template>