<template>
  <div id="app">
    <div id="head">
      <a class="btn">
        <img src="../../../static/imgs/back.png" @click="back()">
      </a>
      <p>订单列表</p>
    </div>
    <div id="footer">
      <router-link to="/home" class="all">
        <img src="../../../static/imgs/homeF.png" class="imgs">
        <p>外卖</p>
      </router-link>
      <router-link to="/" class="all">
        <img src="../../../static/imgs/searchF.png" class="imgs">
        <p>搜索</p>
      </router-link>
      <router-link to="/order" class="all">
        <img src="../../../static/imgs/orderT.png" class="imgs">
        <p>订单</p>
      </router-link>
      <router-link to="/me" class="all">
        <img src="../../../static/imgs/meF.png" class="imgs">
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
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#app {
  width: 3.75rem;
  height: 100vh;
  background-color: white;
  position: relative;
}
#head {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
}
#head > p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: white;
  font-size: 0.2rem;
  font-weight: bold;
}
#head img {
  width: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
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
