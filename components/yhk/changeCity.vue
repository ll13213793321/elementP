<template>
  <div id="changeCity">
    <div id="top">
      <img @click="back" src="../../../static/imgs/back.png" alt width="15px">

      <span id="message">{{name}}</span>

      <span @click="backhome" id="sp2">切换城市</span>
    </div>
    <div id="adress">
      <input v-model="keyword " id="txt" type="text" placeholder="输入学校,商务楼,地址">
      <router-link to="/history">
        <input @click="getsearch()" id="submit" type="button" value="提交">
      </router-link>
    </div>

    
    <ul v-if="show" id="history">
       <p id="text">搜索历史</p>
      <span id="p1">历史记录</span>
      <hr>

      <history/>
      
     
    </ul>
    <ul>
       
     <li id="li" @click="address(v.address,v.name,i)" :key="i" v-for="(v,i) in datas">
     
        <p id="text1">{{v.name}}</p>
        <p id="text2">{{v.address}}</p>
        <hr>
      </li>
      </ul>
  </div>
</template>

<script>
// import cityVue from './city.vue';
import history from "./history";
export default {
  data() {
    return {
      message: "",
      id: "",
      name: "",
      keyword: "",
      datas: [],
      show:true
    };
  },
  components: {
    history
  },
  created() {
    console.log(this.$route);
    this.citymessage();
    this.add();
  },
  methods: {
    backhome() {
      this.$router.back();
    },
    add() {
      this.id = this.$route.query.cityId;
      this.name = this.$route.query.cityName;
      console.log(this.name);
      console.log(this.id);
    },
    back() {
      this.$router.go(-1);
    },
    citymessage() {
      const api = "https://elm.cangdu.org/v1/cities/:id";
      this.$http.get(api).then(response => {
        this.message = this.data;
        console.log();
      });
    },
    getsearch() {
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.id +
        "&keyword=" +
        this.keyword +
        "&type=search";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
        this.datas = res.data;
        console.log(this.datas);
      });
      if (this.keyword!=0) {
        this.show=false
      }
    },
    address(a, b, i) {
      if (localStorage.address) {
        localStorage.address += "," + a;
        localStorage.name += "," + b;
      } else {
        localStorage.address = a;
        localStorage.name = b;
      }
      //getgeo
      this.$store.commit("getgeo", this.datas[i].geohash);
      console.log(this.datas[i].geohash);
      this.$router.push({
        name: "my"
      });
    }
  }
};
</script>

<style scoped>
#changeCity {
  background-color: #f5f5f5;
  height: 100vh;
}
#top {
  position: relative;
  height: 0.45rem;
  background-color: #3190e8;
}
#top img {
  position: absolute;
  left: 2%;
  top: 15%;
  color: white;
  font-size: 25px;
}
#sp1 {
  position: absolute;
  left: 45%;
  top: 20%;
  color: white;
  font-size: 22px;
}
#sp2 {
  position: absolute;
  right: 2%;
  top: 25%;
  font-size: 16px;
  color: white;
}
#adress {
  /* border: 1px solid red; */
  background-color: white;
  position: relative;
  height: 1rem;
}
#txt {
  height: 0.2rem;
  width: 90%;
  position: absolute;
  left: 4%;
  top: 18%;
  text-indent: 0.1rem;
  color: #afaaaa;
  font-size: 0.15rem;
  background-color: white;
}
#submit {
  height: 0.3rem;
  width: 90%;
  position: absolute;
  left: 4%;
  top: 55%;
  text-indent: 0.1rem;
  color: white;
  font-size: 0.15rem;
  text-align: center;
  border-radius: 0.05rem;
  background-color: #3190e8;
}
#message {
  position: absolute;
  left: 45%;
  top: 20%;
  color: white; 
  font-size: 22px;
}
#history li {
  position: relative;
  margin-top: 0.25rem;
  height: 0.3rem;

  /* border:1px solid rgb(185, 182, 182); */
}
#p1 {
 
  font-size: 0.16rem;
}
#text{
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: lightgray;
}
#text1{
  font-size: 0.15rem;
}
#text2{
  font-size: 0.13rem;
  color:  #999;
}
</style>
