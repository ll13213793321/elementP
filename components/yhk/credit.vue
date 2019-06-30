<template>
<div id="credit">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >我的积分 </p>
        
    </div>
    <div id="mid">
   <div id="state">
       <div id="p"></div>
   <p id="p1">当前积分 </p>
   <img id="wenhao" src="../../../static/imgs/wenhao.png" alt="">
     <router-link to="/creditexplain"> <a href=""><span id="p2">积分说明</span> </a></router-link>
   <p id="p3"> <strong> 0</strong></p> 
   <p id="p4">分</p>
   <button @click="show1()" id="btn">积分兑换商品</button>
    </div>
   </div>
   <div id="wrap">
   <p >最近30天积分记录</p>
   <img src="../../../static/imgs/jilu2.png" alt="">
    </div>

<!-- 弹框 -->
      <div  v-if="show" id="popup">
      <img src="../../../static/imgs/cuowu.png" alt="">
      <p>快去下单赚取大量积分吧</p>
      <button @click=" show2()" id="popupBtn"><strong>确认</strong></button>  
    </div>
</div>





    
</template>
<script>
export default {
    name:"credit",
    data() {
        return {
        show:false
        }
    },
    created () {
      
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
       
       show1(){
          this.show=true;
       },
  show2(){
          this.show=false;
       },
    }
}
</script>
<style scoped>
#credit{
  background-color: #f5f5f5;
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
  margin-right: 0.1rem;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.2rem;
    font-weight:bold;
    color: white;
}
#mid{
  
    margin-top: 0.005rem;
    background-color: #3190e8;
    height: 1.65rem;
}
#state{
   
  height: 1.6rem;
 margin-left: 0.1rem;
 margin-right: 0.1rem;
  background-color: white;
  
}
#p1{
  
   padding-left: 0.08rem;
    padding-top: 0.07rem;
    font-size: 0.14rem;
}
#wenhao{
    position: absolute;
    left: 2.8rem;
    top: 0.6rem;
}
#p2{
    font-size: 0.12rem;
    position: absolute;
    left: 3.05rem;
    top: 0.58rem;
    color: #3190e8;
}
#p3{
   padding-left: 0.12rem;
    /* padding-top: 0.01rem; */
    font-size: 0.4rem;
}
#p4{
    position: absolute;
  left: 0.48rem;
  top: 1rem;
  padding-left: 0.08rem;
   
    font-size: 0.2rem;
}
#btn{
    width: 3.3rem;
    height: 0.5rem;
    position: absolute;
    left: 0.22rem;
    top: 1.45rem;   
   background-color: #fe6d47;
 font-size: 0.2rem;
   color: white;
    border: #fe6d47;
   border-radius: 0.05rem;
}
#wrap{
    height: 8rem;
    background-color: #f5f5f5;
    position: relative;
}
#wrap p{
    font-size: 0.138rem;
    color:  #999;
    position: absolute;
    top: 0.12rem;
    left: 0.16rem;
}
#wrap img{
   
    position: absolute;
    top: 0.9rem;
    left: 1.1rem;
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
   padding-left: 0.4rem;
  
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
