<template>
<div id="shopmall">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >积分商城 </p>
        
    </div>
   <img id="img" src="../../../static/imgs/shopmall.png" alt="">
  
</div>





    
</template>
<script>
export default {
    name:"shopmall",
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
#shopmall{
  background-color: #f0f0f0;
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
#img{
    position: absolute;
    top: 1.85rem;
    left: 0.63rem;
}


</style>
