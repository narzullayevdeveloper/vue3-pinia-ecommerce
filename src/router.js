import { createRouter, createWebHistory } from "vue-router";

import Carts from "./views/Carts.vue";
import Home from "./views/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/carts", component: Carts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
