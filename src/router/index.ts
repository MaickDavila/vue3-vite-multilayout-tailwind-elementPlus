import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import routesConfig from "./routesConfig";
import emptyLayout from "../layouts/emptyLayout.vue";

const routes = routesConfig.map((route: RouteRecordRaw) => {
  if (!route.meta?.layout) {
    route.meta = Object.assign({}, route.meta, { layout: emptyLayout });
  }
  return route;
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
