<template>
  <div id="app">
    <div id="head">
      <a class="btn">
        <img
          src="../../../static/imgs/back.png"
          @click="back()"
        >
      </a>
      <p>选择地址</p>
    </div>
    <router-link to="/addAddress">
      <div class="footer">
        <p>+</p>
        <p>新增收货地址</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "orderAddress",
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
.footer {
  width: 3.75rem;
  height: 0.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
}
.footer p:last-child {
  height: 0.5rem;
  line-height: 0.5rem;
  color: #3190e8;
  font-size: 0.18rem;
  position: absolute;
  left: 1.5rem;
  top: 0;
}
.footer p:first-child {
  width: 0.3rem;
  height: 0.3rem;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  color: #3190e8;
  border: 0.02rem solid #3190e8;
  border-radius: 50%;
  position: absolute;
  left: 1rem;
  top: 0.05rem;
}
</style>
