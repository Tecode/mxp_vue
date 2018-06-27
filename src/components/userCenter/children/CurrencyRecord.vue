<template>
	<div id="CurrencyRecord">
		<!--提币记录头部内容-->
		<my-header :text="text"></my-header>
		<!--提币记录-->
		
		<!--提币内容-->
		<div class="recordcontent">
			<ul class="recordList" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="10">  
				<li class="recordItem" v-for="item in Currency_record" :key="item.id" v-show="Currency_record.length>0">
					<div class="item">
						<div class="title">
							<p class="zhang_hao">   
								<span class="hao">{{$t('tibi.tibi_4')}}   : </span> 
							</p>
							<p class="time">
								<span>{{item.created_at}}</span>
							</p>

						</div>  
						<p><span class="blue">{{item.interactive_user}}</span></p>
						<div class="content">
							<p>					
								<span class="text">{{$t('tibi.tibi_5')}}  :  </span>
								<span class="num">{{item.change_amount}}</span>
							</p>
							<p class="right">
								<span class="text">{{$t('CurrencyRecord.CRecord_1')}}    :  </span>
								<span class="num success" v-show="item.state==1">{{$t('CurrencyRecord.CRecord_2')}}</span>
								<span class="num" v-show="item.state==2">{{$t('CurrencyRecord.CRecord_3')}}</span>
							</p>
						</div>
					</div>
				</li>
				<div v-show="Currency_record.length==0" class="zan_wu">{{$t('CurrencyRecord.CRecord_4')}}</div>
			</ul>
		</div>
					
	</div>
</template>
																										
<script>
import header from "../../public/header"
import fetch from "@/utils/fetch";
import utilsApi from "@/utils/utilsApi";
import { MessageBox   } from 'mint-ui';
	export default {	
		data() {
			return {
				text: this.$t('CurrencyRecord.CRecord_5'),
				totalALL: 0,
				Currency_record: [],
				loading:false,
				p:1,
				l:10
			}
		},
		components: {
			"my-header": header
		},
		created: function() {
			// this.getlist();
		},
		methods: {
			getlist: async function(p){
				const res = await fetch.post(
					utilsApi.apiwithdrawList, {"user_id":this.$store.state.user.user_id,"p":p,"l":this.l}
				);
				if(res){
					for (let i = 0; i < res.data.data.length; i++) {
						this.Currency_record.push(res.data.data[i]);
					}
					this.loading=false;
				}
			},
			loadMore(){
				this.loading = true;
				this.getlist(this.p);
				this.p=this.p+1
			}
		},
	}
</script>
							
<style lang="scss">
	$alet_border:1px solid #121528;
	$blue_title:#6a79f6;
	$blue:#959eef;
	$border_bottom:0.01rem solid #1e2250;
	#CurrencyRecord {
		height:100%;
		.el-pager {   
			background: none;
			color: #fff;
		}
		.el-pager li {
			background: none;
		}
		.btn-next,
		.btn-prev {
			background: none;
			color: #fff;
		}
		.el-pagination button:disabled {
			color: #409EFF;
		}
	}
	.recordcontent{
		height:5rem;
		overflow:hidden;
	}
	.recordList {
		width: 2.909rem;
		margin:0 auto;
		height:100%;
		overflow-y:auto;
		.zan_wu {
			width: 100%;
			text-align: center;
			line-height: .3rem;
			color: #fff;
		}
		.recordItem {
			width: 100%;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 .1rem;
			align-items: flex-start;
			color: #fff;
			border:1px solid #2f312b;
			background:url("../../../assets/content_bg.png");
			background-size:100%;
			margin-top:.068rem;
			.item {
				width: 100%;
				.title {
					width: 100%;
					/*height: .3rem;*/
					line-height: .3rem;
					display:flex;
					.zhang_hao {
						width:50%;
						font-size: .12rem; 
						.hao {
							color: #857154;
							word-wrap: break-word;
						}
					}
					.time {
						width:50%;
						height: .2rem;
						text-align: right;
						color: #857154;
						margin-bottom: .05rem;
					}
				}
				.blue{
					line-height: .3rem;
					color:#fde08d;
				}
			}
			.content {
				width: 100%;
				height: .3rem;
				line-height: .3rem;
				display: flex;
				p {
					margin-right: .1rem;
					.text {
						color: #857154;
					}
					.num{
						color:#fde08d;
					}
				}
				.right{
					margin-left: auto;
				}
				.num.success{
					color:#5bb93e;
				}
			}
		}
	}
	
	
	
	
	.block{
		display: flex;
		justify-content: flex-end;
	}
</style>


// WEBPACK FOOTER //
// src/components/userCenter/children/CurrencyRecord.vue