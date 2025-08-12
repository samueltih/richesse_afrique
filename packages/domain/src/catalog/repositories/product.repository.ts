import { Product, ProductId } from "../entities";
import { SearchFilter, Pagination } from "../value-objects";

export interface ProductRepository {
    save(product: Product): Promise<Product>;
    search(searchFilters: SearchFilter[], pagination: Pagination, withOptions?: boolean, withVariants?: boolean): Promise<Product[]>;
    findById(productId: ProductId, withOptions?: boolean, withVariants?: boolean): Promise<Product | null>;
    deleteById(productId: ProductId): Promise<number>;
    existsById(productId: ProductId): Promise<boolean>;
    count(searchFilters?: SearchFilter[]): Promise<number>;
}