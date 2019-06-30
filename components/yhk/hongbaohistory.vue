<template>
<div id="hongbaohistory">
  
    
    
    <div id="head">
        <!-- <img @click="goback()" id="_head" src="../../../static/imgs/back.png" alt=""> -->
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >历史红包 </p>
        
    </div>

    <div  id="ul" :key="i" v-for="(v,i) in datas">
        <div id="price">
         <p id="num"> <strong>${{(v.amount).toFixed(1)}} </strong></p> 
         <p id="num2">满{{v.sum_condition}}元可用</p>
        </div>
        <p id="fx" >{{v.name}}</p>
        <p class="rq">{{v.end_date}}到期</p>

        <img class="rq2" src="../../../static/imgs/guoqi.jpg" alt="" width="20%">
        <p id="phone">限收货手机号为 {{v.phone}}</p>
    </div>
    
   
</div>





    
</template>
<script>
export default {
    name:"hongbaohistory",
    data() {
        return {
     datas:""
        }
    },
    created () {
   this.hongbao();
    },
    methods: {
        back(){
            this.$router.go(-1);
        },
    hongbao(){
        const api="https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=5&offset=0"
        this.$http({
            url:api,
            methods:"get",
            data:{

            }

        }).then(res=>{
        this.datas=res.data;
        console.log(res)
        })
    }
  
    }
}
</script>
<style scoped>
#mydiscount{
  background-color: #f5f5f5;
  height: 100vh;
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
#title{
    background-color: white;
    height: 0.45rem;
   display: flex;
}
#p1{
    width: 50vw;
    text-align: center;
    font-size: 0.15rem;
    height: 0.45rem;
    line-height: 0.45rem;
    text-decoration:underline;
    /* color: #3190e8; */
}
#p2{
    width: 50vw;
    text-align: center;
    font-size: 0.15rem;
    height: 0.45rem;
    line-height: 0.45rem;
    text-decoration:underline;
}

#ul{
    position: relative;
   
}
#fx{
    
    margin-top: 0.12rem;
    margin-left: 0.15rem;
    margin-right: 0.15rem;
    padding-left: 1.1rem;
    padding-top: 0.2rem;
    color: #666;
    height: 0.9rem;
    font-size: 0.16rem;
    background-color: white;
     border-top: 0.03rem dotted #999;
    
     
}
.rq2{
    position: absolute;
    top: 0.15rem;
    left: 2.85rem;
     color: #999;

}
#phone{
     position: absolute;
    top: 0.6rem;
    left: 1.25rem;
     color: #999;
}

#num{
    position: absolute;
    font-size: 0.35rem;
   color:  #ccc;
    top:0.2rem;
    left: 0.3rem;
}
#num2{
    position: absolute;
    font-size: 0.13rem;
     color: #999;
  
    top:0.7rem;
    left: 0.4rem;
}
#txt1{
    height: 0.3rem;
    line-height: 0.3rem;
    background-color: #f9f9f9;
    margin-left: 0.2rem;   
    margin-right: 0.2rem;    
   padding-left: 0.15rem;
    color: #999;

}
#txt2{
    color: #999;

     margin-left: 1.5rem;   
    margin-top: 0.2rem;    
}

#bottom{
    margin-top: 0.35rem;
    height: 0.45rem;
    background-color: white;
    display: flex;
}
.bottomP{
    text-align: center;
    line-height: 0.45rem;
    width: 49vw;
  font-size: 0.15rem;
}
.rq{
    position: absolute;
    top: 0.45rem;
    left: 1.25rem;
     color: #999;

}
</style>
