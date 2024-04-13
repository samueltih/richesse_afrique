<template>
<breadcrumbs>
        <breadcrumb-item href="/">Admin</breadcrumb-item>
        <breadcrumb-item>Users</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2 items-center">
        <h1 class=" flex-1 text-3xl font-bold my-4">Users</h1>
        <div class="flex gap-2">
            <Button>
                <Icon icon="ph:invite" />Invite
            </Button>
            <Button>
                <Icon icon="ph:import" />Import
            </Button>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'console'
})
</script>