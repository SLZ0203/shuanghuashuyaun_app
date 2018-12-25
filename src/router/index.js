import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../pages/Login/Login';//登录页面
import Register from '../pages/Login/Register/Register';//注册页面
import RestPwd from '../pages/Login/RestPwd/RestPwd';//重置密码页面
import PerfectMsg from '../pages/Login/PerfectMsg/PerfectMsg';//完善资料页面
const Home = () => import ('../pages/Home/Home');//首页
const All = () => import ('../pages/All/All');//全部课程
const Mine = () => import ('../pages/Mine/Mine');//我的
import AllCampus from '../pages/Home/AllCampus/AllCampus'//全部校区页面
import CampusDetail from '../pages/Home/CampusDetail/CampusDetail'//校区介绍页面
import ActiveNews from '../pages/Home/ActiveNews/ActiveNews'//活动新闻页面
import NewsDetail from '../pages/Home/NewsDetail/NewsDetail'//新闻详情页面
import ProjectDetail from '../pages/All/ProjectDetail/ProjectDetail'//课程详情页面
import Classpayment from '../pages/All/Classpayment/Classpayment'//课程付款页面
import MemberPact from '../pages/All/MemberPact/MemberPact'//会员合同页面
import UseCoupon from '../pages/All/UseCoupon/UseCoupon'//使用优惠券页面
import PayWin from '../pages/All/PayWin/PayWin'//支付成功页面
import MyData from '../pages/Mine/MyData/MyData'//我的资料1页面
import MyInfo from '../pages/Mine/MyData/MyInfo'//我的资料2页面
import KidsInfo from '../pages/Mine/MyData/KidsInfo'//孩子资料页面
import ChangePwd from '../pages/Mine/MyData/ChangePwd'//修改密码页面
import MyProject from '../pages/Mine/MyProject/MyProject'//我的课程页面
import MyConsume from '../pages/Mine/MyConsume/MyConsume'//我的消费明细页面
import GoodFriend from '../pages/Mine/GoodFriend/GoodFriend'//好友推荐页面
import Coupon from '../pages/Mine/Coupon/Coupon'//优惠券页面
import Message from '../pages/Mine/Message/Message'//我的消息页面
import AboutUs from '../pages/Mine/AboutUs/AboutUs'//关于我们页面
import LeaveWord from '../pages/Mine/LeaveWord/LeaveWord'//留言板页面

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/restpwd',
      component: RestPwd,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/perfectmsg',
      component: PerfectMsg,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true,
        keepAlive: true
      }
    },
    {
      path: '/allcampus',
      component: AllCampus,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/campus_detail',
      component: CampusDetail,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/active_news',
      component: ActiveNews,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/news_detail',
      component: NewsDetail,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/all',
      component: All,
      meta: {
        showFooter: true,
        keepAlive: true
      }
    },
    {
      path: '/project_detail',
      component: ProjectDetail,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/class_payment',
      component: Classpayment,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/member_pact',
      component: MemberPact,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/use_coupon',
      component: UseCoupon,
      meta: {
        showFooter: false,
        keepAlive: true
      }
    },
    {
      path: '/pay_win',
      component: PayWin,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/use_coupon',
      component: UseCoupon,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
        showFooter: true,
        keepAlive: false
      }
    },
    {
      path: '/mydata',
      component: MyData,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/myinfo',
      component: MyInfo,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/kidsinfo',
      component: KidsInfo,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/changepwd',
      component: ChangePwd,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/myproject',
      component: MyProject,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/myconsume',
      component: MyConsume,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/goodfriend',
      component: GoodFriend,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/coupon',
      component: Coupon,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/message',
      component: Message,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/aboutus',
      component: AboutUs,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
    {
      path: '/leaveword',
      component: LeaveWord,
      meta: {
        showFooter: false,
        keepAlive: false
      }
    },
  ]
})
