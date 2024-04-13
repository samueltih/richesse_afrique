<template>
    <FormKit form-class="flex flex-col gap-2" wrapper-class="flex flex-col gap-2" type="form" @submit="handleSubmit">
        <TextField name="name" label="name" placeholder="Name" />
        <TextField type="email" name="email" label="email" placeholder="Email" />
        <TextField type="password" name="password" label="password" placeholder="Password" />
        <TextField type="password" name="password_confirm" label="Confirm password" placeholder="Confirm password" validation="confirm"/>
    </FormKit>
</template>
    
<script lang="ts" setup>
const emit = defineEmits<(e: 'submit', data: any) => void>()

function handleSubmit($event: Event): void {
    emit('submit', $event);
}
</script>