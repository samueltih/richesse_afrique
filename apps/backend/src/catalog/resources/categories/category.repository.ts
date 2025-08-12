import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@richesse-afrique/domain';

@Injectable()
export class CategoryRepositoryPgAdapter implements CategoryRepository {}
