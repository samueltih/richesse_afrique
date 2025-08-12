import type { Product } from "@richesse-afrique/domain";

interface Discount {
  value(price?: number): number
}

export class Cart {
  protected _items: CartItem[];
  protected _discounts: Discount[] = [];

  get items(): CartItem[] {
    return this._items;
  }

  get totalInclTax(): number {
    return this._items.reduce(
        (previous, current) => previous + current.totalPrice, 0);
  }

  get discount(): number {
    return this._discounts.reduce(
      (previous, current) => previous + current.value(this.totalExclTax), 0);
  }

  get totalExclTax(): number {
    const price = totalExclTax();
    return price - discount(price) + vat(price);
  }

  get totalPrice(): number {
    return this.totalInclTax - this.discount;
  }

  constructor(items: CartItem[] = []) {
    this._items = items;
  }

  addItem(itemToAdd: CartItem): void {
    const item: CartItem | undefined = this._items.find(
      (value) => value.productReference === itemToAdd.productReference
    );
    if (item) item.quantity += itemToAdd.quantity;
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this._items.length) this._items.splice(index, 1);
  }

  removeItemByProductReference(productReference: string): void {
    this._items = this._items.filter(item => item.productReference === productReference);
  }

}

export class CartItem {
  protected readonly _thumbnail: URL;
  protected readonly _description: string;
  protected readonly _productReference: string;
  protected readonly _unitPrice: number;
  protected _quantity: number;

  get thumbnail(): URL | undefined {
    return this._thumbnail;
  }

  get description(): string {
    return this._description;
  }

  get productReference(): string {
    return this._productReference;
  }

  get unitPrice(): number {
    return this._unitPrice;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    if (value > 0) this._quantity = value;
  }

  get totalPrice(): number {
    return this.quantity * this.unitPrice;
  }

  constructor(
    description: string,
    productReference: string,
    unitPrice: number,
    quantity: number = 1,
    thumbnail: URL = new URL("")
  ) {
    if (quantity <= 0) throw new Error("'quantity' can not be <= 0");
    if (unitPrice < 0) throw new Error("'unitPrice' can not be < 0");

    this._description = description;
    this._productReference = productReference;
    this._thumbnail = thumbnail;
    this._quantity = quantity;
    this._unitPrice = unitPrice;
  }

}

export const useCart = defineStore("cart", {
  state: () => ({
    products: Array<any>(0),
  }),
  actions: {
    addToCart(product: Product, quantity: number = 1) {
      console.log("Adding to cart...");
      const prds = [...this.products];
      const index = this.products.findIndex(
        (prd) => prd.reference === product.reference
      );

      if (index > 0) {
        prds[index].quantity += product.quantity;
      } else {
        prds.push(product);
      }

      this.products = prds;
    },
    removeFromCart(productReference: string) {
      console.log("Removing from cart...");
      this.products.splice(this.products.indexOf(product), 1);
    },
  },
  persist: true,
});
