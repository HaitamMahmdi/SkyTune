import { createRouter, createMemoryHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createMemoryHistory(`/SkyTune/`),
  routes,
});

export default router;
