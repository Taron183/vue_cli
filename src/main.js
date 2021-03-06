// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
/* eslint-disable no-new */

const routes = [
  {
    path: '/test',
    component: App,
    name: 'home'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router
}).$mount('#app')