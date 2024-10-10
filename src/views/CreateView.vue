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
  RadioGroup
} from 'ant-design-vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let router = useRouter()
let back = () => {
  router.replace('/LayOut')
}
let num = ref('')
</script>

<template>
  <div class="bg-white h-full -mt-8">
    <div class="pl-5 pt-5">
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
        <div class="flex mt-5 w-[11.5%] justify-between">
          <div class="mb-2 flex">
            <h4 class="font-bold">仓库类型</h4>
            <span class="text-[red]">*</span>
          </div>
          <div class="mb-2 flex">
            <h4 class="font-bold">仓库名称</h4>
            <span class="text-[red]">*</span>
          </div>
        </div>
      </div>
      <div>
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
            <select-option value="Option2">Option2</select-option>
          </Select>
          <Input
            style="font-size: 12px"
            placeholder="仓库名称支持字母，数字，下划线(_)和点(.)的组合"
            :maxlength="100"
            show-count
          />
        </input-group>
      </div>
      <div>
        <h4 class="font-bold mt-5 mb-2">仓库描述</h4>
        <div class="!w-[35%]">
          <Textarea placeholder="请描述仓库内容" allow-clear class="!h-28" />
        </div>
      </div>
      <div>
        <h4 class="font-bold mt-5 mb-2">初始化仓库</h4>
        <div class="space-y-5 mt-3">
          <div><Checkbox>生成README文件</Checkbox></div>
          <div><Checkbox>添加.gitignore文件</Checkbox></div>
          <div>
            <Checkbox disabled="false">添加分支模型(仓库创建后将根据所选模型创建分支)</Checkbox>
          </div>
        </div>
      </div>
      <div>
        <h4 class="font-bold mt-5 mb-2">是否开源</h4>
        <div class="mt-3">
          <radio-group v-model:value="num" class="space-y-4">
            <radio class="flex" :value="1">私有仓库(仅对仓库成员可见，仓库成员可访问仓库)</radio>
            <radio class="flex" :value="2">公有仓库</radio>
          </radio-group>
        </div>
      </div>
      <div class="mt-5 space-x-5">
        <button class="border-solid bg-black text-slate-50 w-20 h-8 rounded-md">完成创建</button>
        <button class="border-solid text-black bg-white w-20 h-8 rounded-md border-stone-400">
          取消
        </button>
      </div>
    </div>
  </div>
</template>
