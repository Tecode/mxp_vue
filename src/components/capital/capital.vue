<template>
	<div id="capital">
		<!--资金管理头部-->
		<div class="friends_header">
			<p class="back" @click="$router.go(-1)">
				<i class="iconfont icon-zuojiantou"></i>
			</p>
			<p class="yao_qing">
				<span>{{$t('capital.capital_1')}}</span>
			</p>
			<router-link tag="p" class="shouyi" to="/profit?type=1">
				{{$t('capital.capital_2')}}
			</router-link>
		</div>
		<div class="ziChan">
			<!-- <div class="ziChan_header">
				<div class="oleft">
					<i class="iconfont icon-sousuo"></i>
					<input type="text" v-model="searchText" @input="searchBz(searchText)" placeholder="搜索资产" />
				</div>
				<div class="oRight">
					<el-checkbox v-model="checked" @change="change(checked)">隐藏资产为0的币种</el-checkbox>
				</div>
			</div> -->
			<!--资产list-->
			<ul class="zhiChan_list">
				<li class="zhiChan_item">
					<div class="currency">
						MXP
					</div>
					<div class="item_bottom">
						<div class="center">
							<p class="price">{{financesList.u_ppx}}</p>
							<p class="text">{{$t('capital.capital_3')}}</p>
						</div>				
						<div class="center right">
							<p class="price">{{financesList.freeze_ppx}}</p>
							<p class="text">{{$t('capital.capital_4')}}</p>
						</div> 
					</div>
				</li>
				<li class="zhiChan_item">
					<div class="currency">
						USDT
					</div>
					<div class="item_bottom">
						<div class="center">
							<p class="price">{{financesList.u_usdt}}</p>
							<p class="text">{{$t('capital.capital_3')}}</p>
						</div>				
						<div class="center right">
							<p class="price">{{financesList.freeze_usdt}}</p>
							<p class="text">{{$t('capital.capital_4')}}</p>
						</div> 
					</div>
				</li>
			</ul>
			<!--资产判断-->
			<div class="lengXiao" v-show="financesList.length==0">  	 
				<span>{{$t('capital.capital_5')}}</span>
			</div>
		</div>

	</div>
</template>

<script>
import header from "../public/header"
import fetch from "@/utils/fetch";
import utilsApi from "@/utils/utilsApi";
	export default {
		data() {
			return {
				financesList:[]
			}
		},
		components: {
			"my-header": header
		},
		mounted() {
			this.goLogin();
		},
		created: function() {
			this.getlist();
		},
		methods: {
			getlist: async function(p){
				const res = await fetch.post(
					utilsApi.apicapital, {"user_id":this.$store.state.user.user_id}
				);
				if(res){
						this.financesList=res.data.data;
				}
			},
			goLogin(){
				if(!this.$store.state.user.user_id){
					this.$router.push({path:'/login'});
				}
			}
		}
	}
</script>

<style lang="scss">
	$alet_border:1px solid #1b1d3e;
	$color_gao:#696fb4;
	$blue:#6a72d5;
	#capital {
		.el-checkbox {
			color: $color_gao !important;
		}
		.el-checkbox__label {
			font-size: 12px !important;
			padding-left: .03rem;
		}
		.el-checkbox__inner {
			border: 1px solid $color_gao;
		}
	}
	/*提示资产记录暂无*/
	.lengXiao{
		width: 100%;
		height: .3rem;
		line-height: .3rem;
		text-align: center;
		color: $blue;
	}
	/*资金记录头部*/
	
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
	/*资产内容*/
	
	.ziChan {
		width: 100%;
		.ziChan_header {
			width: 100%;
			box-sizing: border-box;
			padding: 0 .1rem;
			margin-top:0.05rem;
			.oleft {
				border:1px solid #2f312b;
				background:url("../../assets/content_bg.png");
				background-size:100%;
				padding:.1rem;
				padding: .05rem .1rem;
				box-sizing:border-box;
				border-radius:.04rem;
				.iconfont {
					color: #74694a;
					font-size: .14rem;
					margin-top: .02rem;
					display: inline-block;
					float: left;
				}
				input {
					border: none;
					background: none;
					outline: none;
					color: #7e6b50;
					box-sizing: border-box;
					padding-left: .05rem;
				}
				input::-webkit-input-placeholder {
					color: #7e6b50;
				}
			}
			.oRight{
				color:#b08536;
				margin-top:.149rem;
				padding-left:.1rem;
				box-sizing:border-box;
				margin-bottom:.05rem;
				.el-checkbox__inner{
					background-color:#b08536;
					border:1px solid #a9651b;
				}
				.el-checkbox__label{
					color:#b08536;
				}
			}
		}
	}
	/*资产列表*/
	
	.zhiChan_list {
		width: 2.909rem;
		margin:0 auto;
		.zhiChan_item {
			padding:1px;
			width: 100%;
			box-sizing: border-box;
			align-items: center;
			padding: 0 .1rem;
			color: #857154;
			border:1px solid #2f312b;
			background:url("../../assets/content_bg.png");
			background-size:100%;
			padding-bottom:.1rem;
			margin-top:.1rem;
			div {
				width: 33.3%;
			}
			.currency {
				width: 100%;
				font-size: .136rem;
				color:#dca53e;
				margin-top:.1rem;
				background:url("../../assets/line.png") no-repeat center bottom;
				background-size:2.815rem;
				padding-bottom:.1rem;
				margin-bottom: .05rem;
				font-weight:bold;
			}
			.item_bottom{
				width: 100%;
				display: flex;
				justify-content: space-between;
				.center {
					.price {
						margin-bottom: .05rem;
						color:#fde08d;
						font-size:.153rem;
						font-weight:bold;
					}
					.text {
						color: 857154;
					}
				}
				.right {
					text-align: right;
					box-sizing: border-box;
					padding-left: .1rem;
					.price{
						color:#4267e2;
					}
				}
			}
		}
	}
</style>


// WEBPACK FOOTER //
// src/components/capital/capital.vue