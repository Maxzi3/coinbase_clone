import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import TwoFA from "../pages/TwoFA.vue";
import PasswordLogin from "../pages/PasswordLogin.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/login/password", name: "PasswordLogin", component: PasswordLogin },
  { path: "/2fa", component: TwoFA },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
