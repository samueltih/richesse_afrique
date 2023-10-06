import { prisma } from "../database/setup";

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
  await prisma.product.findUnique()
}
