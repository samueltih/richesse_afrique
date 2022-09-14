<template>
  <div>
    <NavigationBar></NavigationBar>
    <div class="ra-search-content">
      <div class="ra-search-filters">
        <search-filter
          title="Prix"
          :options="['2500', '5000', '10000']"
        ></search-filter>
        <search-filter
          title="Volume"
          :options="['30cl', '50cl', '100cl']"
        ></search-filter>
        <search-filter
          title="Catégorie"
          :options="['Acide naturel', 'Huile essentielle', 'Poudre']"
        ></search-filter>
      </div>
      <div class="ra-search-results">
        <div style="display: flex; width: 100%; padding: 10px">
          <div style="flex: 1; display: flex; align-items: center;"><p><b>4</b> items found</p></div>
          <div
            style="
              display: flex;
              flex: 1;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <span style="margin-left: 10px; margin-right: 10px">
              Sort By
            </span>
            <FormKit
              type="select"
              style="
                background-color: rgba(0, 0, 0, 0.05);
                border: none;
                padding: 10px;
                border-radius: 5px;
              "
              name="sort"
              :options="['Relevance', 'Price', 'Name']"
            />
          </div>
        </div>
        <div class="ra-search-items">
          <product-thumbnail
            name="LAVANDE ASPIC BIO"
            category="Huile Essentielle"
          ></product-thumbnail>
          <product-thumbnail
            name="EPONGE LOOFAH DE GOMMAGE OVALE"
            category="Accessoire beauté et bien-être"
          ></product-thumbnail>
          <product-thumbnail
            name="CAROTTE BIO"
            category="Macérât huileux"
          ></product-thumbnail>
          <product-thumbnail
            name="ACIDE SALICYLIQUE VÉGÉTAL"
            category="Actif cosmétique"
          ></product-thumbnail>
        </div>
        <paginator :number-of-pages="5"></paginator>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ra-search-content {
  display: flex;
}

.ra-search-filters {
  width: 250px;
}

.ra-search-results {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  & > .ra-search-items {
    display: grid;
    grid-template-columns: repeat(3, 346px);
    column-gap: 10px;
    row-gap: 10px;
    padding: 10px;
    justify-content: center;
  }
}
</style>