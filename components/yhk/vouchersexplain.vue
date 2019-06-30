<template>
  <div id="vouchersexplain">
    <div id="head">
      <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
      <img @click="back()" id="headImg" src="../../../static/imgs/back.png" alt>
      <p id="headP">积分问题</p>
    </div>
    <div id="explain">
      <h2>
        <p class="p2">Q1: 什么是商家代金券？</p>
      </h2>
      <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>

      <h2>
        <p class="p2">Q2: 怎么获得商家代金券？</p>
      </h2>
      <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
      <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
      <h2>
        <p class="p2">Q3: 商家代金券使用条件</p>
      </h2>
      <p>商家代金券仅限在指定商家使用</p>

      <p>商家代金券仅限在线支付使用</p>
      <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "vouchersexplain",
  data() {
    return {
      msg: "",
      title: [],
      content: []
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
#hotproblem {
  background-color: #f5f5f5;
}

#head {
  width: 100vw;
  height: 0.45rem;
  background-color: #3190e8;
}
#headImg {
  margin-top: 0.1rem;
  width: 0.1rem;
  float: left;
  margin-left: 0.1rem;
}
#headP {
  margin-right: 0.1rem;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
}
#explain {
  font-size: 0.145rem;
}
#p1 {
  font-size: 0.14rem;

  margin: 0.2rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
#explain p {
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  margin-top: 0.09rem;
}
.p2 {
  margin-top: 0.06rem;
  font-size: 0.17rem;
}
</style>
