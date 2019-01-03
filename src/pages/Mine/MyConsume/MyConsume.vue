<!--我的消费明细页面-->
<template>
  <section class="consume_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <ul class="consume_list">
        <li class="con_item" v-for="(ex,index) in myExpense" :key="index">
          <p class="buy">
            <span class="buy_what">{{ex.expense_title}}</span>
            <span class="money">-{{ex.expense_price}}日元</span>
          </p>
          <p class="time">{{ex.expense_times}}</p>
        </li>
      </ul>
      <div class="noExpense" v-if="myExpense.length===0">暂无消费记录</div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "MyConsume",
    data() {
      return {
        title: '我的消费明细'
      }
    },
    methods: {
      _initScroll() {
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
    },
    computed: {
      ...mapState(['myExpense'])
    },
    watch: {
      myExpense: function (value) {
        this._initScroll()
      }
    }
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
      position fixed
      top 118px
      left 0
      bottom 0
      overflow hidden
      .consume_list
        width 100%
        padding 0 30px
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
      .noExpense
        width 100%
        margin-top 150px
        text-align: center
        color #aaa
        font-size 28px
</style>
