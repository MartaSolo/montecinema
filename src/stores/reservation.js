import { defineStore } from "pinia";
import { getSeanceById } from "@/api/services/Seances";
import { getMovieById } from "@/api/services/Movies";

export const useReservationStore = defineStore({
  id: "reservation",
  state: () => ({
    seance: null,
    seanceIsLoading: false,
    seanceError: null,
    movie: null,
    movieIsLoading: true,
    movieError: null,
  }),
  getters: {
    getReservationErrorMessage(state) {
      return (
        state.seanceError?.message ||
        "We are sorry, but the seance cannot be displayed."
      );
    },
  },
  actions: {
    async getSeance(seanceId) {
      this.seance = null;
      this.seanceIsLoading = true;
      this.movie = null;
      this.movieIsLoading = true;
      try {
        const respData = await getSeanceById(seanceId);
        this.seance = respData.data;
      } catch (error) {
        this.seanceError = error;
      } finally {
        this.seanceIsLoading = false;
      }
      try {
        const respData = await getMovieById(this.seance.movie);
        this.movie = respData.data;
      } catch (error) {
        this.movieError = error;
      } finally {
        this.movieIsLoading = false;
      }
    },
  },
});
