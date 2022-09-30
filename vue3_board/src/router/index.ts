import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";
import DetailView from "../views/DetailView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: ListView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

export default router;
