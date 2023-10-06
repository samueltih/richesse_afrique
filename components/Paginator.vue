<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
    pageNumber: {
        type: [Number],
        default: 1
    },
    numberOfPages: {
        type: [Number],
        default: 1
    }
});

const emit = defineEmits<{
    (e: 'pageChange', user: any): void
}>()

const currentPage = ref<number>(props.pageNumber);

function isFirst(): boolean {
    return currentPage.value == 1;
}

function isLast(): boolean {
    return currentPage.value == props.numberOfPages;
}

function handlePageChange(nextPage: number) {
    emit('pageChange', { previousPage: currentPage.value, nextPage });
    currentPage.value = nextPage;
}
</script>

<template>
    <div class="ra-paginator">
        <div class="flex gap-4 my-2 items-center">
            <span class="text-sm mx-2">Page {{ currentPage }} of {{ $props.numberOfPages }}</span>
            <button class="ra-paginator-action" :disabled="isFirst()" @click="handlePageChange(1)">
                <Icon :style="{ color: isFirst() ? 'grey' : 'black' }" icon="ph:caret-double-left-light" :height="24" />
            </button>
            <button class="ra-paginator-action" :disabled="isFirst()" @click="handlePageChange(Math.max(currentPage - 1, 1))">
                <Icon :style="{ color: isFirst() ? 'grey' : 'black' }" icon="ph:caret-left-light" :height="24" />
            </button>
            <span class="flex gap-2">
                <button :class="{ 'ra-paginator-page': true, 'ra-paginator-page-active': currentPage == page }"
                    v-for="(page, index) in $props.numberOfPages" :key="index" @click="handlePageChange(page)">
                    {{ page }}</button>
            </span>
            <button class="ra-paginator-action" :disabled="isLast()" @click="handlePageChange(Math.min(currentPage + 1, numberOfPages))">
                <Icon :style="{ color: isLast() ? 'grey' : 'black' }" icon="ph:caret-right-light" :height="24" />
            </button>
            <button class="ra-paginator-action" :disabled="isLast()" @click="handlePageChange(numberOfPages)">
                <Icon :style="{ color: isLast() ? 'grey' : 'black' }" icon="ph:caret-double-right-light" :height="24" />
            </button>
        </div>
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

        .ra-paginator-action * {
            transition: all ease-in 0.1s;
        }

        .ra-paginator-page {
            border-radius: 5px;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: whitesmoke;
            transition: all ease-in 0.1s;

            &:first-child {
                margin-left: 0px
            }

            &:last-child {
                margin-right: 0px
            }

            &:hover {
                background-color: lightgoldenrodyellow;
                cursor: pointer;
            }

            &.ra-paginator-page-active {
                background-color: #48ac29;
                color: white;
            }
        }
    }
}
</style>