import { useRouter } from "next/router";
import { getTokenPayload, getToken } from "./authHelper";

const RequiredAuth = ({ child }) => {
  const payload = getTokenPayload();
  const router = useRouter();
  if (payload && payload.exp && payload.exp <= Date.now() / 1000) {
    applyToken(null);
    router.replace("/auth/login");
  }

  if (!getToken()) {
    router.replace("/auth/login");
  } else {
    return child;
  }
};
export default RequiredAuth;
