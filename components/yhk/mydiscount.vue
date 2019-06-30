<template>
<div id="mydiscount">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP">我的优惠</p>
    </div>
   <div id="title">
         <router-link  to="/mydiscount1" >  <p id="p1"><u>红包</u></p></router-link>
         
        <router-link to="mydiscount2"><p id="p2">商家代金券</p></router-link> 
     </div>
 <router-view></router-view>
   
</div>





    
</template>
<script>
export default {
    name:"mydiscount",
    
    data() {
        return {
       
        }
    },
    created () {
     
    },
    methods: {
       
        user(){
   const name = localStorage.name
        },
        back(){
            this.$router.push({
                name:"my"
            });
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
    /* color: #3190e8; */
   
}
#p2{
    width: 50vw;
    text-align: center;
    font-size: 0.15rem;
    /* height: 0.45rem; */
    line-height: 0.47rem;
    text-decoration:underline;
   

     
}
</style>
