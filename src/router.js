import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Quizzes from './views/Quizzes.vue';
import Quizz from './views/Quizz.vue';
import QuizzEnd from './views/QuizzEnd.vue';
import QuizzCreate from './views/QuizzCreate.vue';
import QuizzPreview from './views/QuizzPreview.vue';

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
    {
      path: '/quizzes/create',
      name: 'createQuizz',
      component: QuizzCreate
    },
    {
      path: '/quizzes/create/preview',
      name: 'previewQuizz',
      component: QuizzPreview
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
