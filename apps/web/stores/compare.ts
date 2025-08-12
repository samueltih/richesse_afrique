import { Product } from "@richesse-afrique/domain";

export const useCompare = defineStore<
  "compare",
  { comparedProducts: Product[] },
  {},
  {
    addToComparison(product: Product): void;
    removeFromComparison(productReference: string): void;
    contains(productReference: string): boolean;
    swap(firstReference: string, secondReference: string): void;
  }
>("compare", {
  state: () => ({
    comparedProducts: [
      new Product(
        "Product 1",
        "Product 1",
        5000,
      ),
    ],
  }),
  actions: {
    /**
     * Adds a product to the {@code comparedProducts} array
     *
     * @param product Product to be added for comparison
     */
    addToComparison(product: Product): void {
      this.comparedProducts.push(product);
    },

    /**
     * Removes the product with reference {@code productReference} from {@code comparedProducts},
     *
     * @param productReference Unique reference of the product to be removed
     */
    removeFromComparison(productReference: string): void {
      this.comparedProducts.splice(
        this.comparedProducts.findIndex(
          (product) => product.reference === productReference
        ),
        1
      );
    },

    /**
     * Checks if a product with reference {@code productReference} is present in the comparedProducts array.
     * It returns {@code true} if {@code comparedProducts} has a product with {@code productReference} as reference
     * and {@code false} otherwise.
     *
     * @param productReference Unique reference of the product evaluated
     * @returns true if the product is among the compared comparedProducts and false otherwise
     */
    contains(productReference: string): boolean {
      return this.comparedProducts.some(
        (product) => product.reference === productReference
      );
    },

    /**
     * Swaps the position of the product with reference {@code firstReference} with the
     * position of the production with reference {@code secondReference}.
     *
     * @param firstReference Unique reference of the first product
     * @param secondReference Unique reference of the second product
     */
    swap(firstReference: string, secondReference: string): void {
      let firstIndex: number | null = null;
      let secondIndex: number | null = null;

      this.comparedProducts.forEach((product, index) => {
        if (product.reference === firstReference) {
          firstIndex = index;
        } else if (product.reference === secondReference) {
          secondIndex = index;
        }
      });

      if (firstIndex != null && secondIndex != null) {
        const temp = this.comparedProducts[firstIndex];
        this.comparedProducts[firstIndex] = this.comparedProducts[secondIndex];
        this.comparedProducts[secondIndex] = temp;
      }
    },
  },
});
