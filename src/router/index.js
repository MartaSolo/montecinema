import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    components: {
      default: () => import("@/pages/HomePage.vue"),
      HeaderPrimary: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/movies",
    name: "AllMovies",
    components: {
      default: () => import("@/pages/AllMovies.vue"),
      HeaderPrimary: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/screenings",
    name: "AllScreenings",
    components: {
      default: () => import("@/pages/AllScreenings.vue"),
      HeaderPrimary: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/contact",
    name: "ContactUs",
    components: {
      default: () => import("@/pages/ContactUs.vue"),
      HeaderPrimary: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/login",
    name: "UserLogIn",
    components: {
      default: () => import("@/pages/UserLogIn.vue"),
      HeaderSecondary: () => import("@/components/header/HeaderSecondary.vue"),
    },
  },
  {
    path: "/register",
    name: "UserRegister",
    components: {
      default: () => import("@/pages/UserRegister.vue"),
      HeaderSecondary: () => import("@/components/header/HeaderSecondary.vue"),
    },
  },
  {
    path: "/account",
    name: "UserAccount",
    components: {
      default: () => import("@/pages/UserAccount.vue"),
      HeaderPrimary: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/book-ticket",
    name: "BookTicket",
    components: {
      default: () => import("@/pages/BookTicket.vue"),
      HeaderPrimary: () => import("@/components/header/HeaderPrimary.vue"),
    },
  },
  {
    path: "/404",
    name: "NotFound",
    components: {
      default: () => import("@/pages/NotFound.vue"),
      HeaderSecondary: () => import("@/components/header/HeaderSecondary.vue"),
    },
  },
  {
    path: "/*",
    redirect: "/404",
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
