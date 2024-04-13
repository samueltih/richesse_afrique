<template>
  <breadcrumbs>
    <breadcrumb-item href="/admin">Admin</breadcrumb-item>
    <breadcrumb-item>Blog</breadcrumb-item>
  </breadcrumbs>
  <div class="flex gap-2 items-center">
    <h1 class="flex-1 text-3xl font-bold my-4">Blog</h1>
    <Button>Add Post</Button>
  </div>

  <div class="w-full flex gap-2 items-center">
    <Tabs class="flex-1">
      <Tab>Posts <Tag>85</Tag></Tab>
      <Tab>Categories <Tag>10</Tag></Tab>
    </Tabs>
    <div class="flex gap-4 items-center">
      <button><Icon icon="ph:plus" /></button>
      <button><Icon icon="ph:trash" /></button>
    </div>
  </div>

  <div class="w-full flex items-stretch h-64">
    <div class="flex-1">
      <h2>Most Popular</h2>
      <table class="flex-1">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Title</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Comment redonner l'eclat de vos cheveux</td>
            <td>7844</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Entretien de vos bijous</td>
            <td>6147</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex-1">
      <h2>Most Popular</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Title</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Comment redonner l'eclat de vos cheveux</td>
            <td>7844</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Entretien de vos bijous</td>
            <td>6147</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <Paginator :number-of-pages="5" />
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const text = ref("");
</script>
