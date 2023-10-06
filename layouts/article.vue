<template>
    <navigation-bar></navigation-bar>
    <section class="flex flex-col items-center">
        <div class="flex gap-4 max-w-screen-xl w-full">
            <div class="flex-1 flex justify-center">
                <slot />
            </div>
            <div>
                <div class="sticky top-6 w-64">
                    <div class="flex gap-4 p-2">
                        <div>Image</div>
                        <div>
                            <h4>Mask avec miel et poudre de chébé</h4>
                            <div class="flex gap-2">
                                <Tag>Beaute</Tag>
                                <Tag>Hygiène intime</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section role="similar-articles" class="my-12">
            <h4 class="text-3xl font-bold my-6">Article.s similaire.s</h4>
            <div class="overflow-x-hidden w-full">
                <div class="flex gap-6">
                    <slot name="other" />
                </div>
            </div>
        </section>
    </section>
    <main-footer />
</template>