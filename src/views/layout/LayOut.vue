<template>
  <Layout class="!h-[100vh]">
    <LayoutSider width="80" style="background: #fff">
      <div
        class="flex flex-col text-xs justify-center items-center gap-5 border-r border-r-gray-300"
      >
        <button v-for="(item, index) in data" :key="index">
          <Icon :icon="item.icon" class="size-8"></Icon>{{ item.text }}
        </button>
      </div>
    </LayoutSider>
    <Layout>
      <LayoutHeader class="!h-[100px] !bg-white">
        <div>
          <div
            class="border-b bg-white h-[60px] text-xl text-black font-semibold"
            style="line-height: 60px"
          >
            代码仓库
          </div>
          <div class="flex justify-between">
            <div class="space-x-7">
              <button @click="fn1">最近访问</button>
              <button @click="fn2">全部仓库</button>
              <button @click="fn3">开源仓库</button>
            </div>
            <div>
              <button class="btn btn-active btn-neutral" @click="create">创建仓库</button>
            </div>
          </div>
        </div>
      </LayoutHeader>
      <Layout>
        <LayoutContent class="!bg-white">
          <RouterView></RouterView>
        </LayoutContent>
      </Layout>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import { Layout, LayoutContent, LayoutHeader, LayoutSider } from 'ant-design-vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { useRouter } from 'vue-router'
interface NavItem {
  icon: string
  text: string
}
const data: NavItem[] = [
  { icon: 'icon-park-outline:workbench', text: '工作台' },
  { icon: 'ph:cardholder-duotone', text: '项目' },
  { icon: 'ph:open-ai-logo-thin', text: 'Al' },
  { icon: 'ph:notepad', text: '事项' },
  { icon: 'ph:code-fill', text: '代码' },
  { icon: 'humbleicons:box', text: '制品' },
  { icon: 'fluent-mdl2:insights', text: '洞察' },
  { icon: 'ph:book-open-text-bold', text: '知识' },
  { icon: 'carbon:ibm-cloud-pak-business-automation', text: '自动化' },
  { icon: 'ic:outline-group', text: '' },
  { icon: 'hugeicons:more-03', text: '' },
  { icon: 'mdi:bell', text: '' },
  { icon: 'ri:settings-line', text: '' },
  { icon: 'fe:question', text: '' },
  { icon: 'mingcute:user-4-fill', text: '' }
]
let router = useRouter()
let fn1 = () => {
  router.replace('/DaiMa')
}
let fn2 = () => {
  router.replace('/QunBu')
}
let fn3 = () => {
  router.replace('/KaiYuan')
}
let create = () => {
  router.replace('/CreateView')
}
</script>
