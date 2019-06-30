<template>
  <div id="alipay">
    <div id="top" @click="back()">
      <img src="../../../static/imgs/back.png" alt>
      <p>
        <strong>在线支付</strong>
      </p>
    </div>
    <!-- 支付倒计时 -->
    <div id="pay">
      <p>支付剩余时间</p>
      <!-- 倒计时 -->
      <p>00 : {{minute}} : {{second}}</p>
    </div>
    <p id="tex1">选择支付方式</p>
    <div class="icon">
      <img src="../../../static/imgs/zhifubao.png" alt>
      <span>支付宝</span>
      <img @click="change1()" :src="srcA" alt="">
      <img  alt="">
    </div>
    <div class="icon">
      <img src="../../../static/imgs/weixin.png" alt>
      <span>微信</span>
      <img @click="change2()" :src="srcB" alt>
    </div>
    <button @click="show2()"  id="btn">
      <strong >确认支付</strong>
    </button>

    <!-- 弹框1 -->
      <div v-if="show"  id="popup">
      <img src="../../../static/imgs/cuowu.png" alt="">
      <p>暂不开放支付功能</p>
      <button  @click="show1()" id="popupBtn"><strong>确认</strong></button>  
    </div>

    <!-- 弹框2 -->
     <div v-if="shows"  id="popup1">
      <img src="../../../static/imgs/cuowu.png" alt="">
      <p>当前环境无法完成支付,请打开官方APP进行付款</p>
     <button  @click="show3()" id="popupBtn1"><strong>确认</strong></button>  
    </div>
  </div>
</template>
<script>
export default {
  name: "alipay",
  data() {
    return {
      minutes: 15,
      seconds: 0,
      srcA:"../../../static/imgs/icon-test.png",
      srcB:"../../../static/imgs/icon-test2.png",
      show:true,
shows:false
    };
  },
  mounted() {
    this.add();
  },

  methods: {
     show1(){
       this.show=false;
     },
     show2(){
       this.shows=true;
     },
      show3(){
       this.shows=false;
     },
    // 倒计时
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
    back() {
      this.$router.back();
    },
    change1(){
        if(this.srcA="../../../static/imgs/icon-test2.png"){
            this.srcB="../../../static/imgs/icon-test2.png" 
            this.srcA="../../../static/imgs/icon-test.png" 
        }
    },
    change2(){
        if(this.srcB="../../../static/imgs/icon-test2.png"){
            this.srcA="../../../static/imgs/icon-test2.png" 
            this.srcB="../../../static/imgs/icon-test.png" 
        }
    }
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },
  computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  }
};
</script>
<style scoped>
#alipay {
  height: 100vh;
  background-color: #f1f1f1;
}
#top {
  width: 100vw;
  height: 0.45rem;
  background-color: #3190e8;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
#top img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#top p {
  font-size: 0.19rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#pay {
  height: 1.35rem;
  background-color: white;
  margin-top: 0.58rem;
  font-size: 0.25rem;
  position: relative;
}
#pay p:nth-child(1) {
  font-size: 0.145rem;
  position: absolute;
  left: 1.8rem;
  top: 0.4rem;
  color: #666;
  transform: translate(-50%, -50%);
}
#pay p:nth-child(2) {
  font-size: 0.38rem;
  position: absolute;
  left: 1.75rem;
  top: 0.9rem;
  transform: translate(-50%, -50%);
}
#tex1 {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.16rem;
  padding-left: 0.18rem;
  background-color: #f1f1f1;
  color: #666;
}
.icon {
  height: 0.85rem;
  background-color: white;
  position: relative;
  border: 0.5px solid gainsboro;
}
.icon img:nth-child(1) {
  width: 0.5rem;
  position: absolute;
  left: 0.15rem;
  top: 0.2rem;
}
.icon span:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.7rem;
  top: 0.28rem;
  color: #666;
}
.icon img:nth-child(3) {
  width: 0.35rem;
  position: absolute;
  right: 0.2rem;
  top: 0.28rem;
}
#confirm {
  margin-top: 0.15rem;
  width: 3.75rem;
  line-height: 0.6rem;
  height: 0.6rem;
  background-color: green;
  color: white;
  font-size: 0.2rem;
  text-align: center;
  color: #666;
}
#btn {
  margin-top: 0.1rem;
  margin-left: 0.15rem;
  width: 3.4rem;
  height: 0.4rem;
  border-radius: 0.06rem;
  background-color: #4cd964;
  border: 1px solid #4cd964;
  font-size: 0.16rem;
  color: white;
}
#popup{
  position: absolute;
  background-color:white;
  height: 1.2rem;
  width: 3rem;
  margin-left: 0.35rem;
  top: 1.7rem;
  animation: heartBeat 0.8s;
}
#popup img{
  /* position: absolute; */
  background-color: white;
  
  margin-left: 1rem;
  margin-top: 0.15rem;
}
#popup p{
  /* position: absolute; */
  background-color: white;
  font-size: 0.2rem;
   padding-left: 0.4rem;
  
}
#popupBtn{
    /* position: absolute; */
    width: 3rem;
    height: 0.4rem;
    line-height: 0.4rem;
    top: 1.6rem;
    left: 0rem;
        background-color: #4cd964;
        font-size: 0.17rem;
        color: white;
        text-align: center;
   
}
#popup1{
  position: absolute;
  background-color:white;
  height: 1.2rem;
  width: 3rem;
  margin-left: 0.35rem;
  top: 1.7rem;
  animation: heartBeat 0.8s;
}
#popup1 img{
  /* position: absolute; */
  background-color: white;
  
  margin-left: 1rem;
  margin-top: 0.15rem;
}
#popup1 p{
  /* position: absolute; */
  background-color: white;
  font-size: 0.2rem;
   padding-left: 0.4rem;
  
}
#popupBtn1{
    /* position: absolute; */
    width: 3rem;
    height: 0.4rem;
    line-height: 0.4rem;
    top: 1.6rem;
    left: 0rem;
        background-color: #4cd964;
        font-size: 0.17rem;
        color: white;
        text-align: center;
   
}
</style>
