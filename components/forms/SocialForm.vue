<template>
  <FormKit type="list" name="social" :value="[{}]" dynamic #default="{ items, node, value }">
    <FormKit
      type="group"
      v-for="(item, index) in items"
      :key="item"
      :index="index"
    >
      <div class="flex gap-2 items-center">
        <FormKit
          type="select"
          name="platform"
          :options="getOptions(index, value ?? [])"
        />
        <FormKit type="url" name="profile" />
        <FormKit type="button" @click="() => node.input(value?.filter((_, i) => i !== index))"><Icon icon="ph:trash-light" /></FormKit>
      </div>
    </FormKit>

    <FormKit type="button" @click="() => items.length !== SOCIAL_NETWORKS.length && node.input(value?.concat({}))">
      + Add another
    </FormKit>
  </FormKit>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const SOCIAL_NETWORKS = ['facebook', 'instagram', 'twitterx', 'linkedin', 'tiktok'];

function getOptions(index: number, options: any[]) {
  return SOCIAL_NETWORKS.filter((value) => value === options[index].platform || options.every((v) => v.platform !== value));
}
</script>
