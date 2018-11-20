import Vue from 'vue'
import VueRouter from 'vue-router'

// app root
import App from '../pages/App.vue'

// 指挥中心
import CommandCenter from '../pages/command-center/command-center.vue'

const commandCenter = { path: '', component: CommandCenter }

const routes = [
  {
    path: '/',
    component: App,
    children: [
      commandCenter,
      // admin,
    ]
  },
  { path: '*', redirect: '/' }
];

Vue.use(VueRouter)

export default new VueRouter({routes})
