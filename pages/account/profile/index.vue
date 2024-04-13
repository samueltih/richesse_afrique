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
                <li><a href="profile/general-info" class="py-2">General Information</a></li>
                <li><a href="profile/payment-methods" class="py-2">Payment Methods</a></li>
                <li><a href="profile/security" class="py-2">Security</a></li>
            </ul>
        </div>
        <FormKit form-class="flex gap-2 flex-1" wrapper-class="flex flex-col gap-2" type="form" @submit="handleSubmit">
            <div>
                <img class="w-64 h-64 rounded-md shadow-md object-cover" src="/black-woman.jpg" />
                <FormKit class="hidden" type="file" name="profilePicture" id="profilePicture" validation="required|not:Admin"
                    placeholder="Profile picture" />
            </div>
            <div class="flex flex-1 flex-col gap-2">
                <FormKit type="text" name="firstname" id="firstname" inner-class="p-2 bg-stone-100"
                    input-class="bg-transparent w-full outline-none" validation="required|not:Admin"
                    placeholder="First Name" />
                <FormKit type="text" name="lastname" id="lastname" inner-class="p-2 bg-stone-100"
                    input-class="bg-transparent w-full outline-none" validation="required|not:Admin"
                    placeholder="Last Name" />
                <FormKit type="email" name="email" id="email" inner-class="p-2 bg-stone-100"
                    input-class="bg-transparent w-full outline-none" validation="required|not:Admin" placeholder="Email" />
                <FormKit type="tel" name="phoneNumber" id="phoneNumber" inner-class="p-2 bg-stone-100"
                    input-class="bg-transparent w-full outline-none" validation="required|not:Admin"
                    placeholder="Phone number" />
                <FormKit type="text" name="address" id="address" inner-class="p-2 bg-stone-100"
                    input-class="bg-transparent w-full outline-none" validation="required|not:Admin"
                    placeholder="Address" />
                <FormKit type="text" name="preferedLanguage" id="preferredLanguage" inner-class="p-2 bg-stone-100"
                    input-class="bg-transparent w-full outline-none" validation="required|not:Admin"
                    placeholder="Preferred language" />
                <button class="p-2 bg-emerald-500 rounded">Save</button>
            </div>
        </FormKit>
    </div>
</template>

<script lang="ts" setup>

function handleSubmit(data: any) {
    console.log("Voici les données: ", data);
}

definePageMeta({
    layout: 'account'
})
</script>