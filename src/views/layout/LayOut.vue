<template>
  <Layout class="!h-[100vh]">
    <LayoutSider width="80" style="background: #fff">
      <div
        class="flex flex-col text-xs justify-center items-center gap-5 border-r border-r-gray-300"
      >
        <button v-for="(item, index) in data" :key="index" @click="fn4(index)">
          <Icon :icon="item.icon" class="size-8"></Icon>{{ item.text }}
        </button>
        <div className="drawer" class="flex justify-center z-30">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer">
              <Icon icon="guidance:user-1" width="24" height="24" style="color: #8f8f94" />
            </label>
          </div>
          <div className="drawer-side" style="margin-left: 79px">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-4">
              <li><a>Sidebar Item 1</a></li>
              <li v-for="(item, index) in userdata" :key="index">
                <a><Icon :icon="item.icon" class="size-6"></Icon>{{ item.text }}</a>
              </li>
              <li>
                <a class="flex justify-between">
                  <div class="flex items-center gap-2">
                    <Icon icon="radix-icons:globe" width="24" height="24" style="color: #8f8f94" />
                    <span>切换语言</span>
                  </div>
                  <div class="tx">简体中文</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LayoutSider>
    <RouterView></RouterView>
  </Layout>
</template>
<script lang="ts" setup>
import { Layout, LayoutSider } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue/dist/iconify.js'
interface NavItem {
  icon: string
  text: string
  hs: string
}
const data: NavItem[] = [
  { icon: 'icon-park-outline:workbench', text: '工作台', hs: '' },
  { icon: 'ph:cardholder-duotone', text: '项目', hs: '' },
  { icon: 'ph:open-ai-logo-thin', text: 'Al', hs: '' },
  { icon: 'ph:notepad', text: '事项', hs: '' },
  { icon: 'ph:code-fill', text: '代码', hs: '/DaiMa' },
  { icon: 'humbleicons:box', text: '制品', hs: '' },
  { icon: 'fluent-mdl2:insights', text: '洞察', hs: '' },
  { icon: 'ph:book-open-text-bold', text: '知识', hs: '' },
  { icon: 'carbon:ibm-cloud-pak-business-automation', text: '自动化', hs: '' },
  { icon: 'ic:outline-group', text: '', hs: '/UserView' },
  { icon: 'hugeicons:more-03', text: '', hs: '' },
  { icon: 'mdi:bell', text: '', hs: '' },
  { icon: 'ri:settings-line', text: '', hs: '' },
  { icon: 'fe:question', text: '', hs: '' }
]

const userdata: NavItem[] = [
  { icon: 'mdi:user-outline', text: '个人账户设置', hs: '' },
  { icon: 'fe:cart', text: '服务订购', hs: '' },
  { icon: 'tdesign:user-add', text: '邀请成员', hs: '' },
  { icon: 'el:list-alt', text: '工单中心', hs: '' },
  { icon: 'fluent-mdl2:date-time-12', text: '更新日志', hs: '' },
  { icon: 'radix-icons:exit', text: '退出', hs: '' }
]
let router = useRouter()
let fn4 = (index: number) => {
  router.replace(data[index].hs)
}
</script>
