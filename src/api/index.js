/*
* 定义接口请求函数的模块
* */
import ajax from './ajax'
/*登录/注册模块*/
//用户登录接口
export const reqEmailLogin = (email, password) => ajax('http://shedu.581vv.com/api/login',
  {email, password}, 'POST');
//发送验证码
export const reqSendCode = email => ajax('http://shedu.581vv.com/api/send_email', {email}, 'POST');
//用户注册接口
export const reqRegister = (email, password) => ajax('http://shedu.581vv.com/api/register', {
  email, password
}, 'POST');
//邮箱是否已注册
export const reqEmailIsExist = email => ajax('http://shedu.581vv.com/api/email_is_exist', {email}, 'POST');
//找回密码
export const reqForgetPassword = (email, password) => ajax('http://shedu.581vv.com/api/forget_password', {
  email,
  password
}, 'POST');

/*首页模块*/
//获取轮播图
export const reqBanners = () => ajax('http://shedu.581vv.com/api/banners');
//校区列表
export const reqSchools = () => ajax('http://shedu.581vv.com/api/schools');
//校区详情
export const reqSchoolDetail = () => ajax('http://shedu.581vv.com/api/school_detail');
//活动新闻
export const reqNews = () => ajax('http://shedu.581vv.com/api/news');
//新闻详情
export const reqNewsDetail = () => ajax('http://shedu.581vv.com/api/news_detail');
//热门课程
export const reqHotCourse = () => ajax('http://shedu.581vv.com/api/hot_course');
//热门新闻
export const reqHotNews = () => ajax('http://shedu.581vv.com/api/hot_news');

/*课程模块*/
//课程列表
export const reqCourse = () => ajax('http://shedu.581vv.com/api/course');
//课程详情
export const reqCourseDetail = () => ajax('http://shedu.581vv.com/api/detail');
//课程分类
export const reqCourseCate = () => ajax('http://shedu.581vv.com/api/cate');
//创建订单
export const reqCreateOrder = (member_id, course_id) => ajax('http://shedu.581vv.com/api/createOrder', {
    member_id,
    course_id
  }, 'POST');
//优惠券
export const reqCoupons = member_id => ajax('http://shedu.581vv.com/api/coupons', {member_id});

/*个人中心*/
//异步上传图片
export const reqUploadImg = pic => ajax('http://shedu.581vv.com/api/upload_img', {pic}, 'POST');
//修改密码
export const reqResetPassword = (member_id, password, new_password) => ajax('http://shedu.581vv.com/api/reset_password', {
    member_id,
    password,
    new_password
  }, 'POST');
//获取用户信息
export const reqMember = member_id => ajax('http://shedu.581vv.com/api/member', {member_id}, 'POST');
//修改个人资料
export const reqPersonalEdit = (member_id, member_sex, member_birthday,
                                member_detail_addr, member_industry, member_phone,
                                member_wechat_no, member_headpic) => ajax('http://shedu.581vv.com/api/personal_edit', {
    member_id,
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
export const reqMyChildren = member_id => ajax('http://shedu.581vv.com/api/my_children', {member_id}, 'POST');
//编辑孩子资料
export const reqEditChildren = (member_id, children) => ajax('http://shedu.581vv.com/api/edit_children', {
  member_id,
  children
}, 'POST');
//我的课程
export const reqMyCourse = () => ajax('http://shedu.581vv.com/api/my_course');
//我的消费记录
export const reqExpense = () => ajax('http://shedu.581vv.com/api/expense');
//我的优惠券
export const reqMyCoupons = () => ajax('http://shedu.581vv.com/api/my_coupons');
//我的通知
export const reqInform = () => ajax('http://shedu.581vv.com/api/inform');
//我的通知
export const reqAbout = () => ajax('http://shedu.581vv.com/api/about');
//留言板
export const reqMessage = (member_id, message_center) => ajax('http://shedu.581vv.com/api/message', {
  member_id,
  message_center,
}, 'POST');
