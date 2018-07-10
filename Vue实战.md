# 响应式页面-vue
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
- 路由的mate属性确定显示隐藏


## 跨域两种解决办法：
1. 服务器告诉浏览器可以跨域

2. 蒙蔽浏览器


## vuex管理后台获取到的状态数据
- store/index.js:集成
- 管理状态对象state：store/state.js
- 直接更新state的多个方法的对象：store/mutations.js
- 通过mutations间接更新state的多个方法对象：store/state.js
- 包含多个基于state的getter计算属性的对象：store/state.js
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
