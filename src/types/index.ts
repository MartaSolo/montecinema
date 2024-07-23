export type ActiveTab = "personalDetails" | "reservations";

export interface Credentials {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  current_password: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Hall {
  id: number;
  name: string;
  seats: number;
}

export interface Movie {
  description: string;
  genre: Genre;
  id: number;
  length: number;
  poster_url: string;
  release_date: string;
  title: string;
}

export interface Reservation {
  id: number;
  user_id: number;
  user_email: string;
  movie_title: string;
  seance_datetime: string;
  seance_id: number;
  status: Status;
  tickets: Ticket[];
}

export interface ReservedSeance {
  id: number;
  seance_id: number;
  created_at: string;
  updated_at: string;
  ticket_desk_id: number;
  user_id: number;
}

export interface ReservedSeatTicket {
  seat: string;
  ticket_type_id: number;
}

export interface Seance {
  datetime: string;
  hall: number;
  id: number;
  movie: number;
}

export interface SeanceInfo extends Seance {
  available_seats: string[];
  taken_seats: string[];
}

export interface Status {
  id: number;
  name: string;
}

export interface Ticket {
  id: number;
  price: string;
  seat: string;
  type: string;
}

type Role = "user" | "admin" | "employee";

export interface User {
  id: number;
  email: string;
  jti: string;
  created_at: string;
  updated_at: string;
  role: Role;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

export type AuthToken = string;

export interface UserData {
  user: User;
  authToken: AuthToken;
}
