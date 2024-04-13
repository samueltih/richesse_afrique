<template>
  <div class="flex flex-col">
    <navigation-bar></navigation-bar>
    <main class="w-full flex justify-center">
      <div class="flex flex-col items-stretch max-w-screen-2xl w-full">
        <slot />
      </div>
    </main>
  </div>
</template>
