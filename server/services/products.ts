import { prisma } from "../core/database";
import { logger } from "../core/logger";

/**
 * Adds a product to the database
 *
 * @param product Product to be added
 * @returns
 */
export async function addProduct(product: any) {
  // const product = await
  const savedProduct = await prisma.product.create({
    data: {
      name: "Huile d'Argan",
      description: "",
      price: 55,
    },
  });
  return null;
}

export async function getProduct(productId: string) {
  // await prisma.product.findUnique()
}

export async function main() {
  try {
    return await prisma.product.findMany();
  } catch (e) {
    logger.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * 
 * @param page 
 * @param size 
 * @param query 
 * @param filters 
 * @returns 
 */
export async function search(
  page: number = 1,
  size: number = 20,
  query?: string,
  filters?: any
) {
  try {
    return await prisma.product.findMany({
      skip: size * (page - 1),
      take: size,
      where: filters,
    });
  } catch (e) {
    logger.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
