<!--主界面头部组件-->
<template>
  <header class="header_title" :class="{on: title==='好友推荐'}">
    <slot name="return"></slot>
    <span>{{title}}</span>
    <slot name="save"></slot>
  </header>
</template>

<script>
  export default {
    name: "HeaderTop",
    props: {
      title: String
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/css/mixins.styl"
  .header_title
    position relative
    z-index 1
    text-align: center
    width 100%
    padding 40px 0
    box-sizing border-box
    font-size 34px
    background rgba(255, 255, 255, 1)
    &.on
      z-index 1
    .return
      width 18px
      height 34px
      position absolute
      top 44px
      left 32px
    .save
      color #B2B2B2
      font-size 28px
      position absolute
      top 44px
      right 32px
    span
      font-weight 500
</style>
