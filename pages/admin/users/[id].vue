<template>
    <breadcrumbs>
        <breadcrumb-item href="/">Admin</breadcrumb-item>
        <breadcrumb-item>Users</breadcrumb-item>
        <breadcrumb-item>1</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2 items-center my-2">
        <div class="flex-1 flex gap-4 items-center">
            <avatar></avatar>
            <div class="flex flex-col">
                <h1 class="text-2xl font-semibold">John Doe</h1>
                <span>Admin</span>
            </div>
        </div>
        <div class="flex gap-2">
        </div>
    </div>

    <div class="flex gap-4">
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50 text-green-500">Profile</span>
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Orders</span>
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Refunds</span>
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Coupons</span>
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Activity</span>
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Security</span>
        <span class="flex-1 flex justify-end items-center gap-2">
        </span>
    </div>

    <div>
        <div>First Name: John</div>
        <div>Last Name: Doe</div>
        <div>Phone Number: +237 999999999</div>
        <div>
            Location: Statue of Liberty <ClientOnly>
                <GoogleMap api-key="AIzaSyC32AJUsLxJoAU-2KrBcTQFtLc42N_s1HU" style="width: 100%; height: 500px" :center="center"
        :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
            </ClientOnly>
        </div>
    </div>

</template>

<script lang="ts" setup>
const center = ref<any>({ lat: 40.689247, lng: -74.044502 });

definePageMeta({
    layout: 'console'
})
</script>