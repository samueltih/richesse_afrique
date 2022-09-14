<script lang="ts" setup>
import currencies from '../assets/currency.json';

const props = defineProps({
  amount: {
    type: [Number],
    default: 0,
  },
  targetCurrency: {
    type: [String],
    default: "USD",
  },
  sourceCurrency: {
    type: [String],
    default: "XAF",
  },
});

const convert: () => number = () => {
  return props.amount;
};
</script>

<template>
  <span>{{ convert() }} {{ targetCurrency ?? sourceCurrency }}</span>
</template>
