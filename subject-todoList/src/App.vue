<template>
  <div id="app">
    <parent></parent>
  </div>
</template>

<script>
var child = {
  template: "<button @click='emitToParent'>我是局部子组件,放个插槽<slot></slot></button>",
  data() {
    return {
      cMsg: 34
    };
  },
  methods: {
    emitToParent:function() {
      alert(1)
      this.$emit("child-event", "我是子组件传上来的数据");
      console.log(this)
    }
  }
};

var parent = {
  template:
    "<div>我是局部父组件{{pMsg}}<child @child-event='getFromChild'><p>我是插头，我插入了</p></child></div>", //注意此时接收还是在child模板内接收
  data() {
    return {
      pMsg: 3
    };
  },
  components: {
    Child: child
  },
  methods: {
    getFromChild:function(data) {
      this.pMsg = data
    }
  }
};
export default {
  name: "App",
  data: () => {
    return {};
  },
  components: {
    Parent: parent
  }
};
</script>

<style >
#app {
  width: 300px;
  height: 300px;
}
</style>
