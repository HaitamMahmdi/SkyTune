import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: {
      title: "home",
    },
  },
  {
    name: "songs",
    path: "/songs",
    component: () => import("@/views/Songs.vue"),
    meta: {
      title: "songs",
    },
  },
  {
    name: "selectPlan",
    path: "/selectPlan",
    component: () => import("@/views/Plan.vue"),
    meta: {
      title: "select plan",
    },
  },
  {
    name: "getApp",
    path: "/getApp",
    component: () => import("@/views/GetApp.vue"),
    meta: {
      title: "get the app",
    },
  },
  {
    name: "about",
    path: "/about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "about",
    },
  },

  {
    name: "signIn",
    path: "/signIn",
    component: () => import("@/views/SignIn.vue"),
    meta: {
      title: "sign in",
    },
  },
  {
    name: "logIn",
    path: "/logIn",
    component: () => import("@/views/LogIn.vue"),
    meta: {
      title: "log in",
    },
  },
];

const router = createRouter({
  history: createWebHistory(`/SkyTune/`),
  routes,
  linkActiveClass: `text-main`,
});

export default router;
