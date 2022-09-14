import { defineStore } from "pinia";
import { getAllMovies, getMovieById } from "@/api/services/Movies";

export const useMoviesStore = defineStore({
  id: "movies",
  state: () => ({
    movies: [],
    moviesIsLoading: false,
    moviesError: null,
    movie: null,
    movieIsLoading: false,
    movieError: null,
  }),
  getters: {
    getMoviesErrorMessage(state) {
      return (
        state.moviesError?.message ||
        "We are sorry, but movies cannot be displayed."
      );
    },
  },
  actions: {
    async getMovies() {
      this.movies = [];
      this.moviesIsLoading = true;
      try {
        const respData = await getAllMovies();
        this.movies = respData.data;
      } catch (error) {
        this.moviesError = error;
      } finally {
        this.moviesIsLoading = false;
      }
    },
    async getMovie(movieId) {
      this.movie = null;
      this.movieIsLoading = true;
      try {
        const respData = await getMovieById(movieId);
        this.movie = respData.data;
      } catch (error) {
        this.movieError = error;
      } finally {
        this.movieIsLoading = false;
      }
    },
  },
});
