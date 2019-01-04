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
    <div class="remember" @click="checked=!checked">
      <span class="check_box" :class="{checked:checked}"></span>
      <span>记住密码</span>
    </div>
    <div class="login_btn" @click="login">登录</div>
    <div class="wechat" @click="wechatLogin">
      <img src="../../../static/images/4@2x.png" class="wechat_img">
      <p>微信登录</p>
    </div>
  </section>
</template>

<script>
  import {reqEmailLogin, reqUploadImg, reqWechatLogin} from '../../api'
  import {mapState} from 'vuex'
  import {Toast} from 'mint-ui'

  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: '',
        checked: true,
      }
    },
    mounted() {
      this.getCookie();
    },
    methods: {
      //请求登录的逻辑
      async login() {
        const that = this;
        const {email, password} = that;
        //前台表单验证
        if (!that.email) {
          Toast('邮箱不能为空')
        } else if (!that.password) {
          Toast('密码不能为空')
        } else if (!that.isRightEmail) {
          Toast('请输入正确的邮箱')
        } else {
          //判断记住密码复选框是否被勾选 勾选则调用配置cookie方法
          if (that.checked) {
            this.setCookie(that.email, that.password, 10)
          } else {
            this.clearCookie()
          }
          //登录的请求
          const result = await reqEmailLogin(email, password);
          if (result.code === 404) {
            if (result.msg === '用户不存在') {
              Toast(result.msg + '，请您注册');
              that.timer = setTimeout(() => {
                that.$router.replace('/register')
              }, 2000)
            } else {
              Toast(result.msg)
            }
          } else {
            const user = result.data;
            //保存用户信息
            that.$store.dispatch('saveUser', user);
            //缓存用户名
            localStorage.setItem('email', user.member_email);
            if (user.member_realname && user.member_sex >= 0 && user.member_birthday && user.member_detail_addr && user.member_industry && user.member_phone) {
              Toast(result.msg);
              //跳转到首页
              that.$router.replace('/home')
            } else {
              Toast('请完善您的信息');
              //跳转到完善信息页面
              this.$router.replace('/perfectmsg')
            }
          }
        }
      },
      //设置cookie
      setCookie(name, pwd, days) {
        const date = new Date();//获取时间
        //保存的天数
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * days);
        //字符串拼接cookie
        window.document.cookie = "userName" + "=" + name + ";path=/;expires=" + date.toGMTString();
        window.document.cookie = "userPwd" + "=" + pwd + ";path=/;expires=" + date.toGMTString();
      },
      //获取cookie
      getCookie() {
        if (document.cookie.length > 0) {
          const arr = document.cookie.split('; ');
          for (let i = 0; i < arr.length; i++) {
            const arr2 = arr[i].split('=');
            if (arr2[0] === 'userName') {
              this.email = arr2[1]; //保存到保存数据的地方
            } else if (arr2[0] === 'userPwd') {
              this.password = arr2[1];
            }
          }
        }
      },
      //清除cookie
      clearCookie() {
        this.setCookie('', '', -1)
      },
      //微信登录的请求
      async wechatLogin() {
        const result = await reqWechatLogin();
      },
    },
    computed: {
      ...mapState(['user']),
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
    .remember
      width 100%
      margin-top 30px
      span
        font-size 28px
      .check_box
        display inline-block
        width 30px
        height 30px
        border 1px solid
        border-radius 5px
        margin-right 5px
        background #eee
        background-repeat no-repeat
        background-size 100%
        &.checked
          background-image url("../../../static/images/true.jpg")
    .login_btn
      width 100%
      height 104px
      text-align: center
      line-height 104px
      margin-top 70px
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
