import { parseForm } from "../core/upload";

export default defineEventHandler(async (event) => {
    console.log(event);
    // const { fields, files } = await parseForm(event.node.req);
});