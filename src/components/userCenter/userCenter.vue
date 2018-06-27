<template>
	<div id="userCenter">
		<Header :text="text"/>
		<!--用户中心头部-->
			<div class="userCenter_header">
				<!--用户名称-->
				<div class="userName">
					<p class="tou_xian">
						<img :src="userData.userpic">
					</p>
					<div class="name">
						<p class="name_text">{{userData.phoneNumber }}</p>
						<span v-show="userData.level ==1">	
							<i class="iconfont icon-zuanshi"></i>{{$t('index.index_2')}}
						</span>
						<span v-show="userData.level ==2">	
							<i class="iconfont icon-huangguan"></i>{{$t('index.index_3')}}
						</span>
						<span v-show="userData.level ==3">	
							<i class="iconfont icon-huangguan1"></i>{{$t('index.index_4')}}
						</span>

					</div>
				</div>
				<!--交易次数    申诉次数   胜诉次数-->
				<!--我的身份-->
				<div class="myIdentity">
					<ul>
						<li>
							<p class="title">Team</p>
							<p class="text team">{{userData.tempPeople}}</p>
						</li>
						<span></span>
						<li>
							<p class="title">MXP</p>
							<p class="text">{{userData.ppx}}</p>
						</li>		
						<span></span>
						<li>
							<p class="title">Card</p>
							<p class="text">{{userData.card}}</p>
						</li>
						<span></span>
						<li>
							<p class="title">USDT</p>
							<p class="text">{{userData.usdt }}</p>
						</li>
					</ul>
				</div>
			</div>
			<!--资金管理部分-->
			<ul class="userAdmin">	    						
				<!-- <div class="copySuccess" v-show="copySuccess">
					<i class="iconfont icon-chenggong"></i> {{$t('public.copysuccess')}}
				</div>											
				<li class="charge">
					<span>{{$t('userCenter.userC_1')}}  :  </span>
				</li>
				<div class="charge1">
					<dd id="ipt2">{{userData.usdt_address}}</dd>
					<button class="copy" data-clipboard-action="copy" data-clipboard-target="#ipt2">{{$t('public.copy')}}</button>
				</div> -->
				<div class="li_contant">
					<router-link tag="li" to="/capital">
						<p class="icon">
							<i class="iconfont icon-xinyongqianbaofill"></i>
						</p>
						<p class="toRoouter">
							<span>{{$t('userCenter.userC_2')}}</span>
							<i class="iconfont icon-iconfontjiantou5"></i>														
						</p>	
					</router-link>
					<router-link tag="li" to="/friends">
						<p class="icon">
							<i class="iconfont icon-xinshoulibao"></i>
						</p>	
						<p class="toRoouter">
							<span>{{$t('userCenter.userC_3')}}</span>
							<i class="iconfont icon-iconfontjiantou5"></i>
						</p>
					</router-link>
					<router-link tag="li" to="/tibi">
						<p class="icon">	
							<i class="iconfont icon-tubiao207"></i>
						</p>
						<p class="toRoouter">
							<span>{{$t('userCenter.userC_4')}}</span>
							<i class="iconfont icon-iconfontjiantou5"></i>
						</p>
					</router-link>
					<li @click="loginOut()">
						<p class="icon">	
							<i class="iconfont icon-084tuichu"></i>
						</p>
						<p class="toRoouter">
							<span>{{$t('userCenter.usercS_5')}}</span>
							<i class="iconfont icon-iconfontjiantou5"></i>
						</p>
					</li>
				</div>
			</ul>
	</div>
</template>
				
<script>
	import fetch from "@/utils/fetch";
	import utilsApi from "@/utils/utilsApi";
	import { Indicator } from 'mint-ui';
	import Header from "../public/header";
    import { MessageBox   } from 'mint-ui';
	
	export default {
		components:{
			Header
		},
		data() {
			return {
				text:this.$t('userCenter.userC_5'),
				userData:{},
				copySuccess:false,
			}
		},
		created: function() {
			this.getUserInfo();
			this.copy();
		},
		methods: {
			getUserInfo: async function(){
				const res = await fetch.post(
					utilsApi.apipersonage,{"userId":this.$store.state.user.user_id}
				);
				if (res) {
					this.userData=res.data.data[0];
				}
			},
			loginOut(){
				MessageBox({
					title: this.$t('public.prompt'),
					message: this.$t('public.rules.rule_11'),
					showCancelButton:true,
					confirmButtonText: this.$t('public.sure'),
					cancelButtonText:this.$t('public.cancel')
				}).then(action => {
					if (action == 'confirm') {
						this.$store.commit('removeUser');
						this.$router.push({path:'/login'});
					}
				});
			},
			copy(){
				let _this = this;
				var clipboard = new Clipboard(".copy");
				clipboard.on("success", function(e) {
					_this.copySuccess = true;
					setTimeout(function() { 
						_this.copySuccess = false;
					}, 1000)
				})
				clipboard.on("error", function(e) {
					console.log("失败")
				}) 
			}
		}
	}
</script>

<style lang="scss" scoped>
	$alet_border:1px solid #121528;
	$blue:#6a72d5;
	$submit_color:#373959;
	/*登录线条*/
	
	$submit_borderColor:1px solid #9fa0af;
	$color_bg:#262945;
	/*一块一块内容的背景颜色*/
	
	$alet_border:1px solid #1b1d3e;
	/*弹出框的边框*/
	/*关于我们部分*/
	
	.AboutAs {
		position: relative;
		.red {
			position: absolute;
			right: 12%;
			top: 41%;
			width: .08rem;
			height: .08rem;
			background: #ff2424;
			border-radius: 50%;
		}
	}
	/*边框背景颜色*/	
	
	.borderColor {
		width: 100%;
		height: .1rem;
		background: #121528;
	}
	/*我的usdt地址*/
	
	.charge {
		display: flex;
		justify-content: flex-start;
		position: relative;
		padding-left:0 !important;
		.charge_input {
			width: 70%;
			height: .4rem;
			line-height: .4rem;
			margin-left: .1rem;
			border: none;
			background: $color_bg;
			outline: none;
			color: #fff;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.copy {
			color: $blue;
			position: absolute;
			right: .1rem;
		}
	}
	
	.charge1 {
		color: #c1ae93;
		box-sizing: border-box;
		padding: 0 .1rem;
		border:1px solid #2f312b;
		background:url("../../assets/content_bg.png");
		background-size:100%;
		text-align: right;
		dd {
			text-align: left;
			margin: .1rem 0;
		}
		.copy {
			color:#ffe19e;
			display:inline-block;
			border:1px solid #4c4f3a;
			margin-bottom: .1rem;
			padding: .1rem .3rem;
			margin-right:0;
		}
	}
	/*账号管理*/
	
	.userAdmin {
		width: 2.909rem;
		margin:0 auto;
		position: relative;
		color: #50483b;
		.li_contant{
			border:1px solid #2f312b;
			background:url("../../assets/content_bg.png");
			background-size:100%;
			margin-top:.1rem;
		}
		.copySuccess {
			position: absolute;
			top: 25%;
			left: 25%;
			z-index: 666;
			width: 50%;
			height: .3rem;
			display: flex;
			justify-content: center;
			line-height: .3rem;
			color: #fff;
			background: #32355F;
			.iconfont {
				color: #3CB034;
				margin-right: .05rem;
			}
		}
		li {
			width: 100%;
			height: .45rem;
			line-height: .45rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 .1rem;
			background:url("../../assets/line.png") no-repeat center bottom;
			background-size:2.815rem;
			.icon {
				.iconfont {
					font-size: .22rem;
					color:#857154;
				}
			}
			.toRoouter {
				width: 85%;
				height: .45rem;
				display: flex;
				justify-content: space-between;
				color:#ffe398;
			}
		}
		li:nth-last-child(1) {
			.toRoouter {
				border-bottom: none;
			}
		}
		li:last-child{
			background:none;
		}
	}
	/*我的身份部分*/
	
	.myIdentity {
		width: 100%;
		height: .5rem;
		padding-bottom: .05rem;
		background:url("../../assets/header_line.png") no-repeat center bottom;
		background-size:2.815rem;
		ul {
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-sizing: border-box;
			padding: 0 .05rem;
			li {
				text-align: center;
				.title {
					margin-top: .1rem;
					color: #857154;
				}
				.text {
					color: #dca53e;
					margin-top: .1rem;
				}
				.team{
					color:#4267e2;
				}
			}
			span {
				display: inline-block;
				height: .23rem;
				border-right: 1px solid #121528;
				margin-top: .14rem;
			}
		}
	}
	/*用户中心头部*/
	
	.userCenter_header {
		width: 100%;
		color: #fff;
		/*用户名称*/
		.userName {
			width: 100%;
			margin-top: .1rem;
			display: flex;
			align-items: center;
			color: #dca53e;
			background:url("../../assets/header_line.png") no-repeat center bottom;
			background-size:2.815rem;
			.tou_xian {
				width: .5rem;
				height: .5rem;
				border-radius: 50%;
				text-align: center;
				line-height: .5rem;
				margin-left: .14rem;
				overflow:hidden;
				img {
					width: .5rem;
				}
				margin-bottom:.1rem;
			}
			.name {
				height: .6rem;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				margin-left: .2rem;
				margin-bottom: .1rem;
				.name_text {
					font-size: .16rem;
					font-weight: 600;
				}
				.userID {
					color: #dca53e;
					margin-top: .1rem;
				}
				.jie_dian {
					margin-top: .1rem;
				}
				span {
					display: flex;
					align-items: center;
					i {
						float:left;
						margin-right: 0.05rem;
					}
				}
			}
		}
	}
</style>


// WEBPACK FOOTER //
// src/components/userCenter/userCenter.vue