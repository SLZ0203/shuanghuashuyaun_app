/*
包含n个用于直接更新状态数据方法的对象
 */
import {
  RECEIVE_MEMBER_ID,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_NOTUSECOUPONS,
  RECEIVE_USECOUPONS,
  RECEIVE_AGREEN,
  RECEIVE_BANNER,
  RECEIVE_SCHOOLS,
  RECEIVE_NEWS,
  RECEIVE_HOTCOURSE,
  RECEIVE_HOTNEWS,
  RECEIVE_COUPONS,
  RECEIVE_MYCOURSE,
  RECEIVE_MYEXPENSE,
  RECEIVE_MYCOUPONS,
  RECEIVE_INFORM,
  RECEIVE_ABOUT
} from './mutation-types';

export default {
  [RECEIVE_MEMBER_ID](state, {member_id}) {
    state.member_id = member_id
  },
  [RECEIVE_USER](state, {user}) {
    state.user = user
  },
  [RESET_USER](state) {
    state.member_id = '';
    state.user = {}
  },
  [RECEIVE_NOTUSECOUPONS](state){
    state.useCoupons = {}
  },
  [RECEIVE_USECOUPONS](state, {useCoupons}) {
    state.useCoupons = useCoupons;
  },
  [RECEIVE_AGREEN](state, {agreen}) {
    state.agreen = agreen;
  },
  [RECEIVE_BANNER](state, {banner}) {
    state.banner = banner
  },
  [RECEIVE_SCHOOLS](state, {schools}) {
    state.schools = schools
  },
  [RECEIVE_NEWS](state, {news}) {
    state.news = news
  },
  [RECEIVE_HOTCOURSE](state, {hotCourse}) {
    state.hotCourse = hotCourse
  },
  [RECEIVE_HOTNEWS](state, {hotNews}) {
    state.hotNews = hotNews
  },
  [RECEIVE_COUPONS](state, {coupons}) {
    state.coupons = coupons
  },
  [RECEIVE_MYCOURSE](state, {myCourse}) {
    state.myCourse = myCourse
  },
  [RECEIVE_MYEXPENSE](state, {myExpense}) {
    state.myExpense = myExpense
  },
  [RECEIVE_MYCOUPONS](state, {myCoupons}) {
    state.myCoupons = myCoupons
  },
  [RECEIVE_INFORM](state, {myInform}) {
    state.myInform = myInform
  },
  [RECEIVE_ABOUT](state, {about}) {
    state.about = about
  },
}
