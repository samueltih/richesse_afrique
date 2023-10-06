import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function main() {
  try {
    return await prisma.product.findMany();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

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
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
