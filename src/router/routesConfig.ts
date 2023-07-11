import { RouteRecordRaw } from "vue-router";
import emptyLayout from "../layouts/emptyLayout.vue";
import homeLayout from "../layouts/homeLayout.vue";
/*
use customLayout on
meta: {
  layout: customLayout
}
#customLayout is a vue component of layouts/folder
*/
const routesConfig = {
  Init: {
    path: "/",
    name: "init",
    component: () => import("../pages/InitPage.vue"),
  },
  Home: {
    path: "/home",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
    meta: {
      layout: homeLayout,
    },
  },
};

const routesList = Object.values(routesConfig);

const routes = routesList.map((route: RouteRecordRaw) => {
  if (!route.meta?.layout) {
    route.meta = Object.assign({}, route.meta, { layout: emptyLayout });
  }
  return route;
});

export { routes, routesConfig, routesList };
