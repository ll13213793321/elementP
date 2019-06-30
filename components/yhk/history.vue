<template>
  <div>
    <ul>
      <li   :key="i" v-for="(v,i) in nameArr">
        <p>{{v}}</p>
        <p>{{addArr[i]}}</p>
        <hr>
      </li>
      
    </ul>
    <p id="remove" @click="remove1()" >清除历史记录</p>  
  </div>
</template>



<script>
export default {
  data() {
    return {
      addArr: [],
      nameArr: [],
      datas:[]
    };
  },
  created() {
    
    console.log("a");
    this.add();
    // localStorage.removeItem("name");
    // localStorage.removeItem("address");
  },
  methods: {
     
    add() {
      if(localStorage.name){
const adress = localStorage.address;
      const name = localStorage.name;
      this.addArr = adress.split(",");
      this.nameArr = name.split(",");
      }
    },
     remove1() {
//    this.addArr.pop();
//  this.nameArr.pop();
     localStorage.removeItem("address");
     localStorage.removeItem("name");
     this.addArr = [];
 this.nameArr = [];
  }
  },
 
};
</script>


<style scoped>
p:nth-child(1) {
  margin: 0.03rem;
  font-size: 0.15rem;
  

}
p:nth-child(2) {
  margin: 0.03rem;
  font-size: 0.14rem;
  color: #666;

}
#remove {
  margin-top: 0.03rem;
  margin-left: 1.4rem;
   color:#3190e8;
  height: 0.4rem;
  font-size: 0.15rem;
 
}
</style>

