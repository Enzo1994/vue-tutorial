<template>
  <div>
    <h2>球员列表：</h2>
    <ul>
      <li>编号：{{detail.uid}}</li>
      <li>姓名：{{detail.name}}</li>
      <li>得分：{{detail.point}}</li>
    </ul>
    <router-link :to = "profile">简介 </router-link>  <!--直接连接到子组件profile-->
    <router-link :to = "stats">数据 </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      detail: {},
      profile: "",
      stats: ""
    };
  },
  mounted() {
    this.detail = this.getPlayer(this.$route.params.uid);

    this.profile = `/player/${this.$route.params.uid}/profile`; //显示的是传给profile子组件uid值以后把显示了数据的子组件profile显示出来
    this.stats = `/player/${this.$route.params.uid}/stats`; 
  },
  beforeRouteUpdate(to, from, next) {
    //更新路由参数方法
    this.detail = this.getPlayer(to.params.uid); //to存的是最新路由

    this.profile = `/player/${to.params.uid}/profile`;  
    this.stats = `/player/${to.params.uid}/stats`;  

    next();
  },
  methods: {
    getPlayer(uid) {
      switch (uid) {
        case "1":
          return { uid: 1, name: "保罗", point: 26 };
        case "2":
          return { uid: 2, name: "哈登", point: 22 };
      }
    }
  }
};
</script>