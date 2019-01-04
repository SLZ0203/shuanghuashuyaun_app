<!--我的资料2页面-->
<template>
  <section class="outer_wrap">
    <HeaderTop :title="title">
      <img src="../../../../static/images/21@2x.png" slot="return" class="return" @click="$router.back()">
      <span class="save" slot="save" @click="saveSub">保存</span>
    </HeaderTop>
    <ul class="user_info_list">
      <li class="info_item avatar">
        <div class="info_one">我的头像</div>
        <div class="info_right">
          <!--<img v-lazy="avatar" class="header_img" v-if="avatar">-->
          <img src="../../../../static/images/36@2x.png" class="header_img">
          <input type="file" accept="image/*" class="upload" @change="handleFile">
          <img src="../../../../static/images/5@2x.png" class="more">
        </div>
      </li>
      <li class="info_item">
        <span class="info_one must">姓名</span>
        <input type="text" placeholder="请输入您的姓名" v-model="name">
      </li>
      <li class="info_item" @click="sexShow=true">
        <span class="info_one must">性别</span>
        <span class="info_two">
          <input type="text" v-model="sex" readonly="readonly" placeholder="请选择您的性别">
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item" @click="openBirthday">
        <span class="info_one must">出生年月</span>
        <span class="info_two">
          <input type="text" placeholder="请选择您的出生年月" v-model="birthday" readonly="readonly">
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item" @click="addressShow=true">
        <span class="info_one must">住址</span>
        <span class="info_two">
          <input type="text" placeholder="请选择您的住址" v-model="address" readonly="readonly">
          <img src="../../../../static/images/5@2x.png" class="more">
        </span>
      </li>
      <li class="info_item" @click="openWork">
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
    </ul>
    <!--性别选择-->
    <div class="choose_sex" v-show="sexShow">
      <div class="choose_hd">
        <span class="one" @click="cancelConfirm">取消</span>
        <span>请选择您的性别</span>
        <span class="two" @click="cancelConfirm">确定</span>
      </div>
      <ul class="choose_list">
        <li class="choose_item" v-for="(item,index) in sexChoose" :key="index" @click="choose(item,index)"
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
    <!--住址选择-->
    <ChooseAddress v-bind:addressShow="addressShow" v-on:closeAddress="closeAddress" v-on:doneAddress="doneAddress"/>
    <!--行业选择-->
    <div class="choose_work" v-show="workShow">
      <div class="choose_hd">
        <span class="one" @click="cancelConfirm">取消</span>
        <span>请选择</span>
        <span class="two" @click="cancelConfirm">确定</span>
      </div>
      <div class="scroll_wrap" ref="scroll2">
        <ul class="choose_list">
          <li class="choose_item" v-for="(item,index) in workChoose" :key="index" @click="choose(item,index)"
              :class="{check:chooseNum===index}">{{item}}
          </li>
        </ul>
      </div>
    </div>
    <Shade v-show="sexShow||addressShow||workShow"/>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqMember, reqPersonalEdit} from '../../../api'
  import Shade from '../../../components/Shade/Shade'
  import BScroll from 'better-scroll'
  import {Indicator, Toast} from 'mint-ui';
  import ChooseAddress from '../../../components/ChooseAddress/ChooseAddress'

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
        avatar: '', //用户头像
        sexChoose: ['男', '女'], //性别选择
        sexShow: false, //性别选择显示/隐藏
        addressShow: false,//住址选择显示/隐藏
        workChoose: ['计算机/互联网/通信/电子', '计算机硬件', '计算机软件', '互联网开发及应用',
          'IT-管理', 'IT-品管、技术支持及其它', '通信技术', '电子/电器/半导体/仪器仪表', '销售/客服/技术支持',
          '销售管理', '销售人员', '销售行政及商务', '客服及技术支持', '会计/金融/银行/保险', '财务/审计/税务', '证券/金融/投资'], //行业选择
        workShow: false, //行业选择显示/隐藏
        chooseNum: 0,
        dataVal: new Date(),
      }
    },
    async mounted() {
      Indicator.open('加载中');
      const result = await reqMember(this.user.member_id);
      if (result.code === 200) {
        this.name = result.data.member_realname;
        this.sex = result.data.member_sex === 1 ? '男' : '女';
        this.sexId = result.data.member_sex;
        this.birthday = result.data.member_birthday;
        this.address = result.data.member_detail_addr;
        this.industry = result.data.member_industry;
        this.phone = result.data.member_phone;
        this.LineID = result.data.member_lineid;
        this.email = result.data.member_email;
        this.wechat = result.data.member_wechat_no;
        this.avatar = result.data.member_headpic;
        Indicator.close();
      } else {
        Indicator.close();
        Toast(result.msg)
      }
    },
    methods: {
      //将头像显示
      handleFile(e) {
        //表示调用他的各种属性，
        let $target = e.target || e.srcElement;
        //由于手机上可以选择多张图片，所以取第一张图。
        let file = $target.files[0];
        console.log(file);
        //FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，
        // 使用 File 或 Blob 对象指定要读取的文件或数据。
        var reader = new FileReader();
        //.onload 事件会在页面或图像加载完成后立即发生
        reader.onload = (data) => {
          let res = data.target || data.srcElement;
          this.avatar = res.result
        };
        //将读取到的文件编码成Data URL
        reader.readAsDataURL(file);
      },
      //选择性别、工作
      choose(item, index) {
        this.chooseNum = index;
        if (this.sexShow) {
          this.sex = item;
          this.sexId = index + 1
        } else if (this.workShow) {
          this.industry = item
        }
      },
      //取消/确定按钮
      cancelConfirm() {
        if (this.sexShow) {
          this.sexShow = false
        } else if (this.workShow) {
          this.workShow = false
        }
      },
      //行业选择滚动方法
      _initscroll2() {
        this.$nextTick(() => {
          if (!this.scroll2) {
            this.scroll2 = new BScroll(this.$refs.scroll2, {
              click: true,
            })
          } else {
            this.scroll2.refresh()
          }
        })
      },
      //打开生日选择
      openBirthday() {
        this.$refs.dataPicker.open();
      },
      //地址选择完成
      doneAddress(a) {
        this.address = a;
      },
      //关闭地址选择
      closeAddress(res) {
        this.addressShow = res
      },
      //生日选择的确定按钮
      handleConfirm() {
        const d = this.dataVal;
        this.dataVal = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        this.birthday = this.dataVal
      },
      //打开行业选择
      openWork() {
        this.workShow = true;
        this._initscroll2()
      },
      async saveSub() {
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
        } else if (!this.phone) {
          return Toast('请输入您的电话号码')
        } else if (!this.isRightPhone) {
          return Toast('请输入正确的电话号码')
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
            this.avatar
          );
          if (result.code === 200) {
            Toast(result.msg);
          } else {
            Toast(result.msg + '，请重试');
          }
        }
      },
    },
    computed: {
      ...mapState(['user']),
      isRightPhone() {
        return /^1[3|4|5|7|8|9][0-9]\d{8}$/.test(this.phone)
      },
    },
    components: {
      Shade,
      ChooseAddress
    },
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
        .info_right
          width 150px
          height 111px
          position relative
          .header_img
            width 111px
            height 111px
            border-radius 50%
            margin-right 10px
            border 2px solid #7e8c8d
          .upload
            width 100%
            height 100%
            position absolute
            left 0
            top 0
            opacity 0
    .choose_sex, .choose_work
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
      .scroll_wrap
        width 100%
        overflow hidden
        position fixed
        bottom 0
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
    .choose_work
      height 50%
      .scroll_wrap
        top 742px
</style>

