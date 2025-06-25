export interface ProductOption {
    name: string;
    values: any[];
    priority?: number;
}
export interface ProductImage {
    url: string | URL;
    cover: boolean;
}
export declare class ProductVariant {
    private readonly _reference;
    get reference(): string;
    constructor(reference?: string);
    private _generateReference;
}
export declare class Product {
    private _name;
    private _description;
    private _slug;
    private _tags;
    private _images;
    private _attributes;
    private _options;
    private _variants;
    get name(): string;
    set name(value: string);
    get description(): string;
    set description(value: string);
    get slug(): string;
    set slug(slug: string);
    get tags(): Set<string>;
    set tags(tags: string[]);
    constructor(name: string, description: string, tags: string[] | undefined, options: ProductOption[] | undefined, variants: ProductVariant[], slug?: string);
    private _generateSlug;
    private _sortOptions;
    addAttribute(name: string, value: any): void;
    removeAttribute(name: string): void;
    addOption(option: ProductOption): void;
    removeOption(optionName: string): void;
    addTag(tag: string): void;
    removeTag(tag: string): void;
}
