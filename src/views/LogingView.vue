<script setup lang="ts">
import { ref } from 'vue'
import { getAccessToken } from '@/service/api'
import { useRouter } from 'vue-router'
import { Carousel } from 'ant-design-vue'
import to from 'await-to-js'
let router = useRouter()

let username = ref('3224533545@qq.com')
let password = ref('Hxy9515.')

interface DataImg {
  img: string
}

let imags: DataImg[] = [
  { img: '/public/imgs/02.jpg' },
  { img: '/public/imgs/02.jpg' },
  { img: '/public/imgs/02.jpg' }
]
interface DataLogin {
  grant_type: string
  username: string
  password: string
  client_id: any
  client_secret: any
  scope: any
}
const loginHandle = async () => {
  const loginData: DataLogin = {
    grant_type: 'password',
    username: username.value,
    password: password.value,
    client_id: import.meta.env.VITE_CLINENT_ID,
    client_secret: import.meta.env.VITE_CLINENT_SECRET,
    scope: import.meta.env.VITE_CLINENT_SCOPE
  }
  const [err, res] = await to(getAccessToken(loginData))
  console.log(err, res)
  if (!err) {
    alert('恭喜登录成功！')
    router.replace('/HomeView')
  }
}
</script>
<template>
  <div class="flex h-screen">
    <Carousel autoplay class="w-1/2">
      <div v-for="(item, index) in imags" :key="index">
        <img :src="item.img" alt="" class="w-full object-cover h-screen" />
      </div>
    </Carousel>
    <div class="flex flex-col gap-10 items-center justify-center w-1/2">
      <h1 class="text-4xl text-black">登录，即刻创造你的应用</h1>
      <input
        type="text"
        placeholder="用户"
        v-model="username"
        class="input input-bordered input-info w-full max-w-xs mt-5"
      />
      <input
        type="password"
        placeholder="密码"
        v-model="password"
        class="input input-bordered input-info w-full max-w-xs"
      />
      <div>
        <div class="form-control">
          <label class="cursor-pointer label p-0 justify-start gap-1 mr-10">
            <input type="checkbox" class="checkbox checkbox-info" />
            <div class="label-text">
              我已阅读并同意<span class="text-sky-400">服务协议</span>和<span class="text-sky-400"
                >隐私政策</span
              >
            </div>
          </label>
        </div>
      </div>
      <button class="btn btn-wide bg-blue-800 text-stone-50" @click="loginHandle">登录</button>
      <div class="mt-3">还未注册，<span class="text-sky-400">立即注册</span></div>
    </div>
  </div>
</template>
