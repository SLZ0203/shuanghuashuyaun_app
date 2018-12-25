<!--首页-->
<template>
  <section class="home_wrap">
    <HeaderTop :title="title"></HeaderTop>
    <div class="scroll_wrap">
      <div class="outer_wrap">
        <div class="banner_wrap">
          <div class="swiper-container">
            <ul class="swiper-wrapper">
              <li class="swiper-slide" v-for="(ban,index) in banner" :key="index">
                <img v-lazy="'http://shedu.581vv.com'+ban.banner_pic">
              </li>
            </ul>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <ul class="btn_list">
          <li class="btn_item right" @click="$router.push('/all')">
            <img src="../../../static/images/8@2x.png" class="btn_img">
            <p>全部课程</p>
          </li>
          <li class="btn_item right" @click="$router.push('/allcampus')">
            <img src="../../../static/images/9@2x.png" class="btn_img">
            <p>全部校区</p>
          </li>
          <li class="btn_item" @click="$router.push('/active_news')">
            <img src="../../../static/images/10@2x.png" class="btn_img">
            <p>活动新闻</p>
          </li>
        </ul>
        <ul class="project_list bottom">
          <li class="pro_title">
            <span>热门课程</span>
            <span class="see_all" @click="$router.push('/all')">
              <span>查看全部</span>
              <img src="../../../static/images/5@2x.png" class="more_img">
            </span>
          </li>
          <li class="project_item" v-for="(pro,index) in hotCourse" :key="index"
              @click="$router.push('/project_detail')">
            <img v-lazy="'http://shedu.581vv.com'+pro.course_thumb">
            <div>
              <p class="pro_name">{{pro.course_name}}</p>
              <span class="pro_year ellipsis">{{pro.course_tags}}</span>
              <span class="pro_feat ellipsis">{{pro.course_introduction}}</span>
              <div class="pro_price">
                <span>{{pro.course_price_yen}}日元</span>
                <span>/</span>
                <span>{{pro.course_price_rmb}}人民币</span>
              </div>
            </div>
          </li>
        </ul>
        <ul class="news_list">
          <li class="news_title">
            <span>活动新闻</span>
            <span class="see_all" @click="$router.push('/active_news')">
              <span>查看全部</span>
              <img src="../../../static/images/5@2x.png" class="more_img">
            </span>
          </li>
          <li class="news_item" v-for="(news,index) in hotNews" :key="index" @click="$router.push('/news_detail')">
            <img v-lazy="'http://shedu.581vv.com'+news.news_pic">
            <div class="inner_wrap">
              <p class="pro_name">{{news.news_title}}</p>
              <div class="pro_data">
                <span>{{news.news_settime}}</span>
                <!--<span>|</span>
                <span>{{news.year}}</span>-->
              </div>
              <div class="pro_text">{{news.news_description}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "Home",
    data() {
      return {
        title: '首页',
      }
    },
    mounted() {
      //异步获取轮播图
      this.$store.dispatch('getBanner');
      //异步获取热门课程
      this.$store.dispatch('getHotcourse');
      //异步获取热门新闻
      this.$store.dispatch('getHotNews');
    },
    activated() {
      this._initScroll();
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
    },
    computed: {
      ...mapState(['banner', 'hotNews', 'hotCourse'])
    },
    watch: {
      banner(value) {
        this.$nextTick(() => {
          this.mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/css/mixins.styl"

  .home_wrap
    width 100%
    height: 100%
    .scroll_wrap
      width 100%
      height 100%
      overflow hidden
      .outer_wrap
        width 100%
        padding-bottom 230px
        .banner_wrap
          width 100%
          height 360px
          padding 0 30px
          box-sizing border-box
          background #fff
          img
            width 100%
            height 100%
            border-radius 15px
        .btn_list
          width 100%
          display flex
          padding 30px 30px 0
          box-sizing border-box
          background rgba(255, 255, 255, 1)
          .btn_item
            width 220px
            height 190px
            background-color: #F9F9F9
            border-radius 10px
            text-align: center
            padding-top 36px
            box-sizing border-box
            font-size 30px
            &.right
              margin-right 15px
            .btn_img
              width 48px
              height 48px
              margin-bottom 20px
        .project_list, .news_list
          width 100%
          padding 0 30px
          box-sizing border-box
          background rgba(255, 255, 255, 1)
          &.bottom
            margin-bottom 24px
          .pro_title, .news_title
            width 100%
            height 90px
            font-size 36px
            display flex
            align-items center
            justify-content space-between
            .see_all
              font-size 28px
              color #9A9A9A
              .more_img
                width 13px
                height 25px
          .project_item, .news_item
            width 100%
            padding 45px 0
            display flex
            bottom-border-1px(#ccc)
            img
              width 276px
              height 194px
              margin-right 26px
            .pro_name
              font-size 34px
              line-height 40px
            .pro_year, .pro_feat
              display inline-block
              width 136px
              height 36px
              text-align: center
              line-height 36px
              font-size 24px
              border-radius 5px
              margin-top 30px
            .pro_year
              background #DAFCE4
              color #21BE87
            .pro_feat
              background #FFE5DE
              color #FF5F38
            .pro_price
              margin-top 26px
              font-size 30px
              color #FE5F35
            .inner_wrap
              width 388px
              .pro_data
                color #999
                font-size 24px
                margin 17px 0
              .pro_text
                height 62px
                overflow hidden
                color #999
                line-height 30px
                font-size 24px
</style>
