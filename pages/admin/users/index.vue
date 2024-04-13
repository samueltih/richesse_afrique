<template>
    <breadcrumbs>
        <breadcrumb-item href="/">Admin</breadcrumb-item>
        <breadcrumb-item>Users</breadcrumb-item>
    </breadcrumbs>
    <div class="flex gap-2 items-center">
        <h1 class="flex-1 text-3xl font-bold mt-4">Users</h1>
        <div class="flex gap-4 items-center">
            <button class="p-2 bg-stone-100 flex gap-2 items-center rounded-md" @click="handleInvite()">
                <Icon icon="ph:paper-plane-tilt-light" />Invite
            </button>
            <button class="p-2 bg-stone-100 flex gap-2 items-center rounded-md" @click="handleImport()">
                <Icon icon="ph:download-simple-light" />Import
            </button>
            <dropdown>
                <template #toggle>
                    <button class="p-2 bg-stone-100 flex gap-2 items-center rounded-md">
                        <Icon icon="ph:export-light" />Export
                    </button>
                </template>
                <dropdown-item @click="handleExport('csv')">
                    <Icon icon="bi:filetype-csv" />Export as CSV
                </dropdown-item>
                <dropdown-item @click="handleExport('json')">
                    <Icon icon="bi:filetype-json" />Export as JSON
                </dropdown-item>
            </dropdown>
        </div>
    </div>
    <div class="flex gap-4 items-center my-4">
        <span class="flex gap-2 items-center p-1 hover:cursor-pointer hover:bg-stone-50">All <span
                class="bg-stone-200 px-1 rounded">5</span></span>
        <span class="flex gap-2 items-center p-1 hover:cursor-pointer hover:bg-stone-50">Admin<span
                class="bg-stone-200 px-1 rounded">5</span></span>
        <span class="flex gap-2 items-center p-1 hover:cursor-pointer hover:bg-stone-50">Editor<span
                class="bg-stone-200 px-1 rounded">5</span></span>
        <span class="flex gap-2 items-center p-1 hover:cursor-pointer hover:bg-stone-50">Customers<span
                class="bg-stone-200 px-1 rounded">5</span></span>
        <span class="flex-1 flex justify-end items-center gap-4">
            Sort by
            <select class="p-2 bg-black bg-opacity-5 rounded">
                <option>Name</option>
                <option>Relevance</option>
            </select>
        </span>
    </div>
    <table class="my-4">
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
            <tr v-for="(user, index) in users" class="hover:cursor-pointer hover:bg-stone-50 my-2" :key="index">
                <td>
                    <checkbox />
                </td>
                <td class="py-2">
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
    <div class="flex justify-end">
        <paginator :number-of-pages="5" @page-change="$event => handlePageChange($event)"></paginator>
    </div>
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