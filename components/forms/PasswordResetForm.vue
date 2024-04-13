<template>
<FormKit form-class="flex flex-col gap-2" wrapper-class="flex flex-col gap-2" type="form" @submit="handleSubmit">
    <TextField type="email" name="email" label="email" placeholder="Email" />
</FormKit>
</template>

<script lang="ts" setup>
const emit = defineEmits<(e: 'submit', data: any) => void>()

function handleSubmit($event: Event): void {
    emit('submit', $event);
}
</script>