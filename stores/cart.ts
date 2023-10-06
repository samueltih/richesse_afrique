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
      this.products.splice(this.products.indexOf(product), 1);
    },
  },
  persist: true,
});
