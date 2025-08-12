import { Product, ProductId } from "./product.entity";

export class Category {
    private _name: string;
    private _description?: string;
    private _products: Product[] = []

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get description(): string | undefined {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    get products(): Product[] {
        return this._products;
    }

    constructor(name: string, description?: string, products: Product[] = []) {
        this._name = name;
        this._description = description;
        this._products = products;
    }

    addProduct(product: Product): void {
        this._products.push(product);
    }

    removeProduct(productId: ProductId): void {
        this._products.filter((product) => product.id === productId);
    }

}