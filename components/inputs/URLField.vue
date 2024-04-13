<template>
    <FormKit type="url" :name="props.name" :placeholder="placeholder" />
</template>

<script lang="ts" setup>
const props = defineProps({
    name: {
        type: String
    },
    placeholder: {
        type: String
    },
    required: {
        type: Boolean,
        default: false
    }
});

watch(() => props.name, (value, oldValue) => {
    console.log("Name: ", value, oldValue);
});
</script>