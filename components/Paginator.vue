<script lang="ts" setup>
defineProps({
    pageNumber: {
        type: [Number],
        default: 1
    },
    numberOfPages: {
        type: [Number],
        default: 1
    }  
});
</script>

<template>
    <div class="ra-paginator">
        <div>
            <span :class="{'ra-page-number': true, 'ra-page-number-active': pageNumber == page}" v-for="(page, index) in $props.numberOfPages" :key="index">
            {{ page }}</span>
        </div>
        <div>Page {{ $props.pageNumber }} of {{ $props.numberOfPages }}</div>
    </div>
</template>

<style lang="scss">
.ra-paginator {
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    & > :first-child {
        display: flex;
        justify-content: center;
        
        .ra-page-number {
            margin-right: 5px;
            margin-left: 5px;
            border-radius: 5px;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: whitesmoke;

            &:first-child {margin-left: 0px}
            &:last-child {margin-right: 0px}

            &:hover {
                background-color: lightgoldenrodyellow;
                cursor: pointer;
            }

            &.ra-page-number-active {
                background-color: #48ac29;
                color: white;
            }
        }
    }
}
</style>