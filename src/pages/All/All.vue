<!--全部课程-->
<template>
  <section class="all_wrap">
    <HeaderTop :title="title"></HeaderTop>
    <nav class="header_nav">
      <div class="item" :class="{on:num===0}" @click="changeOne(0)">课程价格</div>
      <div class="item" :class="{on:num===1}" @click="changeOne(1)">课程种类</div>
      <div class="item" :class="{on:num===2}" @click="changeOne(2)">发布时间</div>
    </nav>
    <div class="scroll_wrap">
      <ul class="project_list">
        <li class="project_item" v-for="(pro,index) in course" :key="index"
            @click="$router.push('/project_detail')">
          <img :src="'http://shedu.581vv.com'+pro.course_thumb">
          <div>
            <p class="pro_name">{{pro.course_name}}</p>
            <span class="pro_year ellipsis">{{pro.course_tags}}</span>
            <span class="pro_feat ellipsis">{{pro.course_introduction}}</span>
            <p class="pro_price">
              <span>{{pro.course_price_yen}}日元</span>
              <span>/</span>
              <span>{{pro.course_price_rmb}}人民币</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <ul class="all_project_list" v-show="isShow">
      <li class="project_item" :class="{active:active===-1}" @click="active=-1">全部</li>
      <li class="project_item" v-for="(name,index) in courseCate" :key="index" @click="active=index"
          :class="{active:active===index}">{{name.cate_name}}
      </li>
    </ul>
    <Shade v-show="isShow"/>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import Shade from '../../components/Shade/Shade'
  import {mapState} from 'vuex'

  export default {
    name: "All",
    data() {
      return {
        title: '全部课程',
        num: 0,
        active: -1,
        isShow: false,
        projectList: [
          {
            proArr: [
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
            ]
          },
          {
            proArr: [
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝英语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝英语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝英语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝英语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝英语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝英语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
            ]
          },
          {
            proArr: [
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
              {
                imgUrl: '../static/images/12@2x.png',
                name: '爱贝汉语早教课程',
                year: '适合0-6岁',
                feat: '特色课程',
                price: '1000日元/62人民币'
              },
            ]
          },
        ],
      }
    },
    mounted() {
      //获取课程
      this.$store.dispatch('getCourse', () => {
        this._initScroll();
      });
      //获取课程分类
      this.$store.dispatch('getCourseCate')
    },
    methods: {
      //tab切换
      changeOne(index) {
        this.num = index;
        if (index === 1) {
          this.isShow = !this.isShow
        } else {
          this.isShow = false
        }
      },
      //初始化滚动
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
      ...mapState(['course', 'courseCate'])
    },
    components: {
      HeaderTop,
      Shade
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/css/mixins.styl"
  .all_wrap
    width 100%
    height 100%
    .header_nav
      width 100%
      height 70px
      padding 0 80px
      box-sizing border-box
      display flex
      background #fff
      justify-content space-between
      position relative
      z-index 100
      bottom-border-1px(#666)
      .item
        font-size 26px
        height: 100%
        line-height 70px
        width 33%
        text-align: center
        background-repeat no-repeat
        background-position 100%
        &.on
          color $main
          background url("../../../static/images/19@2x.png") no-repeat
          background-position 100%
          background-size 18px 12px
    .scroll_wrap
      width 100%
      height 100%
      overflow hidden
      .project_list
        width 100%
        padding 0 30px 320px
        box-sizing border-box
        background rgba(255, 255, 255, 1)
        &.bottom
          margin-bottom 24px
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
            line-height 40px
          .pro_year, .pro_feat
            display inline-block
            width 136px
            height 36px
            text-align: center
            line-height 36px
            font-size 24px
            border-radius 5px
            margin-top 30px
          .pro_year
            background #DAFCE4
            color #21BE87
          .pro_feat
            background #FFE5DE
            color #FF5F38
          .pro_price
            margin-top 26px
            font-size 30px
            color #FE5F35
    .all_project_list
      width 100%
      background #fff
      position fixed
      top 188px
      z-index 100
      .project_item
        padding 0 74px
        box-sizing border-box
        width 100%
        height 90px
        line-height 90px
        font-size 28px
        &.active
          background #F5F5F5
</style>
