<!--新闻详情页面-->
<template>
  <section class="pact_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <div class="inner_box">
        <div>
          <p class="news_title">{{newsDetail.news_title}}</p>
          <p class="news_time">{{newsDetail.news_settime}}<!--<span>|</span>2018--></p>
        </div>
        <p class="news_text">
          {{newsDetail.news_center}}
        </p>
        <img :src="'http://shedu.581vv.com'+newsDetail.news_pic" class="news_img">
        <p class="news_text">
          {{newsDetail.news_center}}
        </p>
      </div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "NewsDetail",
    data() {
      return {
        title: '新闻详情'
      }
    },
    mounted() {
      this.$store.dispatch('getNewsDetail', () => {
        this.$nextTick(() => {
          new BScroll('.scroll_wrap', {
            click: true
          })
        })
      });
    },
    computed: {
      ...mapState(['newsDetail'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .pact_wrap
    width 100%
    height 100%
    background #fff
    .scroll_wrap
      width 100%
      height 100%
      .inner_box
        width 100%
        padding-bottom 120px
        .news_title, .news_time
          width 100%
          text-align: center
          line-height 56px
        .news_title
          font-size 32px
        .news_time
          font-size 24px
          color #999999
          span
            margin 0 10px
        .news_text
          width 100%
          padding 0 30px
          box-sizing border-box
          font-size 26px
          text-indent 52px
          line-height 50px
        .news_img
          width 642px
          height 503px
          margin 30px auto
          display block
</style>
