import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  Operator,
  Pagination,
  Product,
  ProductFactory,
  ProductService,
  SearchFilter,
} from '@richesse-afrique/domain';
import { ProductDto } from './product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/products')
export class ProductController {
  constructor(
    @Inject('ProductService') private readonly _productService: ProductService,
  ) {}

  private _extractFilters(query: string): SearchFilter[] {
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

  /**
   * Creates a new product in the system.
   *
   * @param createProductDto data for the creation of the new product
   * @returns Created product
   */
  @Post()
  async createProduct(
    @Body() createProductDto: ProductDto,
  ): Promise<ProductDto> {
    const product: Product = ProductFactory.create(
      null,
      createProductDto.name,
      createProductDto.description,
      6000,
    );
    return this._productService.createProduct(product);
  }

  /**
   *
   * @returns
   */
  @Get()
  async searchProducts(
    @Query('query') query: string,
    @Query('page') pageNumber: number = 0,
    @Query('size') pageSize: number = 25,
    @Query('order') order: string = '',
    @Query('withOptions') withOptions: boolean = false,
    @Query('withVariants') withVariants: boolean = false,
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

  @Get(':id')
  async getProduct(
    @Param('id') id: number,
    @Param('withOptions') withOptions: boolean = true,
    @Param('withVariants') withVariants: boolean = true,
  ): Promise<any> {
    return await this._productService.getProduct(id, withOptions, withVariants);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return null;
  }
}
