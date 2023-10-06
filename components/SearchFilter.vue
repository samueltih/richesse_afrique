<template>
  <vue-collapsible-panel>
    <template #title>
      <span v-if="!title" class="flex gap-2">
        <slot name="header" />
      </span>
      <h4 v-if="title" class="flex-1">{{ title }}</h4>
    </template>
    <template #content>
      <div class="ra-filter-tray" :style="{ maxHeight: open ? '1000px' : '0px' }">
        <div class="ra-filter-input">
          <FormKit placeholder="which option" type="text" />
        </div>
        <ul class="ra-filter-options">
          <li v-for="(option, index) in options" :key="index" class="ra-filter-option">
            <span class="text-sm">{{ option }}</span>
            <FormKit type="checkbox"></FormKit>
          </li>
        </ul>
      </div>
    </template>
  </vue-collapsible-panel>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { Ref } from "vue";
import TextInput from "./Form/TextInput.vue";

defineProps({
  options: {
    type: [Array],
    default: [],
  },
  title: {
    type: [String],
  },
});

let open: Ref<boolean> = ref<boolean>(true);

const toggleFilter = () => {
  open.value = !open.value;
};
</script>

<style lang="scss">
.ra-filter-header {
  display: flex;
  gap: '1rem';
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  &>h4 {
    flex: 1;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
}

.ra-filter-tray {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: max-height ease-in 0.5s;

  .ra-filter-input {
    padding: 3px;

    .formkit-inner {
      display: flex;

      &>input {
        border: none;
        border-radius: 3px;
        outline: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        width: 100%;
      }
    }
  }
}

.ra-filter-options {
  list-style-type: none;
  padding-inline-start: 10px;

  &>.ra-filter-option {
    display: flex;
    align-items: flex-start;
    padding: 3px 0px;

    &:hover {
      cursor: pointer;
    }

    &>span {
      flex: 1;
    }
  }
}
</style>
