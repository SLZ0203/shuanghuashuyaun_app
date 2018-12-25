<!--修改密码页面-->
<template>
  <section class="change_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <ul class="change_list">
      <li class="change_item">
        <span>旧密码</span>
        <input type="password" v-model="oldPwd" class="leftone" placeholder="请输入当前密码">
      </li>
      <li class="change_item">
        <span>新密码</span>
        <input type="password" v-model="newPwd" class="leftone" placeholder="请输入新密码">
      </li>
      <li class="change_item">
        <span>确定新密码</span>
        <input type="password" v-model="affirmPwd" class="lefttwo" placeholder="确认新密码">
      </li>
    </ul>
    <div class="save_btn" @click="save">保存</div>
    <Toast ref="toast"/>
  </section>
</template>

<script>
  import {reqResetPassword} from '../../../api'

  export default {
    name: "ChangePwd",
    data() {
      return {
        title: '修改密码',
        oldPwd: '', //旧密码
        newPwd: '', //新密码
        affirmPwd: '',//确认密码
        isShow: true
      }
    },
    methods: {
      async save() {
        const {oldPwd, newPwd, affirmPwd} = this;
        if (!oldPwd) {
          this.$refs.toast.hintHide('请输入旧密码！');
        } else if (!newPwd) {
          this.$refs.toast.hintHide('请输入新密码！');
        } else if (!affirmPwd) {
          this.$refs.toast.hintHide('请确认新密码！');
        } else if (newPwd !== affirmPwd) {
          this.$refs.toast.hintHide('请确保两次新密码输入一致！');
        } else {
          const result = await reqResetPassword();
          this.$refs.toast.hintHide(result.msg)
        }
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .change_wrap
    width 100%
    height 100%
    background #fff
    .change_list
      width 100%
      padding 0 30px
      box-sizing border-box
      .change_item
        width 100%
        height 110px
        line-height 110px
        bottom-border-1px(#ccc)
        span
          font-size 28px
        input
          height 100%
          outline none
          font-size 28px
          &.leftone
            margin-left 84px
          &.lefttwo
            margin-left 29px
          &::-webkit-input-placeholder /*Webkit browsers*/
            font-size 24px
            color: #bbb
    .save_btn
      width 690px
      height 80px
      background $main
      text-align: center
      line-height 80px
      margin 38px auto 0
      color #fff
      font-size 30px
</style>
