/*
vuex管理的状态数据
 */

export default {
  member_id: '', //会员id
  user: {},//用户信息
  banner: [],//首页轮播图列表
  schools: [], //校区列表
  news: [], //活动新闻
  hotCourse: [], //热门课程
  hotNews: [], //热门新闻
  course: [],//课程列表
  courseCate: [], //课程分类
  coupons: [],//优惠券列表
  useCoupons: {}, //用户使用的优惠券
  agreen: false, // 用户是否同意合同
  myCourse: [], //我的课程列表
  myExpense: [], //我的消费记录
  myCoupons: [], //我的优惠券列表
  myInform: [], //我的通知列表
  about: {}, //关于我们
}
