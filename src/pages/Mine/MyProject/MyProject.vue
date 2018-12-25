<template>
  <section class="myproject_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="goWhich">
    </HeaderTop>
    <section class="scroll_wrap">
      <div class="inner_wrap">
        <!--我的课程页面，点击查看详情隐藏-->
        <div v-show="isShow">
          <div class="user_info">
            <div class="inner">
              <img v-lazy="'http://shedu.581vv.com'+user.member_headpic" alt="">
              <div>
                <p class="user_name">{{user.member_nickname}}</p>
                <p class="user_num">会员号：{{user.member_id}}</p>
              </div>
            </div>
          </div>
          <ul class="project_list">
            <li class="project_item" v-for="(item,index) in myCourse" :key="index">
              <ul class="item_info_list">
                <li class="item_info">
                  <span class="name">{{item.memberclass_title}}</span>
                  <div class="see_info">
                    <span @click="upData(index)">查看详情</span>
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
        </div>
        <!--我的上课状态页面，点击查看详情显示-->
       <!-- <div class="class_state" v-show="!isShow">
          <div class="state_info">
            <div class="info_inner">
              <div class="class_name">
                <span>{{myCourse[num].memberclass_title}}</span>
                <span>剩余{{myCourse[num].memberclass_number}}次</span>
              </div>
              <p class="class_time">{{myCourse[num].memberclass_timeclass}}</p>
              <p>{{myCourse[num].memberclass_xname}}</p>
            </div>
          </div>
          <ul class="class_list">
            <li class="title">我的上课记录</li>
            <li class="class_item">
              <span class="time">2018-11-30</span>
              <span>爱贝汉语早教课程</span>
            </li>
          </ul>
        </div>-->
      </div>
      <div class="noPro" v-if="myCourse.length===0">您暂时没有课程安排</div>
    </section>
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
        isShow: true,
        num: 0,
      }
    },
    methods: {
      goWhich() {
        if (this.title === '我的课程') {
          return this.$router.back()
        } else if (this.title === '我的上课状态') {
          this.isShow = true;
          this.title = '我的课程'
        }
      },
      upData(n) {
        this.num = n;
        this.isShow = false;
        this.title = '我的上课状态'
      },
      _initScroll() {
        if (!this.myscroll) {
          this.myscroll = new BScroll('.scroll_wrap', {
            click: true
          })
        } else {
          this.myscroll.refresh()
        }
      },
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
    .scroll_wrap
      width 100%
      height 100%
      overflow hidden
      .inner_wrap
        width 100%
        padding-bottom 120px
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
        margin-top 150px
        text-align: center
        color #888
        font-size 28px
    .class_state
      width 100%
      height 100%
      .state_info
        width 100%
        padding 10px
        background #fff
        box-sizing border-box
        .info_inner
          width 100%
          height 275px
          bg-image("../../../../static/images/37")
          background-repeat no-repeat
          background-size 100% 100%
          padding 60px 35px 40px 45px
          box-sizing border-box
          color: #fff
          .class_name
            font-size 35px
            font-weight 500
            display flex
            justify-content space-between
            margin-bottom 40px
          p
            font-size 30px
          .class_time
            margin-bottom 30px
      .class_list
        width 100%
        padding 0 30px
        box-sizing border-box
        background #fff
        margin-top 24px
        .title
          width 100%
          height 100px
          line-height 100px
          font-size 30px
          font-weight 500
          bottom-border-1px(#ccc)
        .class_item
          width 100%
          height 120px
          line-height 120px
          bottom-border-1px(#ccc)
          color #666666
          font-size 28px
          .time
            margin-right 40px
</style>
