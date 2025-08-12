import { Product, ProductFactory } from '@richesse-afrique/domain';
import { ProductInsert, ProductSelect } from '../../database/schema';

export class ProductMapper {
  static toDomainEntity(data: ProductSelect | ProductInsert): Product {
    return ProductFactory.create(
      data.id ?? null,
      data.name,
      data.description ?? '',
      data.price ? parseFloat(data.price) : 0,
    );
  }
}
