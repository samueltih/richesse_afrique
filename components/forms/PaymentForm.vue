<template>
    <FormKit form-class="flex flex-col gap-2" wrapper-class="flex flex-col gap-2" type="form" @submit="handleSubmit">
        <FormKit type="text" name="email" id="email" validation="required|not:Admin" label="Email" placeholder="Email" />
        <FormKit type="password" name="password" id="password" validation="required|not:Admin" label="Password"
            placeholder="Password" />
    </FormKit>
</template>

<script lang="ts" setup>
const emit = defineEmits<{(e: "submit", data: any): void}>();

function handleSubmit($event: Event): void {
    emit("submit", $event);
}
</script>
