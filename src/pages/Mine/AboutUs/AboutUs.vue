<!--关于我们页面-->
<template>
  <section class="about_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <div class="scroll_inner">
        <div class="logo_wrap"></div>
        <p class="text">
          双华书院，中国国有图书发行企业。 发行网点遍及全国城镇。
          在1937年4月24日成立于延安清凉山，因该书店在中共中央宣传部、中国出版集团之下，是国家官方的书店，也是官方刊物宣传与发售处之一，
          全国各地均有分店，截至2006年共有14000多个发售网点，
          各省会则有购书中心或书城等名义经营；在香港以“新华书城”名义在湾仔经营，在澳门则以“珠新图书公司”名义经营。
          现今分店招牌的题字为毛泽东在1948年12月于河北所题，现今的总店与发行所位于北京市西城区。
          2017年12月，新华书店宣布与阿里云进行战略合作，利用阿里云新零售“中台”理念和技术，进行整个业务流程的重构与快速创新。
          2018年4月23日，新华书店网上商城正式上线运营。
        </p>
        <p class="text">
          双华书院，中国国有图书发行企业。 发行网点遍及全国城镇。
          在1937年4月24日成立于延安清凉山，因该书店在中共中央宣传部、中国出版集团之下，是国家官方的书店，也是官方刊物宣传与发售处之一，
          全国各地均有分店，截至2006年共有14000多个发售网点，
          各省会则有购书中心或书城等名义经营；在香港以“新华书城”名义在湾仔经营，在澳门则以“珠新图书公司”名义经营。
          现今分店招牌的题字为毛泽东在1948年12月于河北所题，现今的总店与发行所位于北京市西城区。
          2017年12月，新华书店宣布与阿里云进行战略合作，利用阿里云新零售“中台”理念和技术，进行整个业务流程的重构与快速创新。
          2018年4月23日，新华书店网上商城正式上线运营。
        </p>
        <p class="text">
          双华书院，中国国有图书发行企业。 发行网点遍及全国城镇。
          在1937年4月24日成立于延安清凉山，因该书店在中共中央宣传部、中国出版集团之下，是国家官方的书店，也是官方刊物宣传与发售处之一，
          全国各地均有分店，截至2006年共有14000多个发售网点，
          各省会则有购书中心或书城等名义经营；在香港以“新华书城”名义在湾仔经营，在澳门则以“珠新图书公司”名义经营。
          现今分店招牌的题字为毛泽东在1948年12月于河北所题，现今的总店与发行所位于北京市西城区。
          2017年12月，新华书店宣布与阿里云进行战略合作，利用阿里云新零售“中台”理念和技术，进行整个业务流程的重构与快速创新。
          2018年4月23日，新华书店网上商城正式上线运营。
        </p>
      </div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "AboutUs",
    data() {
      return {
        title: '关于我们'
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
  .about_wrap
    width 100%
    height 100%
    background #fff
    padding 0 30px
    box-sizing border-box
    .scroll_wrap
      width 100%
      height 100%
      .scroll_inner
        width 100%
        padding-bottom 180px
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
