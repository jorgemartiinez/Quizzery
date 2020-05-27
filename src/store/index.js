import Vue from 'vue';
import Vuex from 'vuex';

// actions
import actions from './actions';
// mutations
import mutations from './mutations';
// state
import state from './state';

// getters
import getters from './getters';

// VIEW -------> ACTION --------> MUTATION ----------> STATE -------> VIEW  bucle

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
