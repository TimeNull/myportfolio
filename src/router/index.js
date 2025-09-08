import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Work from '../pages/Work.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work},
  { path: '/about', component: About },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})