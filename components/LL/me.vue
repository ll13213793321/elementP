<template>
  <div>
    <div id="head">
      <a class="btn">
        <img src="../../../static/imgs/find.png" alt>
      </a>
      <p>{{name}}</p>
      <router-link to="/login">
        <span class="btn btns">登录|注册</span>
      </router-link>
    </div>
    <div id="footer">
      <router-link to="home" class="all">
        <img src="../../../static/imgs/homeF.png" class="imgs">
        <p>外卖</p>
      </router-link>
      <router-link to="" class="all">
        <img src="../../../static/imgs/searchF.png" class="imgs">
        <p>搜索</p>
      </router-link>
      <router-link to="order" class="all">
        <img src="../../../static/imgs/orderF.png" class="imgs">
        <p>订单</p>
      </router-link>
      <router-link to="me" class="all">
        <img src="../../../static/imgs/meT.png" class="imgs">
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "first",
  data() {
    return {
      name: ""
    };
  },
  created() {
    this.name = this.$route.query.name;
  },
  methods: {}
};
</script>
<style scoped>
#head > p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  text-align: center;
}
#head img {
  width: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
#head span {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.15rem;
  color: white;
  position: absolute;
  right: 0.1rem;
  top: 0;
}
#footer {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}
.all {
  width: 25%;
  height: 0.3rem;
  text-align: center;
  font-size: 0.15rem;
  color: gray;
}
.imgs {
  width: 0.2rem;
}
</style>
