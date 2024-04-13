<template>
    <section class="flex flex-col gap-4 max-w-72 w-full">
        <h1 class="text-2xl font-bold">Sign in</h1>
        <SignInForm @submit="handleLogin"/>
    </section>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();
const route = useRoute();

const handleLogin = async (fields: { [key: string]: any }) => {
    console.log('Submitting credentials...', fields);
    const { data, error } = await supabase.auth.signInWithPassword({
        email: fields.email,
        password: fields.password
    });
    if (!error) {
        await navigateTo(route.query.redirect as string ?? '/');
    }
}

const handleLoginWithFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook'
    });
}
const handleLoginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
    });
}
</script>