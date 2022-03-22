<template>
  <div id="app">
    <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/Home/123">Go to Home</router-link>
     <router-link to="/Shop">Go to About</router-link>
  </p>
  <router-view></router-view>
  <router-view name="Side"></router-view>
  <router-view name="Footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  component:{
    
  },
  mounted(){
    
  },
  methods:{
    router1(){
     
    },
    router2(){
 
    }
  }
}
</script>

<style>

</style>
