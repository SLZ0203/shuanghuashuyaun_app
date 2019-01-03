<!--阴影遮罩层-->
<template>
  <transition name="fade">
    <div class="shade"></div>
  </transition>
</template>

<script>
  export default {
    name: "Shade",
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shade
    width 100%
    height 100%
    background #000
    opacity 0.5
    position fixed
    top 0
    left 0
    z-index 10
  .fade-leave
    opacity: 1
  .fade-leave-active
    opacity 0
    transition all 1s
</style>
