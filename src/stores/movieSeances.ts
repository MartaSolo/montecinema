import { defineStore } from "pinia";
import { getMovieSeancesByDay } from "@/api/services/Seances";
import { Seance } from "@/types";

interface Store {
  movieSeances: Seance[];
  movieSeancesIsLoading: boolean;
  movieSeancesError: any;
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
