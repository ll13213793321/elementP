<template>
  <div id="app">
    <div id="header">
      <p id="header_p">重置密码</p>
      <a @click="back()">
        <img src="../../../static/imgs/back.png" alt>
      </a>
    </div>
    <div id="middle">
      <div class="middle">
        <input type="text" class="inp" placeholder="账号" v-model="username">
      </div>
      <div class="middle">
        <input type="text" class="inp" placeholder="旧密码" v-model="password">
      </div>
      <div class="middle">
        <input type="password" class="inp" placeholder="请输入新密码" v-model="password">
      </div>
      <div class="middle">
        <input type="password" class="inp" placeholder="请输确认密码" v-model="password">
      </div>

      <div class="middle">
        <input type="text" class="inp" placeholder="验证码" v-model="checkCode">
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
export default {
  name: "setAgain",
  data() {
    return {
      show: true,
      code: "",
      username: "",
      password: "",
      checkCode: ""
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
          captcha_code: this.checkCode
        }
      }).then(res => {
        if (this.username == "") {
          alert("请输入手机号/邮箱/用户名");
        } else if (this.password == "") {
          alert("请输入密码");
        } else if (this.checkCode == "") {
          alert("请输入验证码");
        } else {
          this.$router.push({
            name: "cityFind",
            query: res.data
          });
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
  width: 0.2rem;
  position: absolute;
  left: 0.15rem;
  top: 0.15rem;
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
  border-top: none;
  border: 0.01rem solid lightgray;
}
.inp {
  width: 60%;
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
}
.middle > img {
  height: 0.3rem;
}
#footer {
  width: 90%;
  height: 0.5rem;
  margin: 0.2rem auto;
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
</style>
