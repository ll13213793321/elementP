<template>
  <div id="app">
    <div id="head">
      <a class="btn">
        <img src="../../../static/imgs/fangdajing.png">
      </a>
      <p>{{name}}</p>
      <router-link to="/login">
        <span class="btns">登录|注册</span>
      </router-link>
    </div>
    <div id="center_top">
      <swiper
        v-if="arrLeft.length > 0"
        :options="swiperOption"
        ref="mySwiper"
      >
        <!-- slides -->
        <swiper-slide>
          <ul class="ul1">
            <li
              v-for="(v,i) in arrLeft"
              :key="i"
              class="li1"
            >
              <router-link :to="'/foodClass?title='+v.title">
                <img
                  :src="'https://fuss10.elemecdn.com'+v.image_url"
                  class="pathImg"
                >
                <p class="pathP">{{v.title}}</p>
              </router-link>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="ul1">
            <li
              v-for="(v,i) in arrRight"
              :key="i"
              class="li1"
            >
              <router-link :to="'/foodClass?title='+v.title">
                <img
                  :src="'https://fuss10.elemecdn.com'+v.image_url"
                  class="pathImg"
                >
                <p class="pathP">{{v.title}}</p>
              </router-link>
            </li>
          </ul>
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
    <div id="center_buttom">
      <div id="center_div">
        <img
          src="../../../static/imgs/Group-.png"
          id="buttom_img"
        >
        <p id="buttom_p">附近商家</p>
      </div>
      <ul>
        <li
          class="buttom_li"
          v-for="(v,i) in shoplist"
          :key="i"
        >
          <router-link to="/shopDetial">
            <div
              class="li_div"
              @click="setMessage(v)"
            >
              <img
                :src="'https://elm.cangdu.org/img/'+v.image_path"
                class="buttom_img"
              >
              <div id="content">
                <p class="p_top">
                  <span class="p_top_span">品牌</span>
                  <span>{{v.name}}</span>
                  <ul>
                    <li
                      v-for="(value,key) in v.supports"
                      :key="key"
                    >{{value.icon_name}}</li>
                  </ul>
                </p>
                <p class="p_center">
                  <span>
                    <el-rate
                      v-model="v.rating"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template=""
                    >
                    </el-rate>
                  </span>
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
    <div id="footer">
      <router-link
        to="/home"
        class="all"
      >
        <img
          src="../../../static/imgs/homeT.png"
          class="imgs"
        >
        <p>外卖</p>
      </router-link>
      <router-link
        to="/"
        class="all"
      >
        <img
          src="../../../static/imgs/searchF.png"
          class="imgs"
        >
        <p>搜索</p>
      </router-link>
      <router-link
        to="/order"
        class="all"
      >
        <img
          src="../../../static/imgs/orderF.png"
          class="imgs"
        >
        <p>订单</p>
      </router-link>
      <router-link
        to="/me"
        class="all"
      >
        <img
          src="../../../static/imgs/meF.png"
          class="imgs"
        >
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "first",
  data() {
    return {
      name: "",
      arrLeft: [],
      arrRight: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      geohash: "",
      shoplist: []
    };
  },
  created() {
    this.geohash = this.$route.query.geohash;
    this.detailPositon();
    this.foodClass();
  },
  methods: {
    detailPositon() {
      this.$http({
        url: "https://elm.cangdu.org/v2/pois/" + this.geohash,
        method: "get"
      }).then(res => {
        this.name = res.data.name;
        this.shopList();
      });
    },
    foodClass() {
      this.$http({
        url: "https://elm.cangdu.org/v2/index_entry",
        method: "get"
      }).then(res => {
        for (let index = 0; index < res.data.length / 2; index++) {
          this.arrLeft.push(res.data[index]);
          this.arrRight.push(res.data[index + res.data.length / 2]);
        }
      });
    },
    shopList() {
      this.$http({
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude,
        method: "get"
      }).then(res => {
        this.shoplist = res.data;
      });
    },
    setMessage(v) {
      this.$store.commit("getMessage", v);
    }
  }
};
</script>
<style>
.el-rate__item {
  width: 0.12rem;
}
#app {
  width: 3.75rem;
  height: 100vh;
  overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>
<style scoped>
#head {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
}
#head > p {
  width: 50%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  margin: auto;
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
.btns {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.15rem;
  color: white;
  position: absolute;
  right: 0.1rem;
  top: 0;
}
#footer {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
}
.all {
  width: 25%;
  height: 0.3rem;
  text-align: center;
  font-size: 0.15rem;
  color: gray;
}
.imgs {
  width: 0.2rem;
}
#center_top {
  margin-top: 0.5rem;
  background-color: white;
}
.ul1 {
  width: 3.75rem;
  padding: 0.2rem 0;
}
.li1 {
  width: 25%;
  float: left;
  text-align: center;
  margin-bottom: 0.2rem;
}
.pathImg {
  width: 80%;
}
.pathP {
  height: 0.3rem;
  line-height: 0.3rem;
  color: gray;
  font-size: 0.15rem;
}
#center_buttom {
  width: 100%;
  margin-top: 0.2rem;
  background-color: white;
  overflow: hidden;
}
#center_div {
  width: 3.75rem;
  overflow: hidden;
}
#buttom_img,
#buttom_p {
  height: 0.2rem;
  float: left;
  margin-left: 0.05rem;
}
#buttom_p {
  font-size: 0.13rem;
  color: gray;
  line-height: 0.2rem;
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
#content {
  width: 2.9rem;
  float: right;
}
.p_top,
.p_center,
.p_buttom {
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.p_top > span {
  color: black;
  font-size: 0.15rem;
  font-weight: bold;
}
.p_top_span {
  background-color: goldenrod;
}
.p_top > ul,
.p_center > ul,
.p_buttom > ul {
  float: right;
  display: flex;
}
.p_top > ul > li {
  width: 0.15rem;
  height: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
  font-size: 0.1rem;
  color: gray;
  border: 0.01rem solid lightgray;
  margin-right: 0.02rem;
}

.p_center > span {
  font-size: 0.1rem;
  display: inline-block;
  line-height: 0.15rem;
  color: gray;
  color: orangered;
}
.p_center > span:first-child {
  width: 0.65rem;
}
.p_center > span:nth-child(3) {
  color: gray;
}
.p_center > ul > li {
  text-align: center;
  height: 0.15rem;
  line-height: 0.15rem;
  font-size: 0.1rem;
  color: white;
  border: 0.01rem solid lightgray;
  margin-right: 0.02rem;
  border-radius: 0.005rem;
}
.p_center > ul > li:first-child {
  background-color: #3190e8;
}
.p_center > ul > li:last-child {
  color: #3190e8;
}
.p_buttom > span,
.p_buttom > ul > li {
  width: 0.55rem;
  font-size: 0.1rem;
  color: gray;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
