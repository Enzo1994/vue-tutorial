<template>
  <div id="app">
    <form role="form">
      <div class="form-group">
        <label for="username">姓名</label>
        <input type="text" class="form-control" v-model="username" placeholder="请输入姓名">
      </div>
      <div class="form-group">
        <label for="username">年龄：</label>
        <input type="text" class="form-control" v-model="age" placeholder="请输入年龄">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-danger btn-xs" @click="btnClick($event)">提交</button>
        <button type="reset" class="btn btn-primary btn-xs">清空</button>
      </div>
    </form>

    <table class="table table-bordered text-center">
      <tr class="text-center">
        <th class="text-center">序号</th>
        <th class="text-center">姓名</th>
        <th class="text-center">年龄</th>
        <th class="text-center">操作</th>
      </tr>
      <tr v-for="(item,index) in arr">
        <td>{{index}}</td>
        <td>{{item.username}}</td>
        <td>{{item.age}}</td>
        <td><button class="btn btn-primary btn-xs">删除</button></td>
        </tr>
      <tr>
        <td colspan="4" v-show = "arr.length===0">暂无数据。。。</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      username:'',
      age:0,
      num:0,
      arr:[]

    };
  },
  methods: {
    btnClick: function(e) {
      let obj = {};
      obj['username'] = this.username
      obj['age'] = this.age
      this.arr.push(obj)
    }
  }
};
</script>

<style >
#app {
  width: 300px;
  height: 300px;
}
</style>
