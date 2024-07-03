
import router from '@/router/index'

let isLogin = true

router.beforeEach((to, from, next) => {
  console.log("🚀 ~ router.beforeEach ~ to, from, next:", to)
  if(isLogin){
    document.title = to.meta.title || 'Chat Web'
    next()
  } else {
    next('/login')
  }

})

export default router