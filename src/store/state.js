/*
vuex管理的状态数据
 */
import {RECEIVE_HOTCOURSE} from "./mutation-types";

export default {
  user: {},//用户信息
  banner: [],//首页轮播图列表
  schools: [], //校区列表
  schoolDetail: {},//校区详情
  news: [], //活动新闻
  newsDetail: {}, //新闻详情
  hotCourse: [], //热门课程
  hotNews: [], //热门新闻
  course: [],//课程列表
  courseDetail: [],//课程详情
  courseCate: [], //课程分类
  coupons: []//优惠券列表
}