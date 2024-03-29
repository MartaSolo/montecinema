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
    path: "/book-ticket/:movieSeanceId",
    name: "BookTicket",
    components: {
      default: () => import("@/pages/BookTicket.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
    props: true,
    children: [
      {
        path: "choose-seats",
        name: "ChooseSeats",
        component: () => import("@/components/booking/ChooseSeats.vue"),
        props: true,
      },
      {
        path: "choose-tickets",
        name: "ChooseTickets",
        component: () => import("@/components/booking/ChooseTickets.vue"),
        props: true,
      },
      {
        path: "success",
        name: "BookingSuccess",
        component: () => import("@/components/booking/BookingSuccess.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/user",
    name: "UserAccount",
    components: {
      default: () => import("@/pages/UserAccount.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
    meta: { requiresUserRole: true },
  },
  {
    path: "/employee",
    name: "EmployeeAccount",
    components: {
      default: () => import("@/pages/EmployeeAccount.vue"),
      Header: () => import("@/components/header/HeaderPrimary.vue"),
    },
    meta: { requiresEmployeeRole: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    components: {
      default: () => import("@/pages/NotFound.vue"),
      Header: () => import("@/components/header/HeaderSecondary.vue"),
    },
  },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from, next) => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userRole = userData?.role;
  if (
    (to.meta.requiresUserRole && userRole === "employee") ||
    (to.meta.requiresEmployeeRole && userRole === "user")
  ) {
    router.push({ name: "HomePage" });
  } else {
    next();
  }
});

export default router;
