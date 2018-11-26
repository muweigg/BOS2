import {
  LOGGED, LOGGED_OUT, UPDATE_URL
} from './mutation-types';

const mutations = {

  [LOGGED](state) {
    state.isLogged = true
  },

  [LOGGED_OUT](state) {
    state.isLogged = false
  },

  [UPDATE_URL](state, payload) {
    state.toURL = payload;
  }
};

export default mutations;