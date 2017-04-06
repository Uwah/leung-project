<template>
  <div id="app">
      <button @click="increment">增加</button>&nbsp;&nbsp;
      <button @click="decrement">减少</button>
      <br>
      <span>count: {{count}}</span>
  </div>
</template>

<script>
//App.vue入口文件引入需要用到的mapGetters/mapActions 用于监听或者说管理方法还有事件

import {mapGetters, mapActions} from 'vuex';


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:mapActions(['increment', 'decrement']),
  computed:mapGetters(['count'])
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
