import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LogingView from '@/views/LogingView.vue'
// import HomeView from '@/views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import LayOut from '@/views/layout/LayOut.vue'
import DaiMa from '@/views/DaiMa.vue'
import KaiYuan from '@/views/KaiYuan.vue'
import QunBu from '@/views/QunBu.vue'

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
      component: LayOut,
      children: [
        {
          path: '/CreateView',
          name: 'create',
          component: CreateView
        },
        {
          path: '/DaiMa',
          name: 'daima',
          component: DaiMa
        },
        {
          path: '/KaiYuan',
          name: 'kaiyuan',
          component: KaiYuan
        },
        {
          path: '/QunBu',
          name: 'qunbu',
          component: QunBu
        }
      ]
    }
    // {
    //   path: '/HomeView',
    //   name: 'home',
    //   component: HomeView,
    //   children: [
    //     {
    //       path: '/CreateView',
    //       name: 'create',
    //       component: CreateView
    //     }
    //   ]
    // }
  ]
})

export default router
