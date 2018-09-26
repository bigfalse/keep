import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

const index = ()=> import('./views/index.vue')
const home = ()=> import('./views/home.vue')
const aboutClass = ()=> import('./views/aboutClass.vue')
const exercise = ()=> import('./views/exercise.vue')
const me = ()=> import('./views/me.vue')

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
    {
      path:'/',
      name:"index",
      redirect:'home',
      component:index,
      children:[
        {
          path:'home',
          component:home
        },
        {
          path:'aboutClass',
          component:aboutClass
        },
        {
          path:'exercise',
          component:exercise
        },
        {
          path:'me',
          component:me
        }
      ]
    }
  ]
});
