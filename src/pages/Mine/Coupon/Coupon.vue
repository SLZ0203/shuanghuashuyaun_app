<!--优惠券页面-->
<template>
  <section class="coupon_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <nav class="navBar">
      <span :class="{on:num===0}" @click="change(0)">未使用</span>
      <span :class="{on:num===1}" @click="change(1)">已使用</span>
    </nav>
    <section class="scroll_wrap">
      <div class="inner_wrap">
        <!--未使用优惠券-->
        <ul class="unused_coupon_list" v-show="num===0">
          <li class="unused_item" v-for="(item,index) in myCoupons.not_used" :key="index">
            <div class="left_wrap">
              <span class="money">￥</span>
              <span class="num">{{item.coupon_quota_rmb}}</span>
              <div class="full">满{{item.coupon_condition_rmb}}使用</div>
            </div>
            <div class="right_wrap">
              <p class="buy">{{item.coupon_name}}</p>
              <p class="full_sub">满{{item.coupon_condition_rmb}}减{{item.coupon_quota_rmb}}</p>
            </div>
          </li>
          <div class="noCoupons" v-show="myCoupons.not_used.length===0">对不起，您没有未使用的优惠券</div>
        </ul>
        <!--已使用优惠券-->
        <ul class="used_coupon_list" v-show="num===1">
          <li class="used_item" v-for="(item,index) in myCoupons.used.length" :key="index"
              v-if="myCoupons.used.length">
            <div class="left_wrap">
              <span class="money">￥</span>
              <span class="num">{{item.coupon_quota_rmb}}</span>
              <div class="full">满{{item.coupon_condition_rmb}}使用</div>
            </div>
            <div class="right_wrap">
              <p class="buy">{{item.coupon_name}}</p>
              <p class="full_sub">满{{item.coupon_condition_rmb}}减{{item.coupon_quota_rmb}}</p>
            </div>
          </li>
          <div class="noCoupons" v-show="myCoupons.used.length===0">对不起，您没有已使用的优惠券</div>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "Coupon",
    data() {
      return {
        title: '优惠券',
        num: 0,
      }
    },
    mounted() {
      console.log(this.myCoupons);
    },
    methods: {
      _initScroll() {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.scroll_wrap', {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      change(index) {
        this.num = index;
        this._initScroll()
      }
    },
    computed: {
      ...mapState(['myCoupons'])
    },
    watch: {
      myCoupons: function (value) {
        this._initScroll()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .coupon_wrap
    width 100%
    height 100%
    background #fff
    .navBar
      width 100%
      height 50px
      line-height 50px
      text-align: center
      span
        display inline-block
        height 100%
        width 90px
        font-size 24px
        margin 0 20px
        &.on
          border-bottom 5px solid $main
    .scroll_wrap
      width 100%
      position fixed
      top 170px
      left 0
      bottom 0
      overflow hidden
      .inner_wrap
        width 100%
        padding-bottom 200px
        .unused_coupon_list, .used_coupon_list
          width 100%
          padding 0 33px
          box-sizing border-box
          .unused_item
            bg-image("../../../../static/images/56")
          .used_item
            bg-image("../../../../static/images/57")
          .unused_item, .used_item
            width 100%
            height 180px
            margin-bottom 30px
            display flex
            background-size 100%
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
              padding 38px
              box-sizing border-box
              .buy
                font-size 26px
              .full_sub
                color #999999
                margin-top 20px
                font-size 24px
          .noCoupons
            width 100%
            margin-top 200px
            text-align: center
            color #aaa
            font-size 28px
</style>
