import { axiosApi } from "@/api/axiosConfig.js";
import { LOGIN, REGISTER, USER, LOGOUT } from "@/api/apiEndpoints.js";
import { Credentials } from "@/types";

export const login = async (credentials: Partial<Credentials>) => {
  return axiosApi.post(`${LOGIN}`, {
    user: {
      email: credentials.email,
      password: credentials.password,
    },
  });
};

export const register = async (credentials: Partial<Credentials>) => {
  console.log("api register fired", credentials);
  return axiosApi.post(`${REGISTER}`, {
    user: {
      email: credentials.email,
      password: credentials.password,
      first_name: credentials.first_name,
      last_name: credentials.last_name,
      date_of_birth: credentials.date_of_birth,
    },
  });
};

export const getUser = async () => axiosApi.get(`${USER}`);

export const logout = async () => {
  return axiosApi.delete(`${LOGOUT}`);
};

export const updateUser = async (updatedUserData: Credentials) => {
  return axiosApi.patch(`${USER}`, {
    user: {
      email: updatedUserData.email,
      password: updatedUserData.password,
      first_name: updatedUserData.first_name,
      last_name: updatedUserData.last_name,
      date_of_birth: updatedUserData.date_of_birth,
      current_password: updatedUserData.current_password,
    },
  });
};
