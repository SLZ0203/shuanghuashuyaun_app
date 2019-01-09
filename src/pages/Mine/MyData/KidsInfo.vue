<template>
  <section class="kids_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
    </HeaderTop>
    <section class="scroll_wrap">
      <div class="inner">
        <ul class="user_info_list">
          <li class="user_info_item" v-for="(item,index) in childArr" :key="index">
            <ul>
              <li class="info_num">
                <span>{{index+1}}</span>
                <img src="../../../../static/images/48@2x.png" class="delete" @click="childArr.pop()" v-show="index>0">
              </li>
              <li class="info_item">
                <div class="info_one">姓名</div>
                <input type="text" :placeholder="item.child_name?item.child_name:'请输入孩子姓名'" ref="name"
                       @input="inputName(index)">
              </li>
              <li class="info_item">
                <div class="info_one">性别</div>
                <div @click="sexSelect(index)">
                  <input type="text" :placeholder="item.child_sex==='1'?'男':(item.child_sex==='2'?'女':'请选择')"
                         readonly="readonly">
                  <img src="../../../../static/images/5@2x.png" class="more">
                </div>
              </li>
              <li class="info_item">
                <div class="info_one">出生年月</div>
                <div @click="openBirthday(index)">
                  <input type="text" :placeholder="item.child_age?item.child_age:'请选择'" readonly="readonly">
                  <img src="../../../../static/images/5@2x.png" class="more">
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div class="add_kids_info">
          <span @click="addChild">
            <img src="../../../../static/images/49@2x.png" class="add">
            <span>添加孩子资料</span>
          </span>
        </div>
        <div class="save_btn" @click="save">保存</div>
      </div>
    </section>
    <!--性别选择-->
    <div class="choose_sex" v-show="sexShow">
      <div class="choose_hd">
        <span class="one" @click="sexShow=false">取消</span>
        <span>请选择您的性别</span>
        <span class="two" @click="sexShow=false">确定</span>
      </div>
      <ul class="choose_list">
        <li class="choose_item" v-for="(item,index) in sexChoose" :key="index" @click="choose(item,index)"
            :class="{check:chooseNum===index}">{{item}}
        </li>
      </ul>
    </div>
    <Shade v-show="sexShow"/>
    <!--出生年月选择-->
    <mt-datetime-picker
      ref="dataPicker"
      v-model="dataVal"
      type="date"
      :start-date="new Date('1990-01-01')"
      :end-date="new Date()"
      @confirm="handleConfirm"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
    </mt-datetime-picker>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {reqMyChildren, reqEditChildren} from '../../../api'
  import {mapState} from 'vuex'
  import Shade from '../../../components/Shade/Shade'
  import {Indicator, Toast} from 'mint-ui';

  export default {
    name: "KidsInfo",
    data() {
      return {
        title: '孩子资料',
        sexShow: false,
        sexChoose: ['男', '女'], //性别选择
        initNum: 0,
        chooseNum: '',
        childArr: [],
        dataVal: new Date(),
        child_id: 1
      }
    },
    async mounted() {
      Indicator.open();
      const res = await reqMyChildren(this.member_id);
      if (res.code === 200) {
        this.childArr = res.data;
        this._initScroll();
        Indicator.close();
      } else {
        Indicator.close();
        Toast(res.msg)
      }
    },
    methods: {
      _initScroll() {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.scroll_wrap', {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      //输入名字
      inputName(i) {
        this.initNum = i;
        const n = this.$refs.name[this.initNum].value;
        this.childArr[this.initNum].child_name = n
      },
      //打开性别选择
      sexSelect(i) {
        this.sexShow = true;
        this.initNum = i
      },
      //选择性别
      choose(item, index) {
        this.chooseNum = index;
        this.childArr[this.initNum].child_sex = index + 1 + '';
      },
      //打开生日选择
      openBirthday(i) {
        this.initNum = i;
        this.$refs.dataPicker.open();
      },
      //生日选择的确定按钮
      handleConfirm() {
        const d = this.dataVal;
        this.dataVal = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        this.childArr[this.initNum].child_age = this.dataVal
      },
      //添加孩子资料
      addChild() {
        this.child_id++;
        this.childArr.push({
          child_id: this.child_id,
          child_name: '',
          child_sex: '',
          child_age: ''
        });
      },
      //保存孩子资料
      async save() {
        Indicator.open('正在保存');
        const res = await reqEditChildren(this.member_id, this.childArr);
        Indicator.close();
        Toast(res.msg);
      }
    },
    computed: {
      ...mapState(['member_id']),
    },
    components: {
      Shade
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .kids_wrap
    width 100%
    height 100%
    .scroll_wrap
      width 100%
      position fixed
      top 118px
      left 0
      bottom 0
      overflow hidden
      .inner
        padding-bottom 50px
      .user_info_list
        width 100%
        padding 0 34px
        box-sizing border-box
        margin-top 33px
        .user_info_item
          background #fff
          margin-bottom 33px
          box-shadow: 0 2px 6px -1px rgba(36, 37, 41, 0.1);
          .info_num
            width 100%
            height 64px
            display flex
            align-items center
            font-size 28px
            color #999
            padding 0 17px 0 34px
            box-sizing border-box
            justify-content space-between
            bottom-border-1px(#ccc)
            .delete
              width 30px
              height 36px
          .info_item
            width 100%
            height 110px
            display flex
            align-items center
            font-size 28px
            padding 0 17px 0 34px
            box-sizing border-box
            justify-content space-between
            bottom-border-1px(#ccc)
            .more
              width 13px
              height 25px
            input
              outline none
              height 100%
              text-align right
              &::-webkit-input-placeholder /*Webkit browsers*/
                font-size 26px
            .info_two
              color #999
      .add_kids_info
        width 100%
        text-align: center
        margin-top 15px
        .add
          width 36px
          height 36px
        span
          color $main
          font-size 28px
          margin-left 15px
      .save_btn
        width 690px
        height 80px
        background $main
        text-align: center
        line-height 80px
        margin 135px auto 0
        color #fff
        font-size 30px
    .choose_sex
      width 100%
      position fixed
      z-index 100
      bottom 0
      background #fff
      .choose_hd
        width 100%
        height 75px
        display flex
        padding 0 40px
        box-sizing border-box
        align-items center
        justify-content space-between
        font-size 28px
        bottom-border-1px(#ccc)
        .one
          color red
        .two
          color $main
      .choose_list
        width 100%
        .choose_item
          width 100%
          height 100px
          line-height 100px
          text-align: center
          font-size 30px
          &.check
            background #eee

</style>
