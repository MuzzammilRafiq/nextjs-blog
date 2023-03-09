import { model, models, Schema } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/c/c6/Mount_Vinson_from_NW_at_Vinson_Plateau_by_Christian_Stangl_%28flickr%29.jpg",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "Blog",
  }
);
const Blog = models.Blog || model("Blog", BlogSchema);
export default Blog;
