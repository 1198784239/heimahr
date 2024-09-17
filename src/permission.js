import  router  from "@/router";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
import store from "@/store";


// 前置守卫

const whiterList = ['/login','/404']
router.beforeEach((to,from,next)=>{
  nprogress.start()
  // 判断是否有token
  if (store.getters.token) {
    // 存在token
    if (to.path ==='/login') {
      // 跳转到主页
      next('/')
      nprogress.done()
    }else{
      next()
    }
  }else{
    // 没有token
    if (whiterList.includes(to.path)) {
      next()
    }else{
      next('/login')
      nprogress.done()
    }
  }
})

// 后置是首位
router.afterEach(()=>{
  console.log(123);
  nprogress.done()
})
