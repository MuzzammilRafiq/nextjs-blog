import mongoose from "mongoose";

export default async () => mongoose.connect(process.env.MONGO_URL);
