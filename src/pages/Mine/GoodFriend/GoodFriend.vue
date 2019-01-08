<!--好友推荐页面-->
<template>
  <section class="friend_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="scroll_wrap">
      <div class="inner_box">
        <div class="invitation">
          <div class="btn" @click="isShow=true">立即邀请</div>
        </div>
        <div class="title">邀请奖励</div>
        <p class="content">
          1.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级
          1.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级
        </p>
        <div class="title">邀请规则</div>
        <p class="content">
          1.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级<br>
          2.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级<br>
          3.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级<br>
          4.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级<br>
          5.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级<br>
          6.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级<br>
          7.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级<br>
          8.复制复制分享链接，邀请人注册账号填写我的专属邀请码，并选择加盟等级
        </p>
      </div>
    </div>
    <Shade v-show="isShow"/>
    <div class="toWay" v-show="isShow">
      <ul class="way_list">
        <li class="way_item">
          <div class="way_img">
            <img src="../../../../static/images/51@2x.png" alt="">
          </div>
          <p>微信好友</p>
        </li>
        <li class="way_item">
          <div class="way_img">
            <img src="../../../../static/images/52@2x.png" alt="">
          </div>
          <p>微信朋友圈</p>
        </li>
        <li class="way_item">
          <div class="way_img">
            <img src="../../../../static/images/53@2x.png" alt="">
          </div>
          <p>新浪微博</p>
        </li>
        <li class="way_item">
          <div class="way_img">
            <img src="../../../../static/images/54@2x.png" alt="">
          </div>
          <p>Safari中打开</p>
        </li>
        <li class="way_item">
          <div class="way_img">
            <img src="../../../../static/images/55@2x.png" alt="">
          </div>
          <p>复制链接</p>
        </li>
      </ul>
      <div class="cancel" @click="isShow=false">取 消</div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import Shade from '../../../components/Shade/Shade'
  export default {
    name: "GoodFriend",
    data(){
      return{
        title: '好友推荐',
        isShow: false
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.scroll_wrap', {
          click: true
        })
      })
    },
    components:{
      Shade
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .friend_wrap
    width 100%
    height 100%
    background #fff
    .scroll_wrap
      width 100%
      position fixed
      top 118px
      left 0
      bottom 0
      overflow hidden
      .inner_box
        width 100%
      .invitation
        width 100%
        height 438px
        bg-image("../../../../static/images/50")
        background-size 100% 100%
        position relative
        .btn
          width 506px
          height 98px
          font-size 32px
          position absolute
          bottom 25px
          left 50%
          color #fff
          transform translateX(-50%)
          text-align: center
          line-height 98px
      .title
        width 100%
        height 112px
        line-height 112px
        padding 0 50px
        box-sizing border-box
        font-size 32px
        color #FD5A55
        margin-top 25px
      .content
        width 100%
        padding 0 50px
        box-sizing border-box
        line-height 50px
        font-size 26px
        color #797979
    .toWay
      width 100%
      background #fff
      position fixed
      bottom 0
      z-index 100
      .way_list
        width 100%
        padding 60px 33px
        box-sizing border-box
        display flex
        justify-content space-between
        bottom-border-1px(#ccc)
        .way_item
          text-align: center
          font-size 22px
          .way_img
            width 123px
            height 123px
            line-height 123px
            border 1px solid #E6E6E6
            border-radius 30px
            margin-bottom 15px
            img
              width 65%
      .cancel
        width 100%
        height 110px
        text-align: center
        line-height 110px
        font-size 30px
        color #FD5264
</style>
