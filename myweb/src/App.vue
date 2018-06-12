<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <button class = "btn btn-primary">确定</button>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/news">新闻页面</router-link>
    <router-link to="/about/">关于页面</router-link>
    <router-link to = "/Player/1">保罗</router-link>
    <router-link to = "/Player/2">哈登</router-link>

      <hr>

    <router-view/>  <!--显示的是Player组件内容-->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
