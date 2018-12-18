<!--我的资料2页面-->
<template>
  <section class="outer_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
      <span class="save" slot="save">保存</span>
    </HeaderTop>
    <ul class="user_info_list">
      <li class="info_item avatar">
        <span class="info_one">我的头像</span>
        <span>
          <img src="../../../../static/images/47@2x.png" class="header_img">
          <img src="../../../../static/images/5@2x.png" alt="">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">姓名</span>
        <span class="info_two">王小明</span>
      </li>
      <li class="info_item">
        <span class="info_one">性别</span>
        <span class="info_two">
          <span>女</span>
          <img src="../../../../static/images/5@2x.png" alt="">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">出生年月</span>
        <span class="info_two">
          <span>1995-02-03</span>
          <img src="../../../../static/images/5@2x.png" alt="">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">住址</span>
        <span class="info_two">
          <span>北京</span>
          <img src="../../../../static/images/5@2x.png" alt="">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">所在行业</span>
        <span class="info_two">
          <span>互联网</span>
          <img src="../../../../static/images/5@2x.png" alt="">
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
    </ul>
  </section>
</template>

<script>
  export default {
    name: "MyInfo",
    data() {
      return {
        title: '我的资料',
        phone: '',
        LineID: '',
        email: '',
        wechat: ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .outer_wrap
    width 100%
    height 100%
    background #fff

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
    .avatar
      height 200px
      .header_img
        width 111px
        height 111px
        border-radius 50%
        margin-right 20px
</style>
