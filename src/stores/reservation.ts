import { defineStore } from "pinia";
import { getSeanceById } from "@/api/services/Seances";
import { getMovieById } from "@/api/services/Movies";
import { getHall } from "@/api/services/Halls.js";

export const useReservationStore = defineStore({
  id: "reservation",
  state: (): Store => ({
    seance: null,
    seanceIsLoading: false,
    seanceError: null,
    movie: null,
    movieIsLoading: true,
    movieError: null,
    hall: null,
    hallIsLoading: false,
    hallError: null,
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
    async getSeance(seanceId: String) {
      this.seance = null;
      this.seanceIsLoading = true;
      this.movie = null;
      this.movieIsLoading = true;
      this.hall = null;
      this.hallIsLoading = true;
      try {
        const respData = await getSeanceById(seanceId);
        this.seance = respData.data;
      } catch (error) {
        this.seanceError = error;
      } finally {
        this.seanceIsLoading = false;
      }
      try {
        const respData = await getMovieById(this.seance?.movie);
        this.movie = respData.data;
      } catch (error) {
        this.movieError = error;
      } finally {
        this.movieIsLoading = false;
      }
      try {
        const respData = await getHall(this.seance?.hall);
        this.hall = respData.data;
      } catch (error) {
        this.hallError = error;
      } finally {
        this.hallIsLoading = false;
      }
    },
  },
});

interface Store {
  seance: SeanceInfo | null;
  seanceIsLoading: Boolean;
  seanceError: null;
  movie: MovieInfo | null;
  movieIsLoading: Boolean;
  movieError: null;
  hall: HallInfo | null;
  hallIsLoading: Boolean;
  hallError: null;
}

interface SeanceInfo {
  available_seats: [];
  datetime: String;
  hall: Number;
  id: Number;
  movie: Number;
  taken_seats: [];
}

interface MovieInfo {
  description: String;
  genre: {};
  id: Number;
  length: Number;
  poster_url: String;
  release_date: String;
  title: String;
}

interface HallInfo {
  id: Number;
  name: String;
  seats: Number;
}
