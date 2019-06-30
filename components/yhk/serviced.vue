<template>
<div id="serviced">
  
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP">服务中心</p>
    </div>
    <div id="top">  
    <div id="kf1">
   <img class="img1" src="../../../static/imgs/kefu.png" alt="" width="16%">
   <p class="p1">在线客服</p>
    </div>
    <div id="kf2">
   <img class="img1" src="../../../static/imgs/dianhua.png" alt="" width="16%">
   <p class="p1">在线客服</p>
    </div>
   </div>
   
    <p id="hotp">热门问题</p>
    <ul class="li">
    <li  @click="get1()">{{msg.supervipCaption}}</li>  
  <li @click="get2()">{{msg.signCaption}}</li>
  <li @click="get3()">{{msg.rankCaption}}</li>
  <li @click="get4()">{{msg.pointtextCaption}}</li>
  <li @click="get5()">{{msg.phototutorialCaption}}</li>
  <li @click="get6()">{{msg.paymentCaption}}</li>
  <li @click="get7()">{{msg.otherCaption}}</li>
  <li @click="get8()">{{msg.ontimeCaption}}</li>
  <li @click="get9()">{{msg.freshmanCaption}}</li>
  <li @click="get10()">{{msg.forgotCaption}}</li>
  <li @click="get11()">{{msg.discountCaption}}</li>
  <li @click="get12()">{{msg.disclaimerCaption}}</li>
  <li @click="get13()">{{msg.businessCaption}}</li>
  <li @click="get14()">{{msg.awesomeRestaurantCaption}}</li>
  <li @click="get15()">{{msg.anonymousBuyCaption}}</li>
  <li @click="get16()">{{msg.activityCaption}}</li>



  


  


  </ul>
</div>





    
</template>
<script>
export default {
    name:"serviced",
    data() {
        return {
          msg:"",
         
        }
    },
    created () {
      this.service()
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
         service() {
      const api = "https://elm.cangdu.org/v3/profile/explain";
      this.$http({
        url: api,
        methods: "get",
        data: {}
      }).then(res => {
        this.msg = res.data;
        console.log(res);
      });
    },
    get1(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.supervipCaption,
          content:this.msg.supervipContent,
        }
      })
    },
    get2(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.signCaption,
          content:this.msg.signContent,
        }
      })
    },
     get3(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.rankCaption,
          content:this.msg.rankContent,
        }
      })
    },
    get3(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.rankCaption,
          content:this.msg.rankContent,
        }
      })
    },
    get4(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.pointtextCaption,
          content:this.msg.pointtextContent,
        }
      })
    },
       get5(){
            var a = 1;
            var b = false;
            var str = this.msg.phototutorialContent;
            var arr = [];
            var reg1 = /\([^\)]+\)/g;
            str.replace(reg1, function(s,value) {
//          alert(value); // value 就是 123456
            var s2 = s.substring(1,s.length-1);
            arr.push(s2);//所有图片的路径
       })
       var str2 = this.msg.phototutorialContent;
       var arr2 = [];
    var reg2 = /#{2}[^\<]+(。|~)/g;
    str.replace(reg2, function(s,value) {
//  console.log(s);
//  console.log(value);
    var s3 = s.substring(2,s.length-2);
    console.log(s3);
    
    arr2.push(s3);//所有图片的路径
    
    
       })
            this.$router.push({
                name:"hotproblem",              
                query:{data:arr,
                    datas:arr2,
                    A:a,
                    B:b,
                    title:this.msg.phototutorialCaption},
            })
            console.log(this.msg.phototutorialContent);
             
        },
     get6(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.paymentCaption,
          content:this.msg.paymentContent,
        }
      })
    },
    get7(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.otherCaption,
          content:this.msg.otherContent,
        }
      })
    },
      get8(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.ontimeCaption,
          content:this.msg.ontimeContent,
        }
      })
    },
     get9(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.freshmanCaption,
          content:this.msg.freshmanContent,
        }
      })
    },
    get10(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.forgotCaption,
          content:this.msg.forgotContent,
        }
      })
    },
     get11(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.discountCaption,
          content:this.msg.discountContent,
        }
      })
    },
    get12(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.disclaimerCaption,
          content:this.msg.disclaimerContent,
        }
      })
    },
    get13(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.businessCaption,
          content:this.msg.businessContent,
        }
      })
    },
    get14(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.awesomeRestaurantCaption,
          content:this.msg.awesomeRestaurantContent,
        }
      })
    },
    get15(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.anonymousBuyCaption,
          content:this.msg.anonymousBuyContent,
        }
      })
    },
     get16(){
      this.$router.push({
        name:"hotproblem",
        query:{
          title:this.msg.activityCaption,
          content:this.msg.activityContent,
        }
      })
    }
    }
}
</script>
<style scoped>
#serviced{
  background-color: #f5f5f5;
}
 
#head{
    width: 100vw;
    height: 0.45rem;
    background-color: #3190e8;
}
#headImg{
    margin-top: 0.1rem;
    width: 0.1rem;
    float: left;
     margin-left: 0.1rem;
}
#headP{
  margin-right: 0.1rem;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.2rem;
    font-weight:bold;
    color: white;
}
#top{
  
    display: flex;
}
#kf1{
    position: relative;
    width: 50vw;
    height: 0.9rem;
    background-color: white;
    margin-right: 0.0091rem;
}
.img1{
position: absolute;
left: 0.75rem;
top: 0.17rem;
}
.p1{
    font-size: 0.14rem;
    position: absolute;
left: 0.65rem;
top: 0.5rem;
}
#kf2{
    position: relative;
    width: 50vw;
    height: 0.9rem;
    background-color: white;
    
}

#hotp{
    margin-top: 0.012rem;
    font-size: 0.19rem;
    background-color: white;
    padding-left: 0.16rem;
    height:0.7rem;
    line-height: 0.7rem;
}
.li li{
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.14rem;
    padding-left: 0.15rem;
    margin-top: 0.01rem;
    background-color: white;
}
</style>
