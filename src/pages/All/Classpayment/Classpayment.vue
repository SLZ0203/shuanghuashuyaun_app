<!--课程付款页面-->
<template>
  <section class="payment_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="class_info">
      <img src="../../../../static/images/12@2x.png">
      <div>
        <p class="class_name">{{course_name}}</p>
        <p class="class_time">{{class_hour}}课时</p>
        <p class="class_price">{{course_price_yen}}日元/{{course_price_rmb}}人民币</p>
      </div>
    </div>
    <ul class="coupon_list">
      <li class="cou_item" @click="useCoupon()">
        <div class="name">优惠券</div>
        <div class="content">
          <span>无优惠券</span>
          <img src="../../../../static/images/26@2x.png" class="more_img">
        </div>
      </li>
      <li class="cou_item">
        <div class="name">课程金额</div>
        <div class="content">{{course_price_yen}}日元/{{course_price_rmb}}人民币</div>
      </li>
      <li class="cou_item">
        <div class="name">课程总额</div>
        <div class="content price">1000日元/62人民币</div>
      </li>
    </ul>
    <ul class="payment_list">
      <li class="pay_item">请选择支付方式</li>
      <li class="pay_item back" :class="{check:num===0}"
          @click="num=0">
        <img src="../../../../static/images/22@2x.png" class="pay_icon">
        <span>微信支付</span>
      </li>
      <li class="pay_item back" :class="{check:num===1}"
          @click="num=1">
        <img src="../../../../static/images/23@2x.png" class="pay_icon">
        <span>支付宝支付</span>
      </li>
    </ul>
    <div class="agree" @click="$router.push('member_pact')">
      <span class="check" :class="{checked:isChecked}" @click.stop="isChecked=!isChecked"></span>
      <span>同意《会员合同》</span>
    </div>
    <div class="pay_btn">
      <div class="pay_money">1000日元/62人民币</div>
      <div class="btn" :class="{click:isChecked===true&&num!==''}" @click="goBuy">立即购买</div>
    </div>
  </section>
</template>

<script>

  export default {
    name: "Classpayment",
    data() {
      return {
        title: '课程付款',
        num: "",
        isChecked: false,//会员合同选择
        course_name: this.$route.query.course_name,
        class_hour: this.$route.query.class_hour,
        course_price_yen: this.$route.query.course_price_yen,
        course_price_rmb: this.$route.query.course_price_rmb
      }
    },
    methods: {
      //点击使用优惠券
      useCoupon() {
        this.$store.dispatch('getCoupons');
        this.$router.push('/use_coupon')
      },
      //点击支付按钮
      goBuy() {
        /*
        * 同时满足两个条件后可以跳转
        * 1.选择了支付方式
        * 2.同意了客户合同
        * */
        if (this.isChecked === true && this.num !== '') {
          this.$router.push('pay_win')
        }
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .payment_wrap
    width 100%
    height 100%
    .class_info
      width 100%
      display flex
      padding 0 30px 33px 30px
      box-sizing border-box
      background #fff
      img
        width 276px
        height 194px
        margin-right 26px
        border-radius 8px
      .class_name
        font-size 34px
        line-height 40px
        margin 30px 0 20px
      .class_time
        font-size 28px
        color #999
      .class_price
        margin-top 30px
        font-size 30px
        color #FE5F35
    .coupon_list
      width 100%
      padding 0 30px
      box-sizing border-box
      background #fff
      margin 24px 0
      .cou_item
        width 100%
        height 100px
        bottom-border-1px(#ccc)
        display flex
        align-items center
        justify-content space-between
        font-size 30px
        .content
          color #999
          .more_img
            width 13px
            height 25px
        .price
          color #FE5F35
    .payment_list
      width 100%
      padding 0 30px
      box-sizing border-box
      background #fff
      font-size 30px
      .pay_item
        height 100px
        bottom-border-1px(#ccc)
        line-height 100px
        &.back
          bg-image("../../../../static/images/25")
          background-position 100%
          background-size 44px 44px
          &.check
            bg-image("../../../../static/images/24")
        .pay_icon
          width 43px
          height 43px
          margin-right 30px
    .agree
      width 100%
      padding 0 30px
      box-sizing border-box
      text-align right
      height 90px
      line-height 90px
      font-size 28px
      color $main
      .check
        display inline-block
        width 30px
        height 30px
        background-color #fff
        border-radius 50%
        background-image url("../../../../static/images/25@2x.png")
        background-size 100%
        &.checked
          background-image url("../../../../static/images/24@2x.png")
    .pay_btn
      width 100%
      height 100px
      display flex
      position fixed
      bottom 0
      font-size 30px
      .pay_money
        width 480px
        color #FE5F35
        height 100%
        line-height 100px
        text-align right
        padding 0 22px
        box-sizing border-box
      .btn
        width 270px
        height 100%
        line-height 100px
        text-align: center
        background #ccc
        color #fff
        &.click
          background $main
</style>
