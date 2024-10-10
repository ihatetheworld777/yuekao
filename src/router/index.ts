import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LogingView from '@/views/LogingView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import LayOut from '@/views/layout/LayOut.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogingView
    },
    {
      path: '/LayOut',
      name: 'layout',
      component: LayOut
    },
    {
      path: '/HomeView',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/CreateView',
          name: 'create',
          component: CreateView
        }
      ]
    }
  ]
})

export default router
