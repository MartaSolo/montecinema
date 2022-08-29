import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    components: {
      default: () => import("@/pages/HomePage.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/movies",
    name: "AllMovies",
    components: {
      default: () => import("@/pages/AllMovies.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/movies/:movieId",
    name: "MovieDetails",
    components: {
      default: () => import("@/pages/MovieDetails.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
    props: true,
  },
  {
    path: "/screenings",
    name: "AllScreenings",
    components: {
      default: () => import("@/pages/AllScreenings.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/contact",
    name: "ContactUs",
    components: {
      default: () => import("@/pages/ContactUs.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/login",
    name: "UserLogIn",
    components: {
      default: () => import("@/pages/UserLogIn.vue"),
      Header: () => import("@/components/header/HeaderSecondary.vue"),
    },
  },
  {
    path: "/register",
    name: "UserRegister",
    components: {
      default: () => import("@/pages/UserRegister.vue"),
      Header: () => import("@/components/header/HeaderSecondary.vue"),
    },
  },
  {
    path: "/account",
    name: "UserAccount",
    components: {
      default: () => import("@/pages/UserAccount.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/book-ticket",
    name: "BookTicket",
    components: {
      default: () => import("@/pages/BookTicket.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/404",
    name: "NotFound",
    components: {
      default: () => import("@/pages/NotFound.vue"),
      Header: () => import("@/components/header/HeaderSecondary.vue"),
    },
  },
  {
    path: "/*",
    redirect: "/404",
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
