export interface ProductOption {
    name: string;
    values: any[];
    priority?: number;
}
export interface ProductImage {
    url: string | URL;
    cover: boolean;
}
export interface ProductVariant {
    optionsSet?: object;
    reference: string;
    price?: number;
    sku?: string;
    barcode?: string;
    preview: ProductImage;
}
export type ProductStatus = 'draft' | 'archived' | 'active';
export type ProductId = number;
export declare class Product {
    private _attributes;
    private _compareAtPrice?;
    private _description;
    private _id?;
    private _images;
    private _name;
    private _options;
    private _price;
    private _reference;
    private _slug;
    private _status;
    private _tags;
    private _variants;
    get id(): ProductId | undefined;
    get attributes(): Map<string, any>;
    get compareAtPrice(): number | undefined;
    set compareAtPrice(value: number);
    get description(): string;
    set description(value: string);
    get images(): ProductImage[];
    get name(): string;
    set name(value: string);
    get options(): ProductOption[];
    get price(): number;
    set price(value: number);
    get status(): ProductStatus;
    get slug(): string;
    set slug(slug: string);
    get tags(): Set<string>;
    set tags(tags: string[]);
    get variants(): ProductVariant[];
    get reference(): string;
    constructor(name: string, description: string, price?: number, tags?: string[], options?: ProductOption[], variants?: ProductVariant[], compareAtPrice?: number, images?: ProductImage[], slug?: string, id?: ProductId, reference?: string);
    private _generateSlug;
    private _generateReference;
    private _sortOptions;
    addAttribute(name: string, value: any): void;
    removeAttribute(name: string): void;
    addOption(name: string, values: any[], priority?: number): void;
    removeOption(optionName: string): void;
    addTag(tag: string): void;
    removeTag(tag: string): void;
    archive(): void;
    publish(): void;
    draft(): void;
}
