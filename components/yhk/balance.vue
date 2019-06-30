<template>
<div id="balance">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >我的余额 </p>
        
    </div>
    <div id="mid">
   <div id="state">
       <div id="p"></div>
   <p id="p1">当前余额 </p>
   <img id="wenhao" src="../../../static/imgs/wenhao.png" alt="">
      <router-link to="/balanceexplain">  <a href=""><span id="p2">余额说明</span> </a></router-link>
   <p id="p3"> <strong> 0.00</strong></p> 
   <p id="p4">元</p>
   <button id="btn">提现</button>
    </div>
   </div>
   <div id="wrap">
   <p >交易明细</p>
   <img src="../../../static/imgs/jilu.png" alt="">
    </div>
</div>





    
</template>
<script>
export default {
    name:"balance",
    data() {
        return {
  
        }
    },
    created () {
      
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
    
  
    }
}
</script>
<style scoped>
#balacne{
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
   padding-left: 0.08rem;
    /* padding-top: 0.01rem; */
    font-size: 0.4rem;
}
#p4{
    position: absolute;
  left: 1rem;
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
   background-color: #ccc;;
 font-size: 0.2rem;
   color: white;
   border: #ccc;
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
    left: 1.2rem;
}
</style>
