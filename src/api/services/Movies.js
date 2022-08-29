import axios from "@/api/axiosConfig.js";
import { MOVIES } from "@/api/apiEndpoints.js";

export const getAllMovies = () => {
  return axios.get(MOVIES);
};

export const getMovieById = (resourceId) => {
  return axios.get(`${MOVIES}/${resourceId}`);
};
