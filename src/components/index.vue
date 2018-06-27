<template>
	<div id="footer">
		<router-view></router-view>
		<!--底部路由部分-->
		<ul class="footer_list">
			<router-link to="/shouye" tag="li">
				<i class="iconfont icon-shouye"></i>
				<p>{{$t('public.home')}}</p>
			</router-link>
			<router-link to="/recharge" tag="li" class="dian">
				<span class="red" v-if="windowLocation" v-show="version!=newVersion"></span>
				
				<i class="iconfont icon-swipe"></i>
				<!-- <img src="../assets/dian.png"> -->
				<p>{{$t('public.card')}}</p>
			</router-link>  
			<router-link to="/userCenter" tag="li" class="userCenter">
				<span class="red" v-if="windowLocation" v-show="version!=newVersion"></span>
				<i class="iconfont icon-yonghudianji"></i>
				<p>{{$t('public.userCenter')}}</p>
			</router-link>  
		</ul>  
		<div class="oHeight"></div>
		
		
	</div>	
</template>

<script>
	export default {
		data() {
			return {		  	
				getColor: window.localStorage.getItem("bg_color"),
				version:window.localStorage.getItem("version"),		    //获取本地版本           
				newVersion:window.localStorage.getItem("newVersion"),   //获取最新的版本   	 
				windowLocation:true 									
			} 
		}, 
		mounted() {
			// this.goLogin();
		},
		methods:{
			goLogin(){
				var _this = this;
				if(!this.$store.state.user.user_id){
					this.$router.push({path:'/login'});
				}
				if(window.location.host){ 	
					this.windowLocation = false; 
				}
			}
		}
	}
</script>

<style lang="scss">
	$bg_color:#141738;
	/*背景颜色*/
	
	$font_color:#6a82c0;
	/*字体颜色*/
	
	$font_active_color:#0195f2;
	/*选中字体颜色*/
	
	/*底部导航部分*/
	.footer_list {
		width: 100%;
		height: .5rem;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		background:url("../assets/footer_bg.png") no-repeat;
		background-size:100% 100%;
		.router-link-active {
			color: #fde396;
		}
		li {
			width: 50%;
			height: .5rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			cursor: pointer;
			color: #c1975b;
			.iconfont {
				font-size: .17rem;
				margin-top: 0.05rem;
			}
			p {
				margin-top: .02rem;
			}
		}
		.dian img{
				width:.2rem;
				margin-left: .42rem;
		}
		.userCenter{
			position: relative;
			.red{
				position: absolute;
				left: 58%; 
				top: 15%;
				display: block;
				width: .08rem;
				height: .08rem;
				background: #ff2424;
				border-radius: 50%;
			}
		}
	}
	
	.oHeight {
		height: .5rem;
	}
</style>


// WEBPACK FOOTER //
// src/components/index.vue