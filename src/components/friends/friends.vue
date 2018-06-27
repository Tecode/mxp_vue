<template>
	<div id="friends">
		<!--邀请好友头部-->
		<div class="friends_header">
			<p class="back" @click="$router.go(-1)">
				<i class="iconfont icon-zuojiantou"></i>
			</p>
			<p class="yao_qing">
				<span>{{$t('friends.friends_1')}}</span>
			</p>
			<router-link tag="p" class="shouyi" to="/profit?type=0">
				{{$t('friends.friends_2')}}
			</router-link>
		</div>

		<!--邀请码复制-->
		<ul class="yq_code_wrapper">
			<div class="copySuccess" v-show="copySuccess">
				<i class="iconfont icon-chenggong"></i> {{$t('public.copysuccess')}}
			</div>
			<div class="li_content">
				<li class="yq_code_item1">
					<span class="left">{{$t('friends.friends_3')}}</span>
					<p class="yao_code" id="ipt1">{{assetInfo.inviteCode }}</p> 	
					<button class="copy" data-clipboard-action="copy" data-clipboard-target="#ipt1">{{$t('public.copy')}}</button>
				</li>
				<li class="yq_code_item yq_item">
					<span class="left">{{$t('friends.friends_4')}}  : </span>
					<!--<p class="yao_code" id="ipt2">{{assetInfo.invite_url}}</p>-->
				</li>
				<li class="yq_code">
					<dd id="ipt2">{{assetInfo.linkUrl }}</dd>
					<button class="copy" data-clipboard-action="copy" data-clipboard-target="#ipt2">{{$t('public.copy')}}</button>
				</li>
			</div>
			<div class="li_content">
				<li class="yq_code_item erweima">
					<span class="left">	
						{{$t('friends.friends_5')}}	
					</span>
					<span class="oRight code_img">   
						<img :src="assetInfo.qrCodePhoto " />  
					</span>
				</li>
			</div>
		</ul>

	</div>
</template>

<script>
	import fetch from "@/utils/fetch";
	import utilsApi from "@/utils/utilsApi";
	import { Indicator } from 'mint-ui';
	export default {
		name:"friends",
		data() {
			return {
				copySuccess: false, /*复制成功*/
				assetInfo:{}
			}
		},
		mounted() {
			this.goLogin();
		},
		created: function() {
			this.getcode();
			this.copy();
		},
		methods: {
			getcode: async function(){
				const res = await fetch.post(
					utilsApi.apiinvitation,{"userId":this.$store.state.user.user_id,"qrCodeUrl":utilsApi.host+"/cards/#/register"}//
				);
				if (res) {
					this.assetInfo=res.data.data[0];
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
			},
			goLogin(){
				if(!this.$store.state.user.user_id){
					this.$router.push({path:'/login'});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	$alet_border:1px solid #121528;
	$blue:#6a72d5;
	$submit_color:#373959;
	$color_bg:#262945;
	/*登录线条*/
	
	$submit_borderColor:1px solid #9fa0af;
	/*蓝色*/
	/*提取积分要用弹框*/
	.li_content{
		border:1px solid #313330;
		background:url("../../assets/content_bg.png");
		background-size:100%;
		margin-top:.1rem;
	}
	.jifen {
		position: fixed;
		top: 20%;
		left: 5%;
		width: 90%;
		background: #32355E;
		color: #fff;
		.jifen_header {
			width: 100%;
			height: .4rem;
			line-height: .4rem;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 .1rem;
			.iconfont {
				font-size: .14rem;
			}
			border-bottom:1px solid #232555;
		}
		/*确认按钮*/
		.confirm {
			width: 100%;
			height: .4rem;
			line-height: .4rem;
			display: flex;
			border-top: 1px solid #232555;
			p {
				width: 50%;
				text-align: center;
			}
			p:nth-of-type(1) {
				border-right: 1px solid #232555;
			}
		}
		/*积分内容*/
		.jifen_content {
			width: 100%;
			height: 2.4rem;
			overflow-y: auto;
			overflow-x: hidden;
			box-sizing: border-box;
			padding: 0 .1rem;
			.black {
				width: 100%;
				height: .35rem;
				line-height: .35rem;
				background: #262746;
				box-sizing: border-box;
				padding-left: .1rem;
				border-radius: .02rem;
				margin-top: .15rem;
			}
			.input {
				width: 100%;
				height: .3rem;
				line-height: .3rem;
				border: 1px solid #51569a;
				border-radius: .02rem;
				display: flex;
				box-sizing: border-box;
				justify-content: space-between;
				background: #262746;
				margin-top: .15rem;
				input {
					width: 65%;
					margin-left: .05rem;
					border: none;
					background: none;
					outline: none;
					color: #fff;
				}
				input {
					border-right: 1px solid #51569a;
				}
				span {
					display: inline-block;
					width: 35%;
					box-sizing: border-box;
					text-align: center;
				}
				.white {
					color: #878de4;
				}
			}
			.input1 {
				width: 100%;
				height: .3rem;
				line-height: .3rem;
				border: 1px solid #51569a;
				border-radius: .02rem;
				background: #262746;
				input {
					width: 90%;
					margin-left: .05rem;
					border: none;
					background: none;
					outline: none;
					color: #fff;
				}
				input::-webkit-input-placeholder {
					color: #fff;
					font-size: .12rem;
				}
			}
			.error {
				width: 100%;
				height: .15rem;
				line-height: .15rem;
				color: #BB2B21;
			}
			.input input::-webkit-input-placeholder {
				color: #fff;
				font-size: .12rem;
			}
			.userName {
				width: 100%;
				padding-bottom: .1rem;
				border-bottom: 1px solid #232555;
			}
		}
	}
	/*判读用户是否没绑定银行卡*/
	
	.isbdShow {
		position: fixed;
		left: 10%;
		top: 20%;
		width: 80%;
		background: #32355E;
		color: #fff;
		.isbdShow_header {
			width: 100%;
			height: .4rem;
			line-height: .4rem;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 .1rem;
			.iconfont {
				font-size: .14rem;
			}
			border-bottom:1px solid #232555;
		}
		.isbdShow_content {
			width: 100%;
			line-height: .2rem;
			text-align: center;
			margin: .2rem 0;
		}
		/*确认  取消*/
		.confimCancel {
			width: 100%;
			height: .4rem;
			line-height: .4rem;
			display: flex;
			border-top: 1px solid #232555;
			p {
				width: 50%;
				text-align: center;
				color: #fff;
			}
			p:nth-of-type(1) {
				color: #939BEE;
				border-right: 1px solid #232555;
			}
		}
	}
	/*邀请好友头部*/
	
	.friends_header {
		width: 100%;
		height: .5rem;
		position: relative;
		display: flex;
		justify-content: space-between;
		line-height: .5rem;
		box-sizing: border-box;
		padding: 0 .1rem;
		color: #f5ca6c;
		background:url("../../assets/header_line.png") no-repeat center bottom;
		background-size:2.815rem;
		.back{
			color:#756846;
		}
		.yao_qing {
			width: 60%;
			text-align: center;
			position: absolute;
			left: 20%;
			font-size: .16rem;
			font-weight: bold;
		}
		.shouyi {
			font-size: .12rem;
			color:#dca53e;
		}
	}
	/*邀请码*/
	
	.yq_code_wrapper {
		width: 2.909rem;
		margin:0 auto;
		position:relative;
		.copySuccess {
			position: absolute;
			left: 25%;
			top: 10%;
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: .3rem;
			color: #fff;
			background: #32355F;
			.iconfont {
				color: #3CB034;
				margin-right: .05rem;
			}
		}
		.yq_code {
			width: 100%;
			box-sizing: border-box;
			padding: 0 .1rem;
			font-size: .1rem;
			color: #cacfff;
			text-align:right;
			dd {
				text-align:left;
				margin: .1rem 0;
				color:#ecd28e;
			}
			.copy {
				color:#ffe19e;
				display:inline-block;
				border:1px solid #4c4f3a;
				margin-bottom: .1rem;
				padding: .05rem .1rem;
				margin-right:0;
				border-radius:.05rem;
			}
			flex-direction: column;
		}
		.yq_code_item1 {
			background:url("../../assets/line.png") no-repeat center bottom;
			background-size:2.815rem;
			@extend .yq_code_item;
			#ipt1 {
				width: 50%;
			}
		}
		.yq_item{
			background:url("../../assets/line.png") no-repeat center bottom;
			background-size:2.815rem;
		}
		/*列表内容*/
		.yq_code_item {
			width: 100%;
			height: .4rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding: 0 .1rem 0 .13rem;
			margin-top:.05rem;
			p {
				width: 68%;
				height: 90%;
				line-height: .35rem;
				border: none;
				background: none;
				outline: none;
				color: #cacfff;
			}
			.left {
				color: #746a4b;
			}
			.copy {
				color:#ffe19e;
				display:inline-block;
				border:1px solid #4c4f3a;
				margin-bottom: .1rem;
				padding: .05rem .1rem;
				margin-right:0;
				border-radius:.05rem;
			}
			.iconfont {
				color: #fff;
			}
			.yao_code {
				margin-left: .12rem;
				overflow: hidden;
				color:#ffe398;
			}
		}
		.erweima{
			height:auto;
			align-items: flex-start;
			padding-top:.1rem;
			padding-bottom:.15rem;
		}
	}
	/*提交按钮*/
	
	.submit {
		width: 2.7rem;
		height: .38rem;
		margin: .5rem auto;
		button {
			width: 100%;
			height: .38rem;
			border: $submit_borderColor;
			background: $submit_color;
			color: #fff;
			outline: none;
		}
	}
	/*提示信息*/
	
	.information {
		width: 2.7rem;
		line-height: .2rem;
		margin: .5rem auto;
		color: #898fd6;
	}
	/*图片*/
	
	.code_img {
		width: 1.6rem;
		height: 1.6rem;
		img {
			width: 100%;
			height: 100%;
		}
	}
</style>


// WEBPACK FOOTER //
// src/components/friends/friends.vue