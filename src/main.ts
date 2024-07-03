import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import './permission'
import router from './router'

import pinia from '@/pinia'

// 等宽字体
import 'vfonts/FiraCode.css'


createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
