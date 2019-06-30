<template>
  <div id="creditexplain">
    <div id="head">
      <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
      <img @click="back()" id="headImg" src="../../../static/imgs/back.png" alt>
      <p id="headP">余额问题</p>
      
    </div>
     <div id="explain">
      <h2>
        <p class="p2">Q1: 使用余额的条件</p>
      </h2>
      <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
      
      <h2>
        <p class="p2">Q2: 余额可以怎么用？</p>
      </h2>
      <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
      <h2>
        <p class="p2">Q3:我要如何提现？</p>
      </h2>
      <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>

      <h2>
        <p class="p2">Q4:为什么会提现失败？ </p>
      </h2>
      <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
    

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
