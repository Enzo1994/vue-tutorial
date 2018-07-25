## VueX：
- 安装：`npm install vuex -S`
- 改变store状态需要显式提交commit到mutation

顺序：
组件内的mapActions -> store.js内的actions -> mutations <- state -> getters

组件任务：
1. 把actions操作名告诉vuex （可用mapActions(操作名数组)方法）
2. 把state从store里拿回来（可用mapGetters(数据名数组)方法）
```html
<template>
  <div id="app">
    <p>{{count}}</p>
    <input type="button" @click="increment" value="增加">
    <input type="button" @click="clickOdd" value="偶数才能点击">
    <input type="button" @click="clickAsync" value="异步点击">
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

import Player from '../components/player.vue'
export default {
  name: 'app',
  computed:mapGetters(['count']),
  methods:mapActions(['increment','clickOdd','clickAsync'])
}
</script>

```

store.js任务：
1. actions把操作名告诉（commit）给mutations
2. mutations里用操作名找到对应方法，方法内部需要去state里拿到数据加以修改
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 10
}

const getters = {
    count(state) {
        return state.count
    },
    oddCount(state){
        return state.count%2 ? '不是偶数':'是偶数' 
    }
}

const mutations = {
    increment(state) {
        state.count++
    },
    clickOdd(state) {
        state.count++
    },
    clickAsync(state) {
        state.count++
    }
}
const actions = {
    increment: ({ commit }) => {
        commit('increment')
    },
    clickOdd: ({ commit, state }) => {  //state拿数据
        if (state.count % 2 === 0) {
            commit('clickOdd')
        }
    },
    clickAsync: ({ commit }) => {
        new Promise((resolve) => {
            setTimeout(() => {
                commit('clickAsync')
            }, 1000);
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
```

## 拆分：
https://www.cnblogs.com/first-time/p/6815036.html
- **state**：存储状态。也就是变量；
- **getters**：派生状态。也就是set、get中的get，有两个可选参数：state、getters分别可以获取state中的变量和其他的getters。外部调用方式：store.getters.personInfo()。就和vue的computed差不多；
- **mutations**：提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，但不支持异步操作。第一个参数默认是state。外部调用方式：store.commit('SET_AGE', 18)。和vue中的methods类似。
- **actions**：和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。外部调用方式：store.dispatch('nameAsyn')。
- **modules**：store的子模块，内容就相当于是store的一个实例。调用方式和前面介绍的相似，只是要加上当前子模块名，如：store.a.getters.xxx()。


- getters.js示例（我们一般使用getters来获取state的状态，而不是直接使用state）：

getters
只能通过getters拿到state里的数据（store的计算属性）

mutations
只能通过mutations修改state里的数据（提交(commit) 一个 mutation一个payload，需要同步）
`this.$store.commit('change',payload)`
```javascript
mutations:{
    //显式的更改state里的数据
    change:function(state,a){
    //  state.num++;
    console.log(state.num += a); 
},
```

actions
actions异步，交给mutations操作
```javascript
actions:{
　　　　　　　　//设置延时
             add:function(context,value){
                 setTimeout(function(){
　　　　　　　　　　　//提交事件
                    context.commit('changeAsync',value);
                 },1000)
                 
             }
         }

//组建内：
    this.$store.dispatch('getNews') //调起actions
    mapActions('getNews')
```


更改state的数据并显示在组件中，有几个步骤：
1. 在mutations选项里，注册函数 函数里面装逻辑代码。
2. 在组件里，this.$store.commit('change',payload)  注意：提交的函数名要一一对应  
3. 触发函数，state就会相应更改 
4. 在组件的计算属性里 this.$store.state 获取你想要得到的数据

## 总结
mutation 只管存，你给我（dispatch）我就存；  
action只管中间处理，处理完我就给你，你怎么存我不管；  
Getter 我只管取，我不改的。  

action放在了 methods 里面，说明我们应该把它当成函数来用（讲道理，钩子函数也应该可以的）  
mutation是写在 store 里面的，这说明，它就是个半成品，中间量，我们不应该在外面去操作它。  
getter写在了 computed 里面，这说明虽然 getter我们写的是函数，但是我们应该把它当成计算属性来用。



## 我的理解：

概述：state（装数据） getter（查/拿数据） mutations&actions（增删改数据） 

## 上半部分： 
- **state：** 把数据（状态）都收集起来（发送给服务器的数据，接收的数据，用户输入的数据，需要计算的数据，一切的一切），是数据收集和中转站

- **mutations和actions：** 这两个为什么一起说？因为两者功能都是一样的，都是对数据的修改（也叫状态修改），  
区别在于：  
<span style="color:red;font-weight:bold">一、mutations只能执行同步操作，而从服务器获取数据等异步操作就要交给actions</span>，  
<span style="color:red;font-weight:bold">二、mutations是大哥，actions是二弟，只有大哥有修改state数据的权限，actions想要异步修改数据，要先给大哥mutations，大哥再给state</span>

- **getters：** 可以认为是store的计算属性

## 下半部分：
这样，这四大金刚功能我们就知道了，知道功能，也就知道他们需要哪些变量或者方法了

**mutations功能 -需要的变量/方法：** 
- ①先给此次修改起个名 -大伙儿喜欢单独建一个js文件（type.js/mutation-type.js），用大写常量表示
- ②修改数据  -至少需要拿到数据吧，所以需要state对象
- ③接收actions传来的数据（可以不写）  -这个数据官网叫payload
- ④数据修改后传state  -直接点语法就能修改了

汉化代码：  
[ ①操作名 ] ( ②state数据，③传来的数据 ) {  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;④state.被修改的数据名= 新数据值  
}
```javascript
export default{
    [ mutation-type (大写) ] (state, { payload } ) {
        //一通操作
        state.payload = payload
    }
}
```

**actions功能 -需要的变量/方法：**
- ①先给此次修改起个名 -驼峰命名
- ②异步操作需要上传和接收的数据 -都在state里收集，所以需要传入state
- ③修改数据只能commit给mutation -需要commit方法
```javascript
export default{
    getNews({commit,state},需要从组件内获取的数据){
        //一通异步操作，得到结果asyncData
        commit(GET_NEWS,asyncData)
    }
}
```
备注：
1. actions接受的是context方法，包括
context.commit，
context.getters,
context.state
2. 组件内this.$store.dispatch(action名，需要传入的数据)可以触发action  
   
**getters**

映射方法：  
    **mapActions([])**
   ```javascript
   mounted(){
       this.getAddress()
   },
   methods:{
       ...mapActions(['getAddress'])
   }
   ```
   **mapState([state里的属性名])**
   ```javascript
   computed:{
       ...mapState(['address'])  
   }
   ```


actions异步从接口拿到数据（async/await要babel-plugin），commit给mutations
考虑：如果让actions里的函数，第一步： 从服务器获取数据 第二部 提交（commit）给mutation 需要哪些变量/方法？
1. 如果从服务器获取数据：需要传给服务器的数据 ，接收服务器返回的数据容器  --- 都提前在state里备好

```

