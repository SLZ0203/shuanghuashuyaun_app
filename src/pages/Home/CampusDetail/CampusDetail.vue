<!--校区介绍页面-->
<template>
  <section class="pact_wrap">
    <HeaderTop :title="schoolDetail.school_name">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <div class="inner_box">
        <img v-lazy="'http://shedu.581vv.com'+schoolDetail.school_thumb" class="banner">
        <ul class="school_info">
          <li class="school_name">{{schoolDetail.school_name}}</li>
          <li class="info_item address">{{schoolDetail.school_position}}</li>
          <li class="info_item phone">{{schoolDetail.school_phone}}</li>
        </ul>
        <div class="school_msg">
          <p class="title">校区简介</p>
          <div class="inner">{{schoolDetail.school_introduction}}</div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {reqSchoolDetail} from '../../../api'
  import {Indicator, Toast} from 'mint-ui';

  export default {
    name: "CampusDetail",
    data() {
      return {
        school_id: this.$route.query.id,
        schoolDetail: {}
      }
    },
    async mounted() {
      Indicator.open();
      const res = await reqSchoolDetail(this.school_id);
      if (res.code === 200) {
        this.schoolDetail = res.data;
        this._initScroll();
        Indicator.close()
      }
    },
    methods: {
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll('.scroll_wrap', {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .pact_wrap
    width 100%
    height 100%
    .scroll_wrap
      width 100%
      position fixed
      top 117px
      bottom 0
      overflow hidden
      .inner_box
        width 100%
        .banner
          width 100%
          height 400px
        .school_info
          width 100%
          padding 0 30px
          box-sizing border-box
          background #fff
          .school_name
            width 100%
            height 88px
            line-height 88px
            font-size 34px
            font-weight 600
            bottom-border-1px(#ccc)
          .info_item
            width 100%
            height 88px
            line-height 88px
            font-size 28px
            color: #666666
            padding-left 55px
            box-sizing border-box
            background-position 0 center
            background-size 25px 42px
            bottom-border-1px(#ccc)
          .address
            bg-image("../../../../static/images/34")
          .phone
            bg-image("../../../../static/images/35")
        .school_msg
          width 100%
          padding 0 30px
          margin-top 24px
          box-sizing border-box
          background #fff
          .title
            font-size 30px
            line-height 60px
            font-weight 500
          .inner
            font-size 28px
            color #666666
            line-height 56px
</style>
