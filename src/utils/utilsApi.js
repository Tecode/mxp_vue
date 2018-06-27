var domain = document.domain;
if (domain.indexOf("localhost") > -1) {
    domain = domain + ":8080";
}
export default {
    host: 'http://' + domain,
    get_message_code: 'api/author/usercenter/vi/v1.0/key/getPhoneCode', // 注册获取短信验证码
    apiRegister: 'api/author/usercenter/vi/v1.0/key/register', // 注册
    apifindpass: 'api/author/usercenter/vi/v1.0/key/findpass', // 忘记密码
    apiLogin: 'api/author/usercenter/vi/v1.0/key/login', // 登录
    apiIndex: 'api/source/cardIndex/vi/v1.0/key/cardIndex', // 首页
    apiNotice: 'api/source/notice/vi/v1.0/key/notice', // 公告
    apiwithdraw: 'api/source/withdraw/vi/v1.0/key/withdraw', // 提币页面获取用户可用usdt
    apiwithdrawMoney: 'api/source/withdrawMoney/vi/v1.0/key/withdrawMoney', // 提币
    apiwithdrawList: 'api/source/withdrawList/vi/v1.0/key/withdrawList', // 提币列表
    apicapital: 'api/source/capital/vi/v1.0/key/capital', // 资金管理
    apiprofitList: 'api/source/capitalRecord/vi/v1.0/key/capitalRecord', // 资金记录
    apimyReward: 'api/source/myReward/vi/v1.0/key/myReward', // 我的收益
    apiCard: 'api/source/toCard/vi/v1.0/key/toCard', // 获取点卡
    apibuyCard: 'api/source/buyCard/vi/v1.0/key/buyCard', // 购买点卡
    apipersonage: 'api/author/usercenter/vi/v1.0/key/personage', // 个人中心
    apiinvitation: 'api/author/usercenter/vi/v1.0/key/invitation' // 邀请好友
};