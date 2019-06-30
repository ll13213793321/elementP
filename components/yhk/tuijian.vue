// 推荐有奖
<template>
  <div id="tuijian">
    <!-- 头部 -->
      
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >推荐有奖 </p>
        
    </div>
    <!-- 中间邀请图片 -->
    <div id="bigImg">
        <img src="../../../static/imgs/yaoqing.jpg" alt="">
    </div>
    <!-- 底部 -->
    <div id="right_bot">
        <div id="bot_top">
            <span><img @click="openTool()" src="../../../static/imgs/weixin2.png" alt=""><p>邀请微信好友</p></span>
            <span><img @click="openTool()" src="../../../static/imgs/qq.png" alt=""><p>邀请qq好友</p></span>
            <span><img @click="openTool()" src="../../../static/imgs/erweima.png" alt=""><p>面对面邀请</p></span>
        </div>
        <div id="bot_bot">
            <div id="bot_bot_top">
                <span>累计收益<p><span>{{menoey}}</span>元</p></span>
                <span>成功邀请<p><span>{{people}}</span>人</p></span>
            </div>
            <div id="bot_bot_bot">
                <p>-收益明细-</p>
                <div>
                    <img src="../../../static/imgs/qianbao.png" alt="">
                    <p>还不赶紧去邀请好友</p>
                </div>
            </div>
        </div>
    </div>
    <!-- 弹框 -->
      <div id="popup" v-if="showtool">
        <img src="../../../static/imgs/cuowu.png" alt>
        <p>请在饿了么APP中打开</p>
        <button id="popupBtn" @click="closeTool()">确认</button>
      </div>
  </div>
</template>
<script>
export default {
  name: "tuijian",
  data() {
      return {
          menoey:"1",
          people:"1",
          showtool:false
      }
  },
  methods: {
      back(){
            this.$router.go(-1);
        },
      closeTool(){
          this.showtool=false;
      },
      openTool(){
          this.showtool=true;
      }
  },
};
</script>

<style scoped>
#tuijian{
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
    /* 中间大图 */
    #bigImg img{
        width: 100%;
    }
    /* 底部 */
    #right_bot {
        margin-top: 0.1rem;
    }
    #bot_top{
         background-color: #fff;
    }
    #bot_top,#bot_bot_top{
        display: flex;
        justify-content: space-around;
       
    }
    #bot_top>span{
        text-align: center;
    }
    #bot_top img{
        width: 0.6rem;
        margin: 0.1rem 0 0.05rem 0;
    }
     #bot_top p{
         font-size: 0.14rem;
         margin-bottom: 0.2rem;
     }
     /* 底部邀请好友部分 */
    #bot_bot{
        margin-top: 0.2rem;
    }
    #bot_bot_top>span{
        width: 50%;
        text-align: center;
        font-size: 0.13rem;
    }
    #bot_bot_top>span:nth-of-type(1){
        border-right: 0.01rem solid gray;
    }
    #bot_bot_top>span p>span{
        font-weight: bold;
        font-size: 0.15rem;
    } 
    #bot_bot_top>span:nth-of-type(1) p>span:nth-of-type(1){
        color: red;
    }

    /* 底部邀请好友收益 */
    #bot_bot_bot{
        text-align: center;
    }
    #bot_bot_bot>p:nth-child(1){
        font-size: 0.14rem;
        margin: 0.1rem 0 0.1rem 0;
    }
    #bot_bot_bot>div>img{
        margin: 0.2rem 0 0.1rem 0;
        width: 0.4rem;
    }
    #bot_bot_bot>div p{
        font-size: 0.14rem;
        color: gray;
    }
    #popup{
  position: absolute;
  background-color:white;
  height: 1.2rem;
  width: 3rem;
  margin-left: 0.35rem;
  top: 1.8rem;
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
</style>
