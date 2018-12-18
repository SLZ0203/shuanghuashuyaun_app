<!--使用优惠券页面-->
<template>
  <section class="pact_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="nonuse" @click="noneUse">
      <span>不使用优惠券</span>
      <span class="checkbox" :class="{checked:isChecked}"></span>
    </div>
    <section class="scroll_wrap">
      <ul class="coupon_list">
        <li class="coupon_item" v-for="(cou,index) in coupons" :key="index" @click="checkCoupon(index)">
          <div class="left_wrap">
            <span class="money">￥</span>
            <span class="num">{{cou.money}}</span>
            <div class="full">{{cou.full}}</div>
          </div>
          <div class="right_wrap">
            <div>
              <p class="buy">{{cou.buy}}</p>
              <p class="full_sub">{{cou.sub}}</p>
            </div>
            <div class="checkdiv" :class="{on:thatNum===index}"></div>
          </div>
        </li>
      </ul>
    </section>
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
        couponList: [
          {
            money: '50',
            full: '满400使用',
            buy: '购买课程抵扣券',
            sub: '满400减50'
          },
          {
            money: '100',
            full: '满600使用',
            buy: '购买课程抵扣券',
            sub: '满600减100'
          },
          {
            money: '200',
            full: '满1000使用',
            buy: '购买课程抵扣券',
            sub: '满1000减200'
          },
          {
            money: '200',
            full: '满1000使用',
            buy: '购买课程抵扣券',
            sub: '满1000减200'
          },
          {
            money: '200',
            full: '满1000使用',
            buy: '购买课程抵扣券',
            sub: '满1000减200'
          }, {
            money: '200',
            full: '满1000使用',
            buy: '购买课程抵扣券',
            sub: '满1000减200'
          }, {
            money: '200',
            full: '满1000使用',
            buy: '购买课程抵扣券',
            sub: '满1000减200'
          }, {
            money: '200',
            full: '满1000使用',
            buy: '购买课程抵扣券',
            sub: '满1000减200'
          },


        ]
      }
    },
    methods: {
      noneUse() {
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
          this.thatNum = '';
          this.$router.back()
        }
      },
      checkCoupon(index) {
        this.thatNum = index;
        this.isChecked = false;
        this.$router.back();
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true
        })
      })
    },
    computed:{
      ...mapState(['coupons'])
    }
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
      height 100%
      background #fff
      overflow hidden
      .coupon_list
        width 100%
        padding 33px 33px 256px
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
</style>
