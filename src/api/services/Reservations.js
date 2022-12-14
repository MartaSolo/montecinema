import { axiosApi } from "@/api/axiosConfig.js";
import { BOOK_RESERVATION, RESERVATIONS } from "@/api/apiEndpoints.js";

export const makeReservation = (reservation) => {
  return axiosApi.post(`${BOOK_RESERVATION}`, reservation);
};

export const getReservation = (reservationId) => {
  return axiosApi.get(`${RESERVATIONS}/${reservationId}`);
};

export const listReservations = (userEmail) => {
  return axiosApi.get(
    `${RESERVATIONS}?user_email=${userEmail}&page=1&per_page=1000`
  );
};
