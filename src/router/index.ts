import { createRouter, createWebHistory } from 'vue-router'
import LogingView from '@/views/LogingView.vue'
import CreateView from '@/views/DaiMa/CreateView.vue'
import LayOut from '@/views/layout/LayOut.vue'
import DaiMa from '@/views/DaiMa/DaiMa.vue'
import KaiYuan from '@/views/DaiMa/KaiYuan.vue'
import QuanBu from '@/views/DaiMa/QuanBu.vue'
import ZuiJin from '@/views/DaiMa/ZuiJin.vue'
import UserView from '@/views/User/UserView.vue'

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
          path: '/DaiMa',
          name: 'daima',
          component: DaiMa,
          children: [
            {
              path: '/KaiYuan',
              name: 'kaiyuan',
              component: KaiYuan
            },
            {
              path: '/QuanBu',
              name: 'quanbu',
              component: QuanBu
            },
            {
              path: '/ZuiJin',
              name: 'zuijin',
              component: ZuiJin
            }
          ]
        },
        {
          path: '/UserView',
          name: 'user',
          component: UserView
        },
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
