<!--登录页面-->
<template>
  <section class="register_wrap">
    <div class="login_logo">
      <img src="../../../static/images/1@2x.png" class="logo_img">
      <p>欢迎登录账号</p>
    </div>
    <ul class="login_list">
      <li class="login_item">
        <div>
          <img src="../../../static/images/2@2x.png" class="email_img">
          <span>邮箱账号</span>
        </div>
        <input type="text" placeholder="请输入邮箱账号" v-model="email">
      </li>
      <li class="login_item top">
        <div>
          <img src="../../../static/images/3@2x.png" class="pwd_img">
          <span>密码</span>
        </div>
        <input type="password" placeholder="请输入密码" v-model="password">
      </li>
      <li class="register">
        <span class="to" @click="$router.push('/register')">没有账号，去注册</span>
        <span class="forget" @click="$router.push('/restpwd')">忘记密码</span>
      </li>
    </ul>
    <div class="login_btn" @click="login">登录</div>
    <div class="wechat">
      <img src="../../../static/images/4@2x.png" class="wechat_img">
      <p>微信登录</p>
    </div>
  </section>
</template>

<script>
  import {Toast} from 'mint-ui'
  import {reqEmailLogin} from '../../api'

  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login() {
        const {email, password} = this;
        //前台表单验证
        if (!this.email) {
          return Toast('邮箱不能为空')
        } else if (!this.password) {
          return Toast('密码不能为空')
        } else if (!this.isRightEmail) {
          return Toast('请输入正确的邮箱')
        } else {
          //登录的请求
          const result = await reqEmailLogin(email, password);
          if (result.code === 404) {
            if (result.msg === '用户不存在') {
              Toast(result.msg + '，请您注册');
              this.timer = setTimeout(() => {
                this.$router.replace('/register')
              }, 2000)
            } else {
              Toast(result.msg)
            }
          } else {
            Toast(result.msg);
            const user = result.data;
            //保存用户信息
            this.$store.dispatch('saveUser', user);
            //this.$router.replace('/perfectmsg')
            //跳转到首页
            this.$router.replace('/home')
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
      clearTimeout(this.timer)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/css/mixins.styl"

  .register_wrap
    width 100%
    height 100%
    padding 170px 64px 0 55px
    box-sizing border-box
    background #fff
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
        .email_img
          width 33px
          height 25px
        .pwd_img
          width 31px
          height 37px
        span
          color #999
          font-size 28px
      .top
        margin-top 70px
      .register
        margin-top 35px
        display flex
        justify-content space-between
        font-size 28px
        .to
          color $main
    .login_btn
      width 100%
      height 104px
      text-align: center
      line-height 104px
      margin-top 126px
      background $main
      border-radius 50px
      font-size 30px
      color #fff
    .wechat
      width 100%
      margin-top 50px
      text-align: center
      .wechat_img
        width 58px
        height 47px
      p
        font-size 22px
        margin-top 16px
        color $main
</style>
