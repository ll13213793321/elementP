<template>
<div id="vipexplain">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP">我的优惠</p>
    </div>
    <div id="explain">

   
    <p id="p1">尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
   
   <h2><p class="p2">Q1: 特权介绍</p></h2>
   <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
    <p> 减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
    <p>更多特权，敬请期待！</p>
   <h2><p class="p2">Q2: 资费介绍</p></h2>
   <p>饿了么会员卡：20元</p>
   <h2><p class="p2">Q3: 使用说明</p></h2>
   <p >当用户满足以下任一条件，会员服务自动失效：</p>
   <p class="p3">自绑定之日起超过31天；
       <p class="p3">在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
   <h2><p class="p2">Q4: 购卡说明</p></h2>
   <p>在线购买：饿了么App>我的>饿了么会员卡</p>
   <h2><p class="p2">Q5: 温馨提示</p></h2>
   <p>用户在当前会员服务失效前，无法购买新卡。</p>
   <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
 

    </div>
    
</div>





    
</template>
<script>
export default {
    name:"vipexplain",
    data() {
        return {
     msg:"",
     title:[],
     content:[]
        }
    },
    created () {
       this.receive()
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
    
   receive(){
      this.title=this.$route.query.title
      this.content=this.$route.query.content

    }
    }
}
</script>
<style scoped>
#hotproblem{
  background-color: #f5f5f5;
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
  margin-right: 0.1rem;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.2rem;
    font-weight:bold;
    color: white;
}
#explain{
    font-size: 0.145rem;
}
#p1{
    font-size: 0.14rem;

    margin: 0.2rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;

}
#explain p{
    padding-left: 0.15rem;
    padding-right: 0.15rem;

}
.p2{
    margin-top: 0.13rem;
    font-size: 0.17rem;

}
.p3{
    margin-left: 0.4rem;
}
</style>
