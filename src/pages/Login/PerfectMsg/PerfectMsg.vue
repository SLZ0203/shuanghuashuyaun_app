<!--完善信息页面-->
<template>
  <section class="perfect_wrap">
    <HeaderTop :title="title"></HeaderTop>
    <ul class="user_info_list">
      <li class="info_item">
        <span class="info_one must">姓名</span>
        <input type="text" placeholder="请输入您的姓名" v-model="name">
      </li>
      <li class="info_item" @click="oneShow=true">
        <span class="info_one must">性别</span>
        <span class="info_two">
          <input type="text" v-model="sex" readonly="readonly" placeholder="请选择您的性别">
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item" @click="chooseBirthday">
        <span class="info_one must">出生年月</span>
        <span class="info_two">
          <input type="text" placeholder="请选择您的出生年月" v-model="birthday" readonly="readonly">
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item" @click="chooseShow(2)">
        <span class="info_one must">住址</span>
        <span class="info_two">
          <input type="text" placeholder="请选择您的住址" v-model="address" readonly="readonly">
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item" @click="chooseShow(3)">
        <div class="info_one must">所在行业</div>
        <div class="info_two">
          <input type="text" v-model="industry" readonly="readonly" placeholder="请选择您所在的行业">
          <img src="../../../../static/images/5@2x.png" class="more">
        </div>
      </li>
      <li class="info_item">
        <span class="info_one must">电话号码</span>
        <input type="tel" placeholder="请输入您的电话号码" v-model="phone" maxlength="11"
               oninput="value=value.replace(/[^\d]/g,'')">
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
      <li class="btn" @click="pefectMsg">完善资料</li>
    </ul>
    <!--性别选择-->
    <div class="choose_wrap" v-show="oneShow" :class="{height:!oneShow}">
      <div class="choose_hd">
        <span class="one" @click="cancelConfirm">取消</span>
        <span>请选择您的性别</span>
        <span class="two" @click="cancelConfirm">确定</span>
      </div>
      <ul class="choose_list">
        <li class="choose_item" v-for="(item,index) in chooseOne" :key="index" @click="choose(item,index)"
            :class="{check:chooseNum===index}">{{item}}
        </li>
      </ul>
    </div>
    <!--出生年月选择-->
    <mt-datetime-picker
      ref="dataPicker"
      v-model="dataVal"
      type="date"
      :start-date="new Date('1950-01-01')"
      :end-date="new Date()"
      @confirm="handleConfirm"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
    </mt-datetime-picker>
    <div class="choose_wrap height" v-show="isShow">
      <div class="choose_hd">
        <span class="one" @click="cancelConfirm">取消</span>
        <span>请选择</span>
        <span class="two" @click="cancelConfirm">确定</span>
      </div>
      <div class="scroll_wrap">
        <div>
          <!--住址选择-->
          <ul class="choose_list" v-if="threeShow">
            <li class="choose_item" v-for="(item,index) in chooseThree" :key="index" @click="choose(item,index)"
                :class="{check:chooseNum===index}">{{item}}
            </li>
          </ul>
          <!--行业选择-->
          <ul class="choose_list" v-else-if="fourShow">
            <li class="choose_item" v-for="(item,index) in chooseFour" :key="index" @click="choose(item,index)"
                :class="{check:chooseNum===index}">{{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Shade v-show="oneShow||twoShow||threeShow||fourShow"/>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Shade from '../../../components/Shade/Shade'
  import BScroll from 'better-scroll'
  import {reqMember, reqPersonalEdit} from '../../../api'
  import {Indicator, Toast} from 'mint-ui';

  export default {
    name: "PerfectMsg",
    data() {
      return {
        title: '完善资料',
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
        isShow: false,
        chooseOne: ['男', '女'], //性别选择
        oneShow: false,
        chooseTwo: ['1995', '1995', '1995', '1995', '1995', '1995', '1995', '1995', '1995',], //出生年月选择
        twoShow: false,
        chooseThree: ['北京', '北京', '北京', '北京', '北京', '北京', '北京', '北京', '北京', '北京',], //住址选择
        threeShow: false,
        chooseFour: ['计算机/互联网/通信/电子', '计算机硬件', '计算机软件', '互联网开发及应用',
          'IT-管理', 'IT-品管、技术支持及其它', '通信技术', '电子/电器/半导体/仪器仪表', '销售/客服/技术支持',
          '销售管理', '销售人员', '销售行政及商务', '客服及技术支持', '会计/金融/银行/保险', '财务/审计/税务', '证券/金融/投资'], //行业选择
        fourShow: false,
        chooseNum: 0,
        dataVal: new Date(),
      }
    },
    async mounted() {
      Indicator.open('加载中');
      const result = await reqMember(this.user.member_id);
      if (result.code === 200) {
        this.name = result.data.member_realname;
        this.sex = result.data.member_sex === 0 ? '男' : '女';
        this.sexId = result.data.member_sex;
        this.birthday = result.data.member_birthday;
        this.address = result.data.member_detail_addr;
        this.industry = result.data.member_industry;
        this.phone = result.data.member_phone;
        this.LineID = result.data.member_lineid;
        this.email = result.data.member_email;
        this.wechat = result.data.member_wechat_no;
        Indicator.close();
      } else {
        Indicator.close();
        Toast(result.msg)
      }
    },
    methods: {
      chooseShow(num) {
        this.isShow = true;
        switch (num) {
          case 1:
            this.twoShow = true;
            break;
          case 2:
            this.threeShow = true;
            break;
          case 3:
            this.fourShow = true;
            break;
        }
        this._initscroll1()
      },
      choose(item, index) {
        this.chooseNum = index;
        if (this.oneShow) {
          this.sex = item;
          this.sexId = index
        } else if (this.twoShow) {
          this.birthday = item
        } else if (this.threeShow) {
          this.address = item
        } else if (this.fourShow) {
          this.industry = item
        }
      },
      cancelConfirm() {
        this.isShow = false;
        if (this.oneShow) {
          this.oneShow = false
        } else if (this.twoShow) {
          this.twoShow = false
        } else if (this.threeShow) {
          this.threeShow = false
        } else if (this.fourShow) {
          this.fourShow = false
        }
      },
      _initscroll1() {
        if (!this.scroll) {
          this.scroll = new BScroll('.scroll_wrap', {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      },
      async pefectMsg() {
        if (!this.name) {
          return Toast('请输入您的姓名')
        } else if (!this.sex) {
          return Toast('请选择您的性别')
        } else if (!this.birthday) {
          return Toast('请选择您的出生年月')
        } else if (!this.address) {
          return Toast('请选择您的住址')
        } else if (!this.industry) {
          return Toast('请选择您的行业')
        } else {
          const result = await reqPersonalEdit(
            this.user.member_id,
            this.name,
            this.sexId,
            this.birthday,
            this.address,
            this.industry,
            this.phone,
            this.wechat,
          );
          if (result.code === 200) {
            Toast(result.msg + '，即将跳转到首页');
            setTimeout(() => {
              this.$router.replace('/home')
            }, 2000)
          } else {
            Toast(result.msg + '，请重试');
          }
        }
      },
      //打开生日选择器
      chooseBirthday() {
        this.$refs.dataPicker.open();
      },
      handleConfirm() {
        const d = this.dataVal;
        this.dataVal = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        this.birthday = this.dataVal
      }
    },
    computed: {
      ...mapState(['user']),
      isRightPhone() {
        return /^1[3|4|5|7|8|9][0-9]\d{8}$/.test(this.phone)
      },
    }
    ,
    components: {
      Shade
    }
    ,
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .perfect_wrap
    width 100%
    height 100%
    background rgba(255, 255, 255, 1)
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
            color: #999
        .info_two
          color #999
          .more
            width 13px
            height 25px
      .btn
        width 100%
        height 80px
        text-align: center
        line-height 80px
        margin-top 68px
        background-color: $main
        font-size 30px
        border-radius 10px
        color #fff
      .must
        &::after
          content: '*';
          color: #f56c6c;
          margin-left 5px
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
        overflow hidden
        position fixed
        top 747px
        bottom 0
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
</style>
