import { main } from "../../core/database";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const result = await main();
  return {
    main: result,
  };
});
