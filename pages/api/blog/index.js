import Blog from "@models/Blog";
import connectDB from "@utils/connectDB";
import { CREATE, FETCH } from "@utils/CRUD";

export default async function AllBlogs(req, res, next) {
  connectDB();
  if (req.method === "GET") {
    await FETCH(req, res, next, { Collection: Blog, Label: "Blog" });
  }

  if (req.method === "POST") {
    await CREATE(req, res, next, {
      Collection: Blog,
      Label: "Blog",
      data: req.body,
    });
  }
}
