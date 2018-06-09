<template>
  <div class="hello">
   <pre>{{content}}</pre>
       <div class="myclass">你好</div>
  </div>
</template>

<script>
import '../assets/my.css'
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
