<template>
  <img class="ra-avatar" :src="src" />
</template>

<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      default: "/public/avatar.png",
    },
  },
};
</script>

<style scoped>
.ra-avatar {
  height: 45px;
  width: 45px;
  border-radius: 50%;
}
</style>
