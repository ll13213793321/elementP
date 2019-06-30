<template>
<div id="mydiscount2">
  
    
     <!-- <div id="title">
         <p id="p1"><u>红包</u></p>
         
         <p id="p2">商家代金券</p>
     </div> -->
    <div id="wz">
     <router-link to="/vouchersexplain">   <p id="wzp2"> <img src="../../../static/imgs/wenhao2.png" alt=""> 
          商家代金券说明
           </p>  </router-link>
    </div>
    <div id="center">
           <img id="img1" src="../../../static/imgs/jilu4.png" alt="">
           <p id="centerp1">无法使用代金券</p>
           <p id="centerp2">非客户端或客户端版本过低</p>
          <router-link to="/download">  <button id="centerp3">下载或升级客服端</button></router-link> 
    </div>
</div>





    
</template>
<script>
export default {
    name:"mydiscount2",
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
#mydiscount{
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
#title{
    background-color: white;
    height: 0.47rem;
   display: flex;
}
#p1{
    width: 50vw;
    text-align: center;
    font-size: 0.15rem;
    /* height: 0.45rem; */
    line-height: 0.47rem;
    text-decoration:underline;
   
}
#p2{
    width: 50vw;
    text-align: center;
    font-size: 0.15rem;
    /* height: 0.45rem; */
    line-height: 0.47rem;
    text-decoration:underline;
     color: #3190e8;
}
#wz{
    height: 0.5rem;
    line-height: 0.5rem;
    position: relative;
    font-size: 0.12rem;
  
  
}
#wzp1{
   position: absolute;
   left: 0.15rem;
  
  
}
#wzp2{
   position: absolute;
   left: 2.55rem;
    color: #3190e8;
}
#img1{
    position: absolute;
    left: 1.45rem;
    top: 2.36rem;
}
#centerp1{
    font-size: 0.17rem;
     position: absolute;
      left: 1.24rem;
    top: 3.3rem;
        color: #666;
}
#centerp2{
    font-size: 0.12rem;
     position: absolute;
      left: 1.11rem;
    top: 3.6rem;
        color: #999;
}
#centerp3{
    font-size: 0.15rem;
     position: absolute;
      left: 1.12rem;
    top: 3.85rem;
        color: white;
            background-color: #56d176;
          border-radius: 0.05rem;
          border: 0.02rem solid  #56d176;
            height: 0.35rem;
            width: 1.4rem;
}
</style>
