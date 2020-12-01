<!--
 * @Author: duchengdong
 * @Date: 2020-11-05 15:47:07
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-05 16:22:52
 * @Description: 
-->
<template>
  登录页
</template>

<script>
export default {
    created:function(){
        console.log('当前是在登录页！')
        setTimeout(() => {
            console.log('跳转到首页！')
            this.$router.push('/')
        }, 2000);
    }
}
</script>

<style>

</style>