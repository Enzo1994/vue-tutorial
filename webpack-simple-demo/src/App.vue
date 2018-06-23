<template>
  <div id="app">
    <p>我是父组件{{childMsg}}</p>
      <player :parentMsg="parentMsg"></player>
  </div>
</template>

<script>
import Player from '../components/player.vue'
export default {
  name: 'app',
  data () {
    return {
      parentMsg:'我是父组件传来的数据1',
      childMsg:''
    }
  },
  mounted:function () {
    Event.$on('child-event',function(data){
      this.childMsg = data
    }.bind(this))
    },
  components:{
    Player
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
