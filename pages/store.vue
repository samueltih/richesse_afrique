<template>
    <breadcrumbs>
            <breadcrumb-item href="/">Home</breadcrumb-item>
            <breadcrumb-item>FAQ</breadcrumb-item>
        </breadcrumbs>
        <h1 class="text-3xl font-bold my-4">FAQ</h1>
    <p>These are our stores</p>
    <GoogleMap api-key="AIzaSyC32AJUsLxJoAU-2KrBcTQFtLc42N_s1HU" style="width: 100%; height: 500px" :center="center"
        :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<script lang="ts" setup>
const center = ref<any>({ lat: 40.689247, lng: -74.044502 });

definePageMeta({
    layout: "main",
});
</script>