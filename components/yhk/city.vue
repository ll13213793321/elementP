<template>
  <div id="city">
    <div id="top">
      <a class="btn" href="javascript:location.reload()">ele.me</a>

      <router-link :to="show?'/login':'/my'">
        <span v-if="show"  id="topP">{{text}}</span>
        <img v-else id="topimg" src="../../../static/imgs/touxiang2.jpg" alt="" width="13%">
      </router-link>
    </div>
    <div id="position">
      <span id="text1">当前定位城市:</span>
      <span id="text2">定位不准时,请在城市列表中选择</span>
    </div>

    <router-link :to="'/changeCity?cityId='+guess.id+'&cityName='+guess.name">
      <div id="site">
        <span id="guess">{{guess.name}}</span>
      </div>
    </router-link>
    <div>
      <p id="p">热门城市</p>
    </div>
    <div id="hotCity">
      <ul>
        <li :key="i" v-for="(v,i) in datas">
          <router-link :to="'/changeCity?cityId='+v.id+'&cityName='+v.name">{{v.name}}</router-link>
        </li>
      </ul>
    </div>

    <div>
      <ul id="allCities">
        <li :key="key" v-for="(value,key) in groupCities">
          <h3>
            {{key}}
            <span v-if="key=='A'">(按字母排序)</span>
          </h3>
          <ul id="all">
            <li :key="i" v-for="(v,i) in value">
              <router-link :to="'/changeCity?cityId='+v.id+'&cityName='+v.name">{{v.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      datas: [],
      groupCities: {},
      guess: "",
      show:true,
      text:"登录/注册"
    };
  },

  //组件创建完成时,网络请求该页面需要的数据
  created() {
    this.hotCity();
    this.getGroupCities();
    this.guess1();
    if (this.$store.state.username) {
     this.show=false
    } else {
      this.show=true
    }
  },
  methods: {
    guess1() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http.get(api).then(response => {
        this.guess = response.data;
      });
    },
    hotCity() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http.get(api).then(response => {
        this.datas = response.data;
      });
    },
    getGroupCities() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res);
        var arr = [];
        //先排序,再给数据源赋值
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          // this.groupCities[arr[i]] = res.data[arr[i]];
          this.$set(this.groupCities, arr[i], res.data[arr[i]]);
        }
        // this.groupCities = res.data;
        // var arr = [];
      });
    }
  }
};
</script>

<style scoped>
#city {
  background-color: #f5f5f5;
  /* height: 100vh; */
}
#top {
  color: white;
  background-color: #3190e8;
  font-size: 18px;
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 0.45rem;
}
#topP{
  float: right;
}
#topimg{
  float: right; 
 
}
#top a {
  font-size: 0.15rem;

  margin-top: 2%;
  margin-left: 2%;
  color: white;
}
#top span {
  margin-top: 2%;
  font-size: 0.15rem;
  padding-right: 0.1rem;
  color: white;
}
#login {
  position: absolute;
  left: 80%;
  top: 0;
}
#position {
  background-color: white;
  position: relative;
  height: 0.45rem;
}
#text1 {
  position: absolute;
  font-size: 14px;
  left: 2%;
  top: 30%;
}
#text2 {
  position: absolute;
  font-size: 12px;
  left: 55%;
  top: 30%;
  color: #9f9f9f;
}

#site {
  height: 0.4rem;
  background-color: white;
  margin-top: 1px;
  position: relative;
  border: 1px solid #e2e2e2;
}
#site span:nth-child(1) {
  font-size: 20px;
  position: absolute;
  color: #3190e8;
  left: 2%;
  top: 10%;
}
#site span:nth-child(2) {
  font-size: 25px;
  position: absolute;
  color: #9f9f9f;
  left: 90%;
  top: 1%;
}
#p {
  height: 0.3rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  font-size: 15px;
  background-color: white;
  

}

#hotCity ul li {
  font-size: 16px;
  padding: 0.1rem;
  float: left;
  width: 25%;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid darkgrey;
  background-color: white;
  color: #3190e8;
}
#all {
  overflow: hidden;
}
#all li {
  width: 0.9175rem;
  border: 0.01rem solid #e4e4e4;
  float: left;
  text-align: center;
  color: #666;
  font-size: 0.15rem;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
    color: black;

}
#guess {
  position: absolute;
  top: 10%;
  font-size: 20px;
  color: #3190e8;
  text-indent: 0.1rem;
    color: black;

}
/* 城市排序 */
</style>
