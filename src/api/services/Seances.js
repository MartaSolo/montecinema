import axios from "@/api/axiosConfig.js";
import { SEANCES } from "../apiEndpoints";

export const getAllSeances = () => {
  return axios.get(SEANCES);
};
export const getSeanceById = (resourceId) => {
  return axios.get(`${SEANCES}/${resourceId}`);
};
