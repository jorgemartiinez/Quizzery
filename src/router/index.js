import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Quizzes from '@/views/Quizzes.vue';
import Quizz from '@/views/Quizz.vue';
import QuizzEnd from '@/views/QuizzEnd.vue';
import QuizzCreate from '@/views/QuizzCreate.vue';
import QuizzPreview from '@/views/QuizzPreview.vue';
import Login from '@/views/Login.vue';
import { isLoggedIn, isNotLoggedIn } from './middleware';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/quizzes',
      name: 'quizzes',
      component: Quizzes,
      beforeEnter: isLoggedIn
    },
    {
      path: '/quizzes/create',
      name: 'createQuizz',
      component: QuizzCreate,
      beforeEnter: isLoggedIn
    },
    {
      path: '/quizzes/create/preview',
      name: 'previewQuizz',
      component: QuizzPreview,
      beforeEnter: isLoggedIn
    },
    {
      path: '/quizz/:id',
      name: 'quizz',
      component: Quizz
    },
    {
      path: '/quizz/:id/end',
      name: 'endQuizz',
      component: QuizzEnd
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: isNotLoggedIn
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
});
