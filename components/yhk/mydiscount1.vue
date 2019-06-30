<template>
  <div id="mydiscount1">
    <!-- <div id="title">
         <p id="p1"><u>红包</u></p>
         
         <p id="p2">商家代金券</p>
    </div>-->
    <div id="wz">
      <p id="wzp1">有3个红包即将到期</p>

      <router-link to="/hongbaoexplain">
        <p id="wzp2">
          <img src="../../../static/imgs/wenhao2.png" alt>
          红包说明
        </p>
      </router-link>
    </div>

    <div id="ul" :key="i" v-for="(v,i) in datas">
      <div id="price">
        <p id="num">
          <strong>${{(v.amount).toFixed(1)}}</strong>
        </p>
        <p id="num2">满{{v.sum_condition}}元可用</p>
      </div>
      <p id="fx">{{v.name}}</p>
      <p class="rq">{{v.end_date}}到期</p>
      <p id="phone">限收货手机号为 {{v.phone}}</p>
      <p id="rq2">{{v.description_map.validity_delta}}</p>
    </div>
    <p id="txt1">限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
    <router-link to="/hongbaohistory">
      <p id="txt2">查看历史红包</p>
    </router-link>
    <img id="jiantou" src="../../../static/imgs/iconfontjiantou2.png" alt width="20rem">
    <div id="bottom">
      <router-link to="/hongbaoexchange">
        <p class="bottomP">兑换红包</p>
      </router-link>
      <router-link to="/tuijian">
        <p class="bottomP">推荐有奖</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "mydiscount1",
  data() {
    return {
      datas: ""
    };
  },
  created() {
    this.hongbao();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    hongbao() {
      if (this.$store.state.userid) {
        const api =
          "https://elm.cangdu.org/promotion/v2/users/" +
          this.$store.state.userid +
          "/hongbaos?limit=20&offset=0";
        this.$http({
          url: api,
          methods: "get",
        
        }).then(res => {
            this.$store.commit("getnum",res.data.length)
          this.datas = res.data;
          console.log(res.data);
        });
      }
    }
  }
};
</script>
<style scoped>
#mydiscount {
  background-color: #f5f5f5;
  /* height: 100vh; */
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
#title {
  background-color: white;
  height: 0.45rem;
  display: flex;
}
#p1 {
  width: 50vw;
  text-align: center;
  font-size: 0.15rem;
  height: 0.45rem;
  line-height: 0.45rem;
  text-decoration: underline;
  /* color: #3190e8; */
}
#p2 {
  width: 50vw;
  text-align: center;
  font-size: 0.15rem;
  height: 0.45rem;
  line-height: 0.45rem;
  text-decoration: underline;
}
#wz {
  height: 0.5rem;
  line-height: 0.5rem;
  position: relative;
  font-size: 0.12rem;
}
#wzp1 {
  position: absolute;
  left: 0.15rem;
}
#wzp2 {
  position: absolute;
  left: 2.9rem;
  color: #3190e8;
}
#ul {
  position: relative;
}
#fx {
  margin-top: 0.12rem;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  padding-left: 1.1rem;
  padding-top: 0.2rem;
  color: #666;
  height: 0.9rem;
  font-size: 0.16rem;
  background-color: white;
  border-top: 0.03rem dotted red;
}
.rq {
  position: absolute;
  top: 0.45rem;
  left: 1.25rem;
  color: #999;
}
#phone {
  position: absolute;
  top: 0.6rem;
  left: 1.25rem;
  color: #999;
}
#rq2 {
  position: absolute;
  font-size: 0.17rem;
  top: 0.15rem;
  left: 3.05rem;
  color: #ff5340;
}
#num {
  position: absolute;
  font-size: 0.27rem;
  color: #ff5340;
  top: 0.3rem;
  left: 0.4rem;
}
#num2 {
  position: absolute;
  font-size: 0.13rem;
  color: #999;

  top: 0.7rem;
  left: 0.4rem;
}
#txt1 {
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: #f9f9f9;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  padding-left: 0.15rem;
  color: #999;
}
#txt2 {
  color: #999;

  margin-left: 1.5rem;
  margin-top: 0.2rem;
}
#jiantou {
  position: absolute;
  top: 5.67rem;
  left: 2.2rem;
  color: #999;
}
#bottom {
  margin-top: 0.35rem;
  height: 0.45rem;
  background-color: white;
  display: flex;
}
.bottomP {

  text-align: center;
  line-height: 0.45rem;
  width: 49vw;
  font-size: 0.15rem;
  color: black;
}
</style>
