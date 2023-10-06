<template>
    <section class="flex flex-col gap-4 max-w-72 w-full">
        <h1 class="text-2xl font-bold">Sign in</h1>
        <FormKit form-class="flex flex-col gap-2" wrapper-class="flex flex-col gap-2" type="form" @submit="handleLogin">
            <FormKit type="text" name="email" id="email" validation="required|not:Admin" label="Email" placeholder="Email" />
            <FormKit type="password" name="password" id="password" validation="required|not:Admin" label="Password" placeholder="Password" />
            <div class="flex gap-4 items-center">
                <FormKit name="stayLogged" outer-class="flex-1" wrapper-class="flex gap-2 items-center" type="checkbox" label="Stay logged-in" :value="false"/>
                <div>
                    <a href="/forgot-password">Forgot password</a>
                </div>
            </div>
        </FormKit>
    </section>
</template>

<script setup lang="ts">

const handleLogin = async (fields: { [key: string]: any }) => {
    console.log('Submitting credentials...', fields);
}
</script>