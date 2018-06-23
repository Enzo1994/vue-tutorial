<template>
    <div>
        我是子组件player{{parentMsg}}
        <input type="button" value="传值给父组件" @click ="sendToParent">
    </div>
</template>
<script>
export default {
  name: "player",
  props: ["parentMsg"],
  data: function() {
    return {
      childMsg: "我是子组件传上来的数据1"
    };
  },
  methods: {
    sendToParent: function() {
      Event.$emit("child-event", this.childMsg);
    }
  }
};
</script>
