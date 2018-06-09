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
打包发布组件
###### help
```vue help init```

To get started:

  cd myweb
  npm run dev  开发时使用  开启localhost的8080端口
  npm run build  发布打包  自动生成dist目录，所有文件打包加密 css js html
  
  

 "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js"
  },
 "dependencies": {
    "vue": "2.5.16",
    "vue-router": "3.0.1"
  },
 
 
 
 
## 往工程内引入bootstrap
```cd myweb```

安装```npm install bootstrap --save --save-exact```  ==--save-exact在生产环境中必须写==

在src的main.js内引入```import 'bootstrap/dist/css/bootstrap.min.css```

在src下的App.vue内使用```<button class = "btn btn-primary">确定</button>```




## 往工程内安装axios
```cd myweb```

安装```npm install --save --save-exact axios vue-axios```

在src的main.js内引入
```
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)  //注册到vue全局组件，使所有组件都可以使用axios库 
```

在src下的components下组件HelloWorld.vue内使用
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
css文件在src目录的assets文件夹下新建my.css ```cd assets  touch my.css```

```
<script>
import '../assets/my.css'
</script>
```


## 组件:
###### 组件位置:
所有组件都在src/components文件夹下

###### 组件格式:  
template:html内容  
script:js脚本(ES6)   
style:组件样式单   



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
  
  
## 路由vue-router