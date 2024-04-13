<template>
  <h1>Sign up</h1>
  <SignUpForm @submit="handleSignUp" />
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const handleSignUp = async (fields: { [key: string]: any }) => {
  console.log("Submitting credentials...", fields);
  const { data, error } = await supabase.auth.signUp({
    email: fields.email,
    password: fields.password,
  });

  if (error) console.error("Error during sign up ", error);
  else console.log("User created ", data);
};
</script>
