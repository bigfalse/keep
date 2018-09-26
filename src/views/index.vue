<template>
 <div id='index'>
     <router-view></router-view>
     <van-tabbar v-model="active">
        <!-- <van-tabbar-item>
          <span>首页</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
          >
        </van-tabbar-item> -->
        <van-tabbar-item icon="chat" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="chat" to="/aboutClass">约课</van-tabbar-item>
        <van-tabbar-item icon="records" to="/exercise">锻炼进度</van-tabbar-item>
        <van-tabbar-item icon="records" to="/me">我的</van-tabbar-item>
     </van-tabbar>
 </div>
</template>

<script>
 export default {
   data () {
     return {
        active: 0,
        icon: {
          normal: '//img.yzcdn.cn/icon-normal.png',
          active: '//img.yzcdn.cn/icon-active.png'
        }
      }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
