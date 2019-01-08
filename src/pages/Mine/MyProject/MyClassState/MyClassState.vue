<!--我的上课状态-->
<template>
  <div class="class_state">
    <HeaderTop :title="title">
      <img src="../../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="state_info">
      <div class="info_inner">
        <div class="class_name">
          <span>{{course.memberclass_title}}</span>
          <span>剩余{{course.memberclass_number}}次</span>
        </div>
        <p class="class_time">{{course.memberclass_timeclass}}</p>
        <p>{{course.memberclass_xname}}</p>
      </div>
    </div>
    <ul class="class_list">
      <li class="title">我的上课记录</li>
      <li class="class_item">
        <span class="time">2018-11-30</span>
        <span>爱贝汉语早教课程</span>
      </li>
      <li class="class_item">
        <span class="time">2018-11-30</span>
        <span>爱贝汉语早教课程</span>
      </li>
      <li class="class_item">
        <span class="time">2018-11-30</span>
        <span>爱贝汉语早教课程</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MyClassState",
    data() {
      return {
        title: '我的上课状态',
        course: this.$route.query.cou
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../../static/css/mixins.styl"
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
        bg-image("../../../../../static/images/37")
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
