import styles from "@styles/BlogPost.module.css";
import Link from "next/link";
function BlogPost({ data }) {
  return (
    <Link href={`/blogs/${data._id}`} passHref legacyBehavior>
      <div className={styles.blogPost}>
        <h3>{data.title}</h3>
        <img src={data.imgUrl} alt={data.slug} width="300px" />
        <hr />
        <p>{data.description}</p>
      </div>
    </Link>
  );
}

export default BlogPost;
