import { defineStore } from "pinia";
import { getSeanceById } from "@/api/services/Seances";
import { getMovieById } from "@/api/services/Movies";
import { getHall } from "@/api/services/Halls.js";
import { allSeats, hallPlan } from "@/utils/hall.js";

interface Store {
  seance: SeanceInfo | null;
  seanceIsLoading: boolean;
  seanceError: any;
  movie: MovieInfo | null;
  movieIsLoading: boolean;
  movieError: any;
  hall: HallInfo | null;
  hallIsLoading: boolean;
  hallError: any;
  reservedSeats: string[];
}

interface SeanceInfo {
  available_seats: string[];
  datetime: string;
  hall: number;
  id: number;
  movie: number;
  taken_seats: string[];
}

interface MovieInfo {
  description: string;
  genre: Genre;
  id: number;
  length: number;
  poster_url: string;
  release_date: string;
  title: string;
}

interface Genre {
  id: number;
  name: string;
}

interface HallInfo {
  id: number;
  name: string;
  seats: number;
}

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
    reservedSeats: [],
  }),
  getters: {
    getReservationErrorMessage(state) {
      return (
        state.seanceError?.message ||
        "We are sorry, but the seance cannot be displayed."
      );
    },
    getAllSeats(state) {
      if (state.seance) {
        return allSeats(state.seance.available_seats, state.seance.taken_seats);
      }
    },
    getHallPlan() {
      if (this.getAllSeats) {
        return hallPlan(this.getAllSeats);
      }
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
    setReservedSeats(seats: string[]) {
      seats.sort((a, b) => a.localeCompare(b));
      this.reservedSeats = seats;
    },
  },
});
