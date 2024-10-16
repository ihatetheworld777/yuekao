<script setup lang="ts">
import {
  Button,
  Cascader,
  Input,
  InputGroup,
  Select,
  SelectOption,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  Layout,
  LayoutHeader,
  LayoutContent
} from 'ant-design-vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCreateRepos } from '@/service/api'
import to from 'await-to-js'
let router = useRouter()
let back = () => {
  router.replace('/DaiMa')
}
let num = ref('')

let HomeName = ref('')
let description = ref('')
interface CreateData {
  access_token: any
  name: string
  description: string
  homepage: string
  path: string
}
const CreateHome = async () => {
  const createData: CreateData = {
    access_token: import.meta.env.VITE_ACCESS_TOKEN,
    name: HomeName.value,
    description: description.value,
    homepage: 'https://gitee.com/hxy-3',
    path: HomeName.value
  }
  const [err, res] = await to(getCreateRepos(createData))
  console.log(err, res)
  if (!err) {
    alert('恭喜创建成功！')
    router.replace('/QuanBu')
  }
}
console.log(HomeName.value)
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
      </div>
    </LayoutHeader>
    <Layout class="!-mt-5">
      <LayoutContent class="!bg-white !h-screen">
        <div class="bg-white">
          <div class="pl-11 space-y-8">
            <div class="flex gap-4 text-center">
              <Button shape="circle" @click="back">
                <Icon
                  icon="radix-icons:arrow-left"
                  width="24"
                  height="24"
                  style="color: #343fd5"
                  class="ml-1"
                />
              </Button>
              <div class="text-xl font-bold">创建代码仓库</div>
            </div>
            <div class="mt-5">
              <div class="mb-2 flex">
                <h4 class="font-bold">所属项目</h4>
                <span class="text-[red]">*</span>
              </div>
              <div>
                <input-group compact>
                  <Cascader class="!w-[25%]" placeholder="所属项目" />
                </input-group>
              </div>
            </div>
            <div>
              <div class="flex w-[11.5%] justify-between">
                <div class="flex">
                  <h4 class="font-bold">仓库类型</h4>
                  <span class="text-[red]">*</span>
                </div>
                <div class="flex">
                  <h4 class="font-bold">仓库名称</h4>
                  <span class="text-[red]">*</span>
                </div>
              </div>
              <div class="mt-2">
                <input-group compact class="!flex !w-[35%]">
                  <Select class="!w-[30%]">
                    <select-option value="Option1">
                      <div class="flex items-center">
                        <Icon icon="vscode-icons:file-type-git" width="20" height="20" /><span
                          class="text-black"
                          >GIT仓库</span
                        >
                      </div>
                    </select-option>
                  </Select>
                  <Input
                    style="font-size: 12px"
                    placeholder="仓库名称支持字母，数字，下划线(_)和点(.)的组合"
                    :maxlength="100"
                    show-count
                    v-model:value="HomeName"
                  />
                </input-group>
              </div>
            </div>
            <div>
              <h4 class="font-bold mt-5 mb-2">仓库描述</h4>
              <div class="!w-[35%]">
                <Textarea
                  placeholder="请描述仓库内容"
                  allow-clear
                  class="!h-28"
                  v-model:value="description"
                />
              </div>
            </div>
            <div>
              <h4 class="font-bold mt-5 mb-2">初始化仓库</h4>
              <div class="space-y-5 mt-3">
                <div><Checkbox>生成README文件</Checkbox></div>
                <div><Checkbox>添加.gitignore文件</Checkbox></div>
                <div>
                  <Checkbox disabled: false="false"
                    >添加分支模型(仓库创建后将根据所选模型创建分支)</Checkbox
                  >
                </div>
              </div>
            </div>
            <div>
              <h4 class="font-bold mt-5 mb-2">是否开源</h4>
              <div class="mt-3">
                <radio-group v-model:value="num" class="space-y-4">
                  <radio class="flex" :value="1"
                    >私有仓库(仅对仓库成员可见，仓库成员可访问仓库)</radio
                  >
                  <radio class="flex" :value="2">公有仓库</radio>
                </radio-group>
              </div>
            </div>
            <div class="mt-5 space-x-5">
              <button
                class="border-solid bg-black text-slate-50 w-20 h-8 rounded-md"
                @click="CreateHome"
              >
                完成创建
              </button>
              <button class="border-solid text-black bg-white w-20 h-8 rounded-md border-stone-400">
                取消
              </button>
            </div>
          </div>
        </div>
      </LayoutContent>
    </Layout>
  </Layout>
</template>
