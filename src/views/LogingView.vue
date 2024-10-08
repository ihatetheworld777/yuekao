<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
let router = useRouter()
let username = ref('')
let password = ref('')

let fn = () => {
  console.log(username.value, password.value)
  axios
    .post( 
      'https://gitee.com/oauth/token',
      {
        grant_type: 'password',
        username: username.value,
        password: password.value,
        client_id: '154d4c750515aa31b8863f45108722dea107cb514be7650c4400e5726a2cfccd',
        client_secret: '81da09a5e20e38dcad06be999cf9bb505fa9bcbb17c791d61872610142ab5f02',
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
      localStorage.setItem('access_token', res.data.access_token)
      router.push('/Homeview')
    })
}
</script>
<template>
  <div class="flex">
    <img src="../imgs/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="" />
    <div class="text-center m-auto">
      <div class="text-5xl text-black mb-20 -mt-60">登录，即刻创造你的应用</div>
      <input
        type="text"
        placeholder="用户"
        v-model="username"
        class="input input-bordered input-info w-full max-w-xl mb-10"
      />
      <br />
      <input
        type="password"
        placeholder="密码"
        v-model="password"
        class="mb-10 input input-bordered input-info w-full max-w-xl"
      />
      <div>
        <div class="form-control">
          <label class="cursor-pointer label">
            <input type="checkbox" class="checkbox checkbox-info" />
            <div class="">
              我已阅读并同意<span class="text-sky-400">服务协议</span>和<span class="text-sky-400"
                >隐私政策</span
              >
            </div>
          </label>
        </div>
      </div>
      <button class="btn btn-wide" @click="fn">登录</button>
      <div class="mt-3">还未注册，<span class="text-sky-400">立即注册</span></div>
    </div>
  </div>
</template>
