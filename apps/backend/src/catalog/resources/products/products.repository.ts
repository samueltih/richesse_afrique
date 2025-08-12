import {
  ProductOptionInsert,
  ProductOptionSelect,
  products,
  ProductSelect,
  ProductVariantInsert,
  ProductVariantSelect,
} from '../../database/schema';
import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as sc from '../../database/schema';
import { eq, lte, gte, gt, lt, like, ilike, SQL, or, and } from 'drizzle-orm';
import { PgColumn } from 'drizzle-orm/pg-core';
import {
  NumericOperator,
  Pagination,
  Product,
  // ProductFactory,
  ProductId,
  ProductOption,
  ProductRepository,
  ProductVariant,
  SearchFilter,
  StringOperator,
} from '@richesse-afrique/domain';
import { ProductMapper } from 'src/catalog/resources/products/products.mapper';

function numericPredicate(
  column: PgColumn,
  operator: NumericOperator,
  value: number,
): SQL {
  switch (operator) {
    case '>':
      return gt(column, value);
    case '<':
      return lt(column, value);
    case '>=':
      return gte(column, value);
    case '<=':
      return lte(column, value);
    case '=':
    default:
      return eq(column, value);
  }
}

function stringPredicate(
  column: PgColumn,
  operator: StringOperator,
  value: string,
): SQL {
  switch (operator) {
    case '::':
      return ilike(column, value);
    case ':=':
      return like(column, value);
    case '=':
    default:
      return eq(column, value);
  }
}

@Injectable()
export class ProductRepositoryPgAdapter implements ProductRepository {
  constructor(
    @Inject('DrizzleAsyncProvider') private db: NodePgDatabase<typeof sc>,
  ) {}

  private _buildCriteria(
    searchFilters: SearchFilter[],
  ): SQL<unknown> | undefined {
    const predicateMap: { [field: string]: SQL[] } = {};

    searchFilters.forEach((filter) => {
      if (!predicateMap[filter.field]) {
        predicateMap[filter.field] = [];
      }

      let newPredicate: SQL;

      if (['price'].includes(filter.field)) {
        newPredicate = numericPredicate(
          products.price,
          filter.operator as NumericOperator,
          filter.value as number,
        );
      } else {
        newPredicate = stringPredicate(
          products.price,
          filter.operator as StringOperator,
          filter.value as string,
        );
      }

      predicateMap[filter.field].push(newPredicate);
    });

    return and(
      ...Object.entries(predicateMap).map((value) => {
        if (['price'].includes(value[0])) {
          return and(...value[1]);
        }
        return or(...value[1]);
      }),
    );
  }

  async createProduct() {
    const posts = await this.db
      .insert(sc.products)
      .values({
        name: 'Modèle Zalbi',
        description: 'Bracelet fait de pierre',
        price: '4000',
        tags: ['bracelet', 'pyrite', 'jewelry'],
        attributes: {
          weight: '500g',
        },
      })
      .returning();

    await this.db
      .insert(sc.productOptions)
      .values({
        name: 'Type de pierre',
        values: ['Pyrite', 'Malachite', 'Citrine', 'Amazonite'],
        priority: 1,
        productId: posts[0].id,
      })
      .returning();
    return posts;
  }

  async getProducts() {
    return await this.db.query.products.findMany({
      with: {
        options: true,
      },
    });
  }

  /**
   *
   *
   * @returns List of products satisfying the filters
   */
  async searchProducts(
    filters: SearchFilter[],
    pagination: Pagination,
    withOptions: boolean = false,
    withVariants: boolean = false,
  ) {
    return await this.db.query.products.findMany({
      limit: pagination.pageSize,
      offset: pagination.pageSize * pagination.pageNumber,
      orderBy: (products, { asc, desc }) => {
        const [fields, order] = pagination.orderBy.split(';');
        const ordering = order === 'asc' ? asc : desc;
        return fields.split(',').map((field) => ordering(products[field]));
      },
      where: (products, { and, or }) => {
        const predicateMap: { [field: string]: SQL[] } = {};

        filters.forEach((filter) => {
          if (!predicateMap[filter.field]) {
            predicateMap[filter.field] = [];
          }

          let newPredicate: SQL;

          if (['price'].includes(filter.field)) {
            newPredicate = numericPredicate(
              products.price,
              filter.operator as NumericOperator,
              filter.value as number,
            );
          } else {
            newPredicate = stringPredicate(
              products.price,
              filter.operator as StringOperator,
              filter.value as string,
            );
          }

          predicateMap[filter.field].push(newPredicate);
        });

        return and(
          ...Object.entries(predicateMap).map((value) => {
            if (['price'].includes(value[0])) {
              return and(...value[1]);
            }
            return or(...value[1]);
          }),
        );
      },
      with: {
        options: withOptions ? withOptions : undefined,
        variants: withVariants ? withVariants : undefined,
      },
    });
  }

  /**
   * Retrieves product from the database using its identifier {@code productId}
   *
   * @param productId Product identifier
   * @returns Product with corresponding ID
   */
  async getProduct(
    productId: number,
    withOptions: boolean = true,
    withVariants = false,
  ) {
    return await this.db.query.products.findFirst({
      where: (products, { eq }) => eq(products.id, productId),
      with: {
        options: withOptions ? withOptions : undefined,
        variants: withVariants ? withVariants : undefined,
      },
    });
  }

  /**
   * Inserts a new product into the database.
   *
   * @param product Product to be inserted
   * @returns Promise with the inserted product
   */
  private async _insertProduct(product: Product): Promise<Product> {
    const options: ProductOption[] = product.options;
    const variants: ProductVariant[] = product.variants;

    const savedProduct = await this.db
      .insert(sc.products)
      .values({
        name: product.name,
        description: product.description,
        price: `${product.price}`,
        tags: [...product.tags],
        attributes: product.attributes,
      })
      .returning()
      .then((value) => value[0]);

    if (options && options.length > 0) {
      this.db.insert(sc.productOptions).values(
        options.map((option) => ({
          name: option.name,
          values: option.values,
          priority: option.priority,
          productId: savedProduct.id,
        })),
      );
    }

    if (variants && variants.length > 0) {
      this.db.insert(sc.productVariants).values(
        variants.map((variant) => ({
          optionSet: variant.optionsSet as object,
          price: `${variant.price}`,
          productId: savedProduct.id,
        })),
      );
    }

    return Promise.resolve(ProductMapper.toDomainEntity(savedProduct));
  }

  private async _insertProductOptions(
    productOptions: ProductOption[],
    productId: number,
  ): Promise<ProductOptionInsert[]> {
    return await this.db
      .insert(sc.productOptions)
      .values(
        productOptions.map((option) => ({
          name: option.name,
          values: option.values,
          priority: option.priority,
          productId,
        })),
      )
      .returning();
  }

  private async _insertProductVariant(
    productVariants: ProductVariant[],
    productId: number,
  ): Promise<ProductVariantInsert[]> {
    return await this.db
      .insert(sc.productVariants)
      .values(
        productVariants.map((variant) => ({
          optionSet: variant.optionsSet as object,
          price: `${variant.price}`,
          productId,
        })),
      )
      .returning();
  }

  private async _updateProduct(
    product: Product & { id: ProductId },
  ): Promise<ProductSelect> {
    return await this.db
      .update(sc.products)
      .set({ ...product })
      .where(eq(sc.products.id, product.id))
      .returning()
      .then((value) => value[0]);
  }

  private async _updateProductOption(
    productOption: ProductOption & { id: number },
  ): Promise<ProductOptionSelect> {
    return await this.db
      .update(sc.productOptions)
      .set({ ...productOption })
      .where(eq(sc.productOptions.id, productOption.id))
      .returning()
      .then((value) => value[0]);
  }

  private async _updateProductVariant(
    productVariant: ProductVariant & { id: number },
  ): Promise<ProductVariantSelect> {
    return await this.db
      .update(sc.productVariants)
      .set({
        ...productVariant,
        price: productVariant.price ? `${productVariant.price}` : undefined,
      })
      .where(eq(sc.productVariants.id, productVariant.id))
      .returning()
      .then((value) => value[0]);
  }

  /**
   * Save product into the database.
   *
   * @param product Product to be saved
   * @returns Saved Product
   */
  async save(product: Product): Promise<Product> {
    const options: ProductOption[] = product.options;
    const variants: ProductVariant[] = product.variants;

    const savedProduct = await this.db
      .insert(sc.products)
      .values({
        name: product.name,
        description: product.description,
        price: `${product.price}`,
        tags: [...product.tags],
        attributes: product.attributes,
      })
      .returning()
      .then((value) => value[0]);

    if (options && options.length > 0) {
      this.db.insert(sc.productOptions).values(
        options.map((option) => ({
          name: option.name,
          values: option.values,
          priority: option.priority,
          productId: savedProduct.id,
        })),
      );
    }

    if (variants && variants.length > 0) {
      this.db.insert(sc.productVariants).values(
        variants.map((variant) => ({
          optionSet: variant.optionsSet as object,
          price: `${variant.price}`,
          productId: savedProduct.id,
        })),
      );
    }

    return Promise.resolve(ProductMapper.toDomainEntity(savedProduct));
  }

  /**
   * Searches products which satisfies the filters and pagination.
   *
   * @param searchFilters Filters to filter the results
   * @param pagination Pagination to limit the result set
   * @param withOptions Should options be populated in the product object
   * @param withVariants Should variants be populated in the product object
   * @returns Set of products satisfying the filters and pagination
   */
  async search(
    searchFilters: SearchFilter[],
    pagination: Pagination,
    withOptions: boolean = false,
    withVariants: boolean = false,
  ): Promise<Product[]> {
    return await this.db.query.products
      .findMany({
        limit: pagination.pageSize ?? 25,
        offset: pagination.pageSize * pagination.pageNumber,
        // orderBy: (products, { asc, desc }) => {
        //   const [fields, order] = pagination.orderBy.split(';');
        //   const ordering = order === 'asc' ? asc : desc;
        //   return fields.split(',').map((field) => ordering(products[field]));
        // },
        where: () => this._buildCriteria(searchFilters),
        with: {
          options: withOptions ? withOptions : undefined,
          variants: withVariants ? withVariants : undefined,
        },
      })
      .then((result) =>
        result.map(
          (product) => new Product(product.name, product.description ?? ''),
        ),
      );
  }

  /**
   * Fetches the product in the database which has {@code productId} as identifier. It returns
   * null if no product corresponds.
   *
   * @param productId Product identifier
   * @returns Product which corresponding identifier or null if none has that identifier
   */
  async findById(
    productId: ProductId,
    withOptions: boolean = true,
    withVariants: boolean = true,
  ): Promise<Product | null> {
    console.log('Fetching product from database: ', productId);
    return await this.db.query.products
      .findFirst({
        where: (products, { eq }) => eq(products.id, productId),
        with: {
          options: withOptions ? withOptions : undefined,
          variants: withVariants ? withVariants : undefined,
        },
      })
      .then((value) => (value ? ProductMapper.toDomainEntity(value) : null));
  }

  /**
   * Deletes the product which has {@code productId} as identifier.
   *
   * @param productId Product identifier
   * @returns Number of deleted items
   */
  async deleteById(productId: ProductId): Promise<number> {
    const deletedIds = await this.db
      .delete(sc.products)
      .where(eq(sc.products.id, productId))
      .returning({ deletedId: sc.products.id });
    return Promise.resolve(deletedIds.length);
  }

  /**
   * Checks if a product with this {@code productId} as identifier exists in the database.
   *
   * @param productId Product identifier
   * @returns true if the product exists, false otherwise
   */
  async existsById(productId: ProductId): Promise<boolean> {
    return await this.db.query.products
      .findFirst({
        where: (products, { eq }) => eq(products.id, productId),
      })
      .then((result) => !!result);
  }

  /**
   * Count the number of products which satisfy the filter conditions.
   * If no filter is given, the total number of products present in the database.
   *
   * @param searchFilters Filters for filtering products
   * @returns Count of number of products satisfying the filters
   */
  async count(searchFilters: SearchFilter[] = []): Promise<number> {
    return await this.db.$count(products, this._buildCriteria(searchFilters));
  }
}
