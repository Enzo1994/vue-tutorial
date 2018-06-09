import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'  //引入组件文件
import News from '@/components/News'   //引入组件文件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',   //根url对应helloworld组件
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})


