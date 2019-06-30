<template>
  <div id="editsite">
    <div id="head">
      <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
      <img @click="back()" id="headImg" src="../../../static/imgs/back.png" alt>
      <p id="headP">编辑地址</p>
      <span  @click="change1()" v-if="show" class="headP2">编辑</span>
      <span  @click="change2()" v-else class="headP2">完成</span>
    </div>
   
   <ul  v-for="(v,i) in arr" :key="i"   id="history"> 
    <img  v-if="show1"    @click="dele(i)" id="remove" src="../../../static/imgs/quxiao.png" alt="">
   <li ><p>{{v.address}}</p><p>{{v.phone}}</p>   </li>
      
   </ul>
 <router-link to="/addsite">
   <ul id="site">
       <li>新增地址</li>
       
   </ul></router-link>
  </div>
</template>
<script>
export default {
  name: "editsite",
  data() {
    return {
       
     show:true,
     show1:false,
   
     arr:[]
    };
  },
  created() {
    this.go()
    console.log(this.$store.state);

  },
  methods: {
    back() {
      this.$router.push({
        name:"account"
      });
    },
    change1(){
      this.show=false
       this.show1=true;
    },
    change2(){
      this.show=true
       this.show1=false;

     

    },
    dele(i){
      const api ="https://elm.cangdu.org/v1/users/"+this.$store.state.userid+"/addresses/"+this.arr[i].id
        
      this.$http({
        url:api,
        method:"DELETE",
      }).then(res=>{
          console.log(res);
          this.arr.splice(i,1);

        })
    },
    go() {
      const api =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.userid +
        "/addresses";
      this.$http({
        url:api,
        method:"get",
        
          
        
      }).then(res=>{
        // console.log(res.data[0].id);
          console.log(res);
          this.arr=res.data;
        })
    }
  }
};
</script>
<style scoped>
#editsite {
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
.headP2 {
  margin-right: 0.1rem;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.16rem;
  color: white;
  position: absolute;
  top: 0.01rem;
  left: 3.3rem;
}
#site{
    margin-top: 0.1rem;
}
#site li{
    font-size: 0.17rem;
height: 0.4rem;
line-height: 0.4rem;
background-color: white;
color: #333;
padding-left: 0.1rem;
}
#jiantou{
    position: absolute; 
    left: 3.4rem;
    top: 0.7rem;
}
#history{
  position: relative;
  height: 0.6rem;
      background: #fff8c3;
      margin-top: 0.13rem;
      border: 1px solid #d9d9d9;
}
#history li>p{
 font-size: 0.13rem;
 text-indent: 0.6em;
}
#remove{
 margin-left: 3.6rem;
}
</style>
