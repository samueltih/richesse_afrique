import { format } from "date-fns";
import { stat, mkdir } from "fs";
import { randomBytes } from "crypto";
import { join } from "path";
import formidable, { Fields, Files, Part } from "formidable";
import IncomingForm from "formidable/Formidable";
import type { IncomingMessage } from "http";
import { logger } from "./logger";

const uploadDir = join(
  process.env.ROOT_DIR || process.cwd(),
  `/public/uploads/${format(Date.now(), "dd-MM-Y")}`
);

export async function parseForm(
  request: IncomingMessage
): Promise<{ fields: Fields; files: Files }> {

  return await new Promise(async (resolve, reject) => {
    
    const form = formidable({
      keepExtensions: true,
      maxFileSize: 1024 * 1024,
      filename(name: string, ext: string, part: Part, form: IncomingForm) {
        return `${randomBytes(16).toString("hex")}${ext}`;
      },
      filter(part: Part) {
        return true;
        // return (
        //   part.name === "media" && (part.mimetype?.includes("image") || false)
        // );
      },
      uploadDir
    });

    const parse = (request: IncomingMessage) => {
      console.log("Incoming message: ");
      form.parse(request, (err: any, fields: Fields, files: Files) => {
        console.log("Parsing form data...");
        if (err) {
          reject(err);
        } else resolve({ fields, files });
      });
    };

    // -- Check if upload directory is present, if not create it and place file in it
    stat(uploadDir, async (err, stats) => {
      console.log("Uploading...");
      if (err && err.code === "ENOENT") {
        console.log("Create directories first...");
        await mkdir(uploadDir, { recursive: true }, () => {
          parse(request);
        });
      } else if (err) {
        logger.error(err);
        reject(err);
        return;
      } else {
        console.log("Parsing...")
        parse(request);
      }
    });
  });
}
