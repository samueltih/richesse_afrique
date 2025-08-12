import { Product, ProductId, ProductImage } from "../entities";
export interface ProductOptionAttributes {
    name: string;
    values: any[];
    priority?: number;
}
export interface ProductVariantAttributes {
    optionsSet: object;
    reference?: string;
    price?: number;
    sku?: string;
    barcode?: string;
    preview?: ProductImage;
}
export interface ProductImageAttributes {
    url?: string | URL;
    cover?: boolean;
}
export declare class ProductFactory {
    static create(productId: ProductId | null, name: string, description: string, price: number, compareAtPrice?: number, slug?: string, tags?: string[], images?: ProductImageAttributes[], options?: ProductOptionAttributes[], variants?: ProductVariantAttributes[]): Product;
}
