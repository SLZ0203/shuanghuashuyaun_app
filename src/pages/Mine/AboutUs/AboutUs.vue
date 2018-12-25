<!--关于我们页面-->
<template>
  <section class="about_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <div class="scroll_inner">
        <div class="logo_wrap"></div>
        <p class="text">{{about.about_center}}</p>
      </div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "AboutUs",
    data() {
      return {
        title: '关于我们'
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
      ...mapState(['about'])
    },
    watch: {
      about: function (value) {
        this._initScroll()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .about_wrap
    width 100%
    height 100%
    background #fff
    .scroll_wrap
      width 100%
      height 100%
      .scroll_inner
        width 100%
        padding 0 30px 180px
        box-sizing border-box
      .logo_wrap
        width 366px
        height 99px
        margin 60px auto 66px
        bg-image("../../../../static/images/61")
        background-size 100%
      .text
        width 100%
        color #656565
        font-size 26px
        margin-top 10px
        text-indent 52px
        line-height 52px
</style>
