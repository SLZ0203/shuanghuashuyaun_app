<!--我的资料1页面-->
<template>
  <section>
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <ul class="mine_list">
      <li class="mine_item" @click="$router.push('/myinfo')">
        <span class="name">我的资料</span>
        <img src="../../../../static/images/5@2x.png" class="more">
      </li>
      <li class="mine_item" @click="$router.push('/kidsinfo')">
        <span class="name">孩子资料</span>
        <img src="../../../../static/images/5@2x.png" class="more">
      </li>
      <li class="mine_item" @click="$router.push('/changepwd')">
        <span class="name">修改密码</span>
        <img src="../../../../static/images/5@2x.png" class="more">
      </li>
    </ul>
  </section>
</template>

<script>

  export default {
    name: "MyData",
    data() {
      return {
        title: '我的资料'
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .mine_list
    width 100%
    padding 0 30px
    box-sizing border-box
    background #fff
    .mine_item
      width 100%
      height 110px
      bottom-border-1px(#ccc)
      display flex
      align-items center
      justify-content space-between
      .more
        width 13px
        height 25px
      .name
        font-size 30px
</style>
