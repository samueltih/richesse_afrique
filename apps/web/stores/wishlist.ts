import { Product } from '@richesse-afrique/domain';

export const useWishlist = defineStore("wishlist", {
    state: () => ({
        products: Array<Product>(0)
    }),
    actions: {
        addToWishlist(product: any) {
            this.products.push(product);
        },
        removeFromWishlist(productRef: number) {
            this.products.splice(this.products.findIndex((product) => product.id === productRef), 1);
        },
        removeFromWishlistByIndex(index: number) {
            this.products.splice(index, 1);
        },
        contains(productRef: number): boolean {
            return this.products.some((product, index) => product.id === productRef);
        }
    },
    persist: true
})