<template>
  <div class="flex">
    <div
      class="w-1/12 flex flex-col text-xs h-3/5 justify-center items-center gap-6 border-r border-r-gray-300"
    >
      <button v-for="(item, index) in data" :key="index">
        <Icon :icon="item.icon" class="size-8"></Icon>{{ item.text }}
      </button>
    </div>
    <div class="w-11/12">
      <div class="border-b border-b-gray-300">代码仓库</div>
      <div class="flex justify-between text-xs">
        <div role="tablist" class="tabs tabs-bordered">
          <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="最近访问" />
          <div role="tabpanel" class="tab-content p-10">
            <DaiMa></DaiMa>
          </div>
          <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="全部仓库" />
          <div role="tabpanel" class="tab-content p-10"><QunBu></QunBu></div>

          <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="开源仓库" />
          <div role="tabpanel" class="tab-content p-10"><KaiYuan></KaiYuan></div>
        </div>
      </div>
      <div class="fixed top-7 right-0">
        <button class="btn btn-active btn-neutral" @click="fn1">创建仓库</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import DaiMa from './DaiMa.vue'
import QunBu from './QunBu.vue'
import KaiYuan from './KaiYuan.vue'
import { useRouter } from 'vue-router'
interface NavItem {
  icon: string
  text: string
}
const data: NavItem[] = [
  { icon: 'lets-icons:date-fill', text: '工作台' },
  { icon: 'material-symbols:radio', text: '项目' },
  { icon: 'mdi:book-music', text: 'Al' },
  { icon: 'ph:ranking-fill', text: '代码' },
  { icon: 'fluent:book-pulse-20-filled', text: '制品' },
  { icon: 'ph:ranking-fill', text: '洞察' },
  { icon: 'ph:ranking-fill', text: '知识' },
  { icon: 'ph:ranking-fill', text: '自动化' },
  { icon: 'ph:ranking-fill', text: '自动化' },
  { icon: 'ph:ranking-fill', text: '自动化' },
  { icon: 'ph:ranking-fill', text: '自动化' },
  { icon: 'ph:ranking-fill', text: '自动化' },
  { icon: 'ph:ranking-fill', text: '自动化' }
]
let router = useRouter()
let fn1 = () => {
  router.push('/CreateView')
}
</script>
