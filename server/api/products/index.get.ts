import { main } from "../../services/products";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const result = await main();
  return {
    main: result,
  };
});
