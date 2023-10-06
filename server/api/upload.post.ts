import { parseForm } from "../core/upload";

export default defineEventHandler(async (event) => {
    const { fields, files } = await parseForm(event.node.req);
    console.log("Value: ", files, fields);
});