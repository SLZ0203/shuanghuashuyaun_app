<!--弹窗提示-->
<template>
  <transition name="fade">
    <div class="toast" v-show="toastShow">{{hint}}</div>
  </transition>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        hint: '',
        toastShow: false
      }
    },
    methods: {
      hintHide(text) {
        this.hint = text;
        this.toastShow = true;
        setTimeout(() => {
          this.toastShow = false
        }, 3000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .toast
    max-width: 80%;
    font-size 28px
    line-height 60px
    white-space: nowrap
    position fixed
    top 50%
    left 50%
    color #fff
    transform translate(-50%, -50%)
    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    padding 0 20px
    border-radius 10px
    text-align: center;
    z-index: 100;

  .fade-leave
    opacity: 1

  .fade-leave-active
    opacity 0
    transition all .6s
</style>
