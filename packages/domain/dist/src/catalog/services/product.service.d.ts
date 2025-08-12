import { Product, ProductId } from "../entities/product.entity";
import { ProductRepository } from "../repositories";
import { Pagination, SearchFilter } from "../value-objects";
export interface ProductService {
    /**
     * Searches products which goes through the various filter conditions {@code filters}.
     * Pagination features are also enabled.
     *
     * @param filters Search filters to filter search results
     * @param first limit of results size
     *
     * @returns List of products satisfying filter
     */
    searchProducts(filters: SearchFilter[], pagination: Pagination, withOptions?: boolean, withVariants?: boolean): Promise<Product[]>;
    /**
     * Retrieves the product with {@code productId} as identifier.
     *
     * @param productId Identity of the product
     */
    getProduct(productId: ProductId, withOptions?: boolean, withVariants?: boolean): Promise<Product | null>;
    /**
     * Creates a new product
     *
     * @param product Product to be created
     */
    createProduct(product: Product): Promise<Product>;
    /**
     *
     * @param productId
     * @param product
     */
    updateProduct(productId: ProductId, product: Product): Promise<void>;
    /**
     * Deletes a product
     *
     * @param productId Identitier of the product
     */
    deleteProduct(productId: ProductId): void;
    /**
     * Counts the number of products satisfying the filters.
     *
     * @param filters Filters to filter out products
     */
    countProducts(filters?: SearchFilter[]): Promise<number>;
}
export declare class ProductServiceImpl {
    private _productRepository;
    constructor(_productRepository: ProductRepository);
    searchProducts(filters: SearchFilter[], pagination: Pagination, withOptions?: boolean, withVariants?: boolean): Promise<Product[]>;
    getProduct(productId: ProductId, withOptions?: boolean, withVariants?: boolean): Promise<Product | null>;
    createProduct(product: Product): Promise<Product>;
    updateProduct(productId: ProductId, product: Product): Promise<void>;
    deleteProduct(productId: ProductId): Promise<number>;
    countProducts(searchFilters?: SearchFilter[]): Promise<number>;
}
