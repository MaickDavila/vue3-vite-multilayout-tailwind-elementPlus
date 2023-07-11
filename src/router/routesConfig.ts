import { RouteRecordRaw } from "vue-router";
/*
use customLayout on
meta: {
  layout: customLayout
}
#customLayout is a vue component of layouts/folder
*/
const routesConfig = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
  },
] as RouteRecordRaw[];

export default routesConfig;
