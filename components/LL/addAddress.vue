<template>
  <div>
    <div id="head">
      <a class="btn">
        <img
          src="../../../static/imgs/back.png"
          @click="back()"
        >
      </a>
      <p>添加地址</p>
    </div>
    <div id="content">
      <ul>
        <li class="name">
          <span>联系人</span>
          <input
            type="text"
            placeholder="你的名字"
          >
          <p>
            <input
              type="checkbox"
              id="check1"
              value="先生"
            >
            <span class="sir">先生</span>
            <input
              type="checkbox"
              id="check2"
              value="女士"
            >
            <span class="lady">女士</span>
            <span @click="show=true">+</span>
          </p>
        </li>
        <li class="phone">
          <span>联系电话</span>
          <input
            type="text"
            placeholder="你的手机号"
          >
          <p v-if="show == true">
            <input
              type="text"
              placeholder="备选电话"
            >
          </p>
        </li>
        <li class="address">
          <span>送餐地址</span>
          <router-link to="/search">
            <input
              type="text"
              placeholder="小区/写字楼/学校等"
            >
          </router-link>
          <p>
            <input
              type="text"
              placeholder="详细地址(如门牌号码)"
            >
          </p>
        </li>
        <li class="tips">
          <span>标签</span>
          <input
            type="text"
            placeholder="无/家/学校/公司"
          >
        </li>
      </ul>
    </div>
    <button>确定</button>
  </div>
</template>
<script>
export default {
  name: "addAddress",
  data() {
    return {
      show: false
    };
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
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
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: white;
  font-size: 0.2rem;
  font-weight: bold;
}
#head img {
  width: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
#content li {
  background-color: white;
  border-bottom: 0.01rem solid lightgray;
  position: relative;
}
.name {
  width: 3.75rem;
  height: 1.2rem;
  margin-top: 0.5rem;
}
#content span {
  display: inline-block;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.18rem;
  width: 1rem;
  text-align: center;
}
#content li > input {
  width: 2.5rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.18rem;
  position: absolute;
  right: 0;
  top: 0;
}
#content p {
  width: 3.75rem;
  height: 0.6rem;
  position: relative;
}
.lady {
  position: absolute;
  top: 0;
  right: 0.4rem;
}

#check2 {
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 0.15rem;
  right: 1.2rem;
  z-index: 2000;
  border-radius: 50%;
}
.sir {
  position: absolute;
  top: 0;
  left: 1.4rem;
}
#check1 {
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 0.15rem;
  left: 1.25rem;
  z-index: 2000;
}
#content li:nth-child(1) > p > span:last-child {
  font-size: 0.3rem;
  position: absolute;
  right: 0.01rem;
  bottom: -0.6rem;
  color: #3190e8;
  z-index: 2000;
}
#content li:nth-child(2) > p > input,
#content li:nth-child(3) > p > input {
  width: 2.5rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.18rem;
  position: absolute;
  right: 0;
  top: 0;
}
#content li:nth-child(3) input {
  width: 2.5rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.18rem;
  position: absolute;
  right: 0;
  top: 0;
}
button {
  width: 3.6rem;
  height: 0.5rem;
  font-size: 0.2rem;
  color: white;
  background-color: green;
  border: none;
  border-radius: 0.1rem;
  margin: 0.1rem 0 0 0.07rem;
}
</style>
