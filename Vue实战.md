# 问题：
1. webpack配置proxy跨域无效

## 目录结构：
![目录结构](./配图/vue项目目录结构.png)

## 插件第三方库
vue-router  
axios  
vuex  
better-scroll/vue-scroll  
vue-lazyload  
mockjs  


## 拆解路由
![路由设计](./配图/路由设计.png)
![路由设计](./配图/路由设计2.png)
![路由设计](./配图/路由设计3.png)
- 子路由是指当前页面的不同tab
- 拆分成一般组件和路由组建
- 相同部分拆分成组件，小异部分用slot
- 相同部分子组件使用props，父组件部分使用:title="address.title"绑定
- 路由的mate属性确定显示隐藏


## 跨域两种解决办法：
1. 服务器告诉浏览器可以跨域

2. 蒙蔽浏览器

**solt**
实例的头部topbar，两边的图标做成插槽
在组件留下solt插槽：
在使用的时候标签内写solt=""


## vuex管理后台获取到的状态数据
- store/index.js:集成
- 存变量：store/state.js
- 直接修改state：store/mutations.js
- 通过mutations间接更新state的多个方法对象
- 包含多个基于state的getter计算属性的对象
- 包含多个mutations的type名称常量

**index.js**
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getter from './getter.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.stroe({
    state,
    getter,
    mutations,
    actions
})
```

**state.js**
```javascript
export default{

    ...//一堆数据kv，后台数据容器
}
```

**type.js**
```javascript
export const RECEIVE_ADDRESS='RECEIVE_ADDRESS'
```

1. 调用actions发出请求获取数据
2. 读state
3. 显示


## 计算方法：
```javascript
computed:{
    数据名(){
        return []
    }
}
```

- **数组：**  
二维数组：如果当前碗装满了，拿个新碗，把新碗放桌上，再装
最后一定是装东西才能避免装不满就没东西了

先判断上一个旧碗满了吗？
minArr=[] 拿新碗
arr.push(minArr) 放桌上
minArr.push(key) 装东西

## watch属性 如果数据发生改变，触发watch：
数据改变 重新渲染
```javascript
watch:{
    category(value){
        //如果数据改变，则触发这里的操作，比如渲染轮播图
        
    }:
}
```
## this.$nextTick() //更新了数据后，执行，dom立即改变（轮播图用）


##父组件给子组件传数据
父亲组件<img class = "..." :src="父组件传过来的url">
子组件：props


## 数据占位图
v-if 数据数组不为空
v-else 数据数组为空，显示占位符


## 小数计算判断：
乘以10再操作

## class样式开关：
```html
<a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登陆</a>
<a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">短信登陆</a>
```
给class设置一个on样式，如果on

## 倒计时器：
```javascript
if(!this.countdownTime){
    this.countdownTime=30;
    const intervalId = setInterval(()=>{
        this.countdownTime--;
        if(this.countdownTime<=0){
            clearInterval(intervalId)
        }
    },1000)
}
```

## 显示与否都是布尔类型的flag


## cookie：
持久化cookie ：后台设置cookie maxage
需要设置reqUserInfo
