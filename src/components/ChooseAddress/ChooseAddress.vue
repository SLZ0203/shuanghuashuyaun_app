<!--住址选择列表-->
<template>
  <div class="choose_address" v-show="addressShow">
    <div class="choose_hd">
      <span class="one" @click="cancel">取消</span>
      <span>请选择您的住址</span>
      <span class="two" @click="confirm">确定</span>
    </div>
    <p class="address_show ellipsis">
      <span @click="showPro">{{pro}}</span>
      <span @click="showCity">{{city}}</span>
      <span @click="showArea">{{area}}</span>
      <span @click="showStreet">{{street}}</span>
    </p>
    <div class="scroll_wrap">
      <ul class="choose_list">
        <li class="choose_item" v-for="(pro,index) in proList" :key="'p'+index" @click="proChoose(pro,index)"
            :class="{check:chooseNum===index}" v-show="proShow">{{pro.name}}
        </li>
        <li class="choose_item" v-for="(city,index) in cityList" :key="'c'+index" @click="cityChoose(city,index)"
            :class="{check:chooseNum===index}" v-show="cityShow">{{city.name}}
        </li>
        <li class="choose_item" v-for="(area,index) in areaList" :key="'a'+index" @click="areaChoose(area,index)"
            :class="{check:chooseNum===index}" v-show="areaShow">{{area.name}}
        </li>
        <li class="choose_item" v-for="(street,index) in streetList" :key="'s'+index"
            @click="streetChoose(street,index)"
            :class="{check:chooseNum===index}" v-show="streetShow">{{street.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import add from '../../../static/json/pcas_code'
  import BScroll from 'better-scroll'
  import {Toast} from 'mint-ui'

  export default {
    name: "ChooseAddress",
    props: {
      addressShow: Boolean
    },
    data() {
      return {
        address: '',
        chooseNum: 0,
        proShow: true, //省列表显示/隐藏
        cityShow: false,//市列表显示/隐藏
        areaShow: false,//区列表显示/隐藏
        streetShow: false,//街道列表显示/隐藏
        proList: [], //省列表
        cityList: [],//市列表
        areaList: [],//区列表
        streetList: [],//街道列表
        pro: '',//省
        city: '',//市
        area: '',//区
        street: '',//街道
      }
    },
    mounted() {
      this.proList = add;

    },
    methods: {
      _initscroll() {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.scroll_wrap', {
              click: true,
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      //选择省份
      proChoose(pro, index) {
        this.chooseNum = index;
        this.pro = pro.name;
        this.cityList = pro.children;
        this.proShow = false;
        this.cityShow = true;
      },
      //选择城市
      cityChoose(city, index) {
        this.chooseNum = index;
        this.city = city.name;
        this.areaList = city.children;
        this.cityShow = false;
        this.areaShow = true;
      },
      //选择区县
      areaChoose(area, index) {
        this.chooseNum = index;
        this.area = area.name;
        this.streetList = area.children;
        this.areaShow = false;
        this.streetShow = true;
      },
      //选择街道
      streetChoose(street, index) {
        this.chooseNum = index;
        this.street = street.name;
      },
      showPro() {
        this.proShow = true;
        this.cityShow = false;
        this.areaShow = false;
        this.streetShow = false;
        this.city = '';
        this.area = '';
        this.street = '';
      },
      showCity() {
        this.proShow = false;
        this.cityShow = true;
        this.areaShow = false;
        this.streetShow = false;
        this.area = '';
        this.street = '';
      },
      showArea() {
        this.proShow = false;
        this.cityShow = false;
        this.areaShow = true;
        this.streetShow = false;
        this.street = '';
      },
      showStreet() {
        this.proShow = false;
        this.cityShow = false;
        this.areaShow = false;
        this.streetShow = true
      },
      cancel() {
        this.pro = '';
        this.city = '';
        this.area = '';
        this.street = '';
        this.$emit('closeAddress', false)
      },
      confirm() {
        if (!this.pro) {
          return Toast('请选择您所在的省份')
        } else if (!this.city) {
          return Toast('请选择您所在的城市')
        } else if (!this.area) {
          return Toast('请选择您所在的区域')
        } else if (!this.street) {
          return Toast('请选择您所在的街道')
        } else {
          this.address = this.pro + ' ' + this.city + ' ' + this.area + ' ' + this.street;
          this.$emit('closeAddress', false);
          this.$emit('doneAddress', this.address)
        }
      }
    },
    watch: {
      addressShow(val) {
        if (val) {
          this._initscroll()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .choose_address
    width 100%
    position fixed
    z-index 100
    bottom 0
    background #fff
    height 60%
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
        color #1FBE86
    .address_show
      width 100%
      height 100px
      line-height 100px
      bottom-border-1px(#ccc)
      padding 0 30px
      box-sizing border-box
      span
        font-size 32px
        margin-right 5px

    .scroll_wrap
      width 100%
      overflow hidden
      position fixed
      bottom 0
      top 705px
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
