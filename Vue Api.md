##### API
1. Vue实例方法
```javascript
const app = new Vue({
    //el:'#root', 挂载
  template:'<div>vue根节点模板</div>'
    data{
        text:0  
    }
})

```
- 挂载
  `app.$mount('#root')`
- data读取修改
  `app.text`
- 获取所有data
  `app.$data`
  `app.$data.text` 可以修改
- props:
  `app.$props`
- HTML被挂载的节点引用
  `app.$el`
- Vue整个对象
  `app.$options`
  `app.$options.data.text`  不可修改
  ```javascript
  app.$options.render=(h)=>{
      return h('div',{},'new render function') //可以修改render方法，但是只能在第一次数据有变动后才会更改
  }
  ```
- 根
  `app.$root === app`
- 子组件
  `app.$children`
- 插槽
  `app.$solts`
  `app.$scopedSolts`
- 快速定位到组件
  `app.$ref`
  `<div><classify ref="classifyfix></classify></div>`
  `拿到标签（子组件本身）$el(this.$refs.classifyfix.$el)`
- 服务端渲染配置
  `app.$isServer`
- 强制刷新
  - 如果vue的data里传入对象，单独自行修改对象内的值，不会响应
  `app.$forceUpdate()`
- 补上响应式
  `app.$set(app.obj ,'a',1)`
- 删除属性
  `app.$delete`


- watch  不用需要注销
  ```javascript
    const unWatch = app.$watch('text',(newVal,oldVal)=>{
        console.log(newVal+':'+oldVal) 
    })
    unWatch() //注销
  ```
  和vue实例里写watch一样的
  ```javascript
    ...
    watch:{
        text(newVal,oldVal){
             console.log(newVal+':'+oldVal)
        }
    }
    ...
  ```

- on 事件监听和触发
  ```javascript
    app.$on('test',(a,b)=>{   //事件监听
        console.log('test emited')
    })
    app.$once('test',(a,b)=>{   //事件只监听一次
        console.log('test emited')
    })
    app.$emit('test',1,2)  //事件触发

  ```


- 下次DOM循环更新完毕之后执行的回调，在修改数据立即执行这个方法，可以获得更新后的DOM
 `app.$nextTick`


- 补充：Event Loop  
简言之就是JS只有一个主线程，主线程执行完执行栈的任务后去检查异步的任务队列，如果异步事件触发，则将其加到主线程的执行栈。
也就是说执行栈可能不能在一个loop内被执行完，因为会被挂起，是否挂起取决于运行环境和执行的操作种类。被挂起后前面注册的callback还是有可能先于执行栈剩余的代码触发。

2. 指令：
v-html
`class="{active:isActive}"`

- computed会在data发生变化以后执行
