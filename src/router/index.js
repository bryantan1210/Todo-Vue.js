import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lihat from '../views/Lihat.vue'
import Sukses from'../views/Sukses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },{
    path: '/Lihat',
    name: 'Lihat',
    component: Lihat
  },
  {
    path: '/Sukses',
    name: 'Sukses',
    component: Sukses
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
