<template>
  <div id="login">
    <div id="header">
      <p id="header_p">
        <strong>登录</strong>
      </p>
      <a @click="back()">
        <img src="../../assets/back.png" alt>
      </a>
    </div>
    <div id="middle">
      <div class="middle">
        <input type="text" class="inp" placeholder="账号" v-model="username">
      </div>
      <div class="middle">
        <input type="text" class="inp" v-if="show==true" placeholder="密码" v-model="password">
        <input type="password" class="inp" v-else placeholder="密码" v-model="password">
        <div id="switch">
          <el-switch v-model="show" active-color="green" inactive-color="lightgray"></el-switch>
        </div>
      </div>
      <div class="middle">
   
        <input type="text" class="inp" placeholder="验证码" v-model="captcha_code">
        <img :src="code" alt>

        <div id="changeCode">
          <p>看不清</p>
          <a @click="check_code()">换一张</a>
        </div>
      </div>
    </div>
    <div>
      <p class="tip">温馨提示：未注册过的账号，登录时将自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </div>
    <div id="footer">
 
        <button id="login" @click="login()">登录</button>
    
    </div>
    <div id="footer_span">
      <router-link to="/resetPw">
        <span>重置密码?</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      show: true,
      code: "",
      username: "",
      password: "",
      captcha_code: ""
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
        //不占用缓存
        withCredentials: true,
        data: {}
      }).then(res => {
        this.code = res.data.code;
        console.log(res.data);
      });
    },
    
    login() {
    
        //存储器state存储值
        this.$store.commit("getName", this.username);
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
          this.$store.commit("getid", res.data.user_id);
          console.log(res.data);
            if (this.username == "") {
        alert("请输入账号");
      } else if (this.password == "") {
        alert("请输入密码");
      } else if (this.captcha_code == "") {
        alert("请输入验证码");
      } else 
        if (res.data.message) {
          // alert(res.data.message);
         
        }
        else{
        localStorage.username=res.data.username
        this.$router.push({
          name:"city"
        })
        }
        });
      
    }
  }
};
</script>
<style scoped>
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
  border: #3190e8;
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
  top: 29%;
}
#changeCode > p {
  color: rgb(185, 181, 181);
  position: absolute;
  left: 85%;
  top: 26%;
}
.middle > img {
  position: absolute;
  left: 62%;
  top: 28%;
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
  width: 100%;
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
#switch {
  position: absolute;
  left: 87%;
  top: 20%;
}
</style>
