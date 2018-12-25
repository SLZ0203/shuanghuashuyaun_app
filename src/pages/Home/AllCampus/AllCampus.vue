<!--全部校区页面-->
<template>
  <section class="campus_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <ul class="project_list">
        <li class="project_item" v-for="(school,index) in schools" :key="index"
            @click="$router.push('/campus_detail')">
          <img v-lazy="'http://shedu.581vv.com'+school.school_thumb">
          <div>
            <p class="pro_name">{{school.school_name}}</p>
            <p class="address">{{school.school_position}}</p>
            <span class="pro_year">{{school.school_times}}</span>
            <span class="pro_feat">{{school.feat}}</span>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "AllCampus",
    data() {
      return {
        title: '全部校区',
      }
    },
    mounted() {
      this.$store.dispatch('getSchools', () => {
        this.$nextTick(() => {
          new BScroll('.scroll_wrap', {
            click: true
          })
        })
      });
    },
    computed: {
      ...mapState(['schools'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .campus_wrap
    width 100%
    height 100%
    background rgba(255, 255, 255, 1)
    .scroll_wrap
      width 100%
      height 100%
      overflow hidden
      .project_list
        width 100%
        padding 0 30px 118px
        box-sizing border-box
        .project_item
          width 100%
          padding 45px 0
          display flex
          bottom-border-1px(#ccc)
          img
            width 276px
            height 194px
            margin-right 26px
          .pro_name
            font-size 34px
            font-weight 600
            line-height 40px
          .address
            font-size 26px
            color #999
            margin 45px 0
          .pro_year, .pro_feat
            display inline-block
            width 136px
            height 36px
            text-align: center
            line-height 36px
            font-size 24px
            border-radius 5px
          .pro_year
            background #DAFCE4
            color #21BE87
          .pro_feat
            background #FFE5DE
            color #FF5F38
</style>
