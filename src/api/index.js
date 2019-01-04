/*
* 定义接口请求函数的模块
* */
import ajax from './ajax'

const baseUrl = 'http://shedu.581vv.com';
/*登录/注册模块*/
//用户邮箱登录接口
export const reqEmailLogin = (email, password) => ajax(baseUrl + '/api/login',
  {email, password}, 'POST');
//用户微信登录接口
export const reqWechatLogin = code => ajax(baseUrl + '/api/weixin_login', {code});
//发送验证码
export const reqSendCode = email => ajax(baseUrl + '/api/send_email', {email}, 'POST');
//用户注册接口
export const reqRegister = (email, password) => ajax(baseUrl + '/api/register', {
  email, password
}, 'POST');
//邮箱是否已注册
export const reqEmailIsExist = email => ajax(baseUrl + '/api/email_is_exist', {email}, 'POST');
//找回密码
export const reqForgetPassword = (email, password) => ajax(baseUrl + '/api/forget_password', {
  email,
  password
}, 'POST');

/*首页模块*/
//获取轮播图
export const reqBanners = () => ajax(baseUrl + '/api/banners');
//校区列表
export const reqSchools = () => ajax(baseUrl + '/api/schools');
//校区详情
export const reqSchoolDetail = school_id => ajax(baseUrl + '/api/school_detail', {school_id});
//活动新闻
export const reqNews = () => ajax(baseUrl + '/api/news');
//新闻详情
export const reqNewsDetail = news_id => ajax(baseUrl + '/api/news_detail', {news_id});
//热门课程
export const reqHotCourse = () => ajax(baseUrl + '/api/hot_course');
//热门新闻
export const reqHotNews = () => ajax(baseUrl + '/api/hot_news');

/*课程模块*/
//课程列表
export const reqCourse = () => ajax(baseUrl + '/api/course');
//课程排序列表
export const reqSortCourse = (sortType, sort) => ajax(baseUrl + '/api/course', {sortType, sort});
//课程排序列表
export const reqCateCourse = cateId => ajax(baseUrl + '/api/course', {cateId});
//课程详情
export const reqCourseDetail = course_id => ajax(baseUrl + '/api/detail', {course_id});
//课程分类
export const reqCourseCate = () => ajax(baseUrl + '/api/cate');
//创建订单
export const reqCreateOrder = (member_id, course_id) => ajax(baseUrl + '/api/createOrder', {
  member_id,
  course_id
}, 'POST');
//优惠券
export const reqCoupons = member_id => ajax(baseUrl + '/api/coupons', {member_id});

/*个人中心*/
//异步上传图片
export const reqUploadImg = pic => ajax(baseUrl + '/api/upload_img', {pic}, 'POST');
//修改密码
export const reqResetPassword = (member_id, password, new_password) => ajax(baseUrl + '/api/reset_password', {
  member_id,
  password,
  new_password
}, 'POST');
//获取用户信息
export const reqMember = member_id => ajax(baseUrl + '/api/member', {member_id}, 'POST');
//修改个人资料
export const reqPersonalEdit = (member_id, member_realname, member_sex, member_birthday,
                                member_detail_addr, member_industry, member_phone,
                                member_wechat_no, member_headpic) => ajax(baseUrl + '/api/personal_edit',
  {
    member_id,
    member_realname,
    member_sex,
    member_birthday,
    member_detail_addr,
    member_industry,
    member_phone,
    member_wechat_no,
    member_headpic
  },
  'POST');
//获取孩子信息
export const reqMyChildren = member_id => ajax(baseUrl + '/api/my_children', {member_id}, 'POST');
//编辑孩子资料
export const reqEditChildren = (member_id, children) => ajax(baseUrl + '/api/edit_children', {
  member_id,
  children
}, 'POST');
//我的课程
export const reqMyCourse = member_id => ajax(baseUrl + '/api/my_course', {member_id});
//我的消费记录
export const reqExpense = member_id => ajax(baseUrl + '/api/expense', {member_id});
//我的优惠券
export const reqMyCoupons = member_id => ajax(baseUrl + '/api/my_coupons', {member_id});
//我的通知
export const reqInform = member_id => ajax(baseUrl + '/api/inform', {member_id});
//关于我们
export const reqAbout = () => ajax(baseUrl + '/api/about');
//留言板
export const reqMessage = (member_id, message_center) => ajax(baseUrl + '/api/message', {
  member_id,
  message_center,
}, 'POST');
