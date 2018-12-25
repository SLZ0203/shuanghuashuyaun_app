/*
包含n个用于直接更新状态数据方法的对象
 */
import {
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_BANNER,
  RECEIVE_SCHOOLS,
  RECEIVE_SCHOOLDETAIL,
  RECEIVE_NEWS,
  RECEIVE_NEWSDETAIL,
  RECEIVE_HOTCOURSE,
  RECEIVE_HOTNEWS,
  RECEIVE_COURSE,
  RECEIVE_COURSEDETAIL,
  RECEIVE_COURSECATE,
  RECEIVE_COUPONS,
  RECEIVE_MYCOURSE,
  RECEIVE_MYEXPENSE,
  RECEIVE_MYCOUPONS,
  RECEIVE_INFORM,
  RECEIVE_ABOUT
} from './mutation-types';

export default {
  [RECEIVE_USER](state, {user}) {
    state.user = user
  },
  [RESET_USER](state) {
    state.user = {}
  },
  [RECEIVE_BANNER](state, {banner}) {
    state.banner = banner
  },
  [RECEIVE_SCHOOLS](state, {schools}) {
    state.schools = schools
  },
  [RECEIVE_SCHOOLDETAIL](state, {schoolDetail}) {
    state.schoolDetail = schoolDetail
  },
  [RECEIVE_NEWS](state, {news}) {
    state.news = news
  },
  [RECEIVE_NEWSDETAIL](state, {newsDetail}) {
    state.newsDetail = newsDetail
  },
  [RECEIVE_HOTCOURSE](state, {hotCourse}) {
    state.hotCourse = hotCourse
  },
  [RECEIVE_HOTNEWS](state, {hotNews}) {
    state.hotNews = hotNews
  },
  [RECEIVE_COURSE](state, {course}) {
    state.course = course
  },
  [RECEIVE_COURSEDETAIL](state, {courseDetail}) {
    state.courseDetail = courseDetail
  },
  [RECEIVE_COURSECATE](state, {courseCate}) {
    state.courseCate = courseCate
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
