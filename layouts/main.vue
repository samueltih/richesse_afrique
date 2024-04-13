<template>
    <div class="flex flex-col h-screen">
        <navigation-bar />
        <main class="flex flex-1 flex-col items-center">
            <slot />
        </main>
        <main-footer></main-footer>
    </div>
    <drawer :open="open" @close="open = false">
        <h1 class="text-3xl font-bold">Menu</h1>
    </drawer>
</template>

<script lang="ts" setup>
const open = ref<boolean>(false);
</script>