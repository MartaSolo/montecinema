import { createWebHistory, createRouter } from "vue-router";

import HomePage from "@/pages/Homepage.vue";
import AllMovies from "@/pages/AllMovies.vue";
import AllScreenings from "@/pages/AllScreenings.vue";

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
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
