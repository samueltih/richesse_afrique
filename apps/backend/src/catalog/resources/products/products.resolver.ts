import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Operator,
  Pagination,
  Product,
  ProductFactory,
  ProductService,
  SearchFilter,
} from '@richesse-afrique/domain';
import { ProductDto } from './product.dto';

@Resolver('Products')
export class ProductsResolver {
  constructor(
    @Inject('ProductService') private readonly _productService: ProductService,
  ) {}

  private _extractFilters(query: string): SearchFilter[] {
    if (!query) return [];

    const regex = /(\w+)(:=|:>=|:<=|:<|:>)(\w+)/g;
    const filters: SearchFilter[] = [];
    for (const match of query.matchAll(regex)) {
      filters.push({
        field: match[1],
        operator: match[2] as Operator,
        value: match[3],
      });
    }
    return filters;
  }

  @Query()
  async getProduct(
    @Args('productId') productId: number,
  ): Promise<Product | null> {
    console.log('Product ID: ', productId);
    return await this._productService.getProduct(productId);
  }

  @Query()
  async searchProducts(
    @Args('query') query: string,
    @Args('page') pageNumber: number = 0,
    @Args('size') pageSize: number = 25,
    @Args('order') order: string = '',
    @Args('withOptions') withOptions: boolean,
    @Args('withVariants') withVariants: boolean,
  ): Promise<Product[]> {
    const filters: SearchFilter[] = this._extractFilters(query);
    const pagination: Pagination = { pageNumber, pageSize, orderBy: order };
    return await this._productService.searchProducts(
      filters,
      pagination,
      withOptions,
      withVariants,
    );
  }

  @Query()
  async countProducts(@Args('query') query: string): Promise<number> {
    const filters: SearchFilter[] = this._extractFilters(query);
    return await this._productService.countProducts(filters);
  }

  @Mutation()
  async createProduct(@Args('product') dto: ProductDto): Promise<any> {
    const product: Product = ProductFactory.create(
      null,
      dto.name,
      dto.description,
      1000,
    );
    return await this._productService.createProduct(product);
  }
}
