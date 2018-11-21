import {
  LOGGED, LOGGED_OUT, DIFFERENT_CONTRAST_IN, DIFFERENT_CONTRAST_OUT
} from './mutation-types';

const mutations = {

  [LOGGED](state) {
    state.isLogged = true
  },

  [LOGGED_OUT](state) {
    state.isLogged = false
  },
};

export default mutations;