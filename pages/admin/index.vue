<template>
  <breadcrumbs>
    <breadcrumb-item href="/">Admin</breadcrumb-item>
    <breadcrumb-item>Users</breadcrumb-item>
  </breadcrumbs>
  <div class="flex gap-2 items-center">
    <h1 class=" flex-1 text-3xl font-bold">Overview</h1>
  </div>
  <div class="my-4 grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="flex-1 h-36 bg-stone-100 rounded-md p-4">Total Orders</div>
    <div class="flex-1 h-36 bg-stone-100 rounded-md p-4">Orders</div>
    <div class="flex-1 h-36 bg-stone-100 rounded-md p-4">Orders</div>
    <div class="flex-1 h-36 bg-stone-100 rounded-md p-4">Orders</div>
  </div>
  <div class="flex gap-2 items-center">
    <div class="flex-1">
      <ClientOnly>
        <apexchart width="500" type="bar" :options="chartOptions" :series="series" />
      </ClientOnly>
    </div>
    <div class="flex-1">
      <ClientOnly>
        <apexchart width="500" type="bar" :options="chartOptions" :series="series" />
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
const series = ref(
  [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91],
    },
  ]
);

const chartOptions = ref({
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  }
});
</script>