import Blog from "@models/Blog";
import connectDB from "@utils/connectDB";
import { FETCH_BY_ATTRIBUTE, UPDATE_BY_ATTRIBUTE } from "@utils/CRUD";

export default async function SingleBlog(req, res, next) {
  await connectDB();
  if (req.method === "GET") {
    await FETCH_BY_ATTRIBUTE(req, res, next, {
      Collection: Blog,
      Label: "Blog",
      AttributeName: "_id",
      Attribute: req.query.id,
    });
  }
  if (req.method === "PUT") {
    await UPDATE_BY_ATTRIBUTE(req, res, next, {
      Collection: Blog,
      Label: "Blog",
      AttributeName: "_id",
      Attribute: req.query.id,
      data: req.body,
    });
  }
}
