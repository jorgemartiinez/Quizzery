import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Quizzes from './views/Quizzes.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'quizzes',
      component: Quizzes
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/app',
    //   name: 'app',
    //   component: App
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
