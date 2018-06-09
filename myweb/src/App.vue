<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <button class = "btn btn-primary">确定</button>
    <hr>

      <hr>

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
