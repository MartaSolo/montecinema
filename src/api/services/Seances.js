import axios from "@/api/axiosConfig.js";
import { SEANCES } from "../apiEndpoints";

export const getAllSeances = (date) => {
  return axios.get(`${SEANCES}?date=${date}`);
};

export const getSeanceById = (resourceId) => {
  return axios.get(`${SEANCES}/${resourceId}`);
};
