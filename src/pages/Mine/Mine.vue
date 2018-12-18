<!--我的-->
<template>
  <section class="mine_wrap">
    <HeaderTop :title="title"></HeaderTop>
    <section class="scroll_wrap">
      <div class="inner_wrap">
        <div class="user_info">
          <div class="inner">
            <img src="../../../static/images/36@2x.png" alt="">
            <div>
              <p class="user_name">王小明</p>
              <p class="user_num">会员号：552541</p>
            </div>
          </div>
        </div>
        <ul class="mine_list">
          <li class="mine_item" @click="$router.push('/mydata')">
            <div>
              <img src="../../../static/images/38@2x.png" class="iconImg">
              <span class="name">我的资料</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="$router.push('/myproject')">
            <div>
              <img src="../../../static/images/39@2x.png" class="iconImg">
              <span class="name">我的课程</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="$router.push('/myconsume')">
            <div>
              <img src="../../../static/images/40@2x.png" class="iconImg">
              <span class="name">我的消费明细</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="$router.push('/goodfriend')">
            <div>
              <img src="../../../static/images/41@2x.png" class="iconImg">
              <span class="name">好友推荐</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="$router.push('/coupon')">
            <div>
              <img src="../../../static/images/42@2x.png" class="iconImg">
              <span class="name">优惠券</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="$router.push('/message')">
            <div>
              <img src="../../../static/images/43@2x.png" class="iconImg">
              <span class="name">我的消息</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="$router.push('/aboutus')">
            <div>
              <img src="../../../static/images/44@2x.png" class="iconImg">
              <span class="name">关于我们</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="$router.push('/leaveword')">
            <div>
              <img src="../../../static/images/45@2x.png" class="iconImg">
              <span class="name">留言板</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
        </ul>
        <div class="exit">退出登录</div>
      </div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Mine",
    data() {
      return {
        title: '我的',
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/css/mixins.styl"
  .mine_wrap
    width 100%
    height 100%
    .scroll_wrap
      width 100%
      height 100%
      .inner_wrap
        width 100%
        padding-bottom 238px
        .user_info
          width 100%
          height 278px
          background-color #fff
          padding 10px
          box-sizing border-box
          .inner
            width 100%
            height 100%
            bg-image("../../../static/images/37")
            background-size 100% 100%
            background-repeat no-repeat
            display flex
            align-items center
            img
              width 131px
              height 132px
              border-radius 50%
              margin 0 20px 0 47px
            .user_name
              color #fff
              font-size 36px
              margin-bottom 36px
            .user_num
              color #fff
              font-size 28px
        .mine_list
          width 100%
          padding 0 30px
          box-sizing border-box
          background #fff
          .mine_item
            width 100%
            height 110px
            bottom-border-1px(#ccc)
            display flex
            align-items center
            justify-content space-between
            .iconImg
              width 42px
              height 45px
            .name
              margin-left 30px
              font-size 30px
            .more
              width 13px
              height 25px
        .exit
          width 100%
          height 80px
          text-align: center
          line-height 80px
          font-size 28px
          color #989898
</style>
