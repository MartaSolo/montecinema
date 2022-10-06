import { defineStore } from "pinia";
import { getSeanceById } from "@/api/services/Seances";
import { getMovieById } from "@/api/services/Movies";
import { getHall } from "@/api/services/Halls.js";
import { allSeats, hallPlan } from "@/utils/hall.js";
import {
  makeReservation,
  getReservation,
  listReservations,
} from "@/api/services/Reservations.js";
import { ReservedSeatTicket } from "@/components/booking/ChooseTickets.vue";
import { useAuthStore } from "@/stores/auth.js";

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
  reservedSeance: ReservedSeance | null;
  reservedSeanceError: any;
  reservation: Reservation | null;
  reservationIsLoading: boolean;
  reservationError: any;
  userReservations: UserReservation[] | null;
  userReservationsIsLoading: boolean;
  userReservationsError: any;
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

interface ReservedSeance {
  id: number;
  seance_id: number;
  created_at: string;
  updated_at: string;
  ticket_desk_id: number;
  user_id: number;
}

interface Status {
  id: number;
  name: string;
}

interface Ticket {
  id: number;
  price: string;
  seat: string;
  type: string;
}

interface Reservation {
  id: number;
  movie_title: string;
  seance_datetime: string;
  seance_id: number;
  status: Status;
  tickets: Ticket[];
  user_email: string;
  user_id: number;
}

interface UserReservation {
  id: string;
  user_id: number;
  user_email: string;
  movie_title: string;
  seance_id: number;
  seance_datetime: string;
  status: Status;
  tickets: Ticket[];
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
    reservedSeance: null,
    reservedSeanceError: null,
    reservation: null,
    reservationIsLoading: true,
    reservationError: null,
    userReservations: null,
    userReservationsIsLoading: true,
    userReservationsError: null,
  }),
  getters: {
    getSeanceErrorMessage(state) {
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
    getReservationErrorMessage(state) {
      return (
        state.reservationError?.message ||
        "We are sorry, but the reservation cannot be displayed."
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
    sortReservedSeats(seats: string[]) {
      seats.sort((a, b) => a.localeCompare(b));
      this.reservedSeats = seats;
    },
    removeSelectedSeat(selectedSeat: string) {
      const filteredSeats = this.reservedSeats.filter((seat) => {
        return seat !== selectedSeat;
      });
      this.reservedSeats = filteredSeats;
    },
    async reserveSeance(reservedSeatsTickets: ReservedSeatTicket[]) {
      this.reservedSeats = [];
      this.reservedSeance = null;
      this.reservedSeanceError = null;
      try {
        const respData = await makeReservation({
          seance_id: this.seance?.id,
          tickets: reservedSeatsTickets,
        });
        this.reservedSeance = respData.data;
      } catch (error) {
        this.reservedSeanceError = error;
      }
    },
    async retrieveReservation() {
      this.reservation = null;
      this.reservationIsLoading = true;
      try {
        const respData = await getReservation(this.reservedSeance?.id);
        this.reservation = respData.data;
      } catch (error) {
        this.reservationError = error;
      } finally {
        this.reservationIsLoading = false;
      }
    },
    async getUserReservations() {
      this.userReservations = null;
      this.userReservationsIsLoading = true;
      const authStore = useAuthStore();
      if (authStore.currentUser) {
        try {
          const respData = await listReservations(authStore.currentUser.email);
          this.userReservations = respData.data;
        } catch (error) {
          this.userReservationsError = error;
        } finally {
          this.userReservationsIsLoading = false;
        }
      } else {
        throw new Error("User must be authenticated");
      }
    },
  },
});
