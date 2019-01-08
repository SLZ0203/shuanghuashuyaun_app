<!--课程详情页面-->
<template>
  <section class="detail_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <div class="scroll_inner">
        <img v-lazy="'http://shedu.581vv.com'+detail.course_thumb" class="banner">
        <div class="pro_info">
          <p class="pro_name">
            <span>{{detail.course_name}}</span>
            <span class="class_time">{{detail.course_class_hour}}课时</span>
          </p>
          <span class="pro_year">{{detail.course_tags}}</span>
          <span class="pro_feat">特色课程</span>
          <p class="pro_price">
            {{detail.course_price_yen}}日元/{{detail.course_price_rmb}}人民币
          </p>
        </div>
        <div class="class_intro">
          <span class="title">课程简介</span>
          <p class="text">
            {{detail.course_introduction}}
          </p>
          <img v-lazy="'http://shedu.581vv.com'+detail.course_thumb">
          <p class="text">
            {{detail.course_introduction}}
          </p>
        </div>
      </div>
    </section>
    <div class="go_buy" @click="toPay(member_id,detail.course_id)">立即购买</div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import {reqCourseDetail, reqCreateOrder} from '../../../api'
  import {Indicator, Toast} from 'mint-ui';

  export default {
    name: "ProjectDetail",
    data() {
      return {
        title: '课程详情',
        course_id: this.$route.query.id,
        detail: {}
      }
    },
    async mounted() {
      //获取课程详情
      Indicator.open();
      const result = await reqCourseDetail(this.course_id);
      if (result.code === 200) {
        this.detail = result.data;
        this._initScroll();
        Indicator.close()
      } else {
        Toast(result.msg)
      }
    },
    methods: {
      _initScroll() {
        if (!this.myscroll) {
          this.myscroll = new BScroll('.scroll_wrap', {
            click: true
          })
        } else {
          this.myscroll.refresh()
        }
      },
      async toPay(mid, cid) {
        const result = await reqCreateOrder(mid, cid);
        const order_id = result.data;
        if (result.code === 200) {
          this.$router.push({
            path: '/class_payment',
            query: {
              detail: this.detail,
              order_id
            }
          })
        } else {
          Toast(result.msg)
        }
      }
    },
    computed: {
      ...mapState(['member_id'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detail_wrap
    width 100%
    height 100%
    .scroll_wrap
      width 100%
      position fixed
      top 117px
      bottom 100px
      overflow hidden
      .scroll_inner
        width 100%
        .banner
          width 100%
          height 422px
        .pro_info
          width 100%
          padding 30px
          box-sizing border-box
          background #fff
          margin-bottom 24px
          .pro_name
            font-size 40px
            line-height 40px
            font-weight 600
            display flex
            justify-content space-between
            .class_time
              font-size 32px
              color #656565
          .pro_year, .pro_feat
            display inline-block
            width 136px
            height 36px
            text-align: center
            line-height 36px
            font-size 24px
            border-radius 5px
            margin-top 18px
            overflow hidden
          .pro_year
            background #DAFCE4
            color #21BE87
          .pro_feat
            background #FFE5DE
            color #FF5F38
          .pro_price
            margin-top 18px
            font-size 30px
            color #FE5F35
        .class_intro
          width 100%
          padding 30px
          box-sizing border-box
          background #fff
          .title
            font-size 32px
            line-height 64px
          .text
            font-size 26px
            line-height 50px
            text-indent 52px
          img
            width 100%
            height 460px
    .go_buy
      width 100%
      height 100px
      background #1FBE86
      color #fff
      font-size 34px
      position fixed
      bottom 0
      text-align: center
      line-height 100px
</style>
