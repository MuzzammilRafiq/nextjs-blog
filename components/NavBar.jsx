import Link from "next/link";
import styles from "@styles/NavBar.module.css";
function NavBar() {
  return (
    <ul className={styles.navbar}>
      <Link href="/" className={styles.navbarChild}>
        Home
      </Link>
      <Link href="/blogs" className={styles.navbarChild}>
        Blogs
      </Link>
      <Link href="/add" className={styles.navbarChild}>
        Add Blog
      </Link>
    </ul>
  );
}

export default NavBar;
