import Vue from 'vue';
import Router from 'vue-router';
////1.2.3.4总的路由
import index from "@/components/index";
////1.首页
import Home from "@/components/shouye/shouye";
////4.个人中心
import userCenter from "@/components/userCenter/userCenter";
////4.1超级节点
import supernode from "@/components/userCenter/children/Supernode";
////4.2关于我们	
import AboutUs from "@/components/userCenter/children/AboutUs";
////4.3提币
import tibi from "@/components/userCenter/children/tibi";
////4.3.1提币记录
import CurrencyRecord from "@/components/userCenter/children/CurrencyRecord";
////5.登录
import login from "@/components/login/login";
////6.注册
import register from "@/components/register/register";
////7.设置
import setUp from "@/components/setUp/setUp";
////8.找回密码
import forget from "@/components/public/forget";
////9.资金管理
import capital from "@/components/capital/capital";
////10.邀请好友
import friends from "@/components/friends/friends";
////11.我的收益
import profit from "@/components/profit/profit";
////12.账户设置
//import accountSet from "@/components/accountSet/accountSet"
////11.点卡充值
import recharge from "@/components/recharge/recharge";
////11.公告
import news from "@/components/news/news";

Vue.use(Router);

export default new Router({
  // mode:"history",
  routes: [{
    path: '/', ////路由重定向
    redirect: "/login"
  }, {
    path: '/index',
    name: 'index',
    component: index,
    children: [{ path: "/index", redirect: "/shouye" }, ///重定向
    { path: "/shouye", component: Home }, ///首页
    { path: "/userCenter", component: userCenter }, ///用户中心
    { path: "/recharge", component: recharge //点卡充值
    }]
  }, { ////登录路由			
    path: "/login",
    name: "login",
    component: login
  }, { ////注册路由				
    path: "/register",
    name: "register",
    component: register
  }, { ////设置				 	
    path: "/setup",
    name: "setUp",
    component: setUp
  }, { ////找回密码				
    path: "/forget",
    name: "forget",
    component: forget
  }, { ////资金管理
    path: "/capital",
    name: "capital",
    component: capital
  }, { ////邀请好友
    path: "/friends",
    name: "friends",
    component: friends
  }, { ////我的收益
    path: "/profit",
    name: "profit",
    component: profit
  }, { ////用户中心------超级节点
    path: "/supernode",
    name: "supernode",
    component: supernode
  }, { ////用户中心-------关于我们
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUs
  }, { ////提币 
    path: "/tibi",
    name: "tibi",
    component: tibi
  }, { //提币记录
    path: "/CurrencyRecord",
    name: "CurrencyRecord",
    component: CurrencyRecord
  }, { //公告
    path: "/news",
    name: "news",
    component: news
  }]
});

// WEBPACK FOOTER //
// ./src/router/index.js