import { axiosApi } from "@/api/axiosConfig.js";
import { HALLS } from "@/api/apiEndpoints.js";

export const getHall = (hallId) => {
  return axiosApi.get(`${HALLS}/${hallId}`);
};
