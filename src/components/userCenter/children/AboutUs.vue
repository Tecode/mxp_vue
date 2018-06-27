<template>
	<div class="AboutUs">
		<my-header :text="header"></my-header>
		<ul class="userList">
			<li @click="topVersionisShow">
				<span class="name">当前版本</span>
				<span class="red" v-show="redIsShow"></span>
				<span class="text">V {{version}}</span>
			</li>
		</ul>
		<!--点击升级-->
		<div class="men_ban_version1" v-show="userTiIsShow"></div>
		<div class="userTiShenji" v-show="userTiIsShow">
			<p class="content">
				检查到当前最新版本<span>{{newVersion}}</span>
			</p>
			<p class="text">    
				{{userTiContent}} 
			</p>
			<p class="oButton">
				<span @click="userTiIsShow=false">
					取消   													  
				</span>
				<span @click="topVersion">
					确认更新  
				</span>
			</p>
		</div>
		<div class="men_ban_version1" v-show="zuixin"></div> 
		<div class="userTiShenji1" v-show="zuixin">
			<p class="content">
				当前为最新版本<span>{{newVersion}}</span>
			</p>
			<p class="text">
				{{userTiContent}}
			</p>
			<p class="que" @click="zuixin=false">	
				确认
			</p>
		</div>
	</div> 
</template>

<script>
	import axios from "axios"
	import { httpUrl } from "../../http_url/http_url"
	import header from "../../public/header"
	import $ from "jquery"
	export default {
		data() {
			return {
				header: "关于我们",
				version: window.localStorage.getItem("version"), 	   //获取本地版本
				newVersion: "", //获取最新的版本
				userTiIsShow: false,
				/*用户是否升级*/
				zuixin: false, /*判断用户是否为最新版本*/
				userTiContent:"",   /*升级提示内容*/
				versionAddress:"",	
				redIsShow:false
			}
		}, 										
		components: {
			"my-header": header
		},
		methods: {
			topVersion() {
				//window.open(this.versionAddress)
				window.open(this.versionAddress, '_system', 'location=yes');         
			},
			topVersionisShow() {
				let _this = this; 	
				if(parseFloat(_this.newVersion.replace(".",""))<parseFloat(_this.version.replace(".",""))){ 
					return false;
				}
				if(_this.version == _this.newVersion) {
					_this.zuixin = true
				} else {
					_this.userTiIsShow = true;
				}	
			}
		}
	}
</script>

<style lang="scss" scoped>
	/*边框背景颜色*/
	
	$border_bottom: 1px solid #1b1d3e;
	$placeholder:#bcc0fd;
	.men_ban_version1 {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000000;
	}
	
	.userTiShenji {
		width: 90%;
		background: #fff;
		position: fixed;
		top: 35%;
		left: 5%;
		z-index: 99999999999;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: .03rem;
		.content {
			width: 100%;
			line-height: .5rem;
			text-align: center;
		}
		.text {
			line-height: .2rem;
			text-align: center;
			padding: .1rem .2rem;
			color: #333;
		}
		.oButton {
			width: 100%;
			height: 35%;
			line-height: .35rem;
			border-top: 1px solid #ddd;
			color: #409eff;
			display: flex;
			span {
				display: block;
				width: 50%;
				text-align: center;
			}
			span:nth-of-type(1) {
				border-right: 1px solid #ddd;
			}
		}
	}
	
	.userTiShenji1 {
		.que {
			width: 100%;
			height: 35%;
			line-height: .35rem;
			text-align: center !important;
			border-top: 1px solid #ddd;
			color: #409eff;
		}
		@extend .userTiShenji;
	}
	
	.userList {
		width: 100%;
		li {
			width: 100%;
			height: .4rem;
			line-height: .4rem;
			color: #fff;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 .1rem;
			border-top: $border_bottom;
			border-bottom: $border_bottom;
			position: relative;
			.text {
				color: $placeholder;
			}
			.blue {
				color: #8894FC;
			}
			.red {
				width: .08rem;
				height: .08rem;
				background: #ff2424;
				border-radius: 50%;
				position: absolute;
				right: 20%;
				top: 39%;
			}
		}
	}
</style>


// WEBPACK FOOTER //
// src/components/userCenter/children/AboutUs.vue