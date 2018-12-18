<!--底部导航-->
<template>
  <footer class="footer_guide">
    <div class="guide_item" @click="goTo('/home')" :class="{on:$route.path==='/home'}">
      <img src="../../../static/images/13@2x.png" v-if="$route.path==='/home'" class="guide_img">
      <img src="../../../static/images/14@2x.png" v-else class="guide_img">
      <span class="guide_name">首页</span>
    </div>
    <div class="guide_item" @click="goTo('/all')" :class="{on:$route.path==='/all'}">
      <img src="../../../static/images/15@2x.png" class="guide_img" v-if="$route.path==='/all'">
      <img src="../../../static/images/16@2x.png" class="guide_img"  v-else>
      <span class="guide_name">全部课程</span>
    </div>
    <div class="guide_item" @click="goTo('/mine')" :class="{on:$route.path==='/mine'}">
      <img src="../../../static/images/17@2x.png" class="guide_img" v-if="$route.path==='/mine'">
      <img src="../../../static/images/18@2x.png" class="guide_img" v-else>
      <span class="guide_name">我的</span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods: {
      goTo(path) {
        this.$router.replace(path)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../static/css/mixins.styl"
  .footer_guide
    width 100%
    height 120px
    position fixed
    bottom 0
    display flex
    background rgba(253, 254, 255, 1)
    .guide_item
      text-align center
      width 33%
      display flex
      justify-items center
      align-items center
      flex-direction column
      padding-top 20px
      top-border-1px(#999)
      .guide_img
        width 43px
        height 47px
        margin-top 8px
      .guide_name
        font-family PingFangSC-Medium, sans-serif
        margin-top 18px
        color #C6CBD6
        font-size 22px
      /*no*/
      &.on
        .guide_name
          color #1FBE86
</style>
