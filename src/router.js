/*
 * @Author: duchengdong
 * @Date: 2020-11-04 15:07:21
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-18 21:23:09
 * @Description: 
 */
import {
  createWebHistory,
  createRouter
} from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
// import List from "@/views/List.vue";
// import Info from "@/views/Info.vue";
const List = () => import(/*listpage*/"@/views/List.vue")
const Info = () => import("@/views/Info.vue")
const routes = [{
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [{
      path: '',
      name: "Home",
      component: List
    }, {
      path: 'list',
      name: "List",
      component: List
    }, {
      path: 'info',
      name: "Info",
      component: Info
    }]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;