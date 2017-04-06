import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Detail from '../components/Detail.vue';
import Found from '../components/Found.vue';
import UserCenter from '../components/UserCenter.vue';


Vue.use(VueRouter);

const routes = [
    {path:'/', component:Home},
    {path:'/home', component:Home},
    {path:'/detail', component:Detail},
    {path:'/found', component:Found},
    {path:'/userCenter', component:UserCenter}

];

export default new VueRouter({routes});