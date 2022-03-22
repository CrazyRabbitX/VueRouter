<template>
   <div style="width:200px;height:200px;border:1px solid red">
       <button @click="router1">页面一</button>
        <button @click="router2">页面二</button>
         <button @click="router3">页面三</button>
         <router-view></router-view>
   </div>
</template>

<script>
export default {
    methods:{
        router1(){
            //  this.$router.push({path:'/Shop/shop1',params:{username:'蔡锦舟'}})
             this.$router.push({ path: '/Shop/shop1', query: { username: '蔡锦舟' } })
        },
        router2(){
             this.$router.push('/Shop/shop2')
        },
        router3(){
             this.$router.push('/Shop/shop3')
        },

    }
}
</script>

<style>

</style>