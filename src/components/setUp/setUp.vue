<template>
	<div id="setUp">
		<!--头部按钮-->
		<my-header :text="text"></my-header>
		<!--设置内容-->
		<!--语言-->  
		<!--计价方式-->
		<!--行情刷新频率-->
		<!--主题-->
		<ul class="set_list">
			<li class="set_item">
				<span class="set_text">语言</span>
				<div class="set_to">
					<span>简体中文</span>
				</div>
			</li>
			<li class="set_item">
				<span class="set_text">计价方式</span>
				<div class="set_to">
					<span>美元</span>
				</div>
			</li>
			<li class="set_item">
				<span class="set_text">行情刷新频率</span>
				<div class="set_to">
					<span>仅在WiFi实时行情</span>
				</div>
			</li>
			<li class="set_item">
				<span class="set_text">主题</span>
				<div class="set_to">
					<span>专业版</span> 
				</div>
			</li>	
		</ul>

		<!--退出登录按钮-->
		<div class="Sign_out" v-show="SignOutisShow">
			<button @click="SignOutQue=true">退出登录</button>
		</div>
		
		<!--退出登录弹出框-->
		<div class="men_ban" v-show="SignOutQue"></div>   
		<div class="Sign_out_alert" v-show="SignOutQue">  
			<div class="box_tuiChu">      					      	
				<div class="Sign_out_alert_header">			
					<span>退出登录</span>
					<i class="iconfont icon-cuowu" @click="SignOutQue=false"></i>
				</div>
				<div class="Sign_out_alert_content">
					确认退出当前账号吗？
				</div>
			</div>
			<div class="button">
				<p @click="SignOutQue=false">我再想想</p>
				<p @click="signOut()">确认</p>
			</div>
		</div>

	</div>
</template>

<script>
	import header from "../public/header"

	export default {
		data() {
			return {
				text: "设置", 
				SignOutisShow: false, /*判断是否登录*/
				SignOutQue:false   /*确认退出账号吗*/
			}
		},
		methods:{
			signOut() { /////退出账户
				window.localStorage.removeItem("token");
				window.localStorage.removeItem("refresh_token");
				this.$router.push('/'); ///跳转到币币交易页面
			}    
		},
		components: {
			"my-header": header
		}
	}
</script>

<style scoped lang="scss"> 
	$right_text:#898fd6;
	/*右侧颜色值*/
	
	$bg:#171932;
	/*背景颜色*/
	
	$listBorder:1px solid #1a1d3e;
	$backBgColor:#262746;
	/*退出登录*/
	
	$border_button:1px solid #3f437b;
	/*按钮边框*/
	
	$alert_border:1px solid #2b2e5b;
	$alert_inputBorder:1px solid #474a85;
	$alert_inputbg:#262746;
	$tishi_bg:#171a3b;
	/*设置列表*/
	
	.set_list {
		width: 100%;
		margin-top: .11rem;
		/*列表每一项*/
		.set_item {
			width: 100%;
			height: .4rem;
			line-height: .4rem;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 .08rem;
			background: $bg;
			border-bottom: $listBorder;
			.set_text {
				color: #fff;
			}
			.set_to {
				display: flex;
				align-items: center;
				span {
					color: #898fd6;
				}
				.iconfont {
					color: #fff;
					margin-left: .1rem;
				}
			}
		}
		.set_item:nth-last-child(1) {
			border-bottom: none;
		}
	}
	/*退出登录按钮*/
	
	.Sign_out {
		margin-top: 1.6rem;
		box-sizing: border-box;
		padding: 0 .2rem;
		button {
			width: 100%;
			height: .37rem;
			text-align: center;
			color: #fff;
			border: $border_button;
			background: $backBgColor;
			outline: none;
		}
	}
	/*蒙版*/
	.men_ban{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 55;
		background: rgba(0,0,0,0.5);
	}
	/*登录弹出框*/
	.Sign_out_alert { 			
		width: 90%;
		background: $tishi_bg;
		position: fixed;
		left: 5%;
		top: 30%;
		z-index: 66;
		.box_tuiChu{				
			width: 100%;	
			box-sizing: border-box;
			padding: 0 .15rem;
			.Sign_out_alert_header{
				width: 100%;
				height: .4rem;
				line-height: .4rem;
				display: flex;
				justify-content: space-between;
				color: #fff;
				font-size: .14rem;
				border-bottom: $alert_border;
			}
			.Sign_out_alert_content{
				width: 100%;
				height: .6rem;
				line-height: .6rem;
				text-align: center;
				color: #fff;
				font-size: .14rem;
			}
		}
		.button{
			width: 100%;
			height: .4rem;
			line-height: .4rem;
			border-top: $alert_border;
			display: flex;
			p{
				width: 50%;
				text-align: center;
				color: #fff;
				box-sizing: border-box;
			}
			p:nth-of-type(1){
				border-right: $alert_border;
			}
		}
	}
</style>


// WEBPACK FOOTER //
// src/components/setUp/setUp.vue