import { Test, TestingModule } from '@nestjs/testing';
import { CategoryRepositoryPgAdapter } from './catalog/category.repository';

describe('CategoryService', () => {
  let service: CategoryRepositoryPgAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryRepositoryPgAdapter],
    }).compile();

    service = module.get<CategoryRepositoryPgAdapter>(CategoryRepositoryPgAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
