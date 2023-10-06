export const useCart = defineStore("cart", {
  state: () => ({
    products: Array<any>(0),
  }),
  actions: {
    addToCart(product: any) {
      console.log("Adding to cart...");
      this.products = [...this.products, product];
    },
    removeFromCart(product: any) {
      console.log("Removing from cart...");
      // this.products.splice(1, 1);
    },
  },
  persist: true,
});
