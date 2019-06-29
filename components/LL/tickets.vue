<template>
  <div id="app">
    <div id="head">
      <a class="btn">
        <img
          src="../../../static/imgs/back.png"
          @click="back()"
        >
      </a>
      <p>选择发票抬头</p>
    </div>
    <div class="content">
      <input
        type="text"
        value="不需要开发票"
      >
      <p class="chioce">√</p>
    </div>
    <button>确定</button>
  </div>
</template>
<script>
export default {
  name: "tickets",
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
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
.content {
  width: 3.75rem;
  height: 0.6rem;
  background-color: white;
  margin-top: 0.6rem;
  margin-bottom: 0.1rem;
  position: relative;
}
.content > input {
  width: 2rem;
  height: 0.6rem;
  font-size: 0.2rem;
  text-indent: 1em;
}
.chioce {
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  font-size: 0.2rem;
  background-color: gray;
  color: white;
  border-radius: 50%;
  position: absolute;
  right: 0.1rem;
  top: 0.15rem;
}
button {
  width: 3.6rem;
  height: 0.5rem;
  font-size: 0.2rem;
  color: white;
  background-color: green;
  border: none;
  border-radius: 0.1rem;
  margin: 0.1rem 0 0 0.07rem;
}
</style>
