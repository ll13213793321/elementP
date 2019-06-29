<template>
  <div id="app">
    <div id="head">
      <a class="btn" href="javascript:location.reload()">ele.me</a>
      <router-link to="/login">
        <span class="btn btns">登录|注册</span>
      </router-link>
    </div>
    <div id="position">
      <span id="position_left">当前定位城市:</span>
      <span id="position_right">定位不准时，请在城市列表中选择</span>
    </div>
    <div id="address">
      <div @click="positionCitys()">
        <span id="address_left" v-html="positonName.name"></span>
        <span id="address_right">></span>
      </div>
    </div>
    <div>
      <p id="hotCity">热门城市</p>
    </div>
    <div>
      <ul class="ul1">
        <li :key="i" v-for="(v,i) in hotName" class="li1" @click="hotCitys(i)">{{v.name}}</li>
      </ul>
      <ul>
        <li :key="key" v-for="(value,key) in allName">
          <div class="head">
            <span class="headerL">{{key}}</span>
            <span class="headerR" v-if="key == 'A'">(按字母排序)</span>
          </div>
          <ul class="ul1">
            <li :key="i" v-for="(v,i) in value" class="li1" @click=" allCitys(i,key)">{{v.name}}</li>
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
      positonName: {},
      hotName: [],
      allName: {}
    };
  },
  methods: {
    positionCity() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        method: "get",
        data() {}
      }).then(res => {
        this.positonName = res.data;
      });
    },
    hotCity() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http({
        url: api,
        method: "get",
        data() {}
      }).then(res => {
        this.hotName = res.data;
      });
    },
    allCity() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get",
        data: {}
      }).then(res => {
        const arrName = [];
        for (const index in res.data) {
          arrName.push(index);
        }
        arrName.sort();
        for (let index = 0; index < arrName.length; index++) {
          this.$set(this.allName, arrName[index], res.data[arrName[index]]);
        }
      });
    },
    positionCitys() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        method: "get",
        data() {}
      }).then(res => {
        this.$router.push({
          name: "cityFind",
          query: res.data
        });
      });
    },
    hotCitys(i) {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http({
        url: api,
        method: "get",
        data() {}
      }).then(res => {
        this.$router.push({
          name: "cityFind",
          query: res.data[i]
        });
      });
    },
    allCitys(i, key) {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get",
        data: {}
      }).then(res => {
        this.$router.push({
          name: "cityFind",
          query: res.data[key][i]
        });
      });
    }
  },
  created() {
    this.positionCity();
    this.hotCity();
    this.allCity();
  }
};
</script>
<style scoped>
#app {
  position: relative;
  width: 3.75rem;
  height: 100vh;
  overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
}
#head {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
}

.btn {
  width: 1rem;
  height: 0.5rem;
  font-size: 0.15rem;
  float: left;
  color: white;
  line-height: 0.5rem;
  margin-left: 0.1rem;
}

.btns {
  float: right;
  margin-right: 0.1rem;
  text-align: center;
}
#position {
  width: 100%;
  height: 0.4rem;
  background-color: white;
  font-size: 0.13rem;
  margin-top: 0.5rem;
}
#position_left,
#position_right,
#address_left,
#address_right {
  display: inline-block;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-left: 0.1rem;
  color: gray;
}
#position_right,
#address_right {
  float: right;
  margin-right: 0.1rem;
  color: lightgray;
}
#address {
  width: 100%;
  height: 0.4rem;
  background-color: white;
  font-size: 0.17rem;
  margin-top: 0.02rem;
}
#address_left {
  color: cornflowerblue;
}
#address_right {
  font-size: 0.3rem;
  color: gray;
}
#hotCity {
  width: 100%;
  height: 0.4rem;
  background-color: white;
  margin: 0.15rem 0 0 0;
  font-size: 0.13rem;
  color: gray;
  line-height: 0.4rem;
  text-indent: 1em;
}
.ul1 {
  overflow: hidden;
}
.head {
  width: 100%;
  background-color: white;
  margin-top: 0.2rem;
  border: 0.01rem solid lightgray;
  box-sizing: border-box;
  overflow: hidden;
}
.headerL,
.headerR {
  width: 10%;
  height: 0.3rem;
  float: left;
  background-color: white;
  color: gray;
  line-height: 0.3rem;
  font-size: 0.12rem;
  text-indent: 1em;
}
.headerR {
  width: 80%;
}
.li1 {
  width: 25%;
  height: 0.5rem;
  background-color: white;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.18rem;
  float: left;
  box-sizing: border-box;
  border: 0.01rem solid lightgray;
  color: cornflowerblue;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
