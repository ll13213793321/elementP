<template>
<div id="vipexchange">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >兑换会员 </p>
        
    </div>
     <p id="userP">成功兑换后将关联到当前账号:<strong>{{username}} </strong></p>
     <p> <input  maxlength="10" v-model="num"   id="btn1" type="text" placeholder="请输入10位卡号"></p>
    <p><input maxlength="6" v-model="num2" id="btn2" type="text" placeholder="请输入6位卡密"></p>
     
     <button :class="{login1:num.length==10 &&num2.length==6 }" class="login"> <strong>兑换</strong></button> 
<!-- <button id="login"> <strong>兑换</strong></button>  -->
    <p id="p1">——温馨提示——</p>
    <p class="p2">新兑换的会员服务，权益以「会员说明」为准。</p>
    <p class="p2">月卡:30次减免配送费。</p>
    <p class="p2">季卡:90次减免配送费。</p>
    <p class="p2">年卡:360次减免配送费。</p>
    <p class="p2">＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元</p>
    <p class="p2">（一个月按31天计算）</p>

 




</div>





    
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"vipexchange",
    data() {
        return {
      show:false,
      num:"",
      num2:""          
        }
    },
    computed:({
    
    }),
    created () {
      if (this.num.length>10)  {
             this.$set(this.data,show,true);
         }
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
#vipexchange{
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
     font-size: 0.145rem;
      padding-left: 0.16rem;
      background-color:#f5f5f5;;
          color: #666;
}

#btn1{
    width: 100vw;
    background-color: white;
    height: 0.45rem;
    border: white;
    font-size: 0.15rem;
    text-indent :1em;
}
#btn2{
    margin-top: 0.01rem;
    width: 100vw;
    background-color: white;
    height: 0.45rem;
    border:0.02rem solid #f5f5f5;
    font-size: 0.15rem;
    text-indent :1em;

}
.login {
  width: 3.45rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-left: 0.15rem;
  margin-top: 0.18rem;
  background-color: #ccc;
  outline: none;
  border: none;
  font-size: 0.16rem;
  color: #fff; 
  border-radius: 0.05rem;
}
.login1 {
    position: absolute;
  width: 3.45rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-top: 0.18rem;
  left: 0.01rem;
     background-color: #4cd964;
  outline: none;
  border: none;
  font-size: 0.16rem;
  color: #fff; 
  border-radius: 0.05rem;
}
#p1{
    font-size: 0.16rem;
     margin:0.2rem;
     padding-left:1rem;
     color:#aaa;
}
.p2{
     font-size: 0.12rem;
    
     padding-left:0.4rem;
     color:#aaa;
}
</style>
