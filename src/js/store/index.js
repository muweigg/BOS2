import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
export * from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    toURL: '/admin/custom-query-template',
  },
  mutations
})