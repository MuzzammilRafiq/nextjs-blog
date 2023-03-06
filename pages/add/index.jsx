import styles from "@styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Index() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/blog", {
        title,
        imgUrl,
        description,
        slug: title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, ""),
      });
      console.log(res);
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };
  return (
    <form className={styles.formAdd} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name of Blog"
        className={styles.inputAdd}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Image Url"
        className={styles.inputAdd}
        value={imgUrl}
        required
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <textarea
        cols={40}
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input type="submit" value="Add Blog" className={styles.inputAdd} />
    </form>
  );
}
