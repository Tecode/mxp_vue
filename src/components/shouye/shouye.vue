<template>
	<div id="identity">
		<!--loading开始-->

		<!--loading结束-->

		<!--身份头部-->
		<Header :text="text"/>
		<router-link to="/news" tag="div" class="info" v-show="noticeTitle!=''">
			<i class="iconfont icon-gonggao"></i>
			{{noticeTitle}}
		</router-link>
		<div class="identity_content">
			<ul>
				<li class="select">
					<span>{{$t('index.index_1')}}</span>
					<p v-show="level==1" class="select_color"><i class="iconfont icon-zuanshi"></i>{{$t('index.index_2')}}</p>
					<p v-show="level==2" class="select_color"><i class="iconfont icon-huangguan"></i>{{$t('index.index_3')}}</p>
					<p v-show="level==3" class="select_color"><i class="iconfont icon-huangguan1"></i>{{$t('index.index_4')}}</p>
				</li>
				<li class="chongbi">
					<span>{{$t('index.index_5')}}   (USDT)  :  </span>
				</li>
				<div class="charge1">
					<div id="ipt2" class="copy_text">{{chargeAddress}}</div>
					<button class="copy" data-clipboard-action="copy" data-clipboard-target="#ipt2">{{$t('public.copy')}}</button>
				</div>
				<div class="copySuccess" v-show="copySuccess">
					<i class="iconfont icon-chenggong"></i> {{$t('public.copysuccess')}}
				</div>
				<li class="status">
					<span>{{$t('index.index_6')}}</span>
					<p>
						<span>{{status}}</span> 	
					</p>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	/*头部*/
	import Header from "@/components/public/header";
	import fetch from "@/utils/fetch";
	import utilsApi from "@/utils/utilsApi";
	import { Indicator } from 'mint-ui';
	export default {
		components:{
			Header
		},
		data() {
			return {
				text:this.$t('public.home'),
				noticeTitle:"",
				level:"",
				chargeAddress:"",
				status:"",
				copySuccess:false
			}
		},
		created: function() {
			this.operaGetIndex();
			this.copy();
		},
		methods: {
			operaGetIndex: async function(){
				const res = await fetch.post(
					utilsApi.apiIndex,{"type":this.$store.state.user.type,"user_id":this.$store.state.user.user_id}
				);
				if (res.data) {
					this.noticeTitle=res.data.data.noticeTitle;
					this.level=res.data.data.level;
					this.chargeAddress=res.data.data.chargeAddress;
					this.status=res.data.data.status;
				}
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
	$color_bg:#262945;
	/*身份头部*/
	
	$alet_border:1px solid #1b1d3e;
	/*边框颜色*/
	
	$submit_color:#373959;
	/*登录线条*/
	
	$submit_borderColor:1px solid #9fa0af;
	$blue:#8894FC;
	/*蓝色*/
	
	$alert_bg:#32355f;
	/*弹框背景*/
	
	$alert_border: 1px solid #1f2354;
	/*弹出边框*/
	
	$alert_bg:#474da0;
	/*弹出框的背景颜色*/
	
	$alet_border1:1px solid #303678;
	/*主版内容*/
	
	#identity {
		position: relative;
		.error {
			position: absolute;
			top: 20%;
			left: 20%;
			width: 60%;
			height: .6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #fff;
			z-index: 888;
			.iconfont {
				color: #F56C6C;
				margin-right: .05rem;
			}
		}
	}

	.info{
		width:2.909rem;
		margin:0 auto;
		height: .3rem;
		line-height: .3rem;
		background:url("../../assets/header_line.png") no-repeat center bottom;
		background-size:2.815rem;
		color:#beae94;
		padding-bottom: .06rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		i{
			font-size:.2rem;
			margin-top: .02rem;
			float: left;
			margin-right:.04rem;
		}
	}
	.pc .info i{
			margin-top: .02rem;
	}
	/*强制升级*/
	
	.userShenji {
		width: 90%;
		/*height: 1rem;*/
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
			text-align: center;
			border-top: 1px solid #ddd;
			color: #409eff;
		}
	}
	
	.userTiShenji {
		@extend .userShenji;
		.oButton {
			width: 100%;
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
	
	.men_ban_version {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1000000;
	}
	
	.men_ban_version1 {
		@extend .men_ban_version;
	}
	/*蒙版*/
	
	.men_ban {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
	
	.tang_kuang {
		width: 90%;
		background: $alert_bg;
		position: fixed;
		left: 5%;
		top: 35%;
		z-index: 88;
		color: #fff;
		.content {
			width: 100%;
			height: .8rem;
			line-height: .8rem;
			text-align: center;
		}
		.button {
			width: 100%;
			line-height: .35rem;
			display: flex;
			border-top: $alet_border1;
			p {
				width: 50%;
				text-align: center;
			}
			p:nth-of-type(1) {
				border-right: $alet_border1;
			}
		}
	}
	/*边框背景颜色*/
	
	.borderColor {
		width: 100%;
		height: .1rem;
		background: #121528;
	}
	
	.identity_header {
		width: 100%;
		height: .45rem;
		text-align: center;
		line-height: .45rem;
		color: #fff;
		background: $color_bg;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 555;
		span {
			font-size: .16rem;
			font-weight: 600;
		}
	}
	/*身份内容*/
	
	.identity_content {
		width: 2.909rem;
		margin:0 auto;
		margin-top: .1rem;
		padding-bottom: .1rem;
		border:1px solid #313330;
		background:url("../../assets/content_bg.png");
		background-size:100%;
		ul {
			width: 100%;
			position: relative;
			padding: 0 .1rem;
			box-sizing: border-box;
			.selectPartner {
				span {
					margin-left: .1rem;
				}
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
				height: .4rem;
				line-height: .4rem;
				display: flex;
				justify-content: space-between;
				color: #7d7358;
				background:url("../../assets/line.png") no-repeat center bottom;
				background-size:2.815rem;
				.iconfont {
					float:left;
					margin-right:.05rem;
				}
				.selectShenfen {
					width: .35rem;
					text-align: right;
					outline: none;
				}
				.Transfer_address {
					width: 50%;
				}
				.pp {
					/*width: 80%;*/
					display: flex;
					align-items: center;
					span {
						margin-left: .05rem;
					}
					input {
						width: 85%;
						height: 80%;
						border: none;
						background: none;
						outline: none;
						color: #fff;
						text-align: right;
					}
				}
				p{
					color:$blue;
				}
			}
			.status{
				background:none;
			}
			.tishi {
				width: 95%;
				height: .23rem;
				position: relative;
				line-height: .23rem;
				color: #c02920;
				background: #1c2157;
				text-align: center;
				margin: 0 auto;
			}
			.tishi:after {
				border-left: 10px solid transparent;
				border-right: 10px solid transparent;
				border-bottom: 10px solid #1c2157;
				content: "";
				width: 0;
				position: absolute;
				right: 0.1rem;
				top: -0.1rem;
			}
			/*充币*/
			.chongbi {
				display: flex;
				justify-content: space-between;
			}
			/*可选地址*/
			.select {
				display: flex;
				.input {
					border: none;
					background: none;
					color: #ffff;
					outline: none;
				}
				.select_color {
					color:#ffe19e;
				}
			}
			/*充币地址*/
			.charge {
				display: flex;
				justify-content: flex-start;
				position: relative;
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
				flex:1;
				color: #cacfff;
				box-sizing: border-box;
				background:url("../../assets/line.png") no-repeat center bottom;
				background-size:2.815rem;
				text-align: right;
				div {
					text-align: left;
					margin: .1rem 0;
					color:#c5b093;
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
		}
	}
	/*报错*/
	
	.Error {
		width: 100%;
		height: .4rem;
		line-height: .4rem;
		text-align: center;
		color: #BE2A19;
	}
	/*点击提交*/
	
	.submit {
		width: 2.7rem;
		height: .38rem;
		margin: .1rem auto;
		display: flex;
		justify-content: space-between;
		button {
			width: 100%;
			height: .38rem;
			border: $submit_borderColor;
			background: $submit_color;
			color: #fff;
			outline: none;
			margin-right: .1rem;
		}
	}
	/*弹出选择身份*/
	
	.identity_select {
		width: 80%;
		position: fixed;
		top: 25%;
		left: 10%;
		z-index: 55;
		.identity_list {
			width: 100%;
			background: $alert_bg;
			li {
				width: 100%;
				height: .35rem;
				line-height: .35rem;
				text-align: center;
				color: #fff;
				border-bottom: $alert_border;
			}
			.title {
				box-sizing: border-box;
				padding: 0 .1rem;
				font-size: .14rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
	/*蒙版*/
	
	.men_ban {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 22;
		position: fixed;
		left: 0;
		top: 0;
	}
</style>


// WEBPACK FOOTER //
// src/components/shouye/shouye.vue