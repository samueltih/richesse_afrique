import { CronJob } from "cron";
import { logger } from "./logger";

const checkOrdersJob = CronJob.from({
    cronTime: "* * * * * *",
    onTick: () => {
        logger.info("Get ")
    },
    start: true,
	timeZone: 'America/Los_Angeles'
});