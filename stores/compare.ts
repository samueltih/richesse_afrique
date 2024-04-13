export const useCompare = defineStore("compare", {
    state: () => ({
        products: [{ref: 1, name: 'Product 1', price: 5000, height: 200}, {ref: 2, name: 'Product 2', price: 5000, height: 200}]
    }),
    actions: {
        addToComparison(product: any) {
            this.products.push(product);
        },
        removeFromComparison(index: number) {
            this.products.splice(index, 1);
        },
        contains(productRef: number): boolean {
            return this.products.some((product, index) => product.ref === productRef);
        },
        swap(firstIndex: number, secondIndex: number) {
            const temp = this.products[firstIndex];
            this.products[firstIndex] = this.products[secondIndex];
            this.products[secondIndex] = temp;
        }
    }
})