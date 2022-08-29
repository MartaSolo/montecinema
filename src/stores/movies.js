import { defineStore } from "pinia";
import { getAllMovies } from "@/api/services/Movies";

export const useMoviesStore = defineStore({
  id: "movies",
  state: () => ({
    movies: [],
    moviesIsLoading: false,
    moviesError: null,
  }),
  getters: {
    getErrorMessage(state) {
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
  },
});
