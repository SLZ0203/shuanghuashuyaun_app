<!--注册页面-->
<template>
  <section class="login_wrap">
    <div class="login_logo">
      <img src="../../../../static/images/1@2x.png" class="logo_img">
      <p>欢迎注册账号</p>
    </div>
    <ul class="login_list">
      <li class="login_item">
        <div>
          <img src="../../../../static/images/2@2x.png" class="email_img">
          <span>邮箱账号</span>
        </div>
        <input type="text" placeholder="请输入邮箱账号" v-model="email" maxlength="">
      </li>
      <li class="login_item top posi">
        <div>
          <img src="../../../../static/images/6@2x.png" class="login_img">
          <span>验证码</span>
        </div>
        <input type="password" placeholder="请输入验证码" v-model="code" maxlength="4">
        <button class="get_code" @click="getCode" :disabled="computeTime>0">
          {{computeTime>0 ? `重新获取${computeTime}s` : '获取验证码'}}
        </button>
      </li>
      <li class="login_item top">
        <div>
          <img src="../../../../static/images/3@2x.png" class="login_img">
          <span>密码</span>
        </div>
        <input type="password" placeholder="请输入6~12位密码" v-model="password" minlength="6" maxlength="12">
      </li>
    </ul>
    <div class="login_btn" @click="register">注册</div>
    <p class="to_login" @click="$router.push('/login')">已有账号，去登录</p>
  </section>
</template>


<script>
  import {Toast, MessageBox} from 'mint-ui'
  import {reqSendCode, reqEmailIsExist, reqRegister} from '../../../api'

  export default {
    name: "Register",
    data() {
      return {
        email: '',//邮箱账号
        password: '',//密码
        code: '',//验证码
        computeTime: 0,
        timer: null //定时器
      }
    },
    methods: {
      //获取验证码
      async getCode() {
        //前台验证
        if (!this.email) {
          return Toast('邮箱不能为空')
        } else if (!this.isRightEmail) {
          return Toast('请输入正确的邮箱')
        } else {
          this.computeTime = 60;
          this.intervalId = setInterval(() => {
            if (this.computeTime <= 0) {
              clearInterval(this.intervalId);
              this.computeTime = 0;
              return
            }
            this.computeTime--;
          }, 1000);
          //发送请求获取验证码
          const result = await reqSendCode(this.email);
          console.log(result);
          if (result.code === 200) {
            Toast(result.msg)
          } else {
            this.computeTime = 0;
            MessageBox.alert(result.msg).then(action => {
              console.log('点击确定')
            })
          }
        }

      },
      //请求注册
      async register() {
        const {email, code, password} = this;
        let result;
        if (!email) {
          return Toast('邮箱不能为空')
        } else if (!this.isRightEmail) {
          return Toast('请输入正确的邮箱')
        } else if (!code) {
          return Toast('验证码不能为空')
        } else if (!password) {
          return Toast('密码不能为空')
        } else {
          //验证邮箱是否已经注册
          result = await reqEmailIsExist(email);
          console.log(result);
          if (result.code === 404) {
            Toast(result.msg + ',请您登陆');
            this.timer = setTimeout(() => {
              this.$router.replace('/login')
            }, 2000)
          } else {
            //注册的请求
            result = await reqRegister(email, password);
            console.log(result);
            if (result.code === 200) {
              Toast(result.msg + ',去登陆');
              this.timer = setTimeout(() => {
                this.$router.replace('/login')
              }, 2000)
            } else {
              Toast(result.msg + '，请您重试')
            }
          }
        }
      }
    },
    computed: {
      isRightEmail() {
        return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.email)
      }
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
      clearTimeout(this.timer);
      this.timer = null
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .login_wrap
    width 100%
    height 100%
    padding 170px 64px 0 55px
    box-sizing border-box
    background #fff
    .toast
      display inline-block
      width 100px
      height 40px
    .login_logo
      width 100%
      text-align: center
      .logo_img
        width 148px
        height 127px
      p
        margin-top 65px
        font-size 44px
    .login_list
      width 100%
      margin-top 126px
      .top
        margin-top 70px
      .posi
        position relative
      .login_item
        input
          width 100%
          height 70px
          outline none
          margin-top 15px
          font-size 28px
          border-bottom 1px solid #999
          &::-webkit-input-placeholder /*Webkit browsers*/
            font-size 24px
            color: #ccc
        .login_img
          width 33px
          height 37px
        .email_img
          width 33px
          height 25px
        span
          color #999
          font-size 28px
          margin-left 11px
        .get_code
          background none
          border none
          color #999
          font-size 28px
          position absolute
          right 0
          top 70px
          width 210px
          text-align: center
          border-left 1px solid #ccc
    .login_btn
      width 100%
      height 104px
      text-align: center
      line-height 104px
      margin-top 85px
      background $main
      border-radius 50px
      font-size 30px
      color #fff
    .to_login
      margin-top 40px
      text-align: center
      color $main
</style>
