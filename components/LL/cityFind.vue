<template>
  <div id="app1">
    <div id="header">
      <p id="header_p" v-html="name"></p>
      <a @click="back()">
        <img src="../../../static/imgs/back.png" alt>
      </a>
      <a @click="back()" id="back">切换城市</a>
    </div>
    <div id="center">
      <input type="text" class="inp inpPut" placeholder="输入学校丶商务楼丶地址" v-model="keyword">
      <input type="button" value="提交" class="inp inpBtn" @click="search()">
    </div>
    <div>
      <ul>
        <li v-for="(v,i) in message" :key="i" id="buttom_search" @click="localS(v.name,v.address,v.geohash)">
          <router-link :to="'/home?geohash='+v.geohash">
            <p v-html="v.name" class="search"></p>
            <p v-html="v.address" class="search search_p"></p>
          </router-link>
        </li>
      </ul>
    </div>
    <div id="buttom_history" v-if="show==true">
      <p>搜索历史</p>
      <ul>
        <li v-for="(v,i) in localName" :key="i" id="buttom_search">
          <router-link :to="'/home?geohash='+localgeohash[i]">
            <p v-html="v" class="search"></p>
            <p v-html="localAddress[i]" class="search search_p"></p>
          </router-link>
        </li>
        <p id="clear" v-if="localName.length > 0" @click="remove()">清空所有</p>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "cityFind",
  data() {
    return {
      name: "",
      id: "",
      keyword: "",
      message: [],
      show: true,
      localName: [],
      localAddress: [],
      localgeohash:[]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    search() {
      if (this.keyword == "") {
        return;
      }
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.id +
        "&keyword=" +
        this.keyword;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.show = false;
        this.message = res.data;
        console.log(this.message);
      });
    },
    localS(a, b,c) {
      if (localStorage.name) {
        localStorage.name += "," + a;
        localStorage.address += "," + b;
        localStorage.geohash += "-" + c;
      } else {
        localStorage.address = b;
        localStorage.name = a;
        localStorage.geohash = c;
      }
    },
    localData() {
      if (!localStorage.name) {
        return;
      }
      const localN = localStorage.name;
      const localA = localStorage.address;
      const localG = localStorage.geohash;
      this.localName = localN.split(",");
      this.localAddress = localA.split(",");
      this.localgeohash= localG.split("-");
    },
    remove() {
      localStorage.removeItem("name");
      localStorage.removeItem("address");
      localStorage.removeItem("geohash")
      this.localName = [];
      this.localAddress = [];
      this.localgeohash=[];
    }
  },
  created() {
    this.name = this.$route.query.name;
    this.id = this.$route.query.id;
    this.localData();
  }
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
}
#header img {
  width: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
#header_p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
  font-size: 0.2rem;
  text-align: center;
}
#back {
  display: block;
  height: 0.5rem;
  font-size: 0.15rem;
  line-height: 0.5rem;
  position: absolute;
  top: 0;
  right: 0.1rem;
  color: white;
}
#center {
  width: 100%;
  text-align: center;
  margin-top: 0.6rem;
  background-color: white;
}
.inp {
  width: 90%;
  height: 0.5rem;
  margin-top: 0.2rem;
  border: 0.01rem solid lightgray;
  font-size: 0.2rem;
}
.inpPut {
  text-indent: 1em;
}
.inpBtn {
  border: none;
  background-color: #3190e8;
  color: white;
  border-radius: 0.1rem;
  margin-bottom: 0.2rem;
}
#buttom_history > p {
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.15rem;
  margin: auto;
  background-color: lightgray;
  border: 0.01rem solid gray;
  margin-top: 0.1rem;
  text-indent: 1em;
  border-left: none;
  border-right: none;
}
#buttom_search {
  width: 100%;
  background-color: white;
  border: 0.01rem solid lightgray;
}
.search {
  width: 90%;
  line-height: 0.3rem;
  font-size: 0.15rem;
  margin: 0 auto;
  color: black;
}
.search_p {
  font-size: 0.1rem;
  color: gray;
}
#clear {
  width: 100%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  background-color: white;
  color: gray;
  font-size: 0.2rem;
}
</style>

