import { defineStore } from "pinia";
import { getMovieSeancesByDay } from "@/api/services/Seances";

interface Store {
  movieSeances: movieSeance[];
  movieSeancesIsLoading: boolean;
  movieSeancesError: any;
}

interface movieSeance {
  id: number;
  datetime: string;
  movie: number;
  hall: number;
}

export const useMovieSeancesStore = defineStore({
  id: "seance",
  state: (): Store => ({
    movieSeances: [],
    movieSeancesIsLoading: false,
    movieSeancesError: null,
  }),
  getters: {
    movieSeancesErrorMessage(state) {
      return (
        state.movieSeancesError?.message ||
        "We are sorry, but the seance cannot be displayed."
      );
    },
  },
  actions: {
    async getMovieSeances(movieId: number, date: string) {
      this.movieSeances = [];
      this.movieSeancesIsLoading = true;
      try {
        const respData = await getMovieSeancesByDay(movieId, date);
        this.movieSeances = respData.data;
      } catch (error) {
        this.movieSeancesError = error;
      } finally {
        this.movieSeancesIsLoading = false;
      }
    },
  },
});
