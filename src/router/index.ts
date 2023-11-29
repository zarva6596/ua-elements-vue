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
      path: '/about',
      name: 'about',
      component: () => import('../views/about/index.vue')
    },
    {
      path: '/forms',
      name: 'Forms',
      component: () => import('@/preview/components/form/index.vue')
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import('@/preview/components/buttons/index.vue')
    }
  ]
})

export default router
