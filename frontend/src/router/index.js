import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Products from "../views/Products.vue";
import Logs from "../views/Logs.vue";
import AddProduct from "../views/AddProduct.vue";
import EditProduct from "../views/EditProduct.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  
  {
    path: "/home",
    name: "Home",
    component : Home,
    children: [
      {
        path: "products",
        name: "Products",
        component: Products,      
      },
      {
        path: "logs",
        name: "Logs",
        component: Logs,
      },
      {
        path: "add",
        name: "Add",
        component: AddProduct,
      },
      {
        path: "edit",
        name: "Edit",
        component: EditProduct,
      }
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
