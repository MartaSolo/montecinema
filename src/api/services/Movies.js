import { axiosApi } from "@/api/axiosConfig.js";
import { MOVIES } from "@/api/apiEndpoints.js";

export const getAllMovies = () => {
  return axiosApi.get(MOVIES);
};

export const getMovieById = (resourceId) => {
  return axiosApi.get(`${MOVIES}/${resourceId}`);
};
