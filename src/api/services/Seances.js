import { axiosApi } from "@/api/axiosConfig.js";
import { SEANCES } from "../apiEndpoints";

export const getAllSeances = (date) => {
  return axiosApi.get(`${SEANCES}?date=${date}`);
};

export const getSeanceById = (resourceId) => {
  return axiosApi.get(`${SEANCES}/${resourceId}`);
};
