<template>
  <img class="ra-avatar" :src="src" :alt="imageAlt"/>
</template>

<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      default: "/avatar.png",
    },
    imageAlt: {
      type: String,
      default: "Avatar image"
    }
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
