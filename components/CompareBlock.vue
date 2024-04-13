<template>
    <h1>Compare</h1>
    <table>
        <tbody>
            <tr>
                <td></td><td class="w-64" v-for="(item, index) in products"></td>
            </tr>
            <tr>
                <td>Name</td><td v-for="(item, index) in products">{{ item.name }}</td>
            </tr>
            <tr>
                <td>Weight</td><td v-for="(item, index) in products">{{ item.price }}</td>
            </tr>
            <tr>
                <td>Price</td><td v-for="(item, index) in products">{{ item.price }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
defineProps({
    products: {
        type: Array<any>,
        default: []
    }
})
</script>