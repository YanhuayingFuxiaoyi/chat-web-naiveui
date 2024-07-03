import { createWebHashHistory , createRouter } from 'vue-router'

const routes = [
  { name: 'home', path: '/login', component: () => import('@/views/login.vue'), sensitive: true, meta: { title: 'Login' } },
  { name: 'home', path: '/', component: () => import('@/views/home.vue'), sensitive: true, meta: { title: 'Home' } },
  { name: 'index', path: '/index', component: () => import('@/views/index.vue'), sensitive: true, meta: { title: 'Index' } },
  { name: 'about', path: '/about', component: () => import('@/views/about.vue'), sensitive: true, meta: { title: 'About' } },
]

const router = createRouter({
  history: createWebHashHistory (),
  routes,
  strict: true
})


export default router