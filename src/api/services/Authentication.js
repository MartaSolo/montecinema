import { axiosApi } from "@/api/axiosConfig.js";
import { LOGIN, REGISTER, USER, LOGOUT } from "@/api/apiEndpoints.js";

export const login = async (credentials) => {
  return axiosApi.post(`${LOGIN}`, {
    user: {
      email: credentials.email,
      password: credentials.password,
    },
  });
};

export const register = async (credentials) => {
  return axiosApi.post(`${REGISTER}`, {
    user: {
      email: credentials.email,
      password: credentials.password,
      first_name: credentials.firstName,
      last_name: credentials.lastName,
      date_of_birth: credentials.birthDay,
    },
  });
};

export const getUser = async () => axiosApi.get(`${USER}`);

export const logout = async () => {
  return axiosApi.delete(`${LOGOUT}`);
};

export const updateUser = async (credentials) => {
  return axiosApi.patch(`${USER}`, {
    user: {
      email: credentials.email,
      password: credentials.newPassword,
      first_name: credentials.firstName,
      last_name: credentials.lastName,
      date_of_birth: credentials.birthday,
      current_password: credentials.password,
    },
  });
};
