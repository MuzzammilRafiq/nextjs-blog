import Blog from "@schema/Blog";
import connectDB from "@utils/connectDB";
import { CREATE, FETCH } from "@utils/CRUD";

export default async function register(req, res, next) {
  await connectDB();
  if (req.method === "POST") {
    await CREATE(req, res, next, {
      Collection: Blog,
      Label: "Blog",
      data: req.body,
    });
    return;
  }
  if (req.method === "GET") {
    await FETCH(req, res, next, {
      Collection: Blog,
      Label: "Blog",
    });
  }
}
