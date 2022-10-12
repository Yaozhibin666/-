import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/new",
      name: "new",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NewsPage.vue"),
    },
    {
      path: "/act",
      name: "act",
      component: () => import("../views/AchieveMent.vue"),
    },
    {
      path: "/connect",
      name: "connect",
      component: () => import("../views/ConnectUs.vue"),
    },
  ],
});

export default router;
