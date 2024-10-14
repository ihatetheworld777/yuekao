<script setup lang="ts">
import { InputSearch } from 'ant-design-vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { onMounted } from 'vue'
import { getReposView } from '@/service/api'
import to from 'await-to-js'
import { ref } from 'vue'
let HomeData = ref([])

onMounted(async () => {
  const reposData = {
    access_token: import.meta.env.VITE_ACCESS_TOKEN
  }
  const [err, res] = await to(getReposView(reposData))
  console.log(err, res)
  HomeData.value = res?.data
  console.log(HomeData.value)
  console.log(res?.data)
})

// import { useRouter } from 'vue-router'
// import { getReposView } from '@/service/api'
// import to from 'await-to-js'
// let router = useRouter()
// let createtwo = () => {
//   router.replace('/CreateView')
// }
</script>
<template>
  <div class="space-y-6 mt-6" v-if="HomeData.length">
    <div class="flex justify-between">
      <div class="flex gap-3">
        <div>
          <select className=" w-full max-w-20 h-7 border-gray-400 bg-slate-300 rounded ml-12">
            <option disabled selected>所属项目</option>
          </select>
        </div>
        <div>
          <select className=" w-full max-w-20 h-7  border-gray-400 bg-slate-300 rounded">
            <option disabled selected>公开性</option>
          </select>
        </div>
        <div>
          <select className=" w-full max-w-20 h-7  border-gray-400 bg-slate-300 rounded">
            <option disabled selected>归档状态</option>
          </select>
        </div>
        <div>
          <input-search placeholder="搜索" style="width: 200px" />
        </div>
      </div>
      <div class="mr-3 gap-3 flex">
        <details class="dropdown">
          <summary class="btn m-1">排序方式 仓库名称</summary>
          <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-50 p-2 shadow">
            <li><a>名称排列</a></li>
            <li><a>时间排列</a></li>
            <li><a>大小排列</a></li>
          </ul>
        </details>
        <div class="mt-5">
          <Icon icon="radix-icons:text-align-top" width="24" height="24" style="color: #8f8f94" />
        </div>
      </div>
    </div>
    <div class="flex justify-between mr-20 border-b border-solid">
      <div class="flex gap-60 ml-12">
        <div>仓库名称</div>
        <div>所属名称</div>
        <div>合并请求</div>
      </div>
      <div class="flex gap-52">
        <div>更新时间</div>
        <div>操作</div>
        <div>
          <Icon
            icon="majesticons:settings-cog-line"
            width="24"
            height="24"
            style="color: #8f8f94"
          />
        </div>
      </div>
    </div>
    <div>
      <div
        v-for="(item, index) in HomeData"
        :key="index"
        class="flex justify-between mr-20 border-b border-solid"
      >
        <div class="flex gap-60 ml-12">
          <div>{{ full_name }}</div>
          <div>{{ item.name }}</div>
          <div>{{ item.rela }}</div>
        </div>
        <div class="flex gap-52">
          <div>{{ item.updated_at }}</div>
          <div>{{ item.url }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="space-y-14 mt-32" v-if="!HomeData.length">
    <div class="text-center space-y-6">
      <h2 class="text-2xl font-bold">欢迎使用代码仓库</h2>
      <div class="text-gray-400 text-[16px] space-y-2">
        <div>代码仓库用于托管基于GIT或SVN管理的代码库。通过Review合并请求来审查代码变更。</div>
        <div>版本发布可以用来标记，发布代码版本。</div>
      </div>
    </div>
    <div class="flex justify-center gap-20">
      <div class="space-y-5">
        <div>
          <img src="/public/imgs/01.png" alt="" />
        </div>
        <div class="text-center space-y-2">
          <div class="text-xl font-bold">创建代码仓库</div>
          <div class="text-gray-400 text-[16px]">浏览，编辑代码以及查看代码提交</div>
          <div class="text-gray-400 text-[16px]">记录</div>
        </div>
      </div>
      <div class="pt-[100px]">
        <Icon icon="radix-icons:arrow-right" width="24" height="24" style="color: #8f8f94" />
      </div>
      <div class="space-y-5">
        <div>
          <img src="/public/imgs/01.png" alt="" />
        </div>
        <div class="text-center space-y-2">
          <div class="text-xl font-bold">合并请求</div>
          <div class="text-gray-400 text-[16px]">发起合并请求并遂请协作者</div>
          <div class="text-gray-400 text-[16px]">Review变更内容</div>
        </div>
      </div>
      <div class="pt-[100px]">
        <Icon icon="radix-icons:arrow-right" width="24" height="24" style="color: #8f8f94" />
      </div>
      <div class="space-y-5">
        <div>
          <img src="/public/imgs/01.png" alt="" />
        </div>
        <div class="text-center space-y-2">
          <div class="text-xl font-bold">代码版本</div>
          <div class="text-gray-400 text-[16px]">发布，标记代码版本</div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button
        class="border border-slate-600 bg-black text-slate-50 w-40 h-12 rounded-md"
        @click="createtwo"
      >
        创建代码仓库
      </button>
    </div>
  </div>
</template>
