<template>
  <div class="hello">
    <van-nav-bar title="主页" />
    <!-- left-text="返回" right-text="登录" left-arrow @click-left="onClickLeft" @click-right="onClickRight" -->
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template> 
<script>
  import Vue from 'vue';
  import Vant from 'vant';
  import 'vant/lib/vant-css/index.css';

  Vue.use(Vant);
export default {
  name: "page",
  props: {
    msg: String
  },
  methods:{
    onClickLeft(){
      console.log("左边");
    },
    onClickRight() {
      console.log("右边");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
.van-swipe-item,.van-swipe{
  height:200px;
  background:#16d7e3;
}
</style>
