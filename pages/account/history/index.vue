<template>
    <breadcrumbs>
        <breadcrumb-item href="/account">Account</breadcrumb-item>
        <breadcrumb-item>History</breadcrumb-item>
    </breadcrumbs>
    <h1 class="text-3xl font-bold my-2">History</h1>
    <div>
        <timeline>
            <timeline-item>First Item <template #icon>1st</template></timeline-item>
            <timeline-item>Second Item<template #icon>2nd</template></timeline-item>
            <timeline-item><p>Third Item <br /> Item <br /> Item <br /> Go <br /> Go <br /> Go <br /> Go</p><template #icon>3rd</template></timeline-item>
        </timeline>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'account'
})
</script>