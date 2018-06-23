<template>
    <h1>您是{{id}}号用户</h1>
</template>

<script>
export default {
  name: "userId",
  data() {
    return {
      id: ""
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  beforeRouteUpdate(to, from, next) {
    //更新路由参数方法
    this.id = to.params.id; //to存的是最新路由
    next();
  }
};
</script>