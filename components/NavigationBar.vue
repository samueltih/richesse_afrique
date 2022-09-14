<template>
  <nav class="ra-navbar">
    <div class="menu-section">
      <my-menu class="menu-item">
        <menu-item link="/home">Accueil</menu-item>
        <menu-item link="/catalog">Catalogue</menu-item>
      </my-menu>
    </div>
    <div class="logo-section">
      <logo />
    </div>
    <div class="menu-section">
      <my-menu>
        <menu-item link="/about-us">A Propos</menu-item>
        <menu-item link="/blog">Blog</menu-item>
      </my-menu>
    </div>
    <div class="user-section">
      <my-menu>
        <menu-item link="/chat">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
              opacity=".3"
            />
            <path
              fill="currentColor"
              d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z"
            />
          </svg>
        </menu-item>
        <menu-item link="/wishlist">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1l.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z"
              opacity=".3"
            />
            <path
              fill="currentColor"
              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05z"
            />
          </svg>
        </menu-item>
        <menu-item>
          <ph-shopping-cart-duotone />
        </menu-item>
        <menu-item>
          <avatar />
        </menu-item>
      </my-menu>
    </div>
  </nav>
</template>

<style lang="scss">
.ra-navbar {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo-section {
  flex: 0 0 150px;
}

.menu-section {
  flex: 1;

  ul.menu-item {
    display: inline-flex;
    list-style-type: none;
    width: 100%;

    li {
      flex: 1;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}

.user-section {
  margin-left: 15px;
}
</style>
