<template>
  <div id="app">
    <div id="header">
      <p id="header_p">{{title1}}</p>
      <a @click="back()">
        <img src="../../../static/imgs/back.png">
      </a>
    </div>
    <div class="center_div">
      <ul @click="showFL()">分类</ul>
      <ul @click="showPX()">排序</ul>
      <ul @click="showSX()">刷选</ul>
    </div>
    <div class="content">
      <ul>
        <li class="buttom_li" v-for="(v,i) in shoplist1" :key="i"><router-link to="/shopDetial">
          <div class="li_div" @click="setMessage(v)">
            <img :src="'https://elm.cangdu.org/img/'+v.image_path" class="buttom_img">
           <div id="content">
              <p class="p_top">
              <span class="p_top_span">品牌</span>
              <span>{{v.name}}</span>
              <ul>
               <li v-for="(value,key) in v.supports" :key="key">{{value.icon_name}}</li>
              </ul>
            </p>
            <p class="p_center">
              <span><el-rate class="star"
                  v-model="v.rating"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="">
              </el-rate></span>
              <span>{{v.rating}}</span>
              <span>月售{{v.recent_order_num}}单</span>
              <ul>
                <li>{{v.delivery_mode.text}}</li>
                <li>{{v.supports[1].name}}</li>
              </ul>
            </p>
            <p class="p_buttom">
              <span>￥{{v.float_minimum_order_amount}}起送/</span>
              <span>{{v.piecewise_agent_fee.tips}}</span>
              <ul>
                <li>{{v.distance}}/</li>
                <li>{{v.order_lead_time}}</li>
              </ul>
            </p>
           </div>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="Feilei" v-if="showF==true">
      <p class="Fleft">
      <ul :key="i" v-for="(v,i) in foodClass">
        <a :href="'#ul'+i"><li>
          <span>{{v.name}}</span>
          <span>{{v.count}}</span>
          <span>></span>
        </li></a>
      </ul>
      </p>
      <p class="Fright">
      <ul :key="i" v-for="(v,i) in foodClass" :id="'ul'+i">
        <li :key="key" v-for="(value,key) in v.sub_categories">
          <span>{{value.name}}</span>
          <span>{{value.count}}</span>
        </li>
      </ul>
      </p>
    </div>
    <div class="Paixu" v-if="showP==true">
      <ul>
        <li>智能排序</li>
      </ul>
    </div>
    <div class="Shaixuan" v-if="showS==true"></div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "foodClass",
   data() {
    return {
      title1:"",
      title2:"",
      shoplist1:[],
      latitude1:'latitude',
      longitude1:'longitude',
      foodClass:[],
      showF:false,
      showP:false,
      showS:false
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    getShop(){
        this.$http({
            url:'https://elm.cangdu.org/shopping/restaurants?latitude='+this.latitude1+'&longitude='+this.longitude1,
            method:"get"
        }).then(res=>{
          this.shoplist1 = res.data;
        })
    },
     shopClass(){
      this.$http({
        url:'https://elm.cangdu.org/shopping/v2/restaurant/category',
        method:"get"
      }).then(res=>{
        this.foodClass = res.data;
        console.log(res.data);
      })
    },
    showFL(){
      this.showF=true;
      this.showP=false;
      this.showS=false;
    },
    showPX(){
      this.showF=false;
      this.showP=true;
      this.showS=false;
    }
    ,showSX(){
      this.showF=false;
      this.showP=false;
      this.showS=true;
    } ,
    setMessage(v){
      this.$store.commit("getMessage",v);
    },
  },
  created() {
    this.title1 = this.$route.query.title;
    this.title2=this.$route.query.title;
    this.getShop();
    this.shopClass();
  },
 
};
</script>
<style scoped>
#app{
  width: 3.75rem;
  height: 100vh;
  position: relative;
}
#header {
  width: 3.75rem;
  height: 0.5rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
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
  text-align: center;
  font-weight: bold;
}
#Class {
  width: 3.75rem;
  height: 0.5rem;
  background-color: white;
  position: fixed;
  top: 0.5rem;
  left: 0;
  display: flex;
  z-index: 5;
}
.Class_ul{
    width: 1.35rem;
    height: 0.4rem;
    margin-top: 0.03rem;
    float: left;
}
.Class_ul:nth-child(2){
    border-left:  0.01rem solid lightgray;
    border-right:  0.01rem solid lightgray;
}
.el-input__inner{ 
    width: 100%;
    height: 0.4rem;
    border: none;
    text-align: center;
    font-size: 0.15rem;
    color: black;
}
.content{
    width: 3.75rem;
    margin-top: 1rem;
    padding-top:0.1rem; 
    background-color: white;
}
.buttom_li {
  width: 3.75rem;
  border-bottom: 0.01rem solid lightgray;
}
.li_div {
  width: 3.65rem;
  margin: 0.1rem auto;
  overflow: hidden;
}
.buttom_img {
  width: 0.7rem;
}
#content{
width: 2.9rem;
float: right;
}
.p_top,.p_center,.p_buttom{
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.p_top>span{
  color:black;
  font-size: 0.15rem;
  font-weight: bold;
}
.p_top_span{
  background-color: goldenrod;
}
.p_top>ul,.p_center>ul,.p_buttom>ul{
float: right;
display: flex;
}
.p_top>ul>li{
  width: 0.15rem;
  height: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
  font-size: 0.1rem;
  color: gray;
  border: 0.01rem solid lightgray;
  margin-right: 0.02rem;
}

.p_center>span{
  font-size: 0.1rem;
  display: inline-block;
  line-height: 0.15rem;
  color: gray;
  color: orangered;
}
.p_center>span:first-child{
  width: 0.65rem;
}
.p_center>span:nth-child(3){
  color: gray;
}
.p_center>ul>li{
  text-align: center;
  height: 0.15rem;
  line-height: 0.15rem;
  font-size: 0.1rem;
  color: white;
  border: 0.01rem solid lightgray;
  margin-right: 0.02rem;
  border-radius: 0.005rem;
}
.p_center>ul>li:first-child{
  background-color: #3190e8;
}
.p_center>ul>li:last-child{
  color: #3190e8;
}
.p_buttom>span,.p_buttom>ul>li{
  width: 0.5rem;
  font-size: 0.1rem;
  color: gray;
  overflow:hidden;
  word-break:keep-all;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.center_div{
  width: 3.75rem;
  height: 0.5rem;
  position: fixed;
  left: 0;
  top: 0.5rem;
  z-index: 2000;
  background-color: white;
  border-bottom: 0.01rem solid lightgray;
}
.center_div>ul{
width: 1.25rem;
height: 0.4rem;
font-size: 0.15rem;
text-align: center;
line-height: 0.4rem;
float: left;
margin-top: 0.05rem;
box-sizing: border-box;
}
.center_div>ul:nth-child(2){
  border-left:0.01rem solid lightgray;
  border-right:0.01rem solid lightgray;  
}
.Feilei{
  width: 3.75rem;
  height: 4.59rem;
  position: fixed;
  left: 0;
  top: 1rem;
  background-color:rgb(236, 233, 233);
  z-index: 1000;
}
.Feilei>p{
  width: 1.875rem;
  height: 4.59rem;
  float: left;
}
.Feilei>p:last-child{
  background-color: white;
  overflow: hidden;
}
.Feilei>p:last-child>ul{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.Feilei li{
  width: 1.675rem;
  height: 0.3rem;
  padding: 0.1rem;
  line-height: 0.3rem;
  font-size: 0.1rem;
  color: black;
  position: relative;
}
.Feilei>p:last-child li{
  border-bottom: 0.01rem solid lightgray;
}
.Feilei>p span:last-child{
  position: absolute;
  right: 0.1rem;
}
.Feilei>p:first-child span:nth-child(2){
  position: absolute;
  right: 0.3rem;
  top: 0.15rem;
  display: inline-block;
  height: 0.2rem;
  line-height: 0.2rem;
  padding: 0 0.05rem;
  background-color: rgb(173, 170, 170);
  color: white;
  border-radius: 0.1rem;
}
</style>
