<template>
    <FormKit form-class="flex flex-col gap-2" wrapper-class="flex flex-col gap-2" type="form" @submit="handleSubmit">
        <TextField type="email" name="email" label="email" placeholder="Email" />
        <TextField type="password" name="password" label="password" placeholder="Password" />
        <div class="flex gap-4 items-center">
            <FormKit name="stayLogged" outer-class="flex-1" wrapper-class="flex gap-2 items-center" type="checkbox"
                label="Stay logged-in" :value="false" />
            <div>
                <a href="/forgot-password">Forgot password?</a>
            </div>
        </div>
    </FormKit>
</template>

<script lang="ts" setup>
const emit = defineEmits<(e: "submit", data: any) => void>();

function handleSubmit($event: Event): void {
    emit("submit", $event);
}
</script>
