<!--全部课程-->
<template>
  <section class="all_wrap">
    <HeaderTop :title="title"></HeaderTop>
    <nav class="header_nav">
      <div class="item" :class="{on:num===0}" @click="changeOne(0,'course_price_rmb')">课程价格</div>
      <div class="item" :class="{on:num===1}" @click="changeOne(1)">课程种类</div>
      <div class="item" :class="{on:num===2}" @click="changeOne(2,'course_times')">发布时间</div>
    </nav>
    <div class="scroll_wrap">
      <div>
        <ul class="project_list">
          <li class="project_item" v-for="(pro,index) in courseArr" :key="index"
              @click="goToDetail(pro.course_id)">
            <img v-lazy="'http://shedu.581vv.com'+pro.course_thumb">
            <div>
              <p class="pro_name">{{pro.course_name}}</p>
              <span class="pro_year ellipsis">{{pro.course_school_time}}</span>
              <span class="pro_feat ellipsis">{{pro.course_keywords}}</span>
              <p class="pro_price">
                <span>{{pro.course_price_yen}}日元</span>
                <span>/</span>
                <span>{{pro.course_price_rmb}}人民币</span>
              </p>
            </div>
          </li>
        </ul>
        <div class="tipText" v-if="!courseArr">暂时没有课程，敬请期待</div>
      </div>
    </div>
    <ul class="all_project_list" v-show="isShow">
      <li class="project_item" :class="{active:active===-1}" @click="cateCourse(-1)">全部</li>
      <li class="project_item" v-for="(name,index) in courseCate" :key="index" @click="cateCourse(index,name.cate_id)"
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
  import {reqSortCourse, reqCateCourse} from '../../api'
  import {Indicator, Toast} from 'mint-ui';

  export default {
    name: "All",
    data() {
      return {
        title: '全部课程',
        num: 0,
        active: -1,
        isShow: false,
        courseArr: [],
        sortNum: true
      }
    },
    mounted() {
      Indicator.open();
      //获取课程分类
      this.$store.dispatch('getCourseCate');
      //获取课程
      this.$store.dispatch('getCourse', () => {
        this.courseArr = this.course;
        this._initScroll();
        Indicator.close()
      });
    },
    methods: {
      //tab切换及排序
      async changeOne(index, sortType) {
        this.num = index;
        if (index === 1) {
          this.isShow = !this.isShow
        } else {
          this.isShow = false;
          this.sortNum = !this.sortNum;
          let sort;
          if (this.sortNum === true) {
            sort = 1
          } else {
            sort = 2
          }
          Indicator.open();
          const result = await reqSortCourse(sortType, sort);
          if (result.code === 200) {
            this.courseArr = result.data;
            this._initScroll();
            Indicator.close()
          }
        }
      },
      //课程分类
      async cateCourse(index, cateId) {
        this.active = index;
        Indicator.open();
        if (index === -1) {
          this.$store.dispatch('getCourse', () => {
            this._initScroll();
            Indicator.close()
          });
          this.courseArr = this.course
        } else {
          Indicator.open();
          const result = await reqCateCourse(cateId);
          if (result.code === 200) {
            this.courseArr = result.data;
            this._initScroll();
            Indicator.close()
          } else{
            Toast(result.msg);
            Indicator.close()
          }
        }
        this.isShow = false
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
      //课程详情页面
      goToDetail(id) {
        this.$router.push({
          path: '/project_detail',
          query: {id}
        })
      }
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
      position fixed
      top 188px
      left 0
      bottom 120px
      overflow hidden
      .project_list
        width 100%
        padding 0 30px 0
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
      .tipText
        text-align: center
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        color #7e8c8d
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
