import { getProduct } from "~/server/services/products";

export default defineEventHandler(async (event) => {
  const productId: string | undefined = getRouterParam(event, "id");

  if (productId)
  await getProduct(productId);
});
