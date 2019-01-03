import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible'
import 'mint-ui/lib/style.css';
import VueLazyload from 'vue-lazyload'
import loading from '../static/images/lazy.gif'
import HeaderTop from './components/HeaderTop/HeaderTop';
import Mint from 'mint-ui';

Vue.use(Mint);
Vue.use(VueLazyload, {loading});
//注册全局组件
Vue.component('HeaderTop', HeaderTop);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
