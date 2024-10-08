import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LogingView from '@/views/LogingView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogingView
    },
    {
      path: '/HomeView',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
