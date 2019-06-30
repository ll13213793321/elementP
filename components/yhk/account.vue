<template>
  <div id="account">
    <!-- <router-view></router-view> -->
    <div id="header">
      <p id="header_p">
        <strong>账户信息</strong>
      </p>
      <a @click="back()">
        <img src="../../../static/imgs/back.png" alt>
      </a>
    </div>
    <!-- 中间部分 -->
    <div id="mid">
      <div id="touxiang">
        <p id="font">头像</p>
        <el-upload
        
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" id="img1" :src="imageUrl" class="avatar"  width="10%">
          <img v-else      id="img2"  :src="img1" alt=""  width="15%">
          <i  class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <!-- <img  src="../../../static/imgs/touxiang-kong.png" alt width="16%"> -->
        <img id="jiantou1" src="../../../static/imgs/iconfontjiantou2.png" alt width="5%">
      </div>
      <router-link to="/changename">
        <div id="username">
          <p class="font1">用户名</p>
          <p id="id">{{$store.state.username}}</p>
          <img class="jiantou" src="../../../static/imgs/iconfontjiantou2.png" alt width="5%">
        </div>
      </router-link>
      <router-link to="/editsite">
        <div id="adress">
          <p class="font1">收货地址</p>
          <img class="jiantou" src="../../../static/imgs/iconfontjiantou2.png" alt width="5%">
        </div>
      </router-link>

      <p id="zh">账号绑定</p>
      <div @click="show3()" id="phone">
        <img id="imgphone" src="../../../static/imgs/phone.png" alt width="6%">
        <p class="font2">手机</p>
        <img class="jiantou" src="../../../static/imgs/iconfontjiantou2.png" alt width="5%">
      </div>
      <p id="zh">安全设置</p>
      <router-link to="/resetPw">
        <div id="pw">
          <p class="font1">登录密码</p>
          <p class="font3">修改</p>
          <img id="jiantou3" src="../../../static/imgs/iconfontjiantou2.png" alt width="5%">
        </div>
      </router-link>
      <button  @click="show1()"  id="exit" >退出登录</button>
    </div>
     <!-- 弹框1 -->
    <div v-if="show"  id="popup">
      <img src="../../../static/imgs/cuowu.png" alt="">
      <p>是否退出登录</p>
      <div id="btn">
      <button @click="show2()" id="popupBtn1">再等等</button>
      <button @click="change()" id="popupBtn2"> 退出登录</button>
</div>
    </div>
    <!-- 弹框2 -->
    <div v-if="shows"  id="popup1">
      <img src="../../../static/imgs/cuowu.png" alt="">
      <p>请在手机APP中设置</p>
      <button  @click="show4()" id="popupBtn3"><strong>确认</strong></button>  
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "account",
  data() {
    return {
      imageUrl: "",
      show:false,
      shows:false,
     img1:""
    };
  },
  created() {
    //调用存储器里的图片并赋值
    this.img1=this.$store.state.imageUrl
  },
  computed: {
    getN() {
      return this.$store.state.username;
    }
    // ...mapState(["username"])
  },
  methods: {

    show1(){
     this.show=true;
    },
    show2(){
     this.show=false;
    },
    show3(){
     this.shows=true;
    },
    show4(){
     this.shows=false;
    },
    back() {
      this.$router.push({
        name:"my"
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
     this.$store.commit("getimg",this.imageUrl)
    },
    change() {
      this.$store.state.username = "";
      this.$store.state.userid = "";

      localStorage.username = "";
      this.$router.push({
        name: "my"
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style scoped>
#account {
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
}
#header {
  width: 100%;
  height: 0.45rem;
  background-color: #3190e8;
  position: relative;
}
#header img {
  width: 0.3rem;
  position: absolute;
  left: 0;
  top: 0.03rem; 
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
#touxiang {
  background-color: white;
  margin-top: 0.12rem;
  height: 0.7rem;
  position: relative;
}
#font {
  font-size: 0.15rem;
  position: absolute;
  top: 0.24rem;
  left: 0.1rem;
}
#img1 {
  position: absolute;
  left: 2.8rem;
  top: 0.05rem;
}
#img2 {
  position: absolute;
  left: 2.8rem;
  top: 0.05rem;
}
.jiantou {
  position: absolute;
  left: 3.5rem;
  top: 0.2rem;
}
#username {
  height: 0.45rem;
  background-color: white;
  margin-top: 0.03rem;
  position: relative;
  
}
.font1 {
  font-size: 0.15rem;
  position: absolute;
  top: 0.12rem;
  left: 0.1rem;
  color: black;
}
#id {
  font-size: 0.15rem;
  position: absolute;
  top: 0.12rem;
  left: 2.7rem;
  color: #a3a4a5;
  text-align: right;
  /* border: 1px solid red; */
}
#adress {
  height: 0.45rem;
  background-color: white;
  margin-top: 0.03rem;
  position: relative;
}

#zh {
  height: 0.38rem;
  font-size: 0.13rem;
  line-height: 0.4rem;
  padding-left: 0.1rem;
}
#phone {
  position: relative;
  height: 0.45rem;
  background-color: white;
  margin-top: 0.03rem;
  position: relative;
}
#imgphone {
  position: absolute;
  top: 0.13rem;
  left: 0.08rem;
}
.font2 {
  font-size: 0.15rem;
  position: absolute;
  top: 0.1rem;
  left: 0.35rem;
}
#pw {
  height: 0.45rem;
  background-color: white;
  margin-top: 0.03rem;
  position: relative;
}
.font3 {
  font-size: 0.17rem;
  color: #acaeaf;
  position: absolute;
  top: 0.1rem;
  left: 3.1rem;
}
#jiantou1 {
  position: absolute;
  left: 3.5rem;
  top: 0.28rem;
}
#jiantou3 {
  position: absolute;
  left: 3.5rem;
  top: 0.16rem;
}
#exit {
  height: 0.37rem;
  width: 3.6rem;
  margin-left: 0.07rem;
  margin-top: 0.3rem;
  background-color: #d8584a;
  border-radius: 0.07rem;
  color: white;
  font-size: 0.15rem;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  margin-left: 2.6rem;
  margin-top: 0.1rem;
  font-size: 0.2rem;
  color: red;
  width: 1rem;
  height: 0.5rem;
  /* border: 1px solid blue; */
  line-height: 0.4rem;
  text-align: center;
}
.avatar {


  border-radius: 50vw;
  width: 0.6rem;
  height: 0.55rem;
  display: block;
}
#popup{
  position: absolute;
  background-color:white;
  height: 2.75rem;
  width: 3.4rem;
  margin-left: 0.18rem;
  top: 1.35rem;
  animation: heartBeat 0.8s;
}
#popup img{
  /* position: absolute; */
  background-color: white;
  
  margin-left: 1.12rem;
  margin-top: 0.3rem;
}
#popup p{
  position: absolute;
  background-color: white;
  font-size: 0.3rem;
  
  left: 0.75rem;
  top: 1.4rem;
}

#popupBtn1{
  height: 0.4rem;
  width: 1rem;
  background-color: #c1c1c1;
  border: 1px solid #c1c1c1;
  border-radius: 0.03rem;
  font-size: 0.16rem;
  color: white;
  margin-left: 0.55rem;
  margin-top: 0.9rem;

}
#popupBtn2{
  height: 0.4rem;
   width: 1rem; 
   background: #dd6b55;
  border: 1px solid #dd6b55;
  border-radius: 0.03rem;
  font-size: 0.16rem;
  margin-left: 0.16rem;
  margin-top: 0.9rem;

  color: white;

}
#popup1{
  position: absolute;
  background-color:white;
  height: 1.2rem;
  width: 2.8rem;
  margin-left: 0.45rem;
  top: 1.7rem;
  animation: heartBeat 0.8s;
}
#popup1 img{
  /* position: absolute; */
  background-color: white;
  
  margin-left: 0.8rem;
  margin-top: 0.15rem;
}
#popup1 p{
  /* position: absolute; */
  background-color: white;
  font-size: 0.17rem;
   padding-left: 0.55rem;
  
}
#popupBtn3{
    /* position: absolute; */
    width: 2.8rem;
    height: 0.4rem;
    line-height: 0.4rem;
    top: 1.6rem;
    left: 0;
        background-color: #4cd964;
        font-size: 0.17rem;
        color: white;
        text-align: center;
   
}

</style>
