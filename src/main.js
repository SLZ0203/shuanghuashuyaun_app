import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible'
import 'mint-ui/lib/style.css';
import HeaderTop from './components/HeaderTop/HeaderTop';
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
