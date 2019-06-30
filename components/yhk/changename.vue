<template>
<div id="changename">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP">修改用户名</p>
    </div>
      <input  @input="change()"  minlength="5"  v-model="username" id="inp" type="text" placeholder="输入用户名">
      <p  class="error"  v-if="show">用户名长度在5到24位之间</p>
      <p   id="p">用户名只能修改一次（5-24字符之间）</p>
      <!-- 判断 -->
      <button @click="back1()" :class="{btn1:(username.length>5 &&username.length<24) }" class="btn">确认修改</button>
   </div>






    
</template>
<script>
import {mapState} from "vuex" 

export default {
    name:"serviced",
    data() {
        return {
          username:"",
          bor:"",
          show:false
        }
    },
    created () {
      
    },
    methods: {
        change(){
        if (this.username.length<5||this.username.length>24) {
            this.bor="1px solid red";
            this.show=true
        } else {
             this.bor = 0;
        this.show = false;
        }
        },
        back(){
           
            this.$router.go(-1);
        },
        back1(){
            if (this.username.length>4&&this.username.length<25) {
                 this.$store.state.username=this.username;
            this.$router.go(-1);
            }


           
        }
       
    }
}
</script>
<style scoped>
#changename{
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
#inp{
    margin: 0.1rem;
    width: 3.5rem;
    height: 0.38rem;
    font-size: 0.15rem;
   border: 1px solid #ddd;
   background-color: #f5f5f5;
}
#p{  
    padding-left: 0.1rem;
    color:#666;
}
.btn{
    margin-left: 0.08rem;  
    margin-top: 0.2rem;   
       background-color: #3190e8;
    width: 3.53rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.15rem;
    color: rgb(211, 211, 211);
}
.btn1{
    margin-left: 0.08rem;  
    margin-top: 0.2rem;   
       background-color: #3190e8;
    width: 3.53rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.15rem;
    color: white;
}
.error {
  color: red;
  font-size: 0.12rem;
  margin-left: 0.1rem;
}
</style>
