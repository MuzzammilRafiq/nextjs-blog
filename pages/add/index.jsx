import AddBlog from "@components/AddBlog";
import axios from "axios";
import { useRouter } from "next/router";
import slugify from "slugify";

export default function AddBlogPage() {
  const router = useRouter();
  const addBlog = async ({ title, imgUrl, description }) => {
    try {
      const slug = slugify(title.slice(0, 61) + "-" + Date.now(), {
        lower: true,
        strict: true,
      });
      await axios.post("/api/blog", { title, slug, imgUrl, description });
      router.push("/blog");
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };
  return <AddBlog addBlog={addBlog} />;
}
