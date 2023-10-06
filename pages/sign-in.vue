<template>
    <h1>Sign in</h1>
    <FormKit type="form" @submit="handleLogin">
        <FormKit type="text" name="email" id="email" validation="required|not:Admin" label="Password" placeholder="Email" />
        <FormKit type="password" name="password" id="password" validation="required|not:Admin" label="Password"
            placeholder="Password" />
        <div class="flex gap-4 items-center">
            <FormKit outer-class="flex-1" wrapper-class="flex gap-2 items-center" type="checkbox" label="Stay logged-in" />
            <div>
                <a href="/forgot-password">Forgot password</a>
            </div>
        </div>
    </FormKit>
</template>

<script setup lang="ts">

const handleLogin = async (fields: { [key: string]: any }) => {
    console.log('Submitting credentials...', fields);
}
</script>