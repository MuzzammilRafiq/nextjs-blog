import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  const { title } = router.query;
  return <div>{title}</div>;
}

export default index;
