import '../css/common/common.scss'

import Vue from 'vue'
import router from './routes'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

new Vue({ router, store }).$mount('#app')
