 

## 安装vue-cli:
```
show vue-cli 看版本
npm install -g vue-cli@2.9.6
```

## vue-cli指令：
###### init
生成新项目newProject模板
```
vue init webpack my-project
vue init 模板名 项目名
```
###### list 
查看可以使用的模板vuejs-template
```
  ★  browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.
  ★  browserify-simple - A simple Browserify + vueify setup for quick prototyping.
  ★  pwa - PWA template for vue-cli based on the webpack template
  ★  simple - The simplest possible Vue setup in a single HTML file
  ★  webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
  ★  webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.
```
###### build
打包发布组件 (打包后会在根目录生成dist文件夹，里面包括加密后的完整项目html js css文件)
###### help
```vue help init```

To get started:

  cd myweb
  npm run dev  开发时使用  开启localhost的8080端口
  npm run build  发布打包  自动生成dist目录，所有文件打包加密 css js html
  
  
```json
 "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js"
  },
 "dependencies": {
    "vue": "2.5.16",
    "vue-router": "3.0.1"
  },
 ```
 

 ## webpack模板工程结构:

* build
  + webpack设置文件
* config
  + 工程设置文件
* src
  + 源文件
* static
  + 静态文件夹(编译时直接拷贝至发布文件夹)
* index.html
  + 网页启动入口文件,头部可以改适应爬虫


 
## 往工程内引入bootstrap

##### 安装：
```cd myweb```
```npm install bootstrap --save --save-exact```  ==--save-exact在生产环境中必须写==

##### 引入：
在src的main.js内引入```import 'bootstrap/dist/css/bootstrap.min.css```

##### 使用：
在src下的App.vue内使用```<button class = "btn btn-primary">确定</button>```




## 往工程内安装axios


##### 安装：
```cd myweb```
```npm install --save --save-exact axios vue-axios```

##### 引入：在src的main.js内引入
```
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)  //注册到vue全局组件，使所有组件都可以使用axios库 
```

##### 使用：在src下的components下组件HelloWorld.vue内使用
```javascript
<template>
  <div class="hello">
   <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
      content: ""
    }
  },
  mounted(){
    this.axios.post("http://api.komavideo.com/news/list").then(res=>{
      this.content = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
```

## 自定义css文件
##### 创建：
css文件在src目录的assets文件夹下新建my.css ```cd assets  touch my.css```
##### 引入：
```
<script>  //组件的script标签内
import '../assets/my.css'
</script>
```


## 往工程内安装静态路由vue-router
##### 简介：
所有组件路由都写到src/router/index.js文件下

##### 安装：
```cd myweb```
```npm install vue-router --save --save-exact```

##### 引入：
###### src/router/index.js(自动完成) 路由设置文件
```javscript
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
```
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

## 动态路由：
###### 简介：
动态路由是指给路由加入参数：player/id=1 

###### 使用：


 ## 组件:
###### 组件位置:
所有组件都在src/components文件夹下

###### 组件格式:  
template:html内容  
script:js脚本(ES6)   
style:组件样式单 