<template>
  <div>
    <h2>球员简介：{{this.$route.params.uid}}</h2> 
    <h3>{{cMsg}}</h3>
  </div>
</template>
<script>
export default {
  name:'profile',
  data(){
    return{
      cMsg:''
    }
  },
  
  props:['pMsg']
}
</script>
