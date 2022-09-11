import axios from "axios";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";

export const axiosApi = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { "Content-Type": "application/json" },
});

axiosApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const auth = useAuthStore();
      await auth.logout();
      router.push({ name: "UserLogIn" });
    }
    return Promise.reject(error);
  }
);

export const setAuthHeader = (authHeader) => {
  axiosApi.defaults.headers.common["Authorization"] = authHeader;
};

export const removeAuthHeader = () => {
  delete axiosApi.defaults.headers.common["Authorization"];
};

export default axiosApi;
