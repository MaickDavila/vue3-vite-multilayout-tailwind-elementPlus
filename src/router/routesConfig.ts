import { RouteRecordRaw } from "vue-router";
/*
use customLayout on
meta: {
  layout: customLayout
}
#custonLayout is a vue component of layouts/folder
*/
const routesConfig = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
  },
] as RouteRecordRaw[];

export default routesConfig;
