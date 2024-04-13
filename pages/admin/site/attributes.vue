<template>
    <h1>This is the attributes section</h1>
    <ClientOnly>
        <SiteSettingsForm @submit="handleSubmit"/>
    </ClientOnly>
</template>

<script lang="ts" setup>

function handleSubmit($event: any) {
    console.log("Form values: ", $event);
}
</script>

