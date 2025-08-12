import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './catalog/database/schema';
import { PdfService } from './orders/services/pdf/pdf.service';
import { CatalogModule } from './catalog/catalog.module';
import { OrdersModule } from './orders/orders.module';
import { BlogModule } from './blog/blog.module';
@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    CatalogModule,

    OrdersModule,

    BlogModule,
  ],
  providers: [
    AppService,
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
    PdfService,
  ],
})
export class AppModule {}
