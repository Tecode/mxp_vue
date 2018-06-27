<template>
	<div id="profit">
		<!--收益记录-->
		<my-header :text="profitHeader"></my-header>
		<!--选择收益记录-->
		<!--<div class="selectSj">
			<p class="sjActive" @click="Tab(0)">
				<span>收益</span>
			</p>
			<p @click="Tab(1)">  
				<span>记录</span> 
			</p>
		</div>-->
		<!--  收益内容 -->
		<div class="box" style="display: block;">
			<div class="height"></div>
			<ul class="Cumulative" v-show="cumulativeS"> 
				<li>
					<span class="num sum">{{invitedSuperList.usdt}}</span>
					<span class="text">{{$t('profit.profit_1')}}</span>
				</li>
				<li>
					<span class="num">{{invitedSuperList.rebate}}</span>
					<span class="text">{{$t('profit.profit_2')}}</span>
				</li>
				<!-- <li>
					<span class="num">{{invitedSuperList.team_rebate}}</span>
					<span class="text">{{$t('profit.profit_3')}}</span>  
				</li> -->
			</ul>
			<!--资金列表-->
			<ul class="recordList1" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<div class="zan_wu" v-show="team_rebate_list.length<=0">
					<p>{{$t('profit.profit_4')}}</p>
				</div>
				<li class="recordItem" v-for="item in team_rebate_list" :key="item.id">
					<div class="item">
						<div class="title">
							<p class="zhang_hao"  v-show="!cumulativeS">
								<span class="hao">{{$t('profit.profit_5')}}   : </span>
								<span class="user">{{item.send_id}}</span>
							</p>
							<p class="zhang_hao" v-show="cumulativeS&&item.shiftPhoneNumber">
								<span class="hao">{{$t('profit.profit_5')}}   : </span>
								<span class="user">{{item.shiftPhoneNumber}}</span>
							</p>
							<p class="time">
								<span>{{item.created_at}}</span>
							</p>
						</div>
						<div class="content">
							<p  v-show="!cumulativeS">
								<span class="text">{{$t('profit.profit_6')}}  :  </span>
								<span class="num">{{item.usdt}}</span>
							</p>
							<p  v-show="cumulativeS">
								<span class="text">{{$t('profit.profit_6')}}  :  </span>
								<span class="num">{{item.change_type+item.change_amount}}</span>
							</p>
							<p class="right" v-show="cumulativeS">
								<span class="text">{{item.describe}}</span>
								<!-- <span class="num success">{{item.sum}}</span> -->
							</p> 
						</div>
					</div>
				</li>	
			</ul> 	
		</div>									 
	</div>    																	
</template> 

<script>
import header from "../public/header"; /*获取公用的头部组件*/
import fetch from "@/utils/fetch";
import utilsApi from "@/utils/utilsApi";
import { MessageBox   } from 'mint-ui';
	export default {
		data() {
			return {
				profitHeader: "",
				type:"",
				cumulativeS:false,
				invitedSuperList:{
				},
				team_rebate_list:[],
				loading:false,
				p:1,
				l:10
			}
		},
		components: {
			"my-header": header
		},
		created: function() {
			this.operaType();
		},
		methods: {
			operaType(){
				this.type=this.$route.query.type;
				if(this.type==1){
					this.profitHeader=this.$t('profit.profit_8');
					this.cumulativeS=true;
				}else{
					this.profitHeader=this.$t('profit.profit_9');
					this.cumulativeS=false;
				}
			},
			getList: async function(p){
				if(this.type==1){
					const res = await fetch.post(
						utilsApi.apiprofitList, {"user_id":this.$store.state.user.user_id,"p":p,"l":this.l}
					);
					if(res){
						this.invitedSuperList=res.data.data;
						if(res.data.data.data.length>=1){
							for (let i = 0; i < res.data.data.data.length; i++) {
								this.team_rebate_list.push(res.data.data.data[i]);
							}
							this.loading=false;
						}
					}
				}else{
					const res = await fetch.post(
						utilsApi.apimyReward, {"user_id":this.$store.state.user.user_id,"p":p,"l":this.l}
					);
					if(res){
						for (let Q = 0; Q < res.data.data.team_rebate_list.length; Q++) {
							this.team_rebate_list.push(res.data.data.team_rebate_list[Q]);
						}
						this.loading=false;
					}
				}
			},
			loadMore(){
				this.loading = true;
				this.getList(this.p);
				this.p=this.p+1
			}
		}
	}
</script>

<style lang="scss">
	$alet_border:1px solid #121528;
	$blue_title:#6a79f6;
	$blue:#959eef;
	$border_bottom:0.01rem solid #1e2250;
	#app{
		overflow: scroll;
	}
	#profit{
		.el-pager{
			background: none;
			color: #fff;
		}
		.el-pager li{
			background: none;
		}
		.btn-next,.btn-prev{
			background: none;
			color: #fff;
		}
		.el-pagination button:disabled{
			color: #409EFF;
		}
	}
	/*收益记录选择*/
	
	.selectSj {
		width: 100%;
		height: .4rem;
		line-height: .4rem;
		display: flex;
		border-top: $alet_border;
		border-bottom: $border_bottom;
		color: #6982c0;
		p {
			width: 50%;
			text-align: center;
			box-sizing: border-box;
			font-size: .14rem;
			span {
				padding-bottom: .07rem;
			}     
		}
	}
	
	.sjActive {
		/*选中状态*/
		color: #fff;
		span {
			border-bottom: .02rem solid #fff;
		}
	}
	/*大盒子*/
	
	.box {
		display: none;
		.zan_wu {
			width: 100%;
			height: .3rem;
			line-height: .3rem;
			text-align: center;
			color: #fff;
		}
	}
	
	.Cumulative {
		width: 2.909rem;
		margin:0 auto;
		border:1px solid #313330;
		background:url("../../assets/content_bg.png");
		background-size:100%;
		height: .5rem;
		display: flex;
		position: relative; 
		margin-top:.1rem;
		li {
			width: 50%;
			text-align: center;
			.text {
				color: #918068;
				line-height: .25rem;
				text-align: center;
				font-size: .12rem;
				width:100%;
			} 
			.num {
				color: #fde190;
				text-align: center;
				line-height: .25rem;
				font-size: .14rem;
				width:100%;
				display:inline-block;
			}
			.sum{
				color:#83c747;
			}
		}
		.border {
			position: absolute;
			left: 0;
			bottom: 45%;
			width: 100%;
			/*border-bottom: $border_bottom;*/
			span {
				width: .1rem;
				height: .3rem;
				display: inline-block;
				border-right: $border_bottom;
				position: absolute;
				top: -.15rem;
			}
			.one {
				left: 30%;
			}
			.two {
				left: 63%;
			}
		}
	}
	.block{
		width: 100%;
		display: flex; 
		justify-content: center;
	}
	.height {
		height: .1rem;
	}
	/*记录列表*/
	
	.recordList1 {
		width: 2.909rem;
		margin:0 auto;
		border:1px solid #313330;
		background:url("../../assets/content_bg.png");
		background-size:100%;
		margin-top:.1rem;
		.recordItem {
			width: 100%;
			height: .6rem;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 .1rem;
			align-items: flex-start;
			background:url("../../assets/line.png") no-repeat center bottom;
			background-size:2.815rem;
			margin-top:.1rem;
			color: #fff;
			.item{
				width: 100%;
				.title{
					width: 100%;
					height: .3rem;  
					line-height: .3rem;
					display: flex;
					justify-content: space-between;
					.user{
						color:#fde190;
					}
					.zhang_hao{
						color: #918068;
					}
					.time{
						color: #918068;
						margin-left:auto;
						margin-right: .1rem;
					}
				}
			}
			.content{
				width: 100%;
				height: .3rem;  
				line-height: .3rem;
				display: flex;
				p{
					margin-right: .1rem;
					.text{
						color: #918068;
					}
					.num{
						color:#fde190;
					}
					.success{
						color:#83c647;
					}
				}
				.right{
					margin-left:auto;
				}
			}
		}
		.recordItem:last-child{
			background:none;
		}
	}
	
	
</style>


// WEBPACK FOOTER //
// src/components/profit/profit.vue