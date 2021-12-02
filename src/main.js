import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue"
import axios from "axios"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import TodoIndexView from "./views/TodoIndexView";
import TodoListView from "./views/TodoListView";
import TodoLoginView from "./views/TodoLoginView";
import TodoRegisterView from "./views/TodoRegisterView";
import PageNotFound from "./views/PageNotFound";

const Api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1'
})

Api.interceptors.response.use(function (response) {
  return response
}, function (error){
  // TODO: Set cookie for redirect from login page (router.go(-1)???)
  switch (error.response.status) {
    case 401:
      router.push('/login')
      break
    case 403:
      router.push('/login')
      break
  }
  return Promise.reject(error)
})

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use({
  install(Vue) {
    Vue.prototype.$http = Api
  }
})



Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'index',
    component: TodoIndexView
  },
  {
    path: '/todolist/:id',
    name: 'todolist',
    component: TodoListView
  },
  {
    path: '/login',
    name: 'login',
    component: TodoLoginView
  },
  {
    path: '/register',
    name: 'register',
    component: TodoRegisterView
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
