<!--支付成功页面-->
<template>
  <section class="pact_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="img_wrap">
      <img src="../../../../static/images/31@2x.png" alt="">
    </div>
    <p class="text_wrap">恭喜你课程购买成功</p>
    <div class="btn_wrap">
      <span class="go_home" @click="$router.replace('/home')">返回首页</span>
      <span class="see_class" @click="$router.replace('/all')">查看课程</span>
    </div>
  </section>
</template>

<script>
  export default {
    name: "PayWin",
    data() {
      return {
        title: '支付成功'
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .pact_wrap
    width 100%
    height 100%
    background #fff
    .img_wrap
      width 100%
      text-align: center
      padding-top 140px
    .text_wrap
      width 100%
      height 160px
      line-height 160px
      text-align: center
      font-size 34px
    .btn_wrap
      width 100%
      text-align: center
      span
        display inline-block
        width 233px
        height 85px
        line-height 85px
        text-align: center
        margin 0 24px
        font-size 28px
        border-radius 10px
      .go_home
        border 2px solid $main
        box-sizing border-box
        color $main
      .see_class
        background $main
        color #fff
</style>
