<!--课程付款页面-->
<template>
  <section class="payment_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="class_info">
      <img v-lazy="'http://shedu.581vv.com'+detail.course_thumb">
      <div>
        <p class="class_name">{{detail.course_name}}</p>
        <p class="class_time">{{detail.course_class_hour}}课时</p>
        <p class="class_price">{{detail.course_price_yen}}日元/{{detail.course_price_rmb}}人民币</p>
      </div>
    </div>
    <ul class="coupon_list">
      <li class="cou_item" @click="useCoupon()">
        <div class="name">优惠券</div>
        <div class="content">
          <span v-if="useCoupons.full" class="full_sub">满{{useCoupons.full}}减{{useCoupons.sub}}</span>
          <span v-else>无优惠券</span>
          <img src="../../../../static/images/26@2x.png" class="more_img">
        </div>
      </li>
      <li class="cou_item">
        <div class="name">课程金额</div>
        <div class="content">{{detail.course_price_yen}}日元/{{detail.course_price_rmb}}人民币</div>
      </li>
      <li class="cou_item">
        <div class="name">课程总额</div>
        <div class="content price">{{detail.course_price_yen}}日元/{{detail.course_price_rmb}}人民币</div>
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
      <span class="check" :class="{checked:agreen}" @click.stop="isAgreen"></span>
      <span>同意《会员合同》</span>
    </div>
    <div class="pay_btn">
      <div class="pay_money">{{detail.course_price_yen}}日元/{{detail.course_price_rmb}}人民币</div>
      <div class="btn" :class="{click:isChecked===true&&num!==''}" @click="goBuy">立即购买</div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {Toast} from 'mint-ui'
  import {wxPay, aliPay} from '../../../api'
  import wx from 'weixin-js-sdk'

  export default {
    name: "Classpayment",
    data() {
      return {
        title: '课程付款',
        num: "",
        isChecked: false,//会员合同选择
        detail: this.$route.query.detail,
        order_id: this.$route.query.order_id,
        wxJson: {}
      }
    },
    methods: {
      //点击使用优惠券
      useCoupon() {
        this.$store.dispatch('getCoupons');
        this.$router.push('/use_coupon')
      },
      isAgreen() {
        this.isChecked = !this.isChecked;
        this.$store.dispatch('userAgreen', this.isChecked)
      },
      //点击支付按钮
      async goBuy() {
        let result;
        if (this.num === '') {
          Toast('请您选择支付方式！')
        } else if (!this.agreen) {
          Toast('请您同意会员合同！')
        } else {
          if (this.num === 0) { //微信支付
            result = await wxPay(222, this.useCoupons.id);
            console.log(result);
            /*if (result.code === 200) {
              this.wxJson = result.data;
              this.wx_pay()
            }*/
            //this.$router.push('pay_win')
          } else {//支付宝支付
            result = await aliPay(222, this.useCoupons.id);
            console.log(result);
            //this.$router.push('pay_win')
          }
        }
      },
      //微信支付逻辑
      wx_pay() {
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: this.wxJson.appid,
          timestamp: this.wxJson.mch_id,
          nonceStr: this.wxJson.nonce_str, // 必填，生成签名的随机串
          signature: this.wxJson.sign,
          jsApiList: [
            'chooseWXPay'
          ] // 必填，需要使用的JS接口列表
        });
        wx.ready(() => {
          wx.chooseWXPay({
            appId: this.wxJson.appid,
            nonceStr: this.wxJson.nonce_str, // 必填，生成签名的随机串
            timestamp: this.wxJson.mch_id,
          })
        })
      }
    },
    computed: {
      ...mapState(['useCoupons', 'agreen'])
    },
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
        margin-top 20px
      .class_time
        margin 20px 0
        font-size 28px
        color #999
      .class_price
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
          .full_sub
            color #FE5F35
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
