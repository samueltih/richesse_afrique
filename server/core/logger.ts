import { createLogger, transports, format } from "winston";

const { combine, json, timestamp } = format;
const { Console, File } = transports;

export const logger = createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new Console(),
    new File({
      filename: 'ra.log',
    })
  ],
});
