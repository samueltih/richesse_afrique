<template>
  <div class="flex flex-col">
    <navigation-bar></navigation-bar>
    <div class="flex w-full justify-center">
      <div class="max-w-screen-xl w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
