<script setup lang="ts">
import { Layout, LayoutHeader, LayoutContent } from 'ant-design-vue'
import { useRouter } from 'vue-router'

let router = useRouter()
let fn1 = () => {
  router.replace('/ZuiJin')
}
let fn2 = () => {
  router.replace('/QuanBu')
}
let fn3 = () => {
  router.replace('/KaiYuan')
}
let create = () => {
  router.replace('/CreateView')
}
</script>
<template>
  <Layout>
    <LayoutHeader class="!h-[100px] !bg-white">
      <div>
        <div
          class="border-b bg-white h-[50px] text-xl text-black font-semibold"
          style="line-height: 50px"
        >
          代码仓库
        </div>
        <div class="flex justify-between h-[50px] border-b items-center border-solid">
          <div class="space-x-7">
            <button @click="fn1">最近访问</button>
            <button @click="fn2">全部仓库</button>
            <button @click="fn3">开源仓库</button>
          </div>
          <div class="mt-12">
            <button
              class="border-solid bg-black text-slate-50 w-20 h-8 rounded-md"
              @click="create"
              style="line-height: 2rem"
            >
              创建代码仓库
            </button>
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
</template>
