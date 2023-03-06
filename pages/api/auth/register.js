import User from "../../../models/User";
import connectDB from "@utils/connectDB";
import { CREATE } from "@utils/CRUD";

export default async function register(req, res, next) {
  await connectDB();
  if (req.method === "POST") {
    await CREATE(req, res, next, {
      Collection: User,
      Label: "User",
      data: req.body,
    });
  }
}
