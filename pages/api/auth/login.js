import User from "@models/User.js";
import connectDB from "@utils/connectDB";
import jwt from "jsonwebtoken";
export default async function login(req, res, next) {
  await connectDB();
  if (req.method === "POST") {
    try {
      const user = await User.find({ email: req.body.email });
      if (!user) {
        res.status(401).json({ message: "email not  registered" });
      }
      if (user[0].password !== req.body.password) {
        res.status(403).json({ message: "username or password wrong" });
        return;
      }
      const token = jwt.sign({ email: user[0].email }, process.env.JWT_KEY, {
        expiresIn: "7d",
      });
      res.status(200).json(token);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}
