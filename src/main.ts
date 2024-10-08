import '@/assets/main.css'

import { DatePicker } from 'ant-design-vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios)
app.use(DatePicker)

app.mount('#app')
