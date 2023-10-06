<template>
    <breadcrumbs>
        <breadcrumb-item href="/account">Account</breadcrumb-item>
        <breadcrumb-item>Profile</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-12 items-center">
        <h1 class="flex-1 text-3xl font-bold capitalize">Profile</h1>
    </div>
    <div class="flex gap-4 items-stretch my-4">
        <div class="w-64">
            <h4 class="text-xl font-bold">
                Options
            </h4>
            <ul class="flex flex-col gap-2 my-2">
                <li><a href="general-info" class="py-2">General Information</a></li>
                <li><a href="payment-methods" class="py-2">Payment Methods</a></li>
                <li><a href="security" class="py-2">Security</a></li>
            </ul>
        </div>
        <div>
            <img class="w-64 h-64 rounded-md shadow-md object-cover" src="/black-woman.jpg" />
        </div>
        <div class="flex flex-1 flex-col gap-2">
            <input class="p-2 bg-stone-50" name="firstname" placeholder="First name" />
            <input class="p-2 bg-stone-50" name="lastname" placeholder="Last name" />
            <input class="p-2 bg-stone-50" name="email" placeholder="Email" />
            <input class="p-2 bg-stone-50" name="phoneNumber" placeholder="Phone number" />
            <input class="p-2 bg-stone-50" name="address" placeholder="Address" />
            <input class="p-2 bg-stone-50" name="preferredLanguage" placeholder="Preferred language" />
            <button class="p-2 bg-emerald-500 rounded">Save</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'account'
})
</script>