<template>
    <h1>Sign up</h1>
    <FormKit form-class="flex flex-col gap-2" wrapper-class="flex flex-col gap-2" type="form" @submit="handleLogin">
        <FormKit type="name" name="name" id="name" validation="required|not:Admin" label="Name"
            placeholder="Name" />
        <FormKit type="text" name="email" id="email" validation="required|not:Admin" label="Email" placeholder="Email" />
        <FormKit type="password" name="password" id="password" validation="required|not:Admin" label="Password"
            placeholder="Password" />
        <FormKit type="password" name="cpassword" id="password" validation="required|not:Admin" label="Password"
            placeholder="Password" />
        <div class="flex gap-4 items-center">
            <FormKit name="stayLogged" outer-class="flex-1" wrapper-class="flex gap-2 items-center" type="checkbox"
                label="Stay logged-in" :value="false" />
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
