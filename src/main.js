import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import './assets/sass/main.scss';
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
