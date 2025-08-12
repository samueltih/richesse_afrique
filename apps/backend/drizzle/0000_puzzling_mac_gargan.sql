CREATE TYPE "public"."product_status" AS ENUM('draft', 'active', 'archived');--> statement-breakpoint
CREATE TABLE "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"alternativeText" text,
	"url" text,
	"height" smallint,
	"width" smallint
);
--> statement-breakpoint
CREATE TABLE "product_option" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"values" text[],
	"priority" smallint,
	"product_id" integer
);
--> statement-breakpoint
CREATE TABLE "product_variant" (
	"id" serial PRIMARY KEY NOT NULL,
	"optionSet" jsonb,
	"price" numeric,
	"product_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"slug" text,
	"tags" text[],
	"status" "product_status" DEFAULT 'draft' NOT NULL,
	"attributes" jsonb,
	"price" numeric,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "product_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "products_to_media" (
	"product_id" integer NOT NULL,
	"media_id" integer NOT NULL,
	CONSTRAINT "products_to_media_product_id_media_id_pk" PRIMARY KEY("product_id","media_id")
);
--> statement-breakpoint
ALTER TABLE "products_to_media" ADD CONSTRAINT "products_to_media_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_to_media" ADD CONSTRAINT "products_to_media_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE no action ON UPDATE no action;