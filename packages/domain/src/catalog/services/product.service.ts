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
  searchProducts(
    filters: SearchFilter[],
    pagination: Pagination,
    withOptions?: boolean,
    withVariants?: boolean
  ): Promise<Product[]>;

  /**
   * Retrieves the product with {@code productId} as identifier.
   *
   * @param productId Identity of the product
   */
  getProduct(
    productId: ProductId,
    withOptions?: boolean,
    withVariants?: boolean
  ): Promise<Product | null>;

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

export class ProductServiceImpl {
  constructor(private _productRepository: ProductRepository) {}

  async searchProducts(
    filters: SearchFilter[],
    pagination: Pagination,
    withOptions: boolean = false,
    withVariants: boolean = false
  ): Promise<Product[]> {
    return await this._productRepository.search(
      filters,
      pagination,
      withOptions,
      withVariants
    );
  }

  async getProduct(
    productId: ProductId,
    withOptions: boolean = true,
    withVariants: boolean = true
  ): Promise<Product | null> {
    console.log("Fetching product in database")
    return await this._productRepository.findById(
      productId,
      withOptions,
      withVariants
    );
  }

  async createProduct(product: Product): Promise<Product> {
    return await this._productRepository.save(product);
  }

  async updateProduct(productId: ProductId, product: Product): Promise<void> {
    if (await this._productRepository.existsById(productId)) {
      this._productRepository.save(product);
    }
  }

  async deleteProduct(productId: ProductId): Promise<number> {
    return await this._productRepository.deleteById(productId);
  }

  async countProducts(searchFilters: SearchFilter[] = []): Promise<number> {
    return await this._productRepository.count(searchFilters);
  }
}
