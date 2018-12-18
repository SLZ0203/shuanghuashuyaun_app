<!--会员合同页面-->
<template>
  <section class="pact_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="scroll_wrap">
      <div class="scroll_inner">
        <p class="title">《会员合同》</p>
        <p class="content">
          本服务条款约定随身云与您之间关于“会员”服务的各项事项。
          “会员”是指注册、登录、使用本服务条款中随身云提供的各种服务的个人。
          会员服务是有偿的增值服务，会员必须完全同意本服务条款，并完成付费，才能享受相关服务。
          在您注册成为会员之前，请认真阅读本《会员服务协议》（以下简称“服务协议”），
          确保您充分理解服务协议中各条款，包括免除随身云责任的条款及限制会员权利的条款。
          请您审慎阅读并选择接受或不接受本服务协议。除非您接受本服务协议所有条款，
          否则您不得注册、登录或使用本服务协议所涉服务。您的注册、登录、使用等行为将视为对本服务协议的接受，
          并同意接受本服务协议各项条款的约束。
          本服务协议可由随身云随时更新，更新后的服务协议一旦公布即代替原来的服务协议，恕不再另行通知，
          用户可在应用内查阅最新版服务协议。
        </p>
        <p class="content">
          本服务条款约定随身云与您之间关于“会员”服务的各项事项。
          “会员”是指注册、登录、使用本服务条款中随身云提供的各种服务的个人。
          会员服务是有偿的增值服务，会员必须完全同意本服务条款，并完成付费，才能享受相关服务。
          在您注册成为会员之前，请认真阅读本《会员服务协议》（以下简称“服务协议”），
          确保您充分理解服务协议中各条款，包括免除随身云责任的条款及限制会员权利的条款。
          请您审慎阅读并选择接受或不接受本服务协议。除非您接受本服务协议所有条款，
          否则您不得注册、登录或使用本服务协议所涉服务。您的注册、登录、使用等行为将视为对本服务协议的接受，
          并同意接受本服务协议各项条款的约束。
          本服务协议可由随身云随时更新，更新后的服务协议一旦公布即代替原来的服务协议，恕不再另行通知，
          用户可在应用内查阅最新版服务协议。
        </p>
        <p class="content">
          本服务条款约定随身云与您之间关于“会员”服务的各项事项。
          “会员”是指注册、登录、使用本服务条款中随身云提供的各种服务的个人。
          会员服务是有偿的增值服务，会员必须完全同意本服务条款，并完成付费，才能享受相关服务。
          在您注册成为会员之前，请认真阅读本《会员服务协议》（以下简称“服务协议”），
          确保您充分理解服务协议中各条款，包括免除随身云责任的条款及限制会员权利的条款。
          请您审慎阅读并选择接受或不接受本服务协议。除非您接受本服务协议所有条款，
          否则您不得注册、登录或使用本服务协议所涉服务。您的注册、登录、使用等行为将视为对本服务协议的接受，
          并同意接受本服务协议各项条款的约束。
          本服务协议可由随身云随时更新，更新后的服务协议一旦公布即代替原来的服务协议，恕不再另行通知，
          用户可在应用内查阅最新版服务协议。
        </p>
      </div>
    </div>
    <div class="agree_btn">同意会员合同</div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "MemberPact",
    data() {
      return {
        title: '会员合同'
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .pact_wrap
    width 100%
    height 100%
    .scroll_wrap
      width 100%
      height 100%
      background #fff
      overflow hidden
      .scroll_inner
        width 100%
        padding-bottom 230px
        .title
          width 100%
          height 120px
          text-align: center
          line-height 120px
          font-size 34px
        .content
          width 100%
          padding 0 30px
          box-sizing border-box
          text-indent 48px
          font-size 24px
          line-height 48px
    .agree_btn
      width 100%
      height 100px
      position fixed
      bottom 0
      text-align: center
      line-height 100px
      background $main
      color #fff
      font-size 34px
</style>
