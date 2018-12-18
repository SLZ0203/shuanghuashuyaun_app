<!--我的消费明细页面-->
<template>
  <section class="consume_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <ul class="consume_list">
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
        <li class="con_item">
          <p class="buy">
            <span class="buy_what">购买汉语早教课程</span>
            <span class="money">-2000日元</span>
          </p>
          <p class="time">2018-10-28 08:10:57</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "MyConsume",
    data(){
      return{
        title: '我的消费明细'
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
  .consume_wrap
    width 100%
    height 100%
    background #fff
    .scroll_wrap
      width 100%
      height 100%
      .consume_list
        width 100%
        padding 0 30px 120px
        box-sizing border-box
        .con_item
          width 100%
          height 160px
          bottom-border-1px(#ccc)
          padding 40px 0
          box-sizing border-box
          .buy
            font-size 30px
            display flex
            justify-content space-between
            .money
              color #FF6036
          .time
            color #9A9A9A
            font-size 24px
            margin-top 30px
</style>
