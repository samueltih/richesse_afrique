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
    reference: string;
    price?: number;
    sku?: string; // Stock Keeping Unit
    barcode?: string;
    preview: ProductImage; // Image preview
}

interface IProduct {
  attributes: Map<string, any>;
  compareAtPrice: number;
  description: string;
  images: ProductImage[];
  name: string;
  options: Map<string, {values: any[], priority?: number}>;
  price: number;
  slug: string;
  tags: Set<string>;
  variants: ProductVariant[];
}

type ProductStatus = 'draft' | 'archived' | 'active';

export class Product {

  private _attributes: Map<string, any> = new Map<string, any>();
  private _compareAtPrice?: number;
  private _description: string;
  private _id: string;
  private _images: ProductImage[] = [];
  private _name: string;
  private _options: Map<string, { values: any[]; priority?: number }>;
  private _price: number = 0;
  private _slug: string;
  private _status: ProductStatus = 'draft';
  private _tags: Set<string>;
  private _variants: ProductVariant[] = [];

  // -- Getters and setters
  // Identifiant
  get id(): string {
    return this._id;
  }

  // Attributes
  get attributes(): Map<string, any> {
    return this._attributes;
  }

  // Compare at Price
  get compareAtPrice(): number | undefined {
    return this._compareAtPrice;
  }
  set compareAtPrice(value: number) {
    this._compareAtPrice = value; 
  }

  // Description
  get description(): string {
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }

  // Images
  get images(): ProductImage[] {
    return this._images;
  }

  // Name
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  // Options
  get options(): ProductOption[] {
    const result: ProductOption[] = []
    this._options.forEach((value, key) => result.push(
      {name: key, values: value.values, priority: value.priority}
    ));
    return result;
  }

  // Price
  get price(): number {
    return this._price;
  }
  set price(value: number) {
    if (value >= 0)
    this._price = value;
  }

  // Status
  get status(): ProductStatus {
    return this._status;
  }

  // Slug
  get slug(): string {
    return this._slug;
  }
  set slug(slug: string) {
    this._slug = slug;
  }

  // Tags
  get tags(): Set<string> {
    return this._tags;
  }
  set tags(tags: string[]) {
    tags.forEach((tag) => this._tags.add(tag));
  }

  // Variants
  get variants(): ProductVariant[] {
    return this._variants;
  }

  constructor(
    name: string,
    description: string,
    price: number = 0,
    tags: string[] = [],
    options: ProductOption[] = [],
    variants: ProductVariant[] = [],
    compareAtPrice?: number,
    images: ProductImage[] = [],
    slug?: string
  ) {

    this._id = "----";

    this._compareAtPrice = compareAtPrice;
    this._description = description;
    this._images = images;
    this._name = name;
    this._price = price;
    this._slug = slug ?? this._generateSlug(name);
    this._tags = new Set<string>(tags);

    this._options = new Map(
      options
        .map(
          (option, index) =>
            [
              option.name,
              { values: option.values, priority: option.priority },
            ] satisfies [string, { values: any[]; priority?: number }]
        )
        .sort(this._sortOptions)
    );

    this._variants = variants.length > 0 ? variants : [{
      reference: "ffdfdfd",
      preview: {url: '', cover: true}
    }];

  }

  private _generateSlug(name: string): string {
    return "****";
  }

  private _sortOptions(a: any, b: any): number {
    if (a[1].priority != undefined && b[1].priority != undefined) {
      return a[1].priority - b[1].priority;
    }
    return a[0].localeCompare(b[0]);
  }

  addAttribute(name: string, value: any): void {
    if (!this._options.has(name)) {
      this._attributes.set(name, value);
    }
  }

  removeAttribute(name: string): void {
    this._attributes.delete(name);
  }

  addOption(option: ProductOption): void {
    if (!this._attributes.has(option.name) && !this._options.has(option.name)) {
      this._options = new Map(
        [
          ...this._options.entries(),
          [
            option.name,
            { values: option.values, priority: option.priority },
          ] satisfies [string, { values: any[]; priority?: number }],
        ].sort(this._sortOptions)
      );
    }
  }

  removeOption(optionName: string): void {
    this._options.delete(optionName);
  }

  addTag(tag: string): void {
    this._tags.add(tag);
  }

  removeTag(tag: string): void {
    this._tags.delete(tag);
  }

  archive(): void {
    this._status = 'archived';
  }

  publish(): void {
    this._status = 'active';
  }

  draft(): void {
    this._status = 'draft'
  }

}
