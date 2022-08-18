import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/movies",
    name: "AllMovies",
    component: () => import("@/pages/AllMovies.vue"),
  },
  {
    path: "/screenings",
    name: "AllScreenings",
    component: () => import("@/pages/AllScreenings.vue"),
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: () => import("@/pages/ContactUs.vue"),
  },
  {
    path: "/login",
    name: "UserLogIn",
    component: () => import("@/pages/UserLogIn.vue"),
  },
  {
    path: "/register",
    name: "UserRegister",
    component: () => import("@/pages/UserRegister.vue"),
  },
  {
    path: "/account",
    name: "UserAccount",
    component: () => import("@/pages/UserAccount.vue"),
  },
  {
    path: "/book-ticket",
    name: "BookTicket",
    component: () => import("@/pages/BookTicket.vue"),
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
