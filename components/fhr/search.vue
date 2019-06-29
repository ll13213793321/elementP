<template>

<transition name="el-fade-in">
        <!-- <div v-show="show" class="transition-box">.el-fade-in</div> -->
        <div id="search">
    <div id="Search_top">
      <img id="Search_back" src="../../../static/imgs/back.png" @click="back1()">
      <span id="Search_load">搜索</span>
    </div>
    <div id="Search_mid" style="height:0.55rem;background-color:white;">
      <div id="Search_input">
        <input @input="add()" v-model="value" id="Search_text" type="text" placeholder="请输入商家或美食名称">
        <input @click="get_Restruant()" id="Search_button" type="button" value="提交">
        <div id="Search_shop"></div>
        <div id="Search_history">
          <ul v-if="S_h">
            <p id="S_h">搜索历史</p>
            <li class="history_search" :key="i" v-for="(v,i) in history">
              <p id="dianji_n" @click="dianji(v)">{{v}}</p>
              <p id="close" @click="S_close(i)">{{gb}}</p>
            </li>
            <p id="clear_history" @click="clear()">清空搜索历史</p>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <p id="N_rs" v-if="N_r">{{msg}}</p>
    </div>
    <div id="Res_bj">
      <p id="S_shop" v-if="Res_shop">商家</p>
      <ul v-if="S_r">
        <li :key="i" v-for="(v,i) in getValue" id="Search_Res">
          <router-link to="/denglu">         
            <div id="kuang">
              <img
              id="Res_img"
              style="width:0.4rem"
              :src="'https://elm.cangdu.org/img/'+v.image_path"
            >
            <div id="Res_div">
            <span id="Res_name">{{v.name}}</span><span id="Res_pay">支付</span>
            </div>
            <span id="Res_month">月售{{v.rating_count}}单</span>
            <span id="Res_far">20 元起送/距离：{{v.distance}}</span>
            <div id="Res_under">
            </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div id="footer">
      <router-link :to="'/home?geohash='+this.datas.geohash+'&name='+this.datas.name" class="all">
        <!-- <img src="../../../static/imgs/homeF.png" class="imgs"> -->
        <p>外卖</p>
      </router-link>
      <router-link :to="'/search?geohash='+this.datas.geohash+'&name='+this.datas.name" class="all">
        <!-- <img src="../../../static/imgs/searchT.png" class="imgs"> -->
        <p>搜索</p>
      </router-link>
      <router-link :to="'/order?geohash='+this.datas.geohash+'&name='+this.datas.name" class="all">
        <!-- <img src="../../../static/imgs/orderF.png" class="imgs"> -->
        <p>订单</p>
      </router-link>
      <router-link :to="'/me?geohash='+this.datas.geohash+'&name='+this.datas.name" class="all">
        <!-- <img src="../../../static/imgs/meF.png" class="imgs"> -->
        <p>我的</p>
      </router-link>
    </div>
  </div>
      </transition>


  
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      value: "",
      datas: {},
      getValue: [],
      history: [],
      S_h: false,
      N_r: false,
      S_r: false,
      S_shop: false,
      Res_shop:false,
      msg: "无搜索结果",
      gb: "x",
    };
  },
  created() {
    this.datas = this.$route.query;
    console.log(this.datas);
    // localStorage.clear();
    if (localStorage.c) {
      this.history = localStorage.c.split(",");
    }
    this.S_close();
  },
  methods: {
    add() {
      if (this.value == "") {
        this.S_h = true;
        this.Res_shop = false;
        this.S_r = false;
        this.N_r = false;
      }
    },
    S_close(i) {
      if (this.history.length == 0) {
        return;
      } else {
        localStorage.removeItem("c");
        for (var j = 0; j < this.history.length; j++) {
          if (j != i) {
            if (
              localStorage.c &&
              localStorage.c.indexOf(this.history[j]) == -1
            ) {
              localStorage.c += "," + this.history[j];
            } else {
              localStorage.c = this.history[j];
            }
          }
        }
        if (this.history.length == 1) {
          this.history = localStorage.c;
        } else {
          this.history = localStorage.c.split(",");
        }
        // console.log(this.history);
      }
    },
    clear() {
      // history_search.remove;
      localStorage.removeItem("c");
      this.history = localStorage.c;
      this.S_h = false;
    },
    back1() {
      this.$router.go(-1);
    },
    get_Restruant() {
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.datas.geohash +
        "&keyword=" +
        this.value;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        console.log(api);
        if (!res.data.message) {
          this.getValue = res.data;
          this.S_r = true;
          this.S_shop = true;    
          console.log(this.getValue);
        }
        if (this.getValue.length == 0) {
          this.N_r = true;
          this.S_shop = false;
          this.Res_shop = false;
        } else {
          this.N_r = false;
          this.S_shop = false;
          this.Res_shop = true;
        }
        console.log(res.data.message);
      });
      if (localStorage.c) {
        if (localStorage.c.indexOf(this.value) == -1) {
          localStorage.c += "," + this.value;
          this.Res_shop = false;
        }
      } else {
        localStorage.c = this.value;
        this.Res_shop = false;
      }
      // console.log(localStorage.history)
      this.history = localStorage.c.split(",");
      console.log(this.history);
      this.S_h = true;
      if (this.value != "") {
        this.S_h = false;
        this.N_r = false;
      }
    },
    dianji(v) {
      this.value = v;
      console.log(this.value);
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.datas.geohash +
        "&keyword=" +
        this.value;
      this.$http({
        url: api,
        method: "get",
        withCredentials: true
      }).then(res => {
        console.log(api);
        if (!res.data.message) {
          this.getValue = res.data;
          this.S_r = true;
          this.S_shop = true;
          this.Res_shop = true
          console.log(this.getValue);
        }
        if (this.getValue.length == 0) {
          this.N_r = true;
          this.S_shop = false;
          this.Res_shop = false
        } else {
          this.N_r = false;
          this.S_shop = false;
        }
        console.log(res.data.message);
      });
      if (localStorage.c) {
        if (localStorage.c.indexOf(this.value) == -1) {
          localStorage.c += "," + this.value;
        }
      } else {
        localStorage.c = this.value;
      }
      // console.log(localStorage.history)

      this.history = localStorage.c.split(",");
      // this.history=[];
      console.log(this.history);
      this.S_h = true;
      if (this.value != "") {
        this.S_h = false;
        this.N_r = false;
      }
    }
  }
};
</script>
<style scoped>
/* #Search_pay{

} */
#N_rs {
  /* border: 0.01rem solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.4rem;
  font-size: 0.15rem;
  background-color: white;
  margin-top: 0.05rem;
}
#clear_history {
  background-color: white;
  height: 0.4rem;
  font-size: 0.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
}
#S_h {
  height: 0.5rem;
  /* border: 0.01rem solid red; */
  font-size: 0.1rem;
  text-align: left;
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  color: rgb(114, 114, 114);
}
/* #history_search {
  border: 0.01rem solid red;
  text-align: left;
  font-size: 0.15rem;
  height: 0.5rem;
} */
#Search_history {
  /* border:1px solid red; */
  height: 0.4rem;
  font-size: 0.2rem;
  /* border: 0.01rem solid red; */
}
#S_shop {
  height: 0.4rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 0.15rem;
  color: rgb(104, 103, 103);
  margin-left: 0.15rem;
}
#Search_history li {
  position: relative;
  /* border:1px solid red; */
  height: 0.5rem;
  font-size: 0.2rem;
  border: 0.01rem solid rgb(226, 226, 226);
  background-color: white;
  border-width: 0 0 0.01rem 0;
  font-size: 0.15rem;
  text-align: left;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
#dianji_n {
  margin-left: 0.1rem;
}
#close {
  position: absolute;
  top: 0;
  right: 0.2rem;
  /* border: 0.01rem solid rgb(150, 148, 148); */
  font-size: 0.25rem;
  width: 0.2rem;
  /* height: 0.2rem; */
  text-align: center;
  color: rgb(160, 156, 156);
}
#kuang{
  height: 1rem;
  border: 0.01rem solid rgb(221, 221, 221);
  border-width: 0 0 0.01rem 0;
  position: relative;
}
#Res_under{
  border: 0.01rem solid rgb(221, 221, 221);
  height: 0.5rem;
  width: 3.1rem;
  position: absolute;
  top: 0.34rem;
  right: 0.15rem;
  border-width: 0 0 0.01rem 0;
}
#Res_div{
  /* border: 0.01rem solid red; */
  position: absolute;
  left: 0.55rem;
  top: 0.08rem
}
#Res_img{
position: absolute;
top: 0.1rem;
left: 0.1rem
}
#Res_pay{
  font-size: 0.1rem;
  margin-left: 0.1rem;
  border: 0.01rem solid orangered;
  color: orangered;
  font-weight: bold;
}
#Res_name {
  font-size: 0.15rem;
  color: black;
}
#Res_month{
  position: absolute;
  top: 0.35rem;
  font-size: 0.15rem;
  left: 0.55rem;
  color: black;
}
#Res_far {
  position: absolute;
  font-size: 0.15rem;
  color: black;
  top: 0.6rem;
  left: 0.55rem

}
#Search_Res {
  background-color: white;
  /* height: 1rem; */
}
#Search_top {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 0.5rem;
  background-color: #3190e8;
  font-size: 0.16rem;
  position: relative;
  text-align: center;
}
#Search_back {
  position: absolute;
  top: 0.15rem;
  height: 0.2rem;
  z-index: 1;
  left: 0.1rem;
}
#Search_load {
  font-size: 0.2rem;
  color: white;
  line-height: 0.45rem;
}
#Search_text {
  background-color: rgb(235, 228, 228);
  height: 0.35rem;
  width: 2.5rem;
  border-radius: 0.03rem;
}
#Search_button {
  background-color: rgb(112, 126, 255);
  height: 0.35rem;
  border-radius: 0.03rem;
  width: 0.8rem;
  color: white;
}
#Search_mid {
  text-align: center;
  line-height: 0.55rem;
}
#head > p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  text-align: center;
}
#head img {
  width: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
#head span {
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
#app {
  position: relative;
}
</style>
