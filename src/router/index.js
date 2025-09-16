import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Work from '../pages/Works.vue'
import About from '../pages/About.vue'
import Show from '../pages/Show.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/works', component: Work},
  { path: '/about', component: About },
  { path: '/works/:name', component: Show},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})