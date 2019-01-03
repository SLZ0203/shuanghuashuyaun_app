<template>
  <section class="kids_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <div>
        <ul class="user_info_list">
          <li class="user_info_item">
            <ul>
              <li class="info_num">1</li>
              <li class="info_item">
                <span class="info_one">姓名</span>
                <span class="info_two">王小明</span>
              </li>
              <li class="info_item">
                <span class="info_one">性别</span>
                <span class="info_two">
                <span>女</span>
                  <img src="../../../../static/images/5@2x.png" class="more">
                </span>
              </li>
              <li class="info_item">
                <span class="info_one">出生年月</span>
                <span class="info_two">
                <span>1995-02-03</span>
                  <img src="../../../../static/images/5@2x.png" class="more">
                </span>
              </li>
            </ul>
          </li>
          <li class="user_info_item">
            <ul>
              <li class="info_num">
                <span>2</span>
                <img src="../../../../static/images/48@2x.png" class="delete">
              </li>
              <li class="info_item">
                <span class="info_one">姓名</span>
                <span class="info_two">王小明</span>
              </li>
              <li class="info_item">
                <span class="info_one">性别</span>
                <span class="info_two">
                <span>女</span>
                  <img src="../../../../static/images/5@2x.png" class="more">
                </span>
              </li>
              <li class="info_item">
                <span class="info_one">出生年月</span>
                <span class="info_two">
                <span>1995-02-03</span>
                  <img src="../../../../static/images/5@2x.png" class="more">
                </span>
              </li>
            </ul>
          </li>
        </ul>
        <div class="add_kids_info">
          <img src="../../../../static/images/49@2x.png" class="add">
          <span>添加孩子资料</span>
        </div>
        <div class="save_btn">保存</div>
      </div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "KidsInfo",
    data() {
      return {
        title: '孩子资料'
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
  @import "../../../../static/css/mixins.styl"
  .kids_wrap
    width 100%
    height 100%
    .scroll_wrap
      width 100%
      position fixed
      top 118px
      left 0
      bottom 0
      overflow hidden
      .user_info_list
        width 100%
        padding 0 34px
        box-sizing border-box
        margin-top 33px
        .user_info_item
          background #fff
          margin-bottom 33px
          box-shadow: 0 2px 6px -1px rgba(36, 37, 41, 0.1);
          .info_num
            width 100%
            height 64px
            display flex
            align-items center
            font-size 28px
            color #999
            padding 0 17px 0 34px
            box-sizing border-box
            justify-content space-between
            bottom-border-1px(#ccc)
            .delete
              width 30px
              height 36px
          .info_item
            width 100%
            height 110px
            display flex
            align-items center
            font-size 28px
            padding 0 17px 0 34px
            box-sizing border-box
            justify-content space-between
            bottom-border-1px(#ccc)
            .more
              width 13px
              height 25px
            input
              outline none
              height 100%
              text-align right
              &::-webkit-input-placeholder /*Webkit browsers*/
                font-size 26px
                color: #ccc
            .info_two
              color #999
      .add_kids_info
        width 100%
        text-align: center
        margin-top 15px
        .add
          width 36px
          height 36px
        span
          color $main
          font-size 28px
          margin-left 15px
      .save_btn
        width 690px
        height 80px
        background $main
        text-align: center
        line-height 80px
        margin 135px auto 0
        color #fff
        font-size 30px
</style>
