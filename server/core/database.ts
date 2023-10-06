import { PrismaClient } from "@prisma/client";
import { logger } from "./logger";

export const prisma = new PrismaClient();

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
