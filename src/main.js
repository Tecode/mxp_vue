// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from "axios";
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'; ///引入语言包
import store from './store';
import 'babel-polyfill';


Vue.use(VueI18n);

Vue.use(ElementUI);
Vue.use(MintUI);
// 跳转后返回顶部 			
router.afterEach(function (to, from, next) {
	window.scrollTo(0, 0);
});

///国际语言切换
Vue.config.productionTip = false;

////定义全局变量  			 
Vue.prototype.token = window.localStorage.getItem("token");
Vue.prototype.refresh_token = window.localStorage.getItem("refresh_token");
Vue.prototype.curTime = window.localStorage.getItem("curTime");
Vue.prototype.getColor = window.localStorage.getItem("setColor"); //获取颜色
Vue.prototype.matchcoin_id = window.localStorage.getItem("matchcoin_id"); //获取币对ID
Vue.prototype.wsIp = "ws://39.104.94.182:1888"; ///socket公用IP地址
function case_lang(type) {
	if(type == 1) {
		return 'zh';
	} else if(type == 2) {
		return 'en';
	} else if(type == 3) {
		return 'han';
	} else if(type == 4) {
		return 'fa';
	} else if(type == 5) {
		return 'Complex';
	} else if(type == 6) {
		return 'Japanese';
	} 
}
var i18n = new VueI18n({
	//切换语言直接修改locale的值即可
	//this.$i18n.locale = ..
	locale: case_lang(store.state.user.type),  // 语言标识

	messages: {
		'zh': require('./public/js/lang/zh'),
		'en': require('./public/js/lang/en'),
		'han': require('./public/js/lang/han'),
		'fa': require('./public/js/lang/fa'),
		'Japanese': require('./public/js/lang/Japanese'),
		'Complex': require('./public/js/lang/Complex')
	}
});
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router: router,
	components: {
		App: App
	},
	template: '<App/>',
	store: store,
	i18n: i18n
});

// WEBPACK FOOTER //
// ./src/main.js