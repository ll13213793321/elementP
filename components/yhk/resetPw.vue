<template>
  <div id="login">
    <div id="header">
      <p id="header_p"><strong>重置密码</strong></p>  
      <a @click="back()">
        <img src="../../assets/back.png" alt="" >
      </a>
    </div>
    <div id="middle">
      <div class="middle">
        <input type="text" class="inp" placeholder="账号" v-model="username">
      

      </div>
        <input type="text" class="inp" placeholder="旧密码" v-model="oldPw">
         
      <div class="middle">
        <input   type="text" class="inp"  placeholder="请输入新密码" v-model="newPw">
 
       
      </div>
         <input type="text" class="inp"  placeholder="请确认密码"  v-model="password" >
       
      <div class="middle">
        <input  type="text" class="inp" placeholder="验证码" v-model="captcha_code">
        <img :src="code" alt>
        <div id="changeCode">
          <p>看不清</p>
          <a @click="check_code()">换一张</a>
        </div>
      </div>
    </div>
    
    <div id="footer">
      <button id="login" @click="login()">确认修改</button>
    </div>
    
  </div>
</template>
<script>
import {mapState} from "vuex"   
export default {
  name: "login",
  data() {
    return {
      show: true,
      code: "",
      username: "",
      password: "",
      captcha_code: "",
      oldPw:"",
      newPw:""
    };
  },
  created() {
    this.check_code();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    check_code() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        
        data: {}
      }).then(res => {
        this.code = res.data.code;
        console.log(res.data);
      });
    },
    login() {
       
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.captcha_code
        }
      }).then(res => {
       if (this.username == "") {
          alert("确认输入信息无误");

        } else if (this.password== "") {
          alert("请确认修改的密码");
     
        } else if (this.captcha_code.length == 0) {
          alert("请确认验证码");
       
        } 
        else if (this.newPw == 0) {
          alert("请输入新密码");
     
        } 
        else if (this.oldPw == 0) {
          alert("请确输入旧密码");
          
        } else 
        if (res.data.message) {
          alert(res.data.message);
       
         
        }
        else{
        this.$router.push({
          name:"my"
        })
        }
      });
    }
  }
};
</script>
<style scoped>
#login{
  background-color: #f5f5f5;
}
#header {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  position: relative;
}
#header img {
  width: 0.5rem;
  position: absolute;
  left: 0;
  top: 0;
}
#header_p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  float: right;
  text-align: center;
}
#middle {
  margin-top: 0.2rem;
  background-color: white;
}
.middle {
  width: 100%;
  height: 0.5rem;
  border: 0.01rem solid lightgray;
  border-top: none;
}
.inp {
  border: 0.01rem solid #f5f5f5;
  width: 100%;
  height: 0.5rem;
  
  text-indent: 1em;
  font-size: 0.15rem;
}
#changeCode {
  width: 0.5rem;
  height: 0.5rem;
  float: right;
  font-size: 0.15rem;
  margin-right: 0.1rem;
  line-height: 0.25rem;
}
#changeCode > a {
  color: #3b95e9;
   position: absolute;
  left: 85%;
 top: 45%;
}
#changeCode > p {
  color: rgb(185, 181, 181);
   position: absolute;
  left: 85%;
 top: 41%;
}
.middle > img {
  position: absolute;
  left: 62%;
 top: 43%;
  height: 0.3rem;
}
.tip {
  width: 90%;
  height: 0.2rem;
  margin: 0.1rem auto;
  line-height: 0.2rem;
  font-size: 0.13rem;
  color: red;
}
#footer {
  width: 90%;
  height: 0.5rem;
  margin: 0 auto;
  border-radius: 0.1rem;
  overflow: hidden;
}
#login {
  width: 100vw;
  height: 0.5rem;
  background-color: #4cd964;
  outline: none;
  border: none;
  font-size: 0.2rem;
  color: white;
}
#footer_span {
  width: 90%;
  height: 0.5rem;
  margin: 0 auto;
  line-height: 0.5rem;
  font-size: 0.15rem;
}
#footer_span span {
  float: right; 
  color: #3b95e9;
}



</style>
