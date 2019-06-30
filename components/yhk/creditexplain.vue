<template>
  <div id="creditexplain">
    <div id="head">
      <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
      <img @click="back()" id="headImg" src="../../../static/imgs/back.png" alt>
      <p id="headP">积分说明</p>
      
    </div>
     <div id="explain">
      <h2>
        <p class="p2">Q1: 怎么获得积分？</p>
      </h2>
      <p>在线支付的订单将获得订单积分奖励：</p>
      <p>积分将在用户完成评价后获得。</p>
      <p>可获得积分=订单金额×10（即1元=10点积分）。</p>
      <p>订单金额指实际付款金额，不包含活动优惠金额。</p>
      <p>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。   </p>
      <h2>
        <p class="p2">Q2: 积分用来做什么？</p>
      </h2>
      <p>可以在积分商城兑换各种礼品。</p>
      <h2>
        <p class="p2">Q3: 礼品兑换很多天了还没有收到，该怎么办？</p>
      </h2>
      <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>

      <h2>
        <p class="p2">Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</p>
      </h2>
      <p>不能，一个红包只能一次性使用，不能分开使用。</p>
      <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
    

    </div>
  </div>
</template>
<script>
export default {
  name: "creditexplain",
  data() {
    return {
     
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
#creditexplain {
  background-color: #f5f5f5;
  height: 100vh;
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
  margin-top: 0.13rem;
  font-size: 0.17rem;
}
.p3 {
  margin-left: 0.4rem;
}
</style>
