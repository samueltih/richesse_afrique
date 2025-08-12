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
  sku?: string; // Stock Keeping Unit
  barcode?: string;
  preview?: ProductImage;
}

export interface ProductImageAttributes {
  url?: string | URL;
  cover?: boolean;
}

export class ProductFactory {
  static create(
    productId: ProductId | null,
    name: string,
    description: string,
    price: number,
    compareAtPrice?: number,
    slug?: string,
    tags: string[] = [],
    images: ProductImageAttributes[] = [],
    options: ProductOptionAttributes[] = [],
    variants: ProductVariantAttributes[] = []
  ): Product {
    let product = new Product(name, description, price, tags, [], [], compareAtPrice, [], slug, productId ?? undefined);

    // Handling images
    // images.forEach(image => product.);

    // // Handling options
    // options.forEach(option => product.addOption()) 

    // // Handling variants
    // variants.forEach(option => product.addVariant()) 

    return product;
  }
}
