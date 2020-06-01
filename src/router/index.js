import Vue from 'vue';
// * VIEWS
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Quizzes from '@/views/Quizzes.vue';
import Quizz from '@/views/Quizz.vue';
import QuizzEnd from '@/views/QuizzEnd.vue';
import QuizzCreate from '@/views/QuizzCreate.vue';
import Login from '@/views/Login.vue';

// * MIDDLEWARES
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
    }
  ]
});
