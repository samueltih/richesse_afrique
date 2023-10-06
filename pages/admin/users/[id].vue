<template>
    <breadcrumbs>
        <breadcrumb-item href="/">Admin</breadcrumb-item>
        <breadcrumb-item>Users</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2 items-center">
        <div class="flex-1 flex gap-4 items-center">
            <avatar></avatar>
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl font-semibold">John Doe</h1>
                <span>Admin</span>
            </div>
        </div>
        <div class="flex gap-2">
        </div>
    </div>
    <div class="flex gap-4">
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Profile</span>
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Orders</span>
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Refunds</span>
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Activity</span>
        <span class="p-2 hover:cursor-pointer hover:bg-stone-50">Security</span>
        <span class="flex-1 flex justify-end items-center gap-2">
k
        </span>
    </div>
    <table>
        <thead>
            <tr>
                <th>
                    <checkbox />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Last Login</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" class="hover:cursor-pointer hover:bg-stone-50" :key="index">
                <td>
                    <checkbox />
                </td>
                <td>
                    <div class="flex gap-2">
                        <avatar />
                        <div class="flex flex-col">
                            <h4 class="font-semibold">{{ user.name }}</h4>
                            <span class="text-sm text-stone-500 text-light">{{ user.role }}</span>
                        </div>
                    </div>
                </td>
                <td>{{ user.email }}</td>
                <td>
                    <span class="font-semibold">{{ user.lastLogin }}</span>
                </td>
                <td>
                    <Button>Block</Button>
                </td>
            </tr>
        </tbody>
    </table>
    <paginator :number-of-pages="5" @page-change="$event => handlePageChange($event)"></paginator>
    <modal :open="showInviteModal" @close="showInviteModal = false">
        <h1 class="text-3xl font-bold">Invite user</h1>
    </modal>
    <modal :open="showImportModal" @close="showImportModal = false">
        <h1 class="text-3xl font-bold">Import user</h1>
    </modal>
    <modal :open="showExportModal" @close="showExportModal = false">
        <h1 class="text-3xl font-bold">Export user</h1>
    </modal>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
const showInviteModal = ref<boolean>(false);
const showImportModal = ref<boolean>(false);
const showExportModal = ref<boolean>(false);

const users = ref<any[]>([{
    name: "John Doe",
    role: "Admin",
    email: "john.doe@richesseafrique.cm",
    lastLogin: "3 hours ago"
}, {
    name: "Jane Doe",
    role: "Admin",
    email: "jane.doe@richesseafrique.cm",
    lastLogin: "2 months ago"
}, {
    name: "Uncle Sam",
    role: "Editor",
    email: "uncle.sam@richesseafrique.cm",
    lastLogin: "30 minutes ago"
}])

function handleExport(format: "csv" | "json") {
    console.log("export it");
    showExportModal.value = true;
}

function handleImport() {
    showImportModal.value = true;
}

function handleInvite() {
    showInviteModal.value = true;
}

function handlePageChange($event: any) {
    console.log("Value: ", $event);
}

definePageMeta({
    layout: 'console'
})
</script>