<!--活动新闻页面-->
<template>
  <section class="active_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <ul class="news_list">
        <li class="news_item" v-for="(n,index) in news" :key="index"
            @click="$router.push('news_detail')">
          <img v-lazy="'http://shedu.581vv.com'+n.news_pic">
          <div class="inner_wrap">
            <p class="pro_name">{{n.news_title}}</p>
            <div class="pro_data">
              <span>{{n.news_settime}}</span>
              <!--<span>|</span>
              <span>{{n.year}}</span>-->
            </div>
            <p class="pro_text">{{n.news_description}}</p>
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
    name: "ActiveNews",
    data() {
      return {
        title: '活动新闻',
      }
    },
    mounted() {
      this.$store.dispatch('getNews', () => {
        this.$nextTick(() => {
          new BScroll('.scroll_wrap', {
            click: true
          })
        })
      });
    },
    computed: {
      ...mapState(['news'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .active_wrap
    width 100%
    height 100%
    .scroll_wrap
      width 100%
      height 100%
      overflow hidden
      .news_list
        width 100%
        padding 0 30px 118px
        box-sizing border-box
        background rgba(255, 255, 255, 1)
        .news_item
          width 100%
          padding 45px 0
          display flex
          bottom-border-1px(#ccc)
          img
            width 276px
            height 194px
            margin-right 26px
          .inner_wrap
            width 388px
            .pro_name
              font-size 34px
              line-height 40px
            .pro_data
              color #999
              font-size 24px
              margin 17px 0
            .pro_text
              color #999
              height 63px
              line-height 30px
              font-size 24px
              overflow hidden
</style>
