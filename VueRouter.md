## VueRouter
##### 常用API 
- this.$router.replace('要跳转的路径名')
- $router.back()
- this.$router.push('要跳转的路径名')，
- 当前路由：
  - $route.mate => 给制定路由加标识（是否显示底栏，前提底栏写在app.vue）
    ```javascript
    path:...,
    component:...,
    mate:{
      showFooter:true
    }
    ```
  - 
## 往工程内安装静态路由vue-router
##### 简介：
所有组件路由都写到src/router/index.js文件下

##### 安装：
```cd myweb```
```npm install vue-router --save --save-exact```

##### 引入：
###### src/router/index.js(自动完成) 路由设置文件
```JavaScript
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)  //注册到全局，让所有组件都能用

export default new Router({  //定义url映射
  routes: [
    {
      path: '/',
      name: 'HelloWorld',  
      component: HelloWorld
    }
  ]
})
```
###### src/main.js(自动完成)
```JavaScript
import Vue from 'vue'
import App from './App'
import router from './router'  //相对路径请注意
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  comments:{ App },
  render: h => h(App)
})
```

##### 使用：
###### 第一步：
components文件夹下三个组件文件：  
HelloWorld.vue  写点内容以示区分：```<h1>HelloWorld</h1>```  
News.vue  写点内容以示区分：```<h1>News Page</h1>```  
About.vue  写点内容以示区分：```<h1>About Page</h1>``` 

###### 第二步：router/index.js(路由设置文件)：把组件做url映射
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/compornts/About'  //引入组件文件
import News from '@/compornts/News'   //引入组件文件
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
```
###### 第三步：写跳转按钮(比如写在App.vue内)
```html
<!-- 使用router-link组件来导航 -->
<!-- 通过传入 ·to· 属性指定链接 -->
<!-- <router-link> 默认会渲染成<a>标签 -->
 <router-link to="/">Home</router-link>
 <router-link to="/news">新闻页面</router-link>
 <router-link to="/about">关于页面</router-link>

<!-- 路由出口：路由匹配组件再此渲染（不同被路由组件内容出现在这里） -->
 <router-view/>
```

## 路由基础：


- 路由变换的内容在哪里展示：`<router-view></router-view>`

- 如果使用 **模块化** 机制编程，导入Vue和VueRouter，要调用 `Vue.use(VueRouter)`

- 可以通过`this.$router`访问路由器，通过`this.$route`访问当前路由
- 设置子组件：
```javascript
// 准备子组件：
const Home = {
  template:"<h3>我是主页</h3>"
}
const News = {
  template:"<h3>我是新闻</h3>"
}
const User = {
  template: "<div>User {{ $route.params.id }}</div>"
}

const routes = [
    { path: '/', component: Home},
    { path: '/news', component: News},
    { path: '/user/:id', component: User }
]

//子组件注册成路由地址：
const router = new VueRuter({
  routers
})

//路由公共注入整个app
const app = new Vue({
  router
}).$mount('#app')

```



## 动态路由：
##### 简介：
动态路由是指给路由加入参数（只是参数数据变化，其他固定不变）：player/id=1 player组件传入参数不一样，显示内容也不一样

* 关键内容：
  - 
  ```
  beforeRouteUpdate(to,from,next){  //更新路由参数方法
      this.detail = this.getPlayer(to.params.id)    //to存的是最新路由
      next()
    },
  ```
  - ```this.$route.params.uid```

##### 使用：
###### 第一步：设置router文件（router/index.js）：
```javascript
import Player from '@/components/Player'

export default new Router({
  routes:[
    ...
    {
      path:'Player/:uid',  //规定参数名
      name:'Player',
      component:Player
    }
  ]
})
```

###### 第二步：发出参数（App.vue）

```javascript
<router-link to = "Player/1">保罗</router-link>
<router-link to = "Player/2">哈登</router-link>

<router-view/>
```

###### 第二步：接收参数(Player.vue)
**this.$route.params.uid**
```javascript
<template>
  <div>
    <h1>您是{{id}}号用户</h1>
  </div>
</template>
<script>
  export default{
    name:"Player",
    data(){
      return{
        detail:{}
      }
    },
    mounted() {
      //接受url参数uid
      this.detail = this.getPlayer(this.$route.params.uid)  //获取参数语法
    },
    beforeRouteUpdate(to,from,next){  //更新路由参数方法
      this.detail = this.getPlayer(to.params.id)    //to存的是最新路由
      next()
    },
    methods:{
      getPlayer(uid){
        switch (uid) {
          case 1:
            return {uid: 1,name:'保罗',point:26}
          case 2:
            return {uid: 2,name:'哈登',point:26}
        }
      }
    }
  }
</script>
```


## 嵌套路由：
##### 简介：
嵌套路由是指在动态路由的基础上再加上嵌套url（也就是组件），比如:/Player/3/profile (/Player/:uid/*)

##### 使用：
###### 第一步：设置router文件 (router/index.js)
```javascript
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'
...
  {
      path:'/Player/:uid',
      name:'Player',
      component:Player，
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

```


###### 第二步：设置子组件( /Player/Profile.vue 和 /Player/Stats.vue )
* Profile.vue:
```html
<template>
  <div>
    <h2>球员简介：{{this.$route.params.uid}}</h2>
  </div>
</template>
```

* Stats.vue:
```html
<template>
  <div>
    <h2>球员数据：{{this.$route.params.uid}}</h2>
  </div>
</template>
```

###### 第三步：设置跳转标签router-link （Player.vue）：
```html
<template>
  <div>
    <h2>球员列表：</h2>
    <ul>
      <li>编号：{{detail.uid}}</li>
      <li>姓名：{{detail.name}}</li>
      <li>得分：{{detail.point}}</li>
    </ul>
    <router-link :to = "profile">简介 </router-link>  <!--:to相当于绑定href值为data里面属性，属性设置跳转到的子路由-->
    <router-link :to = "stats">数据 </router-link>
    <router-view></router-view>
  </div>
</template>
```
```javascript
<script>
export default {
  name: "Player",
  data() {
    return {
      detail: {},
      profile: "",
      stats: ""
    };
  },
  mounted() {
    this.detail = this.getPlayer(this.$route.params.uid);

    this.profile = `/player/${this.$route.params.uid}/profile`; //显示的是传给profile子组件uid值以后把显示了数据的子组件profile显示出来
    this.stats = `/player/${this.$route.params.uid}/stats`; 
  },
  beforeRouteUpdate(to, from, next) {
    //更新路由参数方法
    this.detail = this.getPlayer(to.params.uid); //to存的是最新路由

    this.profile = `/player/${to.params.uid}/profile`;  
    this.stats = `/player/${to.params.uid}/stats`;  

    next();
  },
  methods: {
    getPlayer(uid) {
      switch (uid) {
        case "1":
          return { uid: 1, name: "保罗", point: 26 };
        case "2":
          return { uid: 2, name: "哈登", point: 22 };
      }
    }
  }
};
</script>
```


## 路由编程：
##### 模板内路由编程方法： 
:to 接一个对象
```<router-link :to="{name:'Player',params:{uid:1}}">库里</router-link>```
```<router-link :to="{path:"/player/2/stats}">哈登</router-link>```
##### js标签内路由编程方法： 注意uid的数据类型
需要给模板内按键方法@click = "btnClick(uid)" 传参
```this.$router.push({path:`/player/${uid}`})```
```this.$router.push({path:`/player/${uid}/stats`})```
```this.$router.push({name:"Player",params:{uid:uid}})```
```this.$router.push({path:"/player",query:{uid:uid}})``` //get串写法
//前进后退导航：
```this.$router.go(1)```


## 拼图：
##### 简介：
为一个页面（路由）组合多个组件

##### 使用：
###### 第一步：设置router文件 (router/index.js)
```javascript
import SettingDetail from '@/components/setting/detail'
import SettingHeader from '@/components/setting/header'
import SettingSidebar from '@/components/setting/sidebar'

...
  routes:[
    {
      path:'/'.
      name:'Home',
      components:{   //关键加s
        myDetail:SettingDetail,
        myHeader:SettingHeader,
        mySidebar:SettingSidebar
      }
    }
  ]
...
```

###### 第二步：路由页面设置：
```html
<div style = "...">
<router-view name = "myDetail"></router-view>
</div>
```


## URL重定向：
路由别名 alias

##### 使用：
* 不同路劲可以访问同一个路由，用alias
```javascript
import About from '/about' 
{
  path:'/about',
  name:'About',
  component:About,
  alias:'/aboutme'
}
```
* 访问 /curry 可以重定向至 /player/1
```javascript
{
  path:'/curry',
  redirect:'/player/1',
  redirect:{name:'About'} //重定向到组件
  }
```


## 多参数路由
- 父子组件默认无法传递数据
- 路由属性：props => 父路由给子路由传递数据

##### 使用：
###### 第一步：设置router文件 (router/index.js)
```javaScript
import User from '@/components/User'
...
{
  path:'user/:uid/:nationality',
  name:'User',
  component:User,
  props:true  // 1/2
}
```
###### 第二步： 设置路由组件（components/User.vue）
* 通过props属性接收路由传过来的数据
```javascript
<template>
  <div>{{uid}},{{nationality}}</div>
</template>

<script>
export default {
  name:'User',
  props:['uid','nationality']  // 2/2
}
</script>
```
###### 第三步：开始跳转：
```
<router-link to="/user/1/usa">美国用户</router-link>
```
