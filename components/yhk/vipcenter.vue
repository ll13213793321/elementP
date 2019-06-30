<template>
<div id="vipCenter">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >会员中心 </p>
        
    </div>
     <p id="userP">为账户 <strong>{{username}} </strong>购买会员</p>
     <router-link to="/vipexplain">
  <div id="viptq">
<span>会员特权</span>
<span>会员说明</span>
<img id="jiantou"  src="../../../static/imgs/iconfontjiantou2.png" alt="" width="4.5%">

  </div></router-link>
  <div id="jianshao1">
<img id="img1" src="../../../static/imgs/yewutubiaosheng.png" alt="" width="12%">
<p id="p1">减免配送费</p>
<p id="p2">每月减免30单，每日可减免3单，每单最高减4元</p>
<p id="p3">蜂鸟专送专享</p>
</div>
 <div id="jianshao2">
<img id="img1" src="../../../static/imgs/yewutubiaosheng.png" alt="" width="12%">
<p id="p1">减免配送费</p>
<p id="p2">每月减免30单，每日可减免3单，每单最高减4元</p>
<p id="p3">蜂鸟专送专享</p>
</div>
<p id="open">开通会员</p>
<div id="month">
<span id="span1">1个月</span>
<span id="span2"><strong> ¥20</strong></span> 
    <router-link to="/alipay"><button id="buy">购买</button> </router-link>
</div>
<router-link to="/vipexchange">
<p class="p4">兑换会员  <span id="span3">使用卡号卡密</span></p>
</router-link>
<router-link to="/purchasehistory">
<p class="p4">购买记录  <span id="span4">开发票</span></p>
</router-link>
</div>





    
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"vipCenter",
    data() {
        return {
  
        }
    },
    created () {
      
    },
     computed: {
      // getN(){
      //   return this.$store.state.username;
      // }
      ...mapState(["username"])
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
    
  
    }
}
</script>
<style scoped>
#vipCenter{
  background-color:#f5f5f5;
height: 100vh;
 
}
 
#head{
    width: 100vw;
    height: 0.45rem;
    background-color: #3190e8;
}
#headImg{
    margin-top: 0.1rem;
    width: 0.1rem;
    float: left;
     margin-left: 0.1rem;
}
#headP{
  margin-right: 0.18rem;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.2rem;
    font-weight:bold;
    color: white;
}
#userP{
    height: 0.47rem;
    line-height: 0.47rem;
     font-size: 0.14rem;
      padding-left: 0.16rem;
}
#viptq{
   
    position: relative;
    height: 0.45rem;
      line-height: 0.45rem;
    background-color: white;
    color: black;
   
}
#viptq span:nth-child(1){
    position: absolute;
     height: 0.45rem;
      line-height: 0.45rem;
        padding-left: 0.16rem;
        font-size: 0.16rem;
}
#viptq span:nth-child(2){
    position: absolute;
     height: 0.45rem;
      line-height: 0.45rem;
      left: 2.75rem;
       font-size: 0.15rem;
           color: #999;
}
#jiantou{
    position: absolute;
    left: 3.4rem;
    top: 0.13rem;
}
#jianshao1{
    margin-top: 0.01rem;
  position: relative;
    height: 0.9rem;
      line-height: 0.45rem;
    background-color: white;
   
}
#img1{
    margin-left: 0.14rem;
    margin-top: 0.18rem;

}
#p1{
    position: absolute;
    left: 0.7rem;
    top: 0.04rem;
    font-size: 0.16rem;
}
#p2{
    position: absolute;
    left: 0.7rem;
    top: 0.24rem;
    color: #999;
  
}
#p3{
    position: absolute;
    left: 0.7rem;
    top: 0.4rem;
    color: #999;
  
}
#jianshao2{
    margin-top: 0.01rem;
  position: relative;
    height: 0.9rem;
      line-height: 0.45rem;
    background-color: white;
   
}
#open{
    margin-top: 0.12rem;
    height: 0.45rem;
    background-color: white;
    line-height: 0.45rem;
    font-size: 0.17rem;
    padding-left: 0.18rem;
}
#month{
    position: relative;
    height: 0.65rem;
    background-color: white;
    line-height: 0.65rem;
     font-size: 0.17rem;
    padding-left: 0.18rem;
    margin-top: 0.01rem;
}
#span2{
    color: #f60;
}
#buy{
    position: absolute;
    margin-left: 2.1rem;
    /* width: 0.8rem; */
    height: 0.3rem;
    line-height: 0.3rem;
    width: 0.6rem;
    top: 0.2rem;
    left: 0.88rem;
    border-radius: 0.03rem;
    border: 0.01rem solid #f60;
    background-color: white;
    font-size: 0.15rem;
      color: #f60;
}
.p4{
    margin-top: 0.12rem;
    height: 0.45rem;
    background-color: white;
    line-height: 0.45rem;
    font-size: 0.16rem;
    padding-left: 0.18rem;
    color: black;   
}

#span3{
    font-size: 0.15rem;
    margin-left: 1.6rem;
    color: #999;
}
#span4{
    font-size: 0.15rem;
    margin-left: 2rem;
    color: #999;
}
</style>
