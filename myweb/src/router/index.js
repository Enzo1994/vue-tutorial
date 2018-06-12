import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'  //引入组件文件
import News from '@/components/News'   //引入组件文件
import Player from '@/components/Player'
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'
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
    },
    {
      path:'/Player/:uid',
      name:'Player',
      component:Player,
      children:[
        {
          path:'profile',
          component:PlayerProfile
        },
        {
          path:'stats',
          component:PlayerStats
        }
      ]
  }
  ]
})


