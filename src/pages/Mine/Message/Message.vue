<!--我的消息页面-->
<template>
  <section class="message_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <ul class="msg_list">
        <li class="msg_item" v-for="(item,index) in msgArray" :key="index">
          <img :src="item.imgUrl" alt="">
          <div class="right_wrap">
            <div class="item_top">
              <span class="name">{{item.name}}</span>
              <span class="time">{{item.time}}</span>
            </div>
            <div class="text">{{item.text}}</div>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Message",
    data(){
      return{
        title: '我的消息',
        msgArray:[
          {
            imgUrl: '../../static/images/58@2x.png',
            name: '上课提醒',
            time: '17:00',
            text: '您的汉语课程明天上午10点开始，请注意时间'
          },
          {
            imgUrl: '../../static/images/58@2x.png',
            name: '上课提醒',
            time: '17:00',
            text: '您的汉语课程明天上午10点开始，请注意时间'
          },
          {
            imgUrl: '../../static/images/58@2x.png',
            name: '上课提醒',
            time: '17:00',
            text: '您的汉语课程明天上午10点开始，请注意时间'
          },
          {
            imgUrl: '../../static/images/58@2x.png',
            name: '上课提醒',
            time: '17:00',
            text: '您的汉语课程明天上午10点开始，请注意时间'
          },
          {
            imgUrl: '../../static/images/58@2x.png',
            name: '上课提醒',
            time: '17:00',
            text: '您的汉语课程明天上午10点开始，请注意时间'
          },
          {
            imgUrl: '../../static/images/59@2x.png',
            name: '会费到期',
            time: '17:00',
            text: '您的会员一年期限2019年10月10日到期，续费请到门店'
          },
          {
            imgUrl: '../../static/images/60@2x.png',
            name: '生日到期',
            time: '17:00',
            text: '王小明小朋友，双华书院祝你生日快乐，天天开心'
          },
          {
            imgUrl: '../../static/images/58@2x.png',
            name: '上课到期',
            time: '17:00',
            text: '您的汉语课程明天上午10点开始，请注意时间'
          }
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true
        })
      })
    },
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
</style>
