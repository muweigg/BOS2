import {
  LOGGED, LOGGED_OUT
} from './mutation-types';

const mutations = {

  // 登录
  [LOGGED](state) {
    state.isLogged = true
  },

  // 登出
  [LOGGED_OUT](state) {
    state.isLogged = false
  },
}

export default mutations;