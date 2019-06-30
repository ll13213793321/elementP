<template>
<div id="download">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >下载 </p>
        
    </div>
      <img id="img" src="../../../static/imgs/eliaomo.png" alt="" width="45%">
      <p id="downp">下载饿了么APP</p>
      <button @click="show1()" id="btn">下载</button>

      <!-- 弹框 -->
      <div v-if="show"  id="popup">
      <img src="../../../static/imgs/cuowu.png" alt="">
      <p>暂不开放支付功能</p>
      <button  @click="show2()" id="popupBtn"><strong>确认</strong></button>  
    </div>
  
</div>





    
</template>
<script>
export default {
    name:"download",
    data() {
        return {
       show:false
        }
    },
    created () {
      
    },
    methods: {
        show1(){
            this.show=true
        },
          show2(){
            this.show=false
        },
        back(){
            this.$router.go(-1);
        },
    
  
    }
}
</script>
<style scoped>
#download{
  background-color:white;
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
#img{
    position: absolute;
    top: 0.72rem;
    left: 1rem;
}
#downp{
    position: absolute;
    top: 2.5rem;
    left: 1.1rem;
    font-size: 0.2rem;
    color: #666;
}
#btn{
     position: absolute;
    top: 3rem;
    left: 0.15rem;
    height: 0.45rem;
    width: 3.4rem;
    background-color: #4cd964;
    font-size: 0.2rem;
    color: white;
    border-radius: 0.06rem;
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
