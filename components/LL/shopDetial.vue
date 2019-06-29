<template>
  <div id="app">
    <div id="header">
      <router-link to="/home">
        <img src="../../../static/imgs/back.png">
      </router-link>
    </div>
    <div id="top">
      <div id="top_div">
        <img
          :src="'https://elm.cangdu.org/img/'+shopMe.image_path"
          class="shopImg"
        >
        <ul class="shopMessage">
          <li>{{shopMe.name}}</li>
          <li>商家配送/分钟送达/配送费￥5</li>
          <li>公告：欢饮光临，用餐高峰请提前下单，谢谢</li>
        </ul>
        <router-link to="/shopIntr">
          <img
            src="../../../static/imgs/iconfontjiantou2.png"
            class="top_jiantou"
          >
        </router-link>
      </div>
      <div id="bottom_div">
        <span>减</span>
        <span>满30减5，满60减8(APP专享)</span>
        <span>一个活动</span>
        <router-link to=""><img
            src="../../../static/imgs/iconfontjiantou2.png"
            class="bottom_jiantou"
          ></router-link>
      </div>
    </div>
    <div id="center">
      <p @click="middles()">
        <span>商品</span>
      </p>
      <p @click="centers()">
        <span>评价</span>
      </p>
    </div>
    <div
      id="middle"
      v-if="middle == true"
    >
      <div id="content">
        <div id="content_left">
          <ul class="left">
            <li
              v-for="(v,i) in shopArr"
              :key="i"
              class="left_li"
            ><a :href="'#p'+i">
                <span>{{v.name}}</span>
              </a>
              <span v-if="v.type>1">{{v.type-1}}</span>
            </li>
          </ul>
        </div>
        <div id="content_right">
          <ul
            class="right"
            v-for="(v,i) in shopArr"
            :key="i"
          >
            <p
              class="title"
              :id="'p'+i"
            >
              <span>{{v.name}}</span>
              <span>{{v.description}}</span>
              <span @click="titles=!titles">...</span>
            </p>
            <p
              class="titleS"
              v-if="titles == true"
            >
              <span>{{v.name}}</span>
              <span>{{v.description}}</span>
            </p>
            <li
              class="right_li"
              v-for="(value,key) in v.foods"
              :key="key"
            >
              <img
                :src="'https://elm.cangdu.org/img/'+value.image_path"
                class="rightImg"
              >
              <ul class="rightMessage">
                <div @click="show=true;getMessage(value)">
                  <li>{{value.name}}</li>
                  <li>{{value.description}}</li>
                  <li>{{value.tips}}</li>
                  <li class="rePrice">折扣</li>
                </div>
                <li>
                  <span class="price">￥{{value.specfoods[0].price}}</span>
                  <span
                    class="add"
                    @click="value.is_featured++;v.type++;count++;counts(value.specfoods[0].price, 1)"
                  >+</span>
                  <span
                    class="count"
                    v-if="value.is_featured>0"
                  >{{value.is_featured}}</span>
                  <span
                    class="reduce"
                    @click="value.is_featured--;v.type--;count--;counts(value.specfoods[0].price, -1)"
                    v-if="value.is_featured>0"
                  >-</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      id="center_talk"
      v-if="center == true"
    >
      <p class="center_p">
        <ul>
          <li>5</li>
          <li>综合评价</li>
          <li>高于周边商家{{talkRates.compare_rating.toFixed(3)*100}}%</li>
        </ul>
        <ul>
          <li>服务态度</li>
          <li>菜品评价</li>
          <li>送达时间</li>
        </ul>
        <ul>
          <li class="sever">
            <el-rate
              v-model="valueS"
              disabled
              show-score
              text-color="#ff9900"
              score-template=""
            >
            </el-rate>
            <span>{{talkRates.service_score.toFixed(1)}}</span>
          </li>
          <li class="food">
            <el-rate
              v-model="valueF"
              disabled
              show-score
              text-color="#ff9900"
              score-template=""
            >
            </el-rate>
            <span>{{talkRates.overall_score.toFixed(1)}}</span>
          </li>
          <li>分钟</li>
        </ul>
      </p>
      <ul class="ul_content">
        <p>
          <span
            :key="key"
            v-for="(value,key) in userTalkClass"
          >{{value.name}}
            <span>({{value.count}})</span>
          </span>
        </p>
        <li
          :key="i"
          v-for="(v,i) in userTalk"
        >
          <p class="li_left"></p>
          <p class="li_right">
            <ul>
              <li>
                <span>{{v.username}}</span>
                <span>{{v.rated_at}}</span>
              </li>
              <li>
                <el-rate
                  v-model="valueU"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template=""
                >
                </el-rate>
                <span>{{v.time_spent_desc}}</span>
              </li>
              <li>
                <span
                  :key="key"
                  v-for="(value,key) in v.item_ratings"
                ><img
                    v-if="value.image_hash"
                    :src="'https://fuss10.elemecdn.com'+value.image_hash+'.jpeg'"
                  ></span>
              </li>
              <li>
                <span
                  :key="key"
                  v-for="(value,key) in v.item_ratings"
                >{{value.food_name}}</span>
              </li>
            </ul>
          </p>
        </li>
      </ul>
    </div>
    <div
      id="footer"
      v-if="middle == true"
    >
      <ul>
        <li class="shopCar">
          <span></span>
          <span
            v-if="count>0"
            @click="showCar=!showCar"
          ></span>
          <img src="../../../static/imgs/gouwuche.png">
          <span
            class="shopCarCount"
            v-if="count>0"
          >{{count}}</span>
        </li>
        <li class="shopPrice">
          <p>￥{{allPrice.toFixed(2)}}</p>
          <p>配送费￥5</p>
        </li>
        <li
          class="shopAll"
          v-if="allPrice<20"
        >
          还差￥{{20-allPrice.toFixed(0)}}起送
        </li>
        <router-link to="/orderSure">
          <li class="sureSubmit">
            去结算
          </li>
        </router-link>
      </ul>
    </div>
    <div
      v-if="show==true"
      class="bigShop"
    >
      <div id="head">
        <img
          src="../../../static/imgs/back.png"
          @click="show=false"
        >
        <p>{{foodmessage.name}}</p>
      </div>
      <div id="bigShop_content">
        <img
          :src="'https://elm.cangdu.org/img/'+foodmessage.image_path"
          alt=""
        >
        <p>{{foodmessage.description}}</p>
        <p class="title2">{{foodmessage.name}}</p>
        <p>
          <span class="bigRate">评分</span>
          <span class="bigStar">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template=""
            >
            </el-rate>
          </span>
          <span class="rate1">{{value}}</span>
        </p>
        <p>
          <span>月售{{foodmessage.month_sales}}单</span>
          <span class="span_price">售价￥20起</span>
        </p>
        <p>
          <span>评论数{{foodmessage.rating_count}}</span>
          <span>好评率{{foodmessage.satisfy_rate}}%</span>
        </p>
      </div>
    </div>
    <div
      id="GouWuChe"
      v-if="showCar==true"
    >
      <ul>
        <li>
          <span>购物车</span>
          <span>清空</span>
        </li>
      </ul>
      <ul
        class="G_ul"
        :key="key"
        v-for="(value,key) in shopArr"
      >
        <li
          :key="i"
          v-for="(v,i) in value.foods"
          v-if="v.is_featured>0"
        >
          <span>{{v.name}}</span>
          <span>￥{{v.specfoods[0].price}}</span>
          <span @click="v.is_featured++;value.type++;count++;counts(v.specfoods[0].price, 1)">+</span>
          <span>{{v.is_featured}}</span>
          <span @click="v.is_featured--;value.type--;count--;counts(v.specfoods[0].price, -1)">-</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopDetial",
  data() {
    return {
      middle: true,
      center: false,
      titles: false,
      showCar: false,
      value: "4.7",
      allPrice: 0,
      count: 0,
      shopArr: [],
      userTalk: [],
      userTalkClass: [],
      talkRates: {},
      show: false,
      shopMe: {},
      foodmessage: {}
    };
  },
  methods: {
    counts(b, i) {
      this.allPrice += b * i;
    },
    middles() {
      this.middle = true;
      this.center = false;
    },
    centers() {
      this.middle = false;
      this.center = true;
    },
    getShop() {
      this.$http({
        url:
          "//elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.shopMe.id,
        method: "get"
      }).then(res => {
        this.shopArr = res.data;
        this.getTalk();
        this.getTalkClass();
        this.getRates();
      });
    },
    getTalk() {
      this.$http({
        url:
          "https://elm.cangdu.org/ugc/v2/restaurants/" +
          this.shopMe.id +
          "/ratings",
        method: "get"
      }).then(res => {
        this.userTalk = res.data;
      });
    },
    getTalkClass() {
      this.$http({
        url:
          "https://elm.cangdu.org/ugc/v2/restaurants/" +
          this.shopMe.id +
          "/ratings/tags",
        method: "get"
      }).then(res => {
        this.userTalkClass = res.data;
      });
    },
    getRates() {
      this.$http({
        url:
          "https://elm.cangdu.org/ugc/v2/restaurants/" +
          this.shopMe.id +
          "/ratings/scores",
        method: "get"
      }).then(res => {
        this.talkRates = res.data;
        this.valueF = res.data.overall_score;
        this.valueS = res.data.service_score;
        this.valueU = res.data.service_score;
      });
    },
    getMessage(value) {
      this.foodmessage = value;
    }
  },
  created() {
    this.shopMe = this.$store.state.shopXinxi;
    this.getShop();
  }
};
</script>
<style scoped>
#app {
  width: 3.75rem;
  height: 100vh;
  overflow: hidden;
}
#header {
  width: 3.75rem;
  height: 0.5rem;
  background-color: transparent;
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
#top {
  padding: 0.1rem;
  background-color: lightslategray;
}
#top_div,
#bottom_div {
  position: relative;
  width: 3.55rem;
  overflow: hidden;
}
.shopImg {
  width: 0.7rem;
}
.shopMessage {
  width: 2.75rem;
  float: right;
}
.shopMessage > li,
#bottom_div > span {
  height: 0.25rem;
  line-height: 0.25rem;
  font-size: 0.1rem;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shopMessage > li:first-child {
  font-size: 0.2rem;
  font-weight: bold;
}
.top_jiantou {
  width: 0.25rem;
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
  z-index: 100;
}
#bottom_div > span:first-child {
  background-color: red;
  padding: 0.02rem;
}
#bottom_div > span:nth-child(3) {
  position: absolute;
  right: 0.3rem;
  top: 0.05rem;
}
.bottom_jiantou {
  width: 0.2rem;
  position: absolute;
  right: 0.1rem;
  top: 0.05rem;
  z-index: 100;
}
#center {
  width: 3.75rem;
  background-color: white;
  height: 0.5rem;
  border-bottom: 0.01rem solid lightgray;
  z-index: 200;
}
#center > p {
  width: 50%;
  height: 100%;
  float: left;
  text-align: center;
  line-height: 0.5rem;
}
#center > p > span {
  font-size: 0.15rem;
  color: gray;
  padding: 0.05rem;
  border-bottom: 0.02rem solid transparent;
}
#center > p:first-child > span {
  border-color: #3190e8;
  color: #3190e8;
}
#content {
  width: 3.75rem;
  overflow: hidden;
  position: fixed;
  left: 0;
}
#content_left,
#content_right {
  float: left;
  overflow: scroll;
  height: 80vh;
}
::-webkit-scrollbar {
  display: none;
}

#content_left {
  width: 1.25rem;
}
#content_right {
  width: 2.5rem;
}
.left_li {
  width: 1.25rem;
  height: 0.5rem;
  font-size: 0.15rem;
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
}
.left_li > a {
  display: block;
  width: 100%;
  height: 100%;
}
.left li:first-child {
  background-color: white;
  border-left: 0.03rem solid #3190e8;
}
.left li:first-child span {
  font-weight: bold;
}
.left_li span:first-child {
  color: black;
  margin-left: 0.05rem;
}
.left_li > span {
  width: 0.2rem;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  color: white;
  background-color: red;
  position: absolute;
  top: 0.05rem;
  right: 0.05rem;
}
.right {
  width: 100%;
  float: left;
  position: relative;
}
.title,
.titleS {
  width: 2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.1rem;
  color: gray;
  text-indent: 1em;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title > span:first-child {
  font-size: 0.15rem;
  font-weight: bold;
  color: black;
}
.title > span:last-child {
  position: absolute;
  right: 0;
  top: -0.05rem;
}
.titleS {
  color: white;
  background-color: black;
  position: absolute;
  right: -0.1rem;
  top: 0.4rem;
}
.right_li {
  height: 1.3rem;
  background-color: white;
  padding: 0.1rem;
  border-bottom: 0.01rem solid lightgray;
  overflow: hidden;
}
.rightImg {
  width: 0.4rem;
}
.rightMessage {
  width: 1.75rem;
  float: right;
}
.rightMessage li {
  font-size: 0.1rem;
  height: 0.2rem;
  color: black;
  line-height: 0.2rem;
}
.rightMessage li:first-child {
  font-size: 0.15rem;
  font-weight: bold;
}
.rightMessage li:nth-child(2) {
  color: gray;
}
.rePrice {
  display: inline-block;
  width: 0.3rem;
  height: 0.1rem;
  text-align: center;
  border: 0.01rem solid red;
  color: red;
  border-radius: 30%;
}
.rightMessage li:nth-child(5) {
  position: relative;
  margin-top: 0.1rem;
  overflow: hidden;
}
.price {
  font-size: 0.15rem;
  color: red;
  font-weight: bold;
}
.reduce,
.count,
.add {
  display: block;
  width: 0.1rem;
  height: 0.1rem;
  line-height: 0.1rem;
  text-align: center;
  float: right;
  margin-left: 0.1rem;
  font-size: 0.15rem;
  padding: 0.05rem;
  border-radius: 50%;
  color: #3190e8;
}
.reduce {
  border: 0.01em solid #3190e8;
}
.add {
  background-color: #3190e8;
  color: white;
}
#footer {
  width: 3.75rem;
  height: 0.5rem;
  background-color: black;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
}
#footer li {
  position: relative;
  float: left;
}
.shopCar {
  width: 1rem;
  height: 0.5rem;
}
.shopCar > span:first-child {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  left: 0.1rem;
  top: -0.25rem;
  border: 0.02rem solid lightgray;
}
.shopCar > span:nth-child(2) {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #3190e8;
  border-radius: 50%;
  position: absolute;
  left: 0.1rem;
  top: -0.25rem;
  border: 0.02rem solid lightgray;
  z-index: 2006;
}
.shopCar img {
  width: 0.4rem;
  position: absolute;
  left: 0.15rem;
  top: -0.18rem;
  z-index: 2006;
}
.shopCarCount {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  line-height: 0.2rem;
  color: white;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  right: 0.35rem;
  top: -0.3rem;
  z-index: 2006;
  text-align: center;
}
.shopPrice {
  width: 1.5rem;
  height: 0.5rem;
  color: white;
  line-height: 0.5rem;
}
.shopPrice > p {
  height: 0.25rem;
  line-height: 0.25rem;
  font-size: 0.1rem;
}
.shopPrice > p:first-child {
  font-size: 0.15rem;
  font-weight: bold;
}
.shopAll,
.sureSubmit {
  width: 1.25rem;
  height: 0.5rem;
  color: white;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.15rem;
  font-weight: bold;
}
.sureSubmit {
  background-color: green;
}
.center_p {
  padding: 0.1rem;
  overflow: hidden;
  background-color: white;
}
.center_p > ul {
  float: left;
  position: relative;
}
.center_p > ul:first-child {
  width: 1.5rem;
}
.center_p > ul:nth-child(2) {
  width: 0.7rem;
  text-align: center;
}
.center_p > ul:nth-child(3) {
  width: 1.35rem;
}
.center_p li {
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.15rem;
  position: relative;
}
.center_p > ul:first-child > li {
  text-align: center;
}
.center_p > ul:first-child > li:first-child {
  font-size: 0.2rem;
  color: red;
}
.center_p > ul:first-child > li:last-child {
  font-size: 0.1rem;
  color: gray;
}
.center_p > ul:last-child > li > span {
  position: absolute;
  right: 0.5rem;
  top: -0.05rem;
  font-size: 0.1rem;
  color: red;
  line-height: 0.3rem;
}
.sever {
  left: 0;
  top: 0.05rem;
}
.food {
  left: 0;
  top: 0.05rem;
}
.center_p > ul:last-child > li:last-child {
  font-size: 0.1rem;
  color: gray;
}
#center_talk {
  width: 3.75rem;
  height: 80vh;
  overflow: scroll;
}
.ul_content {
  margin-top: 0.1rem;
}
.ul_content > p {
  background-color: white;
  padding: 0.1rem;
  overflow: hidden;
}
.ul_content > p > span {
  font-size: 0.15rem;
  background-color: #3190e8;
  padding: 0.05rem;
  border-radius: 0.05rem;
  float: left;
  margin: 0.1rem;
}
.ul_content > li {
  width: 3.55rem;
  padding: 0.1rem;
  background-color: white;
  border-top: 0.01rem solid lightgray;
  overflow: hidden;
}
.li_left {
  width: 0.5rem;
  height: 0.5rem;
  background-color: yellow;
  border-radius: 50%;
  float: left;
}
.li_right {
  width: 3rem;
  float: right;
}
.li_right span {
  font-size: 0.15rem;
}
.li_right > ul > li {
  margin: 0.1rem 0;
}
.li_right > ul > li:first-child > span:last-child {
  float: right;
  font-size: 0.1rem;
  color: gray;
}
.li_right > ul > li:nth-child(2) {
  position: relative;
}
.li_right > ul > li:nth-child(2) > span {
  position: absolute;
  left: 0.7rem;
  top: 0;
  color: gray;
}
.li_right > ul > li:nth-child(3) > span > img {
  width: 0.7rem;
}
.li_right > ul > li:nth-child(4) > span {
  display: inline-block;
  padding: 0.05rem;
  border: 0.01rem solid lightgray;
  width: 0.5rem;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 0.1rem;
}
.bigShop {
  width: 3.75rem;
  height: 94vh;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 200;
}
#head {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
}
#head > p {
  width: 1.35rem;
  height: 0.5rem;
  margin: 0 auto;
  line-height: 0.5rem;
  text-align: center;
  color: white;
  font-size: 0.2rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#head img {
  width: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
#bigShop_content {
  margin-top: 0.5rem;
}
#bigShop_content > img {
  width: 3.75rem;
}
#bigShop_content > p {
  width: 3.55rem;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.15rem;
  padding: 0.1rem;
  font-size: 0.15rem;
  position: relative;
}
#bigShop_content > p:nth-of-type(2) {
  font-size: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bigRate {
  display: block;
  width: 0.3rem;
  float: left;
}
.bigStar {
  display: block;
  width: 0.6rem;
  position: absolute;
  left: 0.4rem;
  top: 0.15rem;
}
.span_price,
.rate1 {
  color: orangered;
}
.rate1 {
  position: absolute;
  top: 0.1rem;
  right: 2.45rem;
}
#GouWuChe {
  width: 3.75rem;
  max-height: 50vh;
  overflow: scroll;
  position: absolute;
  left: 0;
  bottom: 0.5rem;
  background-color: white;
  z-index: 100;
}
#GouWuChe li {
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0.05rem 0.1rem;
  font-size: 0.15rem;
}
#GouWuChe ul:first-child > li {
  background-color: rgb(235, 231, 231);
}
#GouWuChe ul:first-child span:last-child {
  float: right;
}
.G_ul span {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  line-height: 0.2rem;
}
.G_ul span:first-child {
  width: 1.5rem;
}
.G_ul span:nth-child(2) {
  width: 0.5rem;
  text-align: center;
  color: red;
  font-weight: bold;
}
.G_ul span:nth-child(3),
.G_ul span:nth-child(4),
.G_ul span:nth-child(5) {
  text-align: center;
  border-radius: 50%;
  float: right;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
}
.G_ul span:nth-child(3) {
  background-color: #3190e8;
  color: white;
}
.G_ul span:nth-child(5) {
  border: 0.01rem solid #3190e8;
  color: #3190e8;
}
</style>
