<template>
    <div class="mt-2 mb-4">
        <div class="p-4 rounded bg-emerald-100">
            <breadcrumbs>
                <breadcrumb-item><a href="/account">Account</a></breadcrumb-item>
                <breadcrumb-item><a href="/orders">Orders</a></breadcrumb-item>
                <breadcrumb-item>1</breadcrumb-item>
            </breadcrumbs>
            <div class="flex gap-12 items-center">
                <h1 class="flex-1 text-3xl font-bold my-4 capitalize">#ORD-15236</h1>
                <div class="flex gap-4 items-center">
                    <Tag>Items</Tag>
                </div>
                <div class="flex gap-2 items-center">
                    <Button>
                        <Icon icon="ph:chat" />Message
                    </Button>
                    <Button>
                        <Icon icon="ph:download" />Download PDF
                    </Button>
                </div>
            </div>
        </div>
        <div class="flex gap-8 my-4">
            <div class="flex-1">
                <div class="my-2 flex gap-2">
                    <h1 class="text-2xl font-semibold flex-1">Items (3)</h1>
                    <div class="flex gap-2 items-center px-2 text-stone-500">
                        <Icon icon="ph:sort-ascending" height="24" />
                    </div>
                </div>
                <div class="rounded-md py-4">
                    <table class="ra-items-table w-full border-collapse">
                        <tbody>
                            <tr>
                                <td class="w-2/3">
                                    <div class="flex gap-4 items-center">
                                        <div class="bg-stone-100 p-2">
                                            <img src="/Lotion-Sivoderm-Cos-Ecla-0519.png" class="h-20 w-20" />
                                        </div>

                                        <div class="flex flex-col gap-2">
                                            <a href="/product/1">Poudre de Ghassoul, 50cl</a>
                                            <div class="flex gap-2 items-center">
                                                <Tag>
                                                    <Icon icon="ph:tag" />Poudre
                                                </Tag>
                                            </div>
                                            <div class="text-stone-500 text-sm">SKU 15</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="font-semibold text-lg">3000 F x 2</td>
                                <td class="font-semibold text-lg">6000 F</td>
                            </tr>

                            <tr>
                                <td class="w-2/3">
                                    <div class="flex gap-4 items-center">
                                        <div class="bg-stone-100 p-2">
                                            <img src="/Lotion-Sivoderm-Cos-Ecla-0519.png" class="h-20 w-20" />
                                        </div>

                                        <div class="flex flex-col gap-2">
                                            <a href="/product/1">Poudre de Ghassoul, 50cl</a>
                                            <div class="flex gap-2 items-center">
                                                <Tag>
                                                    <Icon icon="ph:tag" />Poudre
                                                </Tag>
                                            </div>
                                            <div class="text-stone-500 text-sm">SKU 15</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="font-semibold text-lg">3000 F x 2</td>
                                <td class="font-semibold text-lg">6000 F</td>
                            </tr>

                            <tr>
                                <td class="font-semibold">Total Excl Tax, Discount, Coupons</td>
                                <td></td>
                                <td class="font-semibold">12000 F</td>
                            </tr>

                            <tr>
                                <td>Discount</td>
                                <td>-10 %</td>
                                <td>-1200 F</td>
                            </tr>

                            <tr>
                                <td>Coupons (CP-2544)</td>
                                <td>-5 %</td>
                                <td>-600 F</td>
                            </tr>

                            <tr>
                                <td>VAT</td>
                                <td>+19.25 %</td>
                                <td>+2310 F</td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Total</td>
                                <td></td>
                                <td class="font-semibold">12510 F</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-2 justify-end">
                        <Button>Act</Button>
                    </div>
                </div>
                <div class="my-8">
                    <h1 class="text-2xl font-semibold flex-1">History</h1>
                    <Timeline>
                        <TimelineItem>
                            <template #icon>
                                <div class="p-2 bg-stone-100 rounded-full">
                                    <Icon icon="ph:hand-coins" />
                                </div>
                            </template>
                            <div>Payment of the first installment of the order</div>
                        </TimelineItem>
                        <TimelineItem>fdfdf</TimelineItem>
                    </Timeline>
                </div>
            </div>
            <div class="w-96 flex flex-col gap-4">
                <div>
                    <h1 class="text-2xl font-semibold my-2 flex gap-2 items-center">
                        <Icon icon="ph:note" />Notes
                    </h1>
                    <p class="text-stone-500 my-4">
                        There is no note for this order
                    </p>
                </div>
                <div>
                    <h1 class="text-2xl font-semibold my-2 flex gap-2 items-center">
                        <Icon icon="ph:note" />Notes
                    </h1>
                    <p class="text-stone-500 my-4">
                        There is no note for this order
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

definePageMeta({
    layout: 'account'
})
</script>

<style scoped>
.ra-items-table tr td {
    padding: 1rem 0rem;
}

.ra-items-table tr {
    border-bottom: 1px solid lightgrey;
}
</style>