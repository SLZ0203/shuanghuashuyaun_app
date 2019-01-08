<template>
  <section class="myproject_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="user_info">
      <div class="inner">
        <img v-lazy="'http://shedu.581vv.com'+user.member_headpic" alt="">
        <div>
          <p class="user_name">{{user.member_nickname}}</p>
          <p class="user_num">会员号：{{user.member_id}}</p>
        </div>
      </div>
    </div>
    <section class="scroll_wrap" v-if="myCourse.length>0">
      <ul class="project_list">
        <li class="project_item" v-for="(item,index) in myCourse" :key="index">
          <ul class="item_info_list">
            <li class="item_info">
              <span class="name">{{item.memberclass_title}}</span>
              <div class="see_info">
                <span @click="goDetail(item)">查看详情</span>
                <img src="../../../../static/images/46@2x.png" class="more">
              </div>
            </li>
            <li class="item_info">
              <span>上课时间</span>
              <span>{{item.memberclass_timeclass}}</span>
            </li>
            <li class="item_info">
              <span>剩余课程</span>
              <span class="info_num">{{item.memberclass_number}}次</span>
            </li>
            <li class="item_info">
              <span>上课校区</span>
              <span>{{item.memberclass_xname}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <div class="noPro" v-else>您暂时没有课程安排</div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "MyProject",
    data() {
      return {
        title: '我的课程',
        num: 0,
      }
    },
    methods: {
      _initScroll() {
        if (!this.myscroll) {
          this.myscroll = new BScroll('.scroll_wrap', {
            click: true
          })
        } else {
          this.myscroll.refresh()
        }
      },
      goDetail(cou) {
        this.$router.push({
          path: 'myclassstate',
          query: {cou}
        })
      }
    },
    computed: {
      ...mapState(['user', 'myCourse'])
    },
    watch: {
      myCourse: function (value) {
        this._initScroll()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .myproject_wrap
    width 100%
    height 100%
    .user_info
      width 100%
      height 278px
      background-color #fff
      padding 10px
      box-sizing border-box
      .inner
        width 100%
        height 100%
        bg-image("../../../../static/images/37")
        background-size 100% 100%
        background-repeat no-repeat
        display flex
        align-items center
        img
          width 131px
          height 132px
          border-radius 50%
          margin 0 20px 0 47px
        .user_name
          color #fff
          font-size 36px
          margin-bottom 36px
        .user_num
          color #fff
          font-size 28px
    .scroll_wrap
      width 100%
      position fixed
      top 394px
      left 0
      bottom 0
      overflow hidden
      .project_list
        width 100%
        padding 30px 30px 0
        box-sizing border-box
        .project_item
          width 100%
          background #fff
          box-shadow: 0 5px 30px -1px rgba(36, 37, 41, 0.1);
          border-radius 8px
          margin-bottom 40px
          .item_info_list
            width 100%
            padding 0 26px
            box-sizing border-box
            .item_info
              width 100%
              height 120px
              display flex
              align-items center
              justify-content space-between
              bottom-border-1px(#ccc)
              span
                font-size 30px
                color #676767
              .name
                color black
                font-weight 600
                font-size 34px
              .info_num
                color $main
                font-weight 600
              .more
                width 13px
                height 25px
    .noPro
      width 100%
      margin-top 250px
      text-align: center
      color #888
      font-size 28px
</style>
