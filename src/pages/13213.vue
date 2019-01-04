<template>
  <section>
    <mt-picker :slots="addressSlots" class="picker" @change="onAddressChange" :visible-item-count="5"></mt-picker>

    <mt-picker :slots="streetSlots" ref="picker" class="picker" @change="onStreetChange"
               :visible-item-count="5"></mt-picker>
    上门服务地址:{{ addressProvince }} {{ addressCity }}


  </section>
</template>

<script type="text/ecmascript-6" >
  export default {
    name: 'address',
    data () {
      return {
        companyName:'',
        addressSlots: [
          {
            flex: 1,
            defaultIndex: 1,
            values: Object.keys(s),
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot4'
          }, {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
          }
        ],
        streetSlots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center'
          }
        ],
        addressProvince: '省',
        addressCity: '市',
        addressXian: '区',
        addressStreet: '街道',

      }
    },
    methods: {

      onAddressChange(picker, values) {
        let sheng = Object.keys(s);
        let shi = Object.keys(s[values[0]]);

        let index=shi.indexOf(values[1])
        let xian = s[values[0]][shi[index]];
        this.xianObj = xian;
        picker.setSlotValues(1, shi);
        this.addressProvince = values[0];
        this.addressCity = values[1];
        this.addressXian = values[2];
        picker.setSlotValues(2, Object.keys(xian));
      },
      onStreetChange(picker, values){
        this.addressStreet = values[0]
      },


    },
    watch: {
      'addressXian': {
        handler(val, oval){
          let street = this.xianObj[this.addressXian]
          this.streetSlots[0].values = street
        }
      }
    },
    created(){

    },
    mounted(){
      this.$nextTick(() => {
        setTimeout(() => {//这个是一个初始化默认值的一个技巧
          this.addressSlots[0].defaultIndex = 0;
        }, 100);
      });



    }
  }
</script >

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
