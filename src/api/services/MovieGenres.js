import axios from "@/api/axiosConfig.js";
import { MOVIE_GENRES } from "@/api/apiEndpoints.js";

export const getAllMovieGenres = () => {
  return axios.get(MOVIE_GENRES);
};
