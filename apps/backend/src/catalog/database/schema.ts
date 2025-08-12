import { relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  smallint,
  timestamp,
  text,
  pgEnum,
  numeric,
  jsonb,
  integer,
  primaryKey,
} from 'drizzle-orm/pg-core';

/**
 * Product status
 */
export const productStatus = pgEnum('product_status', [
  'draft',
  'active',
  'archived',
]);

/**
 * Product in a store
 */
export const products = pgTable('product', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  slug: text('slug').unique(),
  tags: text('tags').array(),
  status: productStatus().default('draft').notNull(),
  attributes: jsonb(),
  price: numeric(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type ProductInsert = typeof products.$inferInsert;
export type ProductSelect = typeof products.$inferSelect;

export const productRelations = relations(products, ({ many }) => ({
  variants: many(productVariants),
  options: many(productOptions),
  productsToMedia: many(productsToMedia),
}));

/**
 * Variant of a product
 */
export const productVariants = pgTable('product_variant', {
  id: serial('id').primaryKey(),
  optionSet: jsonb(),
  price: numeric(),
  productId: integer('product_id')
    .references(() => products.id, { onDelete: 'cascade' })
    .notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type ProductVariantInsert = typeof productVariants.$inferInsert;
export type ProductVariantSelect = typeof productVariants.$inferSelect;

export const productVariantRelations = relations(
  productVariants,
  ({ one }) => ({
    product: one(products, {
      fields: [productVariants.productId],
      references: [products.id],
    }),
  }),
);

/**
 * Variant of a particular store
 */
export const media = pgTable('media', {
  id: serial('id').primaryKey(),
  fileName: text('name'),
  alternativeText: text(),
  url: text(),
  height: smallint(),
  width: smallint(),
});

export const mediaRelations = relations(media, ({ many }) => ({
  productsToMedia: many(productsToMedia),
}));

export const productsToMedia = pgTable(
  'products_to_media',
  {
    productId: integer('product_id')
      .notNull()
      .references(() => products.id),
    mediaId: integer('media_id')
      .notNull()
      .references(() => media.id),
  },
  (t) => [primaryKey({ columns: [t.productId, t.mediaId] })],
);

export const productsToMediaRelations = relations(
  productsToMedia,
  ({ one }) => ({
    product: one(products, {
      fields: [productsToMedia.productId],
      references: [products.id],
    }),
    media: one(media, {
      fields: [productsToMedia.mediaId],
      references: [media.id],
    }),
  }),
);

/**
 * Options du produit
 */
export const productOptions = pgTable('product_option', {
  id: serial('id').primaryKey(),
  name: text('name'),
  values: text('values').array(),
  priority: smallint(),
  productId: integer('product_id')
    .references(() => products.id, { onDelete: 'cascade' })
    .notNull(),
});

export type ProductOptionInsert = typeof productOptions.$inferInsert;
export type ProductOptionSelect = typeof productOptions.$inferSelect;

export const productOptionRelations = relations(productOptions, ({ one }) => ({
  product: one(products, {
    fields: [productOptions.productId],
    references: [products.id],
  }),
}));
