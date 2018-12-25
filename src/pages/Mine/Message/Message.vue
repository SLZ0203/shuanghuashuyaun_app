<!--我的消息页面-->
<template>
  <section class="message_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <ul class="msg_list">
        <li class="msg_item" v-for="(item,index) in myInform" :key="index">
          <img v-lazy="'http://shedu.581vv.com'+item.inform_pic" alt="">
          <div class="right_wrap">
            <div class="item_top">
              <span class="name">{{item.inform_name}}</span>
              <span class="time">{{item.inform_times}}</span>
            </div>
            <div class="text">{{item.inform_center}}</div>
          </div>
        </li>
      </ul>
      <div class="noMsg" v-if="myInform.length===0">暂时没有新消息</div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "Message",
    data() {
      return {
        title: '我的消息',
      }
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
    },
    computed: {
      ...mapState(['myInform'])
    },
    watch: {
      myInform: function (value) {
        this._initScroll()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .message_wrap
    width 100%
    height 100%
    background #fff
    .scroll_wrap
      width 100%
      height 100%
      .msg_list
        width 100%
        padding 0 30px 120px
        box-sizing border-box
        .msg_item
          width 100%
          display flex
          bottom-border-1px(#ccc)
          padding 40px 0
          img
            width 80px
            height 80px
            border-radius 50%
            margin-right 20px
          .right_wrap
            width 100%
            .item_top
              width 100%
              display flex
              justify-content space-between
              margin-bottom 34px
              .name
                font-size 30px
              .time
                font-size 24px
                color #666666
            .text
              line-height 40px
              font-size 26px
              width 460px
      .noMsg
        width 100%
        margin-top 150px
        text-align: center
        color #aaa
        font-size 28px
</style>
