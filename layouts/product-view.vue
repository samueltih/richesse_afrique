<template>
    <navigation-bar></navigation-bar>
    <main class="flex justify-center">
        <div class="flex flex-col items-center max-w-screen-xl w-full">
            <slot />
        </div>
    </main>
    <main-footer></main-footer>
</template> 