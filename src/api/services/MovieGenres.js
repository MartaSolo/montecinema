import { axiosApi } from "@/api/axiosConfig.js";
import { MOVIE_GENRES } from "@/api/apiEndpoints.js";

export const getAllMovieGenres = () => {
  return axiosApi.get(MOVIE_GENRES);
};
