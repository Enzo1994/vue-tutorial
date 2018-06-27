## VueX：
- 安装：`npm install vuex -S`
- 改变store状态需要显式提交commit到mutation

顺序：
组件内的mapActions -> store.js内的actions -> mutations <- state -> getters

组件任务：
1. 把actions操作名告诉vuex （可用mapActions(操作名数组)方法）
2. 把state从store里拿回来（可用mapGetters(数据名数组)方法）
```javascript
<template>
  <div id="app">
    <p>{{count}}</p>
    <input type="button" @click="increment" value="增加">
    <input type="button" @click="clickOdd" value="偶数才能点击">
    <input type="button" @click="clickAsync" value="异步点击">
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

import Player from '../components/player.vue'
export default {
  name: 'app',
  computed:mapGetters(['count']),
  methods:mapActions(['increment','clickOdd','clickAsync'])
}
</script>

```

store.js任务：
1. actions把操作名告诉（commit）给mutations
2. mutations里用操作名找到对应方法，方法内部需要去state里拿到数据加以修改
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 10
}

const getters = {
    count(state) {
        return state.count
    },
    oddCount(state){
        return state.count%2 ? '不是偶数':'是偶数' 
    }
}

const mutations = {
    increment(state) {
        state.count++
    },
    clickOdd(state) {
        state.count++
    },
    clickAsync(state) {
        state.count++
    }
}
const actions = {
    increment: ({ commit }) => {
        commit('increment')
    },
    clickOdd: ({ commit, state }) => {  //state拿数据
        if (state.count % 2 === 0) {
            commit('clickOdd')
        }
    },
    clickAsync: ({ commit }) => {
        new Promise((resolve) => {
            setTimeout(() => {
                commit('clickAsync')
            }, 1000);
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
```
