<template>
  <div id="my">
    <!-- <router-view></router-view> -->
    <div id="head">
      <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
      <img @click="back" id="_head" src="../../../static/imgs/back.png" alt>
      <p id="_head_">我的</p>
    </div>
    <div id="user" @click="change()">
      <!-- <img id="photo" src="../../../static/imgs/touxiang-kong.png" alt=""> -->
      <img id="photo"     :src=" imageUrl" alt>
      <p class="name"  v-if="username">{{username1}}</p>
      <p class="name" v-else>{{msg}}</p>
      <!-- <img id="phone" src="../../../static/imgs/shouji.png" alt=""> -->
      <img id="phone" src="../../../static/imgs/shouji.png" alt>
      <span id="number">暂无绑定手机号</span>
      <!-- <img id="arrow" src="../../../static/imgs/youjiantou.png" alt=""> -->
      <img id="arrow" src="../../../static/imgs/youjiantou.png" alt>
    </div>
    <div id="middle1">
      <router-link to="/balance">
        <div id="left">
          <p class="money">0.00</p>
          <p class="yuan">元</p>
          <p class="my">我的余额</p>
        </div>
      </router-link>
      <router-link to="/mydiscount">
        <div id="center">
          <p class="zero">{{num||0}}</p>
          <p class="Chinese">个</p>
          <p class="my">我的优惠</p>
        </div>
      </router-link>

      <router-link to="/credit">
        <div id="right">
          <p class="zero1">0</p>
          <p class="Chinese">个</p>
          <p class="my">我的积分</p>
        </div>
      </router-link>
    </div>
    <div id="middle2">
      <div id="top">
        <!-- <img class="picture1" src="../../../static/imgs/dingdan.png" alt=""> -->
        <img class="picture1" src="../../../static/imgs/dingdan.png" alt>
        <p class="hanzi">我的订单</p>
        <!-- <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt=""> -->
        <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt>
      </div>

      <router-link to="/shopmall">
        <div id="zhong">
          <!-- <img class="picture1" src="../../../static/imgs/商家.png" alt=""> -->
          <img class="picture1" src="../../../static/imgs/商家.png" alt>
          <p class="hanzi">积分商城</p>
          <!-- <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt=""> -->
          <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt>
        </div>
      </router-link>

      <router-link to="/vipcenter">
        <div id="below">
          <!-- <img class="picture1" src="../../../static/imgs/huangguan.png" alt=""> -->
          <img class="picture1" src="../../../static/imgs/huangguan.png" alt>
          <p class="hanzi">饿了么会员卡</p>
          <!-- <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt=""> -->
          <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt>
        </div>
      </router-link>
    </div>
    <div id="middle3">
      <router-link to="/serviced">
        <div id="top1">
          <!-- <img class="picture1" src="../../../static/imgs/diqiu.png" alt=""> -->
          <img class="picture1" src="../../../static/imgs/diqiu.png" alt>
          <p class="hanzi">服务中心</p>
          <!-- <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt=""> -->
          <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt>
        </div>
      </router-link>

      <router-link to="/download">
        <div id="below1">
          <!-- <img class="picture1" src="../../../static/imgs/eliaomo.png" alt=""> -->
          <img class="picture1" src="../../../static/imgs/eliaomo.png" alt>
          <p class="hanzi">下载饿了么APP</p>
          <!-- <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt=""> -->
          <img class="picture2" src="../../../static/imgs/iconfontjiantou2.png" alt>
        </div>
      </router-link>
    </div>

    <div id="base">
      <!-- <router-link to=""><div><img src="../../../static/imgs/SSS.png alt=""><p>外卖</p></div></router-link> -->
      <!-- <router-link to=""><div><img src="../../../static/imgs/zhinanzhen.png" alt=""><p>搜索</p></div></router-link> -->
      <!-- <router-link to=""><div><img src="../../../static/imgs/orderF.png" alt=""><p>订单</p></div></router-link> -->
      <!-- <router-link to=""><div><img src="../../../static/imgs/meT.png" alt=""><p>我的</p></div></router-link> -->
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex"
import Account from "./account";
export default {
    name:"my",
    data() {
        return {
          num:0,
            msg:"登录/注册",
         imageUrl:"",
         img:"",
         username1:""

        }
    },
    created () {
        // this.$store.commit("getName", this.username);
        //  调用store存储的红包数量,并赋值
      this.num=this.$store.state.num;
this.username1=this.$store.state.username;
        // this.name = this.$route.query.name;
        //  刷新  调用本地存储的用户名,并赋值
      //  this.$store.state.username=localStorage.username;
      this.imageUrl=this.$store.state.imageUrl


    },
    computed: { 
      getN(){
        return this.$store.state.username;
      },
      ...mapState(["username"])
    },
    methods: {
       
        change(){
            if(this.$store.state.username){
                this.$router.push({
                    name:"account"
                })
            }else{
                this.$router.push({
                    name:"login"
                })
            }
        },
        back(){
            this.$router.push({
                name:"city"
            })
        },
     
       
    }
}
</script>
<style scoped>
#my {
  background-color: #f5f5f5;
  height: 100vh;
}
#base {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 0.4rem;
  display: flex;
  justify-content: space-around;
}
#base img {
  height: 0.2rem;
  margin-top: 0.05rem;
}
#base p {
  font-size: 0.1rem;
  color: black;
}
#head {
  width: 100vw;
  height: 0.45rem;
  background-color: #3190e8;
}
#_head {
  margin-top: 0.1rem;
  width: 0.15rem;
  float: left;
  margin-left: 0.1rem;
}
#_head_ {
  margin-right: 0.1rem;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
}
#user {
  width: 100vw;
  height: 0.9rem;
  background-color: #3190e8;
  position: relative;
}
#photo {
  width: 0.7rem;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
.name {
  position: absolute;
  top: 0.2rem;
  left: 0.95rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.2rem;
}
#phone {
  width: 0.25rem;
  position: absolute;
  top: 0.5rem;
  left: 0.95rem;
}
#number {
  color: #fff;
  position: absolute;
  top: 0.55rem;
  left: 1.2rem;
}
#arrow {
  width: 0.2rem;
  position: absolute;
  top: 0.35rem;
  right: 0.1rem;
}
#middle1 {
  width: 100vw;
  height: 0.85rem;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  overflow: hidden;
}
#left {
  width: 1.24rem;
  height: 0.85rem;
  float: left;
  border-right: 0.015rem solid #f5f5f5;
  position: relative;
}
#center {
  width: 1.24rem;
  height: 0.85rem;
  float: left;
  border-right: 0.015rem solid #f5f5f5;
  position: relative;
}
#right {
  width: 1.24rem;
  height: 0.85rem;
  float: left;
  position: relative;
}
.money {
  color: #f90;
  font-size: 0.25rem;
  font-weight: bold;
  position: absolute;
  top: 0.2rem;
  left: 0.25rem;
}
.yuan {
  font-size: 0.15rem;
  position: absolute;
  top: 0.25rem;
  left: 0.8rem;
  color: black;
}
.my {
  font-size: 0.15rem;
  margin-top: 0.55rem;
  text-align: center;
  color: black;
}
.zero {
  color: #ff5f3e;
  font-size: 0.25rem;
  font-weight: bold;
  position: absolute;
  top: 0.2rem;
  left: 0.45rem;
}
.Chinese {
  font-size: 0.15rem;
  position: absolute;
  top: 0.25rem;
  left: 0.6rem;
  color: black;
}
.zero1 {
  color: #6ac20b;
  font-size: 0.25rem;
  font-weight: bold;
  position: absolute;
  top: 0.2rem;
  left: 0.45rem;
}
#middle2 {
  margin-top: 0.1rem;
  width: 100vw;
  height: 1.3rem;
  background-color: #fff;
}
#top {
  width: 100vw;
  height: 0.42rem;
  border-bottom: 0.01rem solid #f5f5f5;
  position: relative;
}
#zhong {
  width: 100vw;
  height: 0.42rem;
  border-bottom: 0.01rem solid #f5f5f5;
  position: relative;
}
#below {
  width: 100vw;
  height: 0.42rem;
  position: relative;
}
.picture1 {
  height: 0.15rem;
  position: absolute;
  top: 0.135rem;
  left: 0.1rem;
}
.hanzi {
  font-size: 0.15rem;
  position: absolute;
  top: 0.135rem;
  left: 0.3rem;
  color: black;
}
.picture2 {
  width: 0.15rem;
  position: absolute;
  top: 0.135rem;
  right: 0.15rem;
}
#middle3 {
  width: 100vw;
  height: 0.85rem;
  margin-top: 0.1rem;
  background-color: #fff;
}
#top1 {
  width: 100vw;
  height: 0.42rem;
  border-bottom: 0.01rem solid #f5f5f5;
  position: relative;
}
#below1 {
  width: 100vw;
  height: 0.42rem;
  position: relative;
}
</style>
