<template>
  <div>
    <navigation-bar></navigation-bar>
    <div style="display: flex; flex-direction: column; align-items: stretch">
      <div style="display: flex">
        <div>
          <div
            style="
              height: 350px;
              width: 350px;
              background-color: whitesmoke;
              border-radius: 5px;
              display: flex;
              justify-content: center;
            "
          >
            <img style="height: 100%" src="/public/argan_01.png" />
          </div>
        </div>
        <div style="flex: 1">
          <h1>HUILE ESSENTIELLE DE LAVANDE ASPIC BIO</h1>
          <h3>Bulletin qualité</h3>
          <p>
            Incontournable de la trousse d'urgence, cette huile aux propriétés
            régénérantes et réparatrices s'utilise traditionnellement en cas de
            petits bobos ou piqûres d'insectes. Calmante, elle favorise
            l'élimination des inconforts musculaires.
          </p>
          <div style="display: flex">
            <div
              style="
                flex: 1;
                background-color: #eaf6e6;
                margin: 10px;
                border-radius: 5px;
              "
            >
              <ul>
                <li>10 ml</li>
                <li>35 ml</li>
                <li>50 ml</li>
              </ul>
            </div>
            <div style="flex: 1">
              <div>
                Prix:
                <span
                  ><currency-converter
                    style="font-size: 20pt; font-weight: bold; color: goldenrod"
                    :amount="2500"
                  ></currency-converter
                ></span>
              </div>
              <button
                style="
                  background-color: #48ac29;
                  padding: 15px;
                  border-radius: 5px;
                  border: none;
                  font-size: 14pt;
                  color: white;
                "
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style="display: flex">
        <span style="padding: 10px"><a>Présentation</a></span>
        <span style="padding: 10px"><a>Propriétés et utilisations</a></span>
        <span style="padding: 10px"><a>En pratique</a></span>
        <span style="padding: 10px"><a>Recette</a></span>
        <span style="padding: 10px"><a>Bibliographie</a></span>
        <span style="padding: 10px"><a>Avis (47)</a></span>
      </div>

      <div>
        <h3>Comments ({{ 10 }})</h3>
        <ul>
          <comment
            v-for="count in 10"
            style="border-bottom: 1px solid grey"
            author="Tih Samuel Mbiyimo'o"
            title="Produit très frais"
            content="Dés l'ouverture du sachet on sent que le produit et bien conservé"
            :key="count"
          ></comment>
        </ul>
      </div>
    </div>
  </div>
</template>