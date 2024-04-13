export const useWishlist = defineStore("wishlist", {
    state: () => ({
        products: Array<any>(0)
    }),
    actions: {
        addToWishlist(product: any) {
            this.products.push(product);
        },
        removeFromWishlist(index: number) {
            this.products.splice(index, 1);
        },
        contains(productRef: number): boolean {
            return this.products.some((product, index) => product.id === productRef);
        }
    }
})