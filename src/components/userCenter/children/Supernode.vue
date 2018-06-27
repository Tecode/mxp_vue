<template>
	<div class="Supernode">
		<my-header :text="header"></my-header>
		<p class="borderColor"></p>
		<!--邀请码-->
		<ul class="userList">  
			<li>
				<span class="name">身份</span>
				<span class="text">超级节点有限合伙人</span>
			</li>
			<li>
				<span class="name">IM数量</span>	
				<span class="text">{{balance | number(4)}} USDT</span>	
			</li>
		</ul>
		<p class="borderColor"></p>
		<!--比例-->
		<ul class="userList">
			<li>
				<span class="name">比例</span>
				<span class="text">{{billy | number(2)}}%</span>
			</li>
			<li>
				<span class="name">合伙人 :</span>
			</li>
			<!--列表内容-->
			<li v-for="(item,index) in identityList.other">
				<p class="mobie">
					<span class="index blue">{{index+1}}.</span>
					<span class="phone">{{item.name}}</span>
				</p>    
				<p class="Num">
					<span class="blue">IM数量</span>         	
					<span>{{item.balance | number(4)}}</span>
					<span class="blue">占比</span>
					<span>{{item.billy | number(2)}}%</span>
				</p>
			</li>
		</ul>
		
		
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
				header: "身份",
				userTypeList:["普通用户","超级用户","超级节点","超级节点合伙人"],
				identityList:{},			/*身份信息*/
				balance:"",
				billy:""
			}
		},
		components: {  
			"my-header": header
		},
		filters: {
			//小数点过滤器 不四舍五入
			number(value, num) {
				var toFixedNum = Number(value).toFixed(num + 1);
				var realVal = toFixedNum.substring(0, toFixedNum.toString().length - 1);
				return realVal;
			}
		}
	}
</script>

<style lang="scss" scoped>
	/*边框背景颜色*/
	$border_bottom: 1px solid #1b1d3e;
	$placeholder:#bcc0fd;
	.borderColor {
		width: 100%;
		height: .1rem;
		background: #121528;
	}
	/*身份*/
	.userList{
		width: 100%;
		li{
			width: 100%;
			height: .4rem;
			line-height: .4rem;
			color: #fff;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 .1rem;
			border-bottom: $border_bottom;
			.text{
				color: $placeholder;
			}
			.blue{
				color: #8894FC;  
			}
		}
	}
	
</style>


// WEBPACK FOOTER //
// src/components/userCenter/children/Supernode.vue