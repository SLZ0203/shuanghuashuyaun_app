/*
包含n个用于间接更新状态数据方法的对象
 */
import {
  reqBanners,
  reqSchools,
  reqSchoolDetail,
  reqNews,
  reqNewsDetail,
  reqHotCourse,
  reqHotNews,
  reqCourse,
  reqCourseDetail,
  reqCourseCate,
  reqCoupons,
  reqMyCourse,
  reqExpense,
  reqMyCoupons,
  reqInform,
  reqAbout,
} from '../api'

import {
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_BANNER,
  RECEIVE_SCHOOLS,
  RECEIVE_SCHOOLDETAIL,
  RECEIVE_NEWS,
  RECEIVE_NEWSDETAIL,
  RECEIVE_HOTNEWS,
  RECEIVE_HOTCOURSE,
  RECEIVE_COURSE,
  RECEIVE_COURSEDETAIL,
  RECEIVE_COURSECATE,
  RECEIVE_COUPONS,
  RECEIVE_MYEXPENSE,
  RECEIVE_MYCOUPONS,
  RECEIVE_INFORM,
  RECEIVE_ABOUT
} from './mutation-types';

export default {
  // 同步保存用户的action
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  //退出登录
  loginOut({commit},cb) {
    commit(RESET_USER);
    // 在更新状态后立即调用
    typeof cb === 'function' && cb()
  },
  //发异步请求获取首页轮播图
  async getBanner({commit}, cb) {
    const result = await reqBanners();
    if (result.code === 200) {
      const banner = result.data;
      //commit给mutation
      commit(RECEIVE_BANNER, {banner});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取校区列表
  async getSchools({commit}, cb) {
    const result = await reqSchools();
    if (result.code === 200) {
      const schools = result.data;
      //commit给mutation
      commit(RECEIVE_SCHOOLS, {schools});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取校区详情
  async getSchoolDetail({commit}, cb) {
    const result = await reqSchoolDetail();
    if (result.code === 200) {
      const schoolDetail = result.data;
      //commit给mutation
      commit(RECEIVE_SCHOOLDETAIL, {schoolDetail});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取活动新闻
  async getNews({commit}, cb) {
    const result = await reqNews();
    if (result.code === 200) {
      const news = result.data;
      //commit给mutation
      commit(RECEIVE_NEWS, {news});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取新闻详情
  async getNewsDetail({commit}, cb) {
    const result = await reqNewsDetail();
    if (result.code === 200) {
      const newsDetail = result.data;
      //commit给mutation
      commit(RECEIVE_NEWSDETAIL, {newsDetail});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取热门课程
  async getHotcourse({commit}, cb) {
    const result = await reqHotCourse();
    if (result.code === 200) {
      const hotCourse = result.data;
      //commit给mutation
      commit(RECEIVE_HOTCOURSE, {hotCourse});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取热门新闻
  async getHotNews({commit}, cb) {
    const result = await reqHotNews();
    if (result.code === 200) {
      const hotNews = result.data;
      //commit给mutation
      commit(RECEIVE_HOTNEWS, {hotNews});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取课程列表
  async getCourse({commit}, cb) {
    const result = await reqCourse();
    if (result.code === 200) {
      const course = result.data;
      //commit给mutation
      commit(RECEIVE_COURSE, {course});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取课程列表
  async getSortCourse({commit}, cb) {
    const result = await reqSortCourse();
    if (result.code === 200) {
      const course = result.data;
      //commit给mutation
      commit(RECEIVE_COURSE, {course});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取课程详情
  async getCourseDetail({commit}, cb) {
    const result = await reqCourseDetail();
    if (result.code === 200) {
      const courseDetail = result.data;
      //commit给mutation
      commit(RECEIVE_COURSEDETAIL, {courseDetail});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取课程分类
  async getCourseCate({commit}, cb) {
    const result = await reqCourseCate();
    if (result.code === 200) {
      const courseCate = result.data;
      //commit给mutation
      commit(RECEIVE_COURSECATE, {courseCate});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //发异步请求获取优惠券列表
  async getCoupons({commit, state}) {
    const {user} = state;
    const result = await reqCoupons(user.member_id);
    if (result.code === 200) {
      const coupons = result.data;
      //commit给mutation
      commit(RECEIVE_COUPONS, {coupons});
    }
  },
  //异步获取我的课程
  async getMyCourse({commit, state, cb}) {
    const {user} = state;
    const result = await reqMyCourse(user.member_id);
    if (result.code === 200) {
      const myCourse = result.data;
      //commit给mutation
      commit(RECEIVE_COUPONS, {myCourse});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //异步获取我的消费明细
  async getMyExpense({commit, state, cb}) {
    const {user} = state;
    const result = await reqExpense(user.member_id);
    if (result.code === 200) {
      const myExpense = result.data;
      //commit给mutation
      commit(RECEIVE_MYEXPENSE, {myExpense});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //异步获取我的优惠券
  async getMyCoupons({commit, state, cb}) {
    const {user} = state;
    const result = await reqMyCoupons(user.member_id);
    if (result.code === 200) {
      const myCoupons = result.data;
      //commit给mutation
      commit(RECEIVE_MYCOUPONS, {myCoupons});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //异步获取我的通知
  async getMyInform({commit, state, cb}) {
    const {user} = state;
    const result = await reqInform(user.member_id);
    if (result.code === 200) {
      const myInform = result.data;
      //commit给mutation
      commit(RECEIVE_INFORM, {myInform});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
  //异步获取我的通知
  async getAbout({commit, state, cb}) {
    const result = await reqAbout();
    if (result.code === 200) {
      const about = result.data;
      //commit给mutation
      commit(RECEIVE_ABOUT, {about});
      // 在更新状态后立即调用
      typeof cb === 'function' && cb()
    }
  },
}
