<template>
    <div class="login">
      <div class="container">
        <div class="top-log">
          <a href="/#/index"><img src="/imgs/logo.png" alt=""></a>
        </div>
        <h2>欢迎注册</h2>
      </div>
      <div class="wrapper">
        <div class="container">
          <div class="login-form">
            <h3>
              <span class="checked">帐号注册</span>
            </h3>
            <div class="input">
              <div class="input-title">
                <span>账号</span>
              </div>
              <input type="text" placeholder="请输入帐号" v-model="username">
            </div>
            <div class="input">
              <div class="input-title">
                <span>密码</span>
              </div>
              <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="input">
              <div class="input-title">
                <span>邮箱</span>
              </div>
              <input type="text" placeholder="请输入邮箱" v-model="email">
            </div>
            <div class="input">
              <div class="input-title">
                <span>手机号</span>
              </div>
              <input type="text" placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="btn-box">
              <a href="javascript:;" class="btn" @click="register">注册</a>
            </div>
            <div class="tips">
              <!-- <div class="reg" @click="goToRegister">立即注册</div>
              <div class="reg">忘记密码？</div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-link">
          <a href="javascript:;" target="_blank">正品保障</a><span>|</span>
          <a href="javascript:;" target="_blank">急速物流</a><span>|</span>
          <a href="javascript:;" target="_blank">售后无忧</a><span>|</span>
          <a href="javascript:;" target="_blank">省心购</a>
        </div>
        <p class="copyright">本网站直接或间接向消费者推销商品或者服务的商业宣传均属于“广告”（包装及参数、售后保障等商品信息除外）</p>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'register',
    data(){
      return {
        username:'',
        password:'',
        email:'',
        phone:'',
        userId:''
      }
    },
    methods: {
        register() {
          let { username, password, email, phone } = this;
          if (username == '' || password == '' || email == '' || phone == '') {
            this.$message.error("请填写完整信息");
          }else{
            this.axios.post('/user/register', {
              username,
              password,
              email,
              phone
            }).then((res)=>{
              if (res.msg == "注册成功") {
                this.$message.success("注册成功")
                setTimeout(()=>{
                  this.goToRegister();
                }, 1700)
              } else {
                this.$message.error("用户已存在")
              }
            })
          }
          
        },
        goToRegister() {
          this.$router.push('/login');
        }
    }
    
  }
</script>
<style lang="scss" scoped>
  .login{
    &>.container{
      height:113px;
      display: flex;
      align-items: center;
      .top-log {
        width:auto;
        height:100%;
      }
      h2 {
        font-size: 24px;
      }
    }
    .wrapper{
    //   background:url('/imgs/login-bg.jpg') no-repeat center;
        background-color: #f8f8f8;
      .container{
        height:576px;
        .login-form{
          box-sizing: border-box;
          padding-left: 31px;
          padding-right: 31px;
          width:910px;
          height:510px;
          background-color:#ffffff;
          position:absolute;
          bottom:29px;
          left:13%;
          border: 1px solid #ddd;
          border-top: 3px solid #e4393c;
          h3{
            line-height:23px;
            font-size:24px;
            text-align:center;
            margin:40px auto 49px;
            .checked{
              color:#666666;
            }
            .sep-line{
              margin:0 32px;
            }
          }
          .input{
            display:inline-block;
            // width:348px;
            width: 100%;
            height:50px;
            border:1px solid #E5E5E5;
            margin-bottom:20px;
            display: flex;
            .input-title {
              width: 70px;
              height: 100%;
              // border: 1px solid red;
              display: flex;
              align-items: center;
              text-align: center;
              font-size: 16px;
              span {
                display: inline-block;
                margin: auto;
              }
            }
            input{
              width: 100%;
              height: 100%;
              border: none;
              padding: 18px;
            }
          }
          .btn{
            width:100%;
            line-height:50px;
            margin-top:10px;
            font-size:16px;
          }
          .tips{
            margin-top:14px;
            display:flex;
            justify-content:space-between;
            font-size:14px;
            cursor:pointer;
            .sms{
              color:red;
            }
            .reg{
              color:#999999;
              span{
                margin:0 7px;
              }
            }
          }
        }
      }
    }
    .footer{
      height:100px;
      padding-top:60px;
      color:#999999;
      font-size:16px;
      text-align:center;
      .footer-link{
        a{
          color:#999999;
          display:inline-block;
        }
        span{
          margin:0 10px;
        }
      }
      .copyright{
        margin-top:13px;
      }
    }
  }
</style>