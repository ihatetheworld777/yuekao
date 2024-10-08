import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LogingView from '@/views/LogingView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/HomeView',
      name: 'login',
      component: LogingView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CreateView',
      name: 'create',
      component: CreateView
    }
  ]
})

export default router
