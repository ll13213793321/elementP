    <template>
<div id="purchasehistory">
  
    <div id="head">
        <img @click="back()"  id="headImg" src="../../../static/imgs/back.png" alt="">
        <p id="headP" >购买记录 </p>
        
    </div>
    <img id="img" src="../../../static/imgs/jilu3.png" alt="">
    <p id="p1">没有购买记录</p>
 




</div>





    
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"purchasehistory",
    data() {
        return {
  
        }
    },
    created () {
      
    },
    
    methods: {
        back(){
            this.$router.go(-1);
        },
    
  
    }
}
</script>
<style scoped>

 
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
  margin-right: 0.18rem;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.2rem;
    font-weight:bold;
    color: white;
}
#img{
    position: absolute;
    top: 1.88rem;
    left: 1.32rem;
}
#p1{
    position: absolute;
    font-size: 0.14rem;
 top: 3rem;
    left: 1.45rem;  
        color: #999;
}
</style>
