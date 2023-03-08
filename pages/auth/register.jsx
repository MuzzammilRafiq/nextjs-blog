import Register from "@components/Register";
import axios from "axios";

function register() {
  const onRegister = async (data) => {
    try {
      const res = await axios.post("/api/auth/register", data);
      console.log(res);
    } catch (error) {
      if ((error.response.status = 409)) {
        alert("Email already registered");
      } else {
        alert("Something went wrong");
      }
      console.log(error);
    }
  };
  return <Register onRegister={onRegister} />;
}

export default register;
