<!--
 * @Author: duchengdong
 * @Date: 2020-11-04 15:11:12
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-05 16:38:11
 * @Description: 
-->
<template>
  <div>主页{{a}}</div>
  <router-view></router-view>
</template>

<script>
export default {
  data(){
    return {
      a:1
    }
  },
  created: function(){
    console.log('这是业务页面！',this.$route)
    setTimeout(() => {
      console.log('我去关于页面了！')
      this.$router.push('/about')
    }, 2000);
  }
}
</script>

<style>

</style>