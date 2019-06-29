<template>
  <div id="app">
    <div id="head">
      <a class="btn">
        <img
          src="../../../static/imgs/back.png"
          @click="back()"
        >
      </a>
      <p>订单备注</p>
    </div>
    <div id="content">
      <ul class="top">
        <p>快速备注</p>
        <span>
          <span>不要辣</span>
          <span>少点辣</span>
          <span>多点辣</span>
        </span>
        <span>
          <span>不要香菜</span>
        </span>
        <span>
          <span>多点辣</span>
        </span>
        <span>
          <span>多点葱</span>
        </span>
        <span>
          <span>去冰</span>
          <span>少冰</span>
        </span>
      </ul>
      <ul class="bottom">
        <p>其他备注</p>
        <textarea placeholder="请输入备注内容(可不填)"></textarea>
      </ul>
    </div>
    <button>确定</button>
  </div>
</template>
<script>
export default {
  name: "orderAddMessage",
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
#content {
  margin-top: 0.6rem;
}
#content ul {
  margin-top: 0.1rem;
  padding: 0.2rem;
  background-color: white;
}
#content ul > p:first-child {
  width: 3.35rem;
  height: 0.5rem;
  font-size: 0.15rem;
  line-height: 0.5rem;
}
#content ul > span {
  overflow: hidden;
  display: inline-block;
  margin-bottom: 0.1rem;
  margin-right: 0.1rem;
  border-radius: 0.01rem;
}
#content ul > span > span {
  float: left;
  display: block;
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.15rem;
  padding: 0.1rem;
  border: 0.01rem solid #3190e8;
}
.bottom > textarea {
  width: 3.15rem;
  height: 1.5rem;
  font-size: 0.15rem;
  color: gray;
  border: none;
  outline: none;
  background-color: rgb(243, 243, 243);
  padding: 0.1rem;
  font-weight: bold;
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
