/*
包含n个用于间接更新状态数据方法的对象
 */
import {
  reqBanners,
  reqSchools,
  reqNews,
  reqHotCourse,
  reqHotNews,
  reqCoupons,
  reqMyCourse,
  reqExpense,
  reqMyCoupons,
  reqInform,
  reqAbout,
} from '../api'

import {
  RECEIVE_MEMBER_ID,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USECOUPONS,
  RECEIVE_AGREEN,
  RECEIVE_BANNER,
  RECEIVE_SCHOOLS,
  RECEIVE_NEWS,
  RECEIVE_HOTNEWS,
  RECEIVE_HOTCOURSE,
  RECEIVE_COUPONS,
  RECEIVE_MYEXPENSE,
  RECEIVE_MYCOUPONS,
  RECEIVE_INFORM,
  RECEIVE_ABOUT
} from './mutation-types';

export default {
  //保存用户id的action
  saveMemberId({commit}, member_id) {
    commit(RECEIVE_MEMBER_ID, {member_id});
  },
  // 同步保存用户信息的action
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  //退出登录
  loginOut({commit}, cb) {
    commit(RESET_USER);
    // 在更新状态后立即调用
    typeof cb === 'function' && cb()
  },
  //保存选择的优惠券
  saveUseCoupon({commit}, useCoupons) {
    commit(RECEIVE_USECOUPONS, {useCoupons})
  },
  //用户石佛同意会员合同
  userAgreen({commit}, agreen) {
    commit(RECEIVE_AGREEN, {agreen})
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
  //发异步请求获取活动新闻
  async getNews({commit}, cb) {
    const result = await reqNews();
    console.log(result);
    if (result.code === 200) {
      const news = result.data;
      //commit给mutation
      commit(RECEIVE_NEWS, {news});
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
  //发异步请求获取优惠券列表
  async getCoupons({commit, state}) {
    const {member_id} = state;
    const result = await reqCoupons(member_id);
    if (result.code === 200) {
      const coupons = result.data;
      //commit给mutation
      commit(RECEIVE_COUPONS, {coupons});
    }
  },
  //异步获取我的课程
  async getMyCourse({commit, state, cb}) {
    const {member_id} = state;
    const result = await reqMyCourse(member_id);
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
    const {member_id} = state;
    const result = await reqExpense(member_id);
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
    const {member_id} = state;
    const result = await reqMyCoupons(member_id);
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
    const {member_id} = state;
    const result = await reqInform(member_id);
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
