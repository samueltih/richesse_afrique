import { main } from "../../database/setup";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  const result = await main();
  return {
    main: result,
  };
});
