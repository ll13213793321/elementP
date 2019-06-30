<template>
<div id="hotproblem">
  
    <div id="head">
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >{{title}}</p>
    </div>
    <div>
        <li>{{text}}</li>
    <img v-for="(v, i) in img1" :key="i" :src="v" alt="" width="100%">
    </div>
     <li>{{content}}</li>
   

   
    
</div>





    
</template>
<script>
export default {
    name:"hotproblem",
    data() {
        return {
     msg:"",
     title:[],
     content:"",
     img1:"",
     text:""
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
      this.img1=this.$route.query.data
      this.text=this.$route.query.datas
 
    }
    }
}
</script>
<style scoped>
#hotproblem{
  background-color: #f5f5f5;
  /* height: 100vh; */
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
li{
    font-size: 0.18rem;
}
</style>
