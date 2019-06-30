<template>
    <div>
    <h2>登录界面</h2>

    <input v-model="username"  placeholder="用户" type="text"><br>
    <input v-model="password" placeholder="密码" type="text"><br>
    <input v-model="codeNumber" placeholder="验证码" type="text">
    <img :src="code" alt="">
    <button @click="getCode()">换一张</button><br>
    <button @click="login()">登录</button>
  


   

    </div>
</template>


<script>
export default {
    name:"Login",
    data() {
        return {
            code:"",//存储验证码的base64位图片
            username:"",
            password:"",
            codeNumber:""//存储器验证码输入框的zhi
        }

        },
        //生命周期,在创建完成后,最先加载
        created(){
              this.getCode();
        },
    methods: {
        getCode(){
            const api = "https://elm.cangdu.org/v1/captchas";
            this.$http({
             url:api,
                method:"post",
                //用来表示用户代理是否应该在跨域请求的情况下从其他域发送cookies,默认为false--是否请求缓存数据 --- 不使用缓存数据
                withCredentials:true
            }).then(res=>{
                this.code=res.data.code;
               

            })
        },
        login(){
            const api="https://elm.cangdu.org/v2/login";
            this.$http({
                url:api,
                method:"post",
               
                data:{
                    username:this.username,
                    password:this.password,
                    captcha_code:this.codeNumber
                },
                 withCredentials:true
                
            }).then(res=>{
                console.log("login数据");
                console.log(res);
            })

        }
    }
}
</script>


<style scoped>

</style>
