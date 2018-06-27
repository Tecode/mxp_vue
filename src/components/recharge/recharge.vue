<template>
	<div id="recharge">
		<Header :text="text"/>
		<div class="identity_content">
			<!--充币地址-->
			<ul>												    	   	
				<!-- <li>
					<span>点卡购买</span>
					<span>{{SuccessAddress.pointcard}}点</span>
				</li> -->
				<li class="select">
					<span>{{$t('recharge.rec_1')}}</span>
					<input type="text" disabled="true" v-model="form.cardValue"><span>{{$t('recharge.rec_2')}}</span>
				</li>
				<li>
					<span>{{$t('recharge.rec_3')}}:  </span>
					<input type="text" disabled="true" v-model="form.cardUsdt"><span>USDT</span>
				</li>
				<li>
					<span>{{$t('recharge.rec_4')}}:  </span>
					<input type="text" disabled="true" v-model="form.surplus"><span>USDT</span>
				</li>
			</ul>
			<div class="quantity">
				<div class="lable">{{$t('recharge.rec_8')}}</div>
				<input type="number" v-model="form.buy_num">
				<p>总计：{{form.buy_num}}</p>
			</div>
		</div>
		<div class="submit">
			<button @click="operasave()">{{$t('public.submit')}}</button>
		</div>
	</div>
</template>

<script>
	/*头部*/
import Header from "../public/header";
import fetch from "@/utils/fetch";
import utilsApi from "@/utils/utilsApi";
import { MessageBox,Toast   } from 'mint-ui';
	export default {
		components:{
			Header
		},
		data() {
			return {
				text:this.$t('recharge.rec_5'),
				form:{
					cardValue:"",
					cardUsdt:"",
					surplus:"",
					buy_num: 0
				}
			}
		},
		created: function() {
			this.getCard();
		},
		methods: {
			getCard:async function(){
				const res = await fetch.post(
					utilsApi.apiCard, {"user_id":this.$store.state.user.user_id,"type":this.$store.state.user.type}
				);
				if(res){
					this.form=res.data.data;
				}
			},
			operasave(){
				MessageBox({
					title: this.$t('public.prompt'),
					message: this.$t('recharge.rec_6'),
					showCancelButton:true,
					confirmButtonText: this.$t('public.sure'),
					cancelButtonText:this.$t('public.cancel')
				}).then(action => {
					if (action == 'confirm') {     //确认的回调
					this.operaSubmin();
					}
				});
			},
			operaSubmin:async function(){
				const res = await fetch.post(
					utilsApi.apibuyCard, {"user_id":this.$store.state.user.user_id,"buy_num":this.form.buy_num}
				);
				if(res.data.code==20){
					this.getCard();
					Toast({
						message:this.$t('recharge.rec_7'),
						duration:3000
					});
				}else{
					Toast({
						message:res.data.msg,
						duration:3000
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color_bg:#262945;
	$blue:#8894FC;
	.identity_content {
		width: 2.909rem;
		margin:0 auto;
		margin-top: .1rem;
		padding-bottom: .4rem;
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
					color: #fff;
				}
				span{
					width:auto;
				}
				input {
					margin-right:.1rem;
					flex:1;
					width:auto;
					height: .4rem;
					border: none;
					background: none;
					outline: none;
					color: #fff;
					text-align: right;
					color:#ffe398;
					margin-left:auto;
				}
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
			// .select {
			// 	display: flex;
			// 	input {
			// 		width:.5rem;
			// 		flex:0;
			// 	}
			// }
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
				dd {
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
	.submit{
		height: .4rem;
		width: 2.46rem;
		margin:0 auto;
		margin-top: .17rem;
		background:url("../../assets/btn_bg.png") no-repeat;
		background-size:100%;
		button{
			width: 100%;
			height: .38rem;
			font-size:.19rem;
			color: #734416;
			outline: none;
		}
	}
	.quantity {
		padding: 0 .1rem;
		color: #7d7358;
		input {
			outline: none;
			width: 100%;
			height: .3rem;
			text-align: right;
		}
		.lable {
			line-height: .4rem;
		}
		p {
			text-align: right;
		}
	}
</style>


// WEBPACK FOOTER //
// src/components/shouye/shouye.vue