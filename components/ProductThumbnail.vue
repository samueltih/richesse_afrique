<script lang="ts" setup>
defineProps({
  name: {
    type: [String]
  },
  category: {
    type: [String]
  },
});
</script>

<template>
  <div class="ra-thumbnail">
    <div class="ra-thumbnail-image">
      <img src="/public/argan_01.png" />
    </div>
    <div class="ra-thumbnail-desc">
      <h4>{{ name }}</h4>
      <p>{{ category }}</p>
      <p style="font-size: 9pt; font-style: normal">Riche en flavonoïdes aux vertus antioxydantes et toniques circulatoires, le Ginkgo biloba est traditionnellement utilisé comme complément alimentaire pour ses bienfaits sur les fonctions cognitives, la mémoire et la concentration. Cette poudre s'incorpore dans vos boissons ou tisanes.</p>
      <currency-converter
        class="ra-thumbnail-price"
        :amount="2500"
      ></currency-converter>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ra-thumbnail {
  display: inline-flex;
  background-color: whitesmoke;
  align-items: flex-end;
  justify-content: flex-start;
  border-radius: 5px;
  transition: background-color ease-in 0.15s, border ease-in 0.15s;

  &:hover {
    border: 1px solid whitesmoke;
    cursor: pointer;
    background-color: lightgoldenrodyellow;
  }

  .ra-thumbnail-image {
    display: flex;
    justify-content: center;
    height: 200px;
    width: 135px;
    margin-bottom: 10px;
  }

  .ra-thumbnail-desc {
    padding: 10px;

    h4,
    p {
      margin-bottom: 5px;
      margin-top: 5px;
    }

    h4 {
      text-transform: uppercase;
    }

    p {
      font-style: italic;
      color: grey;
      font-size: 11pt;
    }
  }

  .ra-thumbnail-price {
    color: goldenrod;
    font-weight: bold;
    font-size: 16pt;
  }
}
</style>