import axios from "axios";
import jwtDecode from "jwt-decode";

export const applyToken = (token) => {
  if (token) {
    localStorage.setItem("access_token", token);
    axios.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  } else {
    localStorage.removeItem("access_token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const getTokenPayload = () => {
  const token = getToken();
  if (!token) return null;
  return jwtDecode(token);
};

export const getToken = () => {
  return typeof window !== "undefined"
    ? localStorage.getItem("access_token")
    : null;
};
