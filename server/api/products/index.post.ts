import sharp from "sharp";
import { main } from "../../services/products";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // - Small 50 x 50
  sharp()
    .resize(50, 50)
    .trim(sharp.strategy.entropy)
    .toFile("", (err) => {
      console.log("Error resizing file...", err);
    });

  // - Medium 100 x 100
  sharp()
    .resize(100, 100)
    .trim(sharp.strategy.entropy)
    .toFile("", (err) => {
      console.log("Error resizing file to medium size", err);
    });

  const result = await main();
  return {
    main: result,
  };
});
