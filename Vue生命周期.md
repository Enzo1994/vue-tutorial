## Vue 生命周期

![image](./LifeCycle@2.png)

- mounted以后不会去改动$el
- 服务端渲染没有mount步骤
- 如果有template属性，会把属性解析成rander function
- beforeMount：手动写的id是root的节点
  mounted：节点渲染成vue节点
- 补充：renderError(h,err){} 只有本组件出错会报错，子组件不管
  errorCaptured(){} 
