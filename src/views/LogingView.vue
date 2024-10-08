<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
let router = useRouter()
let username = ref('')
let password = ref('')

let login = () => {
  axios
    .post(
      'https://gitee.com/oauth/token',
      {
        grant_type: 'password',
        username: username.value,
        password: password.value,
        client_id: '100f037091d43aa3c82df036e4f2c0cb827549682c20a6d52b28cb32f8596b58',
        client_secret: '70e2f981d058b1f624c2f1683727d71e7ff95e80a33b972a66d5e8aa97aab46a',
        scope: 'user_info projects pull_requests issues notes keys hook groups gists enterprises'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    .then((res) => {
      console.log(res.data.access_token)
      alert('登录失败')
      localStorage.setItem('access_token', res.data.access_token)
      router.push('/Homeview')
    })
}
</script>
<template>
  <div class="flex h-screen">
    <div class="w-1/2">
      <img
        src="../imgs/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>

    <div class="flex flex-col gap-10 items-center justify-center w-1/2">
      <div class="text-5xl text-black">登录，即刻创造你的应用</div>
      <input
        type="text"
        placeholder="用户"
        v-model="username"
        class="input input-bordered input-info w-full max-w-xl"
      />
      <br />
      <input
        type="password"
        placeholder="密码"
        v-model="password"
        class="input input-bordered input-info w-full max-w-xl"
      />
      <div>
        <div class="form-control">
          <label class="cursor-pointer label p-0 justify-start gap-2">
            <input type="checkbox" class="checkbox checkbox-info" />
            <div class="label-text">
              我已阅读并同意<span class="text-sky-400">服务协议</span>和<span class="text-sky-400"
                >隐私政策</span
              >
            </div>
          </label>
        </div>
      </div>
      <button class="btn btn-wide" @click="login">登录</button>
      <div class="mt-3">还未注册，<span class="text-sky-400">立即注册</span></div>
    </div>
  </div>
</template>
