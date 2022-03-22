<template>
   <div>
      <h1>页面二</h1>       
      <!-- 声明式导航 -->
      <button @click="RouterToPageOne">路由到页面一</button>  
      <!-- 编程式导航   -->
      <router-link :to="{name:'shop1',params:{username:'陈子龙'}}">路由到页面一</router-link>
      <button @click="RouterHome">路由到主页</button>
      <button @click="BackOneStep">往前退一步</button>
   </div>

</template>

<script>
export default {
   methods: {
      RouterToPageOne(){
         this.$router.push({
            name:'shop1',
            params: {username:'蔡锦舟'}
         })
         
      },
      RouterHome(){
         this.$router.replace({name:'Home'})
      },
      BackOneStep(){
         this.$router.go(-1)
      }
   }
}
</script>

<style>

</style>