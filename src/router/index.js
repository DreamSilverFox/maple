import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/character',
    name: 'character',
    component: () => import('../views/Character.vue')
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import('../views/Skill.vue')
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () => import('../views/TimeLine.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
