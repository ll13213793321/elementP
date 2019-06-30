<template>
  <div id="addsite">
    <div id="head">
      <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
      <img @click="back()" id="headImg" src="../../../static/imgs/back.png" alt>
      <p id="headP">新增地址</p>
    </div>
    <div id="content">
      <input
        :style="{border:bor}"
        @input="change1()"
        class="inp"
        type="text"
        placeholder="请填写你的姓名"
        v-model="name"
      >
      <p class="error" v-if="show">请填写你的姓名</p>
      <router-link to="/adresssearch">
        <input class="inp" type="text" placeholder="小区/写字楼/学校等" v-model="address">
      </router-link>

      <input
        class="inp"
        @input="change2()"
        type="text"
        placeholder="请填写详细送餐地址"
        v-model="address_detail"
      >
      <p class="error" v-if="show">请详细填写送餐地址</p>
      <input
        class="inp"
        :style="{border:bor}"
        @input="change()"
        type="text"
        placeholder="请填写能够联系到您的手机号"
        v-model="phone"
      >
      <p class="error" v-if="show">手机号不能为空</p>
      <input class="inp" type="text" placeholder="备用联系电话（选填）" v-model="phone_bk">
    </div>
    <button id="btn" @click="go">新增地址</button>
  </div>
</template>
<script>
export default {
  name: "addsite",
  data() {
    return {
      address: "",
      address_detail: "",
      name: "",
      phone: "",
      phone_bk: "",
      bor: "",
      show: false
      
    };
  },
  created() {
    console.log(this.$store.state);

    this.address = this.$route.query.address;
  },
  methods: {
    change1() {
      if (this.name.length == 0) {
        this.bor = "1px solid red";
        this.show = true;
      } else {
        this.bor = 0;
        this.show = false;
      }
    },
    change2() {
      if (this.address_detail.length == 0) {
        this.bor = "1px solid red";
        this.show = true;
      } else {
        this.bor = 0;
        this.show = false;
      }
    },
    change() {
      if (
        !/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
          this.phone
        )
      ) {
        this.bor = "1px solid red";
        this.show = true;
      } else {
        this.bor = 0;
        this.show = false;
      }
    },

    back() {
      this.$router.push({
        name: "account"
      });
    },
    jump() {
      this.$store.state.name;
      this.$router.push({
        name: "adresssearch"
      });
    },

    go() {
      console.log(this.$store.state);
      const api =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.userid +
        "/addresses";

      this.$http({
        url: api,
        method: "post",
        data: {
          address: this.address,
          address_detail: this.address_detail,
          geohash: this.$store.state.geo,
          name: this.name,
          phone: this.phone,
          tag: "a",
          sex: 1,
          phone_bk: this.phone_bk,
          tag_type: 2
        }
      }).then(res => {
        console.log(res);
        this.$router.push({
          name: "editsite"
        });
      });
    }
  }
};
</script>
<style scoped>
#addsite {
  background-color: #f5f5f5;
  height: 100vh;
}

#head {
  width: 100vw;
  height: 0.45rem;
  background-color: #3190e8;
}
#headImg {
  margin-top: 0.1rem;
  width: 0.1rem;
  float: left;
  margin-left: 0.1rem;
}
#headP {
  margin-right: 0.1rem;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
}
#content {
  margin-top: 0.1rem;
  height: 2.4rem;
  background-color: white;
}
.inp {
  margin-top: 0.1rem;
  margin-left: 0.115rem;
  width: 3.5rem;
  height: 0.32rem;
  line-height: 0.32rem;
  font-size: 0.145rem;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  text-indent: 0.08rem;
}
#btn {
  margin-left: 0.12rem;
  margin-top: 0.12rem;
  background-color: #56d176;
  border: 1px solid #56d176;
  border-radius: 0.05rem;
  width: 3.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.148rem;
  color: white;
}
.error {
  color: red;
  font-size: 0.12rem;
  margin-left: 0.2rem;
}
</style>
