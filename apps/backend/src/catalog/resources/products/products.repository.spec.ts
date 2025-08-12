import { Test, TestingModule } from '@nestjs/testing';
import { ProductRepositoryPgAdapter } from './products.repository';

describe('ProductRepositoryPgAdapter', () => {
  let service: ProductRepositoryPgAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRepositoryPgAdapter],
    }).compile();

    service = module.get<ProductRepositoryPgAdapter>(
      ProductRepositoryPgAdapter,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
