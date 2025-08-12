import { Module } from '@nestjs/common';
import { ProductController } from './resources/products/products.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './database/schema';
import { ProductRepositoryPgAdapter } from './resources/products/products.repository';
import { CategoryRepositoryPgAdapter } from './resources/categories/category.repository';
import { ProductsResolver } from './resources/products/products.resolver';
import { ProductServiceImpl } from '@richesse-afrique/domain';

@Module({
  imports: [
    // Multer
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),

    // GraphQL
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
    }),
  ],
  controllers: [ProductController],
  providers: [
    // Drizzle
    {
      provide: 'DrizzleAsyncProvider',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const connectionString = configService.get<string>('DATABASE_URL');
        const pool = new Pool({
          connectionString,
        });
        return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
      },
    },

    // Services
    {
      provide: 'ProductService',
      inject: [ProductRepositoryPgAdapter],
      useFactory: (productRepository: ProductRepositoryPgAdapter) => {
        return new ProductServiceImpl(productRepository);
      },
    },

    // Repositories
    ProductRepositoryPgAdapter,
    CategoryRepositoryPgAdapter,
    ProductsResolver,
  ],
})
export class CatalogModule {}
