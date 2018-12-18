<!--留言板页面-->
<template>
  <section class="leave_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <div class="text_wrap">
      <textarea placeholder="请写下您的留言"></textarea>
      <div class="save_btn">提 交</div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "LeaveWord",
    data(){
      return{
        title: '留言板'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .leave_wrap
    width 100%
    height 100%
    background #fff
    .text_wrap
      width 100%
      padding 20px 30px 0
      box-sizing border-box
      textarea
        width 100%
        height 440px
        padding 33px 38px
        box-sizing border-box
        border none
        background #F5F5F5
        border-radius 10px
        font-size 30px
        outline none
        &::-webkit-input-placeholder /*Webkit browsers*/
          font-size 28px
          color: #999
      .save_btn
        width 100%
        height 80px
        background #1FBE86
        text-align: center
        line-height 80px
        font-size 30px
        color #fff
        margin-top 63px
</style>
