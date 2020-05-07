import Vue from 'vue'
import VueRouter from 'vue-router'
import Character from '../views/Character.vue'
import Attr from '../views/Attr.vue'
import Eqpt from '../views/Eqpt.vue'
import Skill from '../views/Skill.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Character',
    component: Character
  },
  {
    path: '/character',
    name: 'Character',
    component: Character
  },
  {
    path: '/attr',
    name: 'Attr',
    component: Attr
  },
  {
    path: '/eqpt',
    name: 'Eqpt',
    component: Eqpt
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
