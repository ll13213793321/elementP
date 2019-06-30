<template>
  <div id="hongbaoexplain">
    <div id="head">
      <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
      <img @click="back()" id="headImg" src="../../../static/imgs/back.png" alt>
      <p id="headP">红包说明</p>
    </div>
    <div id="explain">
      <h2>
        <p class="p2">Q1: 怎么获得红包</p>
      </h2>
      <p>通过邀请好友获得</p>
      <p>在下单返红包的商家下单获得</p>
      <p>抢微信朋友分享的红包获得</p>

      <h2>
        <p class="p2">Q2: 红包可以做什么</p>
      </h2>
      <p>可以抵扣在线支付时的实际支付金额。</p>
      <h2>
        <p class="p2">Q3: 红包的门槛金额按照什么金额计算？</p>
      </h2>
      <p>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>

      <h2>
        <p class="p2">Q4: 一个红包能拆开多次使用吗？</p>
      </h2>
      <p>不能，一个红包只能一次性使用，不能分开使用。</p>
      <h2>
        <p class="p2">Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</p>
      </h2>
      <p>会的，订单无效后红包会自动返还到您的账户里。</p>
      <h2>
        <p class="p2">Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</p>
      </h2>
      <p>在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</p>
      <h2>
        <p class="p2">Q7: 邀请好友了，为什么没获得红包？</p>
      </h2>
      <p>先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>
   <h2><p class="p2">Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？</p></h2>
   <p>预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</p>

    </div>
  </div>
</template>
<script>
export default {
  name: "hongbaoexplain",
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
  margin-top: 0.13rem;
  font-size: 0.17rem;
}
.p3 {
  margin-left: 0.4rem;
}
</style>
