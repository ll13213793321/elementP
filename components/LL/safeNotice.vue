<template>
  <div id="app">
    <div id="header">
      <p id="header_p">食品监督安全公示</p>
      <router-link to="/shopDetial">
        <img
          src="../../../static/imgs/back.png"
        >
      </router-link>
    </div>
    <div id="content">
      <ul class="content_top">
        <p>食品监督安全公示</p>
        <img
          src="../../../static/imgs/liaoliji.png"
          alt
        >
        <li class="li_p">
          <h2>
            <span>监督检查结果：</span>
            <span class="result">差</span>
          </h2>
          <h2>检查日期：</h2>
        </li>
      </ul>
      <ul class="content_center">
        <p>工商登记信息</p>
        <li>企业名称</li>
        <li>工商执照注册号</li>
        <li>注册资本</li>
        <li>注册地址</li>
        <li>属地监管所</li>
        <li>法定代表人</li>
        <li>经营范围</li>
      </ul>
      <ul class="content_bottom">
        <p>餐饮许可证</p>
        <li>营业范围</li>
        <li>许可证有效期</li>
        <li>许可证号</li>
        <li>发证时间</li>
        <li>发证机关</li>
      </ul>
      <ul class="content_footer">
        <p>
          <span>许可证书</span>
          <span>
            <img
              src="../../../static/imgs/liaoliji.png"
              alt=""
            >
            <img
              src="../../../static/imgs/liaoliji.png"
              alt=""
            >
          </span>
        </p>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "safeNotice",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
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
#content {
  width: 3.75rem;
  margin-top: 0.6rem;
}
#content > ul {
  width: 3.75rem;
  margin-top: 0.1rem;
  background-color: white;
}
#content p {
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-weight: bold;
  border-bottom: 0.01rem solid lightgray;
  text-indent: 1.5em;
  position: relative;
  color: black;
}
.li_p > h2 {
  font-size: 0.15rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.content_top {
  overflow: hidden;
}
.content_top > img {
  width: 0.8rem;
  float: left;
  margin-left: 0.3rem;
}
.content_top > li {
  float: left;
}
#content li {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.15rem;
  color: gray;
  text-indent: 2em;
}
.result {
  color: red;
}
.content_footer {
  height: 3rem;
}
.content_footer > p {
  border: none;
}
.content_footer span {
  font-weight: bold;
}
.content_footer span:last-child {
  display: inline-block;
  width: 3.5rem;
  height: 2rem;
  margin-left: 0.12rem;
  background-color: lightgray;
}
.content_footer span:last-child > img {
  width: 1.5rem;
  margin: 0.1rem;
  float: left;
}
</style>
