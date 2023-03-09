import Login from "@components/Login";
import { applyToken } from "@utils/authHelper";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function LoginPage(props) {
  const router = useRouter();
  const onLogin = async (data) => {
    try {
      const res = await axios.post("/api/auth/login", data);
      applyToken(res.data);
      Cookies.set("access_token", res.data);
      router.replace("/");
    } catch (error) {
      console.log(error);
      const code = error.response.status;
      if (code === 401) {
        alert("email not registered");
      } else if (code === 403) {
        alert("username or password wrong");
      } else {
        alert("something went wrong");
      }
      console.log(error);
    }
  };
  return <Login onLogin={onLogin} />;
}
