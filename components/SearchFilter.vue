<script setup lang="ts">
import { Ref } from "vue";
import TextInput from "./Form/TextInput.vue";

defineProps({
  options: {
    type: [Array],
    default: [],
  },
  title: {
    type: [String],
    default: "Title",
  },
});

let open: Ref<boolean> = ref<boolean>(true);

const toggleFilter = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="ra-filter">
    <div class="ra-filter-header" @click="toggleFilter">
      <h4>{{ title }}</h4>
      <span> > </span>
    </div>
    <div
      class="ra-filter-tray"
      :style="{ maxHeight: open ? '1000px' : '0px' }"
    >
      <div class="ra-filter-input">
        <FormKit placeholder="which option" type="text" />
      </div>
      <ul class="ra-filter-options">
        <li
          v-for="(option, index) in options"
          :key="index"
          class="ra-filter-option"
        >
          <span>{{ option }}</span>
          <FormKit type="checkbox"></FormKit>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.ra-filter-header {
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  & > h4 {
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
  background-color: rgba(0, 0, 0, 0.03);

  .ra-filter-input {
    padding: 3px;

    .formkit-inner {
      display: flex;

      & > input {
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

  & > .ra-filter-option {
    display: flex;
    align-items: flex-start;
    padding: 3px 0px;

    &:hover {
      cursor: pointer;
    }

    & > span {
      flex: 1;
    }
  }
}
</style>
