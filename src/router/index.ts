import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/style-classes',
      name: 'Style Classes',
      component: () => import('@/views/classes/index.vue')
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('@/views/components/index.vue')
    },
  ]
})

export default router
