<template>
<div id="hongbaoexchange">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >兑换红包 </p>
        
    </div>
    
     <p> <input v-model="num1" id="btn1" type="text" placeholder="请输入兑换码"></p>
    <p><input v-model="num2" maxlength="4"  id="btn2" type="text" placeholder="验证码"></p>
     <button @click="show1()"  :class="{login1:num1.length>0&&num2.length==4}"  class="login"> <strong>兑换</strong></button> 
     <div id="code">
       <img :src="code" alt=""> 
        
          <a id="codea" @click="check_code()">换一张</a>
          <p id="codeP">看不清</p>
     </div>
 <!-- 弹框 -->
      <div  v-if="show==true" id="popup">
      <img src="../../../static/imgs/cuowu.png" alt="">
      <p>无效的卡号</p>
      <button @click=" show2()" id="popupBtn"><strong>确认</strong></button>  
    </div>



</div>





    
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"hongbaoexchange",
    data() {
        return {
       code:"",
       num1:"",
       num2:"",
      show:"false"
        }
    },
    created () {
      this.check_code();
    },
     computed: {
      // getN(){
      //   return this.$store.state.username;
      // }
      ...mapState(["username"])
    },
    methods: {
      show1(){
          this.show=true;
       },
  show2(){
          this.show=false;
       },
        back(){
            this.$router.go(-1);
        },
       check_code() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //不占用缓存
        withCredentials: true,
        data: {}
      }).then(res => {
        this.code = res.data.code;
        console.log(res.data);
      });
    },
  
    }
}
</script>
<style scoped>
#hongbaoexchange{
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
    font-size: 0.19rem;
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
     margin-top: 0.16rem;
    margin-left: 0.14rem;
    width: 3.45rem  ;
    background-color: white;
    height: 0.5rem;
    border: white;
    font-size: 0.15rem;
    text-indent :1em;
    margin-top: 0.18rem;
    border-radius: 0.05rem;
}
#btn2{
  
    border-radius: 0.05rem;

    margin-top: 0.16rem;
    margin-left: 0.14rem;

    width: 2rem;
    background-color: white;
    height: 0.5rem;
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
  width: 3.45rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-left: 0.15rem;
  margin-top: 0.18rem;
  background-color: #4cd964;
  outline: none;
  border: none;
  font-size: 0.16rem;
  color: #fff; 
  border-radius: 0.05rem;
}
#code{
    width: 1.3rem;
    height: 0.5rem;
    background-color: white;
    position: absolute; 
    top: 1.3rem;
    left: 2.3rem;
}
#codeP{
    font-size: 0.13rem;
     position: absolute; 
      top: 0.05rem;
     left: 0.85rem;
}
#codea{
    font-size: 0.13rem;
         color: #3b95e9;
     position: absolute; 
     top: 0.28rem;
     left: 0.85rem;

}
#popup{
  position: absolute;
  background-color:white;
  height: 1.2rem;
  width: 3rem;
  margin-left: 0.35rem;
  top: 1.7rem;
  animation: heartBeat 0.8s;
}
#popup img{
  /* position: absolute; */
  background-color: white;
  
  margin-left: 1rem;
  margin-top: 0.15rem;
}
#popup p{
  /* position: absolute; */
  background-color: white;
  font-size: 0.2rem;
   padding-left: 1.05rem;
  
}
#popupBtn{
    /* position: absolute; */
    width: 3rem;
    height: 0.4rem;
    line-height: 0.4rem;
    top: 1.6rem;
    left: 0rem;
        background-color: #4cd964;
        font-size: 0.17rem;
        color: white;
        text-align: center;
   
}
</style>
