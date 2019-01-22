<!--使用优惠券页面-->
<template>
  <section class="pact_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="nonuse" @click="noneUse" v-if="coupons.length>0">
      <span>不使用优惠券</span>
      <span class="checkbox" :class="{checked:isChecked}"></span>
    </div>
    <section class="scroll_wrap" v-if="coupons.length>0">
      <ul class="coupon_list">
        <li class="coupon_item" v-for="(cou,index) in coupons" :key="index" @click="checkCoupon(cou,index)">
          <div class="left_wrap">
            <span class="money">￥</span>
            <span class="num">{{cou.coupon_quota_rmb}}</span>
            <div class="full">满{{cou.coupon_condition_rmb}}使用</div>
          </div>
          <div class="right_wrap">
            <div>
              <p class="buy">{{cou.coupon_name}}</p>
              <p class="full_sub">满{{cou.coupon_condition_rmb}}减{{cou.coupon_quota_rmb}}</p>
            </div>
            <div class="checkdiv" :class="{on:thatNum===index}"></div>
          </div>
        </li>
      </ul>
    </section>
    <div class="no_coupon" v-if="coupons.length===0">对不起，您没有优惠券</div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "UseCoupon",
    data() {
      return {
        title: '使用优惠券',
        isChecked: false,
        thatNum: '',
      }
    },
    methods: {
      _initScroll() {
        this.$nextTick(() => {
          if (this.coupons){
            if (!this.myscroll) {
              this.myscroll = new BScroll('.scroll_wrap', {
                click: true
              })
            } else {
              this.myscroll.refresh()
            }
          }
        })
      },
      noneUse() {
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
          this.thatNum = '';
          this.$store.dispatch('restUseCoupon');
          this.$router.back()
        }
      },
      checkCoupon(cou, index) {
        this.thatNum = index;
        this.isChecked = false;
        const useCoupons = {
          full: cou.coupon_condition_rmb,
          sub: cou.coupon_quota_rmb,
          id: cou.coupon_id
        };
        this.$store.dispatch('saveUseCoupon', useCoupons);
        this.$router.back()
      }
    },
    mounted() {
      this._initScroll()
    },
    computed: {
      ...mapState(['coupons'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .pact_wrap
    width 100%
    height 100%
    .nonuse
      width 100%
      height 90px
      background #fff
      padding 0 50px
      margin 24px 0
      font-size 30px
      box-sizing border-box
      display flex
      align-items center
      justify-content space-between
      .checkbox
        display inline-block
        width 45px
        height 45px
        border-radius 50%
        background-size 100%
        bg-image("../../../../static/images/27")
        &.checked
          bg-image("../../../../static/images/29")
    .scroll_wrap
      width 100%
      background #fff
      overflow hidden
      position fixed
      top 256px
      bottom 0
      left 0
      .coupon_list
        width 100%
        padding 33px 33px 0
        box-sizing border-box
        background #fff
        .coupon_item
          width 100%
          height 180px
          margin-bottom 30px
          display flex
          background-size 100%
          bg-image("../../../../static/images/56")
          .left_wrap
            width 247px
            text-align: center
            padding-top 36px
            box-sizing border-box
            color #fff
            .money
              font-size 22px
            .num
              font-size 56px
            .full
              width 90px
              height 30px
              font-size 16px
              line-height 30px
              margin 0 auto
              margin-top 14px
              border 1px solid #fff
          .right_wrap
            width 454px
            padding 38px
            display flex
            justify-content space-between
            align-items center
            box-sizing border-box
            .buy
              font-size 26px
            .full_sub
              color #999999
              margin-top 20px
              font-size 24px
            .checkdiv
              display inline-block
              width 45px
              height 45px
              background-size 100%
              bg-image("../../../../static/images/27")
              &.on
                bg-image("../../../../static/images/29")
    .no_coupon
      text-align: center
      margin-top 200px
</style>
