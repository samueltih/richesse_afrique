<template>
    <breadcrumbs>
        <breadcrumb-item href="/admin">Admin</breadcrumb-item>
        <breadcrumb-item href="/admin/messages">Messages</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2 items-center">
        <h1 class=" flex-1 text-3xl font-bold my-4">Messages</h1>
        <div class="flex gap-2">
            <Button>
                <Icon icon="ph:invite" />Invite
            </Button>
            <Button>
                <Icon icon="ph:import" />Import
            </Button>
        </div>
    </div>

    <div class="flex items-stretch">
        <ul class="flex flex-col w-64 py-2">
            <h4 class="my-2 font-semibold p-2">Discussions</h4>
            <li class="flex flex-col p-2">
                <span>Jane Doe</span>
                <span class="text-sm text-gray-400">First message</span>
            </li>
            <li class="flex flex-col p-2 bg-green-200">
                <span>Jane Doe</span>
                <span class="text-sm text-gray-400">First message</span>
            </li>
            <li class="flex flex-col p-2">
                <span>Jane Doe</span>
                <span class="text-sm text-gray-400">First message</span>
            </li>
        </ul>
        <div class="flex-1">
            <div class="bg-stone-100 p-2 h-[80vh] overflow-y-auto">
                <div class="flex flex-col gap-2">
            <div class="flex justify-center sticky top-4">
                <span class="p-2 bg-white shadow">10/06/2023</span>
            </div>
            <div class="flex justify-end">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-right">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sapiente expedita consequuntur, facere
                        doloremque, labore aut qui voluptatibus reiciendis quia ad, eum quae natus rem mollitia laudantium.
                  
                   ''      Nulla, ad! Excepturi!</p>
                    <div class="text-sm text-gray-400">15:46</div>
                </span>
            </div>
            <div class="flex justify-start">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-left">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sapiente expedita consequuntur, facere
                        doloremque, labore aut qui voluptatibus reiciendis quia ad, eum quae natus rem mollitia laudantium.
                        Nulla, ad! Excepturi!</p>
                    <div class="text-sm text-gray-400">16:00</div>
                </span>
            </div>
            <div class="flex justify-start">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-left">
                    <p>Lorem ipsum dolor</p>
                    <div class="text-sm text-gray-400">16:05</div>
                </span>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex justify-center sticky top-4">
                <span class="p-2 bg-white shadow">10/06/2023</span>
            </div>
            <div class="flex justify-end">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-right">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sapiente expedita consequuntur, facere
                        doloremque, labore aut qui voluptatibus reiciendis quia ad, eum quae natus rem mollitia laudantium.
                  
                   ''      Nulla, ad! Excepturi!</p>
                    <div class="text-sm text-gray-400">15:46</div>
                </span>
            </div>
            <div class="flex justify-start">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-left">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sapiente expedita consequuntur, facere
                        doloremque, labore aut qui voluptatibus reiciendis quia ad, eum quae natus rem mollitia laudantium.
                        Nulla, ad! Excepturi!</p>
                    <div class="text-sm text-gray-400">16:00</div>
                </span>
            </div>
            <div class="flex justify-start">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-left">
                    <p>Lorem ipsum dolor</p>
                    <div class="text-sm text-gray-400">16:05</div>
                </span>
            </div>
            <div class="flex justify-end">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-right">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sapiente expedita consequuntur, facere
                        doloremque, labore aut qui voluptatibus reiciendis quia ad, eum quae natus rem mollitia laudantium.
                  
                   ''      Nulla, ad! Excepturi!</p>
                    <div class="text-sm text-gray-400">15:46</div>
                </span>
            </div><div class="flex justify-end">
                <span class="p-2 shadow bg-white rounded max-w-[50%] text-right">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sapiente expedita consequuntur, facere
                        doloremque, labore aut qui voluptatibus reiciendis quia ad, eum quae natus rem mollitia laudantium.
                  
                   ''      Nulla, ad! Excepturi!</p>
                    <div class="text-sm text-gray-400">15:46</div>
                </span>
            </div>
        </div>
            </div>
            
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'console'
})
</script>