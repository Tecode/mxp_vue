import _defineProperty from "babel-runtime/helpers/defineProperty";

var _httpUrl;

var localhostDev = void 0;
if (location.host.indexOf("imx.com") != -1) {
	localhostDev = true;
} else if (location.host.indexOf("localhost") != -1) {
	localhostDev = false;
} else {
	localhostDev = true;
}

//如果是本地开发，就把localhostDev 设置成true，连接就是拼成‘http://localhost:8080/api/test’
//生产环境，就把localhostDev 设置成false，连接就是拼成‘http://xxx.com/api/test’
var _host = localhostDev ? 'https://api.imx.com' : '//api.tanghs.com';
var ClientSecret = localhostDev ? ' YgB0ltwDRRzB6xNtM9uv4gAPniutvWrC3Cqx7Ot3' : 'rf7oU2CL4xX6nsWGZkCbWKvQWBjYoLfKRkNxL5PO';
var httpUrl = (_httpUrl = {
	'getVserion': _host + "/api/v1/getVserion", ////获取版本号码 
	'userInfo': _host + '/api/v1/userinfo', ////获取用户信息 
	"revokeAppeal": _host + "/api/v1/revokeAppeal", ///撤销申请
	'coin_matching': _host + '/api/v1/coin_matching', ///获取所有币对	
	'buy_sell_queue': _host + "/api/v1/transaction/buy_sell_queue", //买卖队列 
	'login': _host + "/api/v1/token",
	'register': _host + "/api/v1/register",
	'lang': _host + "/api/v1/config/lang", //获取语言包
	'send_validator_message': _host + '/api/v1/send_validator_message', ///获取登录注册验证码
	"country": _host + "/api/v1/country", ////获取国家信息 
	"coinDetailed": _host + "/api/v1/coinDetailed", ////币详细介绍   
	"payIdentity": _host + "/api/v1/payIdentity", ////余额购买高级身份
	'host': _host,
	"userID": _host + "/api/v1/token_user_id",
	"shishi": _host + "/api/v1/transaction/realtimeDone",
	"limit": _host + "/api/v1/transaction/limit", //限价交易
	"amount": _host + "/api/v1/transaction/now", //市价交易  
	"my_follow": _host + "/api/v1/my_follow", ////获取收藏列表
	"follow_matchcoin": _host + "/api/v1/follow_matchcoin", ////点击收藏 
	"current": _host + "/api/v1/transaction/current", ////当前委托
	"history": _host + "/api/v1/transaction/history", ////历史委托 
	"back": _host + "/api/v1/transaction/back", ////撤单
	"finances": _host + "/api/v1/finances", ////资产信息  
	"currency": _host + "/api/v1/currency", ////获取币种信息              
	"backpassword": _host + "/api/v1/backpassword", ////找回密码	
	"getyan": _host + "/api/v1/send_back_password_message", ////找回密码获取验证码
	"backPassValidator": _host + "/api/v1/backPassValidator", ////安全验证提交
	"resetPassword": _host + "/api/v1/resetPassword", ///重置密码　　　
	"upDatatoken": _host + "/oauth/token", ///刷新token
	"client_secret": ClientSecret, ////要用到的串
	"client_id": "3", ////测试用的ID
	"modifyPassword": _host + "/api/v1/password", ///修改密码 
	"bind": _host + "/api/v1/bind", ///绑定邮箱或者手机号
	"createSecret": _host + "/api/v1/createSecret", ///生成Google密钥
	"bindGoogleSecret": _host + "/api/v1/bindGoogleSecret", ///绑定googl密钥
	"verifyGoogleCode": _host + "/api/v1/verifyGoogleCode", ///验证code 	
	"loginGoogleCode": _host + "/api/v1/loginGoogleCode", ///登录状态
	"login_log": _host + "/api/v1/login_log", ///登录历史
	"settingPaypass": _host + "/api/v1/settingPaypass", ///设置或修改支付密码
	"Money_code": _host + "/api/v1/send_setting_pay_message", ///点击发送资金验证码 
	"getFaceToken": _host + "/api/v1/getFaceToken", ///高级认证获取二维码
	"setIdcard": _host + "/api/v1/setIdcard", ///填写身份信息
	"bankList": _host + "/api/v1/bankList", ///银行列表
	"addCard": _host + "/api/v1/addCard", ///添加银行卡
	"getReceipList": _host + "/api/v1/getReceipList", ///获取交易方式列表 
	"addReceip": _host + "/api/v1/addReceip", ///绑定微信支付宝
	"paymentSwitch": _host + "/api/v1/paymentSwitch" }, _defineProperty(_httpUrl, "finances", _host + "/api/v1/finances"), _defineProperty(_httpUrl, "wallet_address", _host + "/api/v1/wallet/deposit"), _defineProperty(_httpUrl, "currencyList", _host + "/api/v1/currencyList"), _defineProperty(_httpUrl, "addressList", _host + "/api/v1/addressList"), _defineProperty(_httpUrl, "addressHistory", _host + "/api/v1/addressHistory"), _defineProperty(_httpUrl, "currencyBalance", _host + "/api/v1/currencyBalance"), _defineProperty(_httpUrl, "recharge", _host + "/api/v1/financeLog"), _defineProperty(_httpUrl, "sendForm", _host + "/api/v1/wallet/withdraw"), _defineProperty(_httpUrl, "addressCreate", _host + "/api/v1/addressCreate"), _defineProperty(_httpUrl, "addressDel", _host + "/api/v1/addressDel"), _defineProperty(_httpUrl, "checkAddress", _host + "/api/v1/checkAddress"), _defineProperty(_httpUrl, "transactionRate", _host + "/api/v1/transactionRate"), _defineProperty(_httpUrl, "newsImportant", _host + "/api/v1/newsImportant"), _defineProperty(_httpUrl, "newslist", _host + "/api/v1/newslist"), _defineProperty(_httpUrl, "newsDetils", _host + "/api/v1/newsDetils"), _defineProperty(_httpUrl, "createApi", _host + "/api/v1/createApi"), _defineProperty(_httpUrl, "listApi", _host + "/api/v1/listApi"), _defineProperty(_httpUrl, "delApi", _host + "/api/v1/delApi"), _defineProperty(_httpUrl, "editApi", _host + "/api/v1/editApi"), _defineProperty(_httpUrl, "invitedList", _host + "/api/v1/invitedList"), _defineProperty(_httpUrl, "kline", _host + "/api/v1/kline"), _defineProperty(_httpUrl, "getscjUrl", _host + "/api/v1/getLatestPrice"), _defineProperty(_httpUrl, "getbzUrl", _host + "/api/v1/mainCurrenc"), _defineProperty(_httpUrl, "getmmddUrl", _host + "/api/v1/goodsList"), _defineProperty(_httpUrl, "getwdddUrl", _host + "/api/v1/myBlaceOrder"), _defineProperty(_httpUrl, "getgdlistUrl", _host + "/api/v1/myPurOrder"), _defineProperty(_httpUrl, "getjyfsUrl", _host + "/api/v1/getReceipList"), _defineProperty(_httpUrl, "getisbzyeUrl", _host + "/api/v1/currencyBalance"), _defineProperty(_httpUrl, "getggxqUrl", _host + "/api/v1/purDetails"), _defineProperty(_httpUrl, "getwdddUrl2", _host + "/api/v1/myBlaceOrder"), _defineProperty(_httpUrl, "postxdgmUrl", _host + "/api/v1/ticket"), _defineProperty(_httpUrl, "postxdmcUrl", _host + "/api/v1/sellOut"), _defineProperty(_httpUrl, "ddfyUrl", _host + "/api/v1/myBlaceOrder"), _defineProperty(_httpUrl, "sendBuy", _host + "/api/v1/sendBuy"), _defineProperty(_httpUrl, "postdelUrl", _host + "/api/v1/delOrder"), _defineProperty(_httpUrl, "postxjUrl", _host + "/api/v1/cancelPur"), _defineProperty(_httpUrl, "postputUrl", _host + "/api/v1/editPurchase"), _defineProperty(_httpUrl, "getkjyfbUrl", _host + "/api/v1/getLegaltender"), _defineProperty(_httpUrl, "getssyyUrl", _host + "/api/v1/appealCates"), _defineProperty(_httpUrl, "getltjlUrl", _host + "/api/v1/getChatRecord"), _defineProperty(_httpUrl, "getddxqUrl", _host + "/api/v1/orderDetails"), _defineProperty(_httpUrl, "getltztUrl", _host + "/api/v1/onlineState"), _defineProperty(_httpUrl, "ykfkqrUrl", _host + "/api/v1/confirmPurchase"), _defineProperty(_httpUrl, "shfkqrUrl", _host + "/api/v1/buyersConfirm"), _defineProperty(_httpUrl, "qrssUrl", _host + "/api/v1/orderLock"), _defineProperty(_httpUrl, "postqxssUrl", _host + "/api/v1/orderUnlock"), _defineProperty(_httpUrl, "postykqrfxUrl", _host + "/api/v1/touristSellersConfirm"), _defineProperty(_httpUrl, "postshqrfxUrl", _host + "/api/v1/confirmBusiness"), _defineProperty(_httpUrl, "getltjlUrl", _host + "/api/v1/getChatRecord"), _defineProperty(_httpUrl, "postltxxUrl", _host + "/api/v1/sendMsg"), _defineProperty(_httpUrl, "assetInfo", _host + "/api/v1/assetInfo"), _defineProperty(_httpUrl, "invitedList", _host + "/api/v1/invitedList"), _defineProperty(_httpUrl, "earningsInfo", _host + "/api/v1/earningsInfo"), _defineProperty(_httpUrl, "identityList", _host + "/api/v1/identityList"), _defineProperty(_httpUrl, "applyIdentity", _host + "/api/v1/applyIdentity"), _defineProperty(_httpUrl, "invitedSuperList", _host + "/api/v1/invitedSuperList"), _defineProperty(_httpUrl, "earngingsSuper", _host + "/api/v1/earngingsSuper"), _httpUrl);

export { httpUrl };

// WEBPACK FOOTER //
// ./src/components/http_url/http_url.js