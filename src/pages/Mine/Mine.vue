<!--我的-->
<template>
  <section class="mine_wrap">
    <HeaderTop :title="title"></HeaderTop>
    <section class="scroll_wrap">
      <div class="inner_wrap">
        <div class="user_info">
          <div class="inner">
            <img v-lazy="'http://shedu.581vv.com'+user.member_headpic" v-if="user.member_headpic">
            <img src="../../../static/images/36@2x.png" v-else>
            <div>
              <div v-if="user.member_nickname">
                <p class="user_name">{{user.member_nickname}}</p>
                <p class="user_num">会员号：{{user.member_id}}</p>
              </div>
              <p class="login" v-else @click="$router.push('/login')">请您登陆/注册</p>
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
          <li class="mine_item" @click="goTo('/myproject','getMyCourse')">
            <div>
              <img src="../../../static/images/39@2x.png" class="iconImg">
              <span class="name">我的课程</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="goTo('/myconsume','getMyExpense')">
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
          <li class="mine_item" @click="goTo('/coupon','getMyCoupons')">
            <div>
              <img src="../../../static/images/42@2x.png" class="iconImg">
              <span class="name">优惠券</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="goTo('/message','getMyInform')">
            <div>
              <img src="../../../static/images/43@2x.png" class="iconImg">
              <span class="name">我的消息</span>
            </div>
            <img src="../../../static/images/5@2x.png" class="more">
          </li>
          <li class="mine_item" @click="goTo('/aboutus','getAbout')">
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
        <div class="exit" @click="isShow=true" v-show="user.member_id">退出登录</div>
      </div>
    </section>
    <Shade v-show="isShow"/>
    <div class="login_out" v-show="isShow">
      <div class="top">您确定要退出吗？</div>
      <div class="bottom">
        <span class="no" @click="isShow=false">取消</span>
        <span class="yes" @click="loginOut">确定</span>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Shade from '../../components/Shade/Shade'

  export default {
    name: "Mine",
    data() {
      return {
        title: '我的',
        isShow: false,
        loginShow: true
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (!this.myscroll) {
          this.myscroll = new BScroll('.scroll_wrap', {
            click: true
          })
        } else {
          this.myscroll.refresh()
        }
      })
    },
    methods: {
      goTo(path, action) {
        this.$router.push(path);
        this.$store.dispatch(action)
      },
      loginOut() {
        this.$store.dispatch('loginOut', () => {
          this.isShow = false;
          this.myscroll.refresh();
          localStorage.clear();
        });
      }
    },
    computed: {
      ...mapState(['user'])
    },
    components: {
      Shade
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
      position fixed
      top 118px
      left 0
      bottom 120px
      overflow hidden
      .inner_wrap
        width 100%
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
              height 131px
              border 3px solid #fff
              border-radius 50%
              margin 0 20px 0 47px
            .user_name
              color #fff
              font-size 36px
              margin-bottom 36px
            .login
              color #fff
              font-size 36px
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
    .login_out
      width 600px
      height 400px
      position fixed
      top 50%
      left 50%
      background #fff
      transform translate(-50%, -50%)
      z-index 100
      border-radius 15px
      .top
        width 100%
        height 300px
        text-align: center
        line-height 300px
        font-size 32px
        bottom-border-1px(#ccc)
      .bottom
        width 100%
        height 100px
        line-height 100px
        display flex
        justify-content space-between
        span
          width 50%
          text-align: center
          font-size 28px
        .no
          color red
        .yes
          color $main
</style>
