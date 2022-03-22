import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Side from './pages/Side.vue';
import Footer from './pages/Footer.vue';
Vue.use(VueRouter)

Vue.config.productionTip = false

//重定向的使用 { path:'/Home',name:'Home',redirect:'/123',component:()=>import('./pages/Home.vue')},
// { path:'/Home',name:'Home',redirect:{name:'shop1'},component:()=>import('./pages/Home.vue')},
const routes = [
  {path:'/',components:{default:Home,Side,Footer}},
  { path:'/Home/:id',name:'Home',component:()=>import('./pages/Home.vue'),props:true},
  { path:'/Shop',name:'Shop',component:()=>import('./pages/Shop.vue'),children:[
    {name:'shop1',path:'shop1',component:()=>import('./pages/PageOne.vue')},
    {name:'shop2',path:'shop2',component:()=>import('./pages/PageTwo.vue')},
    {name:'shop3',path:'shop3',component:()=>import('./pages/PageThree.vue')},
  ]}
]
const router = new VueRouter({
  mode:'history',
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
