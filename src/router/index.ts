import { createRouter, createWebHistory } from "vue-router";
import routes from "./modules";
// root 节点
import Root from '../views';


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "is-active",
  routes: [
    {
      name: 'home',
      path: '/',
      component: Root,
      children: routes
    }
  ],
});

export default router;
