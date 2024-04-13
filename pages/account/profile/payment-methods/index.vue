<template>
    <div class="flex items-center my-4">
        <h1 class="flex-1 text-4xl font-bold">Payment Method</h1>
        <button class="flex gap-2 items-center p-2 bg-emerald-200 rounded">
            <Icon icon="ph:plus"/> Add Payment Method</button>
    </div>
    <table>
        <th></th>
    </table>

    <ul class="flex flex-col gap-8">
        <li>
            <h1 class="flex gap-2 items-center text-2xl font-bold">
                <input type="radio" name="type" /> Local Wallets
            </h1>
            <FormKit type="form" @submit="handleSubmit">
                <FormKit type="number" name="pin" placeholder="PIN Code" />
            </FormKit>
        </li>

        <li>
            <h1 class="flex gap-2 items-center text-2xl font-bold">
                <input type="radio" name="type" />Credit Card
            </h1>
            <FormKit type="form" @submit="handleSubmit">
                <FormKit type="number" name="cardNumber" placeholder="Card Number" />
                <FormKit type="text" name="expiryDate" format="MM/YY" placeholder="Expiry date" />
                <FormKit type="number" name="cvv" placeholder="Card Verification value" />
                <FormKit type="text" name="cardHolder" placeholder="Cardholder" />
            </FormKit>
        </li>

        <li>
            <h1 class="flex gap-2 items-center text-2xl font-bold">
                <input type="radio" name="type" /> Paypal
            </h1>
            <p>Fill in your billing informations</p>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const methods = ref<Array<any>>([]);

function handleSubmit(values: any) {

}

definePageMeta({
    layout: 'account'
})
</script>