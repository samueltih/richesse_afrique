<template>
    <div class="mt-2 mb-4">
        <breadcrumbs>
            <breadcrumb-item><a href="/account">Account</a></breadcrumb-item>
            <breadcrumb-item>Orders</breadcrumb-item>
        </breadcrumbs>
        <div class="flex gap-12 items-center">
            <h1 class="flex-1 text-3xl font-bold capitalize">My orders</h1>
            <div class="flex gap-4 items-center">
                <span class="p-2 bg-green-100 rounded">Active</span>
                <span class="p-2 bg-sky-100 rounded">Done</span>
            </div>
            <div class="flex gap-2 items-center">
                Sort By
                <select class="p-2 rounded">
                    <option value="relevance">Relevance</option>
                </select>
            </div>
        </div>
    </div>
    <section class="flex gap-4 my-4">
        <table class="ra-table w-full">
            <thead>
                <tr class="text-grey-600">
                    <th><input type="checkbox" /></th>
                    <th>#</th>
                    <th>Ordered on</th>
                    <th>Items</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr class="transition-colors">
                    <td><input type="checkbox" /></td>
                    <td class="font-semibold">ORD-15234</td>
                    <td>{{ format(sub(new Date(), { seconds: 500000 }), "MMMM dd, yyyy") }}</td>
                    <td>
                        <div class="flex gap-2 items-center">
                            <Icon icon="ph:shopping-cart-simple-bold" class="text-stone-500" />14
                        </div>
                    </td>
                    <td>{{ 88000 }} F</td>
                    <td>
                        <Tag class="bg-yellow-100 text-yellow-500 rounded">
                            <Icon icon="ph:circle-fill" :height="10" />In Progress
                        </Tag>
                    </td>
                </tr>

                <tr class="transition-colors">
                    <td><input type="checkbox" /></td>
                    <td class="font-semibold">ORD-15234</td>
                    <td>{{ format(sub(new Date(), { seconds: 90000000 }), "MMMM dd, yyyy") }}</td>
                    <td>
                        <div class="flex gap-2 items-center">
                            <Icon icon="ph:shopping-cart-simple-bold" class="text-stone-500" />6
                        </div>
                    </td>
                    <td>{{ 88000 }} F</td>
                    <td>
                        <Tag class="bg-yellow-100 text-yellow-500 rounded">
                            <Icon icon="ph:circle-fill" :height="10" />In Progress
                        </Tag>
                    </td>
                </tr>

                <tr>
                    <td><input type="checkbox" /></td>
                    <td class="font-semibold">ORD-15234</td>
                    <td>{{ format(sub(new Date(), { seconds: 800000 }), "MMMM dd, yyyy") }}</td>
                    <td>
                        <div class="flex gap-2 items-center">
                            <Icon icon="ph:shopping-cart-simple-bold" class="text-stone-500" />5
                        </div>
                    </td>
                    <td>{{ 88000 }} F</td>
                    <td>
                        <Tag class="bg-yellow-100 text-yellow-500 rounded">
                            <Icon icon="ph:circle-fill" :height="10" />In Progress
                        </Tag>
                    </td>
                </tr>

                <tr>
                    <td><input type="checkbox" /></td>
                    <td class="font-semibold">ORD-15234</td>
                    <td>{{ format(new Date(), "MMMM dd, yyyy") }}</td>
                    <td>
                        <div class="flex gap-2 items-center">
                            <Icon icon="ph:shopping-cart-simple-bold" class="text-stone-500" /> 9
                        </div>
                    </td>
                    <td>{{ 88000 }} F</td>
                    <td>
                        <Tag class="bg-yellow-100 text-yellow-500 rounded">
                            <Icon icon="ph:circle-fill" :height="10" />In Progress
                        </Tag>
                    </td>
                </tr>

            </tbody>
        </table>
    </section>
    <div class="flex justify-end">
        <paginator :number-of-pages="5"></paginator>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { format, sub } from "date-fns";

definePageMeta({
    layout: 'account'
})
</script>

<style>
.ra-table tr th {
    text-align: left;
    padding: 0.5rem;
}

.ra-table tr td {
    padding: 0.5rem;
}

.ra-table tbody tr:hover {
    cursor: pointer;
    background-color: whitesmoke;
}
</style>