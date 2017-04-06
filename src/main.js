import Vue from 'vue';
import App from './App.vue';


import store from './store/';  //默认导入的就是index.js
//将store对象导入到Vue实例中

new Vue({
    store,
    el: '#app',
    render: h => h(App)
})
