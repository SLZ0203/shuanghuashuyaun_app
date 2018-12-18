<!--完善信息页面-->
<template>
  <section class="perfect_wrap">
    <HeaderTop :title="title"></HeaderTop>
    <ul class="user_info_list">
      <li class="info_item">
        <span class="info_one">姓名</span>
        <span class="info_two">王小明</span>
      </li>
      <li class="info_item">
        <span class="info_one">性别</span>
        <span class="info_two">
          <span>女</span>
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">出生年月</span>
        <span class="info_two">
          <span>1995-02-03</span>
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">住址</span>
        <span class="info_two">
          <span>北京</span>
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">所在行业</span>
        <span class="info_two">
          <span>互联网</span>
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">电话号码</span>
        <input type="text" placeholder="请输入您的电话号码" v-model="phone">
      </li>
      <li class="info_item">
        <span class="info_one">LineID</span>
        <input type="text" placeholder="请输入您的LineID" v-model="LineID">
      </li>
      <li class="info_item">
        <span class="info_one">电子邮箱</span>
        <input type="text" placeholder="请输入您的电话电子邮箱" v-model="email">
      </li>
      <li class="info_item">
        <span class="info_one">微信号</span>
        <input type="text" placeholder="请输入您的微信号" v-model="wechat">
      </li>
      <li class="btn" @click="$router.push('/home')">完善资料</li>
    </ul>
  </section>
</template>

<script>

  export default {
    name: "PerfectMsg",
    data() {
      return {
        title: '完善资料',
        phone: '',
        LineID: '',
        email: '',
        wechat: '',
        sex: '', //性别
      }
    },
    methods: {
      onValuesChange(picker, values) {
        //console.log(values)
        this.sex = values[0];
        this.sexVisible = false;
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .perfect_wrap
    width 100%
    height 100%
    background rgba(255, 255, 255, 1)
    .user_info_list
      width 100%
      padding 0 30px
      box-sizing border-box
      .info_item
        width 100%
        height 110px
        display flex
        align-items center
        font-size 28px
        justify-content space-between
        bottom-border-1px(#ccc)
        input
          outline none
          height 100%
          text-align right
          &::-webkit-input-placeholder /*Webkit browsers*/
            font-size 26px
            color: #ccc
        .info_two
          color #999
          .more
            width 13px
            height 25px
      .btn
        width 100%
        height 80px
        text-align: center
        line-height 80px
        margin-top 68px
        background-color: $main
        font-size 30px
        border-radius 10px
        color #fff
</style>
