<!--我的资料2页面-->
<template>
  <section class="outer_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
      <span class="save" slot="save" @click="saveSub">保存</span>
    </HeaderTop>
    <ul class="user_info_list">
      <li class="info_item avatar" @click="setShow=true">
        <div class="info_one">我的头像</div>
        <div>
          <img v-lazy="'http://shedu.581vv.com'+user.member_headpic" class="header_img" v-if="user.member_headpic">
          <img src="../../../../static/images/36@2x.png" class="header_img" v-else>
          <img src="../../../../static/images/5@2x.png" class="more">
        </div>
      </li>
      <li class="info_item">
        <span class="info_one">姓名</span>
        <input type="text" :placeholder="user.member_realname?user.member_realname:'请输入您的姓名'" v-model="name">
      </li>
      <li class="info_item" @click="chooseOpen(1)">
        <span class="info_one">性别</span>
        <span class="info_two">
          <input type="text" :placeholder="user.member_sex===0?'女':'男'" v-model="sex">
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">出生年月</span>
        <span class="info_two">
          <span>{{user.member_birthday}}</span>
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">住址</span>
        <span class="info_two">
          <span>{{user.member_city}}</span>
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item" @click="chooseOpen(2)">
        <span class="info_one">所在行业</span>
        <span class="info_two">
          <input type="text" v-model="industry">
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item">
        <span class="info_one">电话号码</span>
        <input type="text" :placeholder="user.member_phone?user.member_phone:'请输入您的电话号码'" v-model="phone">
      </li>
      <li class="info_item">
        <span class="info_one">LineID</span>
        <input type="text" :placeholder="user.member_lineid?user.member_lineid:'请输入您的LineID'" v-model="LineID">
      </li>
      <li class="info_item">
        <span class="info_one">电子邮箱</span>
        <input type="text" :placeholder="user.member_email?user.member_email:'请输入您的电子邮箱'" v-model="email">
      </li>
      <li class="info_item">
        <span class="info_one">微信号</span>
        <input type="text" :placeholder="user.member_wechat_no?user.member_wechat_no:'请输入您的微信号'" v-model="wechat">
      </li>
    </ul>
    <div class="choose_wrap" v-show="chooseShow" :class="{height:isHeight}">
      <div class="choose_hd">
        <span class="one" @click="cancel">取消</span>
        <span>{{'请选择您的'+chooseTitle}}</span>
        <span class="two" @click="confirm">确定</span>
      </div>
      <div class="scroll_wrap">
        <ul class="choose_list" :class="{bottom:isHeight}">
          <li class="choose_item" v-for="(item,index) in chooseOne" :key="index" @click="choose(item,index)"
              :class="{check:chooseNum===index}">{{item}}
          </li>
        </ul>
      </div>
    </div>
    <ul class="more_list" v-show="setShow">
      <li class="more_item border">拍照</li>
      <li class="more_item border">从手机相册选取</li>
      <li class="more_item border">保存图片</li>
      <li class="more_item bigTop" @click="setShow=false">取消</li>
    </ul>
    <Shade v-show="chooseShow||setShow"/>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqPersonalEdit} from '../../../api'
  import Shade from '../../../components/Shade/Shade'
  import BScroll from 'better-scroll'

  export default {
    name: "MyInfo",
    data() {
      return {
        title: '我的资料',
        name: '', //姓名
        sex: '', //性别
        sexId: '',
        birthday: '', //出生年月
        address: '', //详细地址
        industry: '', //所在行业
        phone: '', //电话号码
        LineID: '', //LineID
        email: '', //电子邮箱
        wechat: '',//微信号
        chooseShow: false,
        chooseTitle: '',
        chooseOne: [],
        chooseNum: 0,
        isHeight: false,
        setShow: false
      }
    },
    methods: {
      chooseOpen(index) {
        if (index === 1) {
          this.isHeight = false;
          this.chooseTitle = '性别';
          this.chooseOne = ['男', '女']
        } else if (index === 2) {
          this.isHeight = true;
          this.chooseTitle = '所在行业';
          this.chooseOne = ['计算机/互联网/通信/电子', '计算机硬件', '计算机软件', '互联网开发及应用',
            'IT-管理', 'IT-品管、技术支持及其它', '通信技术', '电子/电器/半导体/仪器仪表', '销售/客服/技术支持',
            '销售管理', '销售人员', '销售行政及商务', '客服及技术支持', '会计/金融/银行/保险', '财务/审计/税务', '证券/金融/投资'];
        }
        this.chooseShow = true;
      },
      choose(item, index) {
        this.chooseNum = index;
        if (this.chooseTitle === '性别') {
          this.sex = item;
          this.sexId = index + 1
        } else {
          this.industry = item;
        }
      },
      cancel() {
        this.chooseShow = false;
      },
      confirm() {
        this.chooseShow = false
      },
      _initScroll() {
        if (!this.myscroll) {
          this.myscroll = new BScroll('.scroll_wrap', {
            click: true
          })
        } else {
          this.myscroll.refresh()
        }
      },
      async saveSub() {
        const result = await reqPersonalEdit(
          this.user.member_id,
          this.sexId,
          '1995-02-03',
          '北京',
          this.industry,
          this.phone,
          this.wechat,
        )
      }
    },
    computed: {
      ...mapState(['user'])
    },
    components: {
      Shade
    },
    watch: {
      chooseOne(value) {
        this._initScroll()
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
      .more
        width 13px
        height 25px
      input
        outline none
        height 100%
        text-align right
        &::-webkit-input-placeholder /*Webkit browsers*/
          font-size 26px
          color: #666
      .info_two
        color #999
    .avatar
      height 200px
      .header_img
        width 111px
        height 111px
        border-radius 50%
        margin-right 20px
        border 2px solid #7e8c8d

  .choose_wrap
    width 100%
    position fixed
    z-index 100
    bottom 0
    background #fff
    &.height
      height 50%
    .choose_hd
      width 100%
      height 80px
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
    .scroll_wrap
      width 100%
      height 100%
      overflow hidden
      .choose_list
        width 100%
        &.bottom
          padding-bottom 80px
        .choose_item
          width 100%
          height 100px
          line-height 100px
          text-align: center
          font-size 30px
          &.check
            background #eee

  .more_list
    width 100%
    position fixed
    bottom 0
    z-index 10
    .more_item
      width 100%
      text-align: center
      height 100px
      line-height 100px
      font-size 30px
      background #fff
    .border
      bottom-border-1px(#999)
    .bigTop
      margin-top 3px
</style>

