<template>
  <div class="flex">
    <div
      class="w-1/12 flex flex-col text-xs h-3/5 justify-center items-center gap-5 border-r border-r-gray-300"
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
        <button class="btn btn-active btn-neutral" @click="create">创建仓库</button>
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
let create = () => {
  router.replace('/CreateView')
}
</script>
