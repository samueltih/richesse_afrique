import { Product, ProductId } from "./product.entity";
export declare class Category {
    private _name;
    private _description?;
    private _products;
    get name(): string;
    set name(value: string);
    get description(): string | undefined;
    set description(value: string);
    get products(): Product[];
    constructor(name: string, description?: string, products?: Product[]);
    addProduct(product: Product): void;
    removeProduct(productId: ProductId): void;
}
