<template>
	<div id="login">
		<div class="checkLa">
			<select v-model="langType" @change="changeLang()">
				<option selected  value="5">繁体中文</option >
				<option  value="2">English</option >
				<option  value="3">한국어.</option >
				<option  value="4">Français</option >
				<option  value="6">日本語</option >
			</select>
		</div>		 	
		<div class="login_img">	   
			<img v-show="langType==1"  src="../../assets/login_Complex.png" />   
			<img v-show="langType==2" class="e_img" src="../../assets/login_E_logo.png" /> 
			<img v-show="langType==3" src="../../assets/login_han.png" /> 
			<img v-show="langType==4" src="../../assets/login_fa.png" /> 
			<img v-show="langType==5" class="R_img" src="../../assets/login_Complex.png" />
			<img v-show="langType==6" src="../../assets/login_ri.png" />  
		</div>
		<div class="login_content">
			<div class="content">
				<div class="userAccountNumber user_input"> 
					<i class="iconfont icon-yonghu"></i>
					<div class="oInput">
						<input type="text" v-model="form.phoneNumber" @blur="checkMobile()" :placeholder="$t('login.login_1')" />
					</div>
				</div>
				<div class="userPassword user_input">
					<i class="iconfont icon-mima"></i>
					<div class="oInput">
						<input type="password" v-model="form.password" @blur="checkPsw()"  :placeholder="$t('login.login_2')"  />
					</div>
				</div>
				<div class="submit_login">
					<button class="button_login" :disabled="loginbtn" @click="operaLogin()">{{$t('login.login_3')}}</button>
				</div>
				<div class="RightOff_register">
					<router-link to="/register" class="register_btn fl"><font v-show="langType==1">{{$t('login.login_4')}}</font><span>{{$t('login.login_5')}}></span></router-link>
					<router-link to="/forget" class="forget_btn fr">{{$t('login.login_6')}}</router-link>
					<div class="clear"></div>
				</div>
			</div>	 	
		</div>

	</div>
</template>

<script>
import axios from 'axios'
import fetch from "@/utils/fetch";
import utilsApi from "@/utils/utilsApi";
import request from "@/public/js/request";
import Public from "@/public/js/public";
import { MessageBox,Toast   } from 'mint-ui';
	export default {
		data() {
			return {
				form:{
					phoneNumber:"",
					password:""
				},
				loginbtn:false,
				langType:this.$store.state.user.type
			}
		},
		created: function() {
			this.changeLang();
			if(this.$store.state.user.user_id){
				this.$router.push({path:'/shouye'});
			}
		},
		methods: {
			checkMobile(){
				return Public.checkMobile(this.form.phoneNumber);
			},
			checkPsw(){
				return Public.checkPsw(this.form.password);
			},
			operaLogin: async function(){ 
				let _this = this;
				console.log(_this);
				if(!Public.checkMobile(this.form.phoneNumber)){
					return;
				}
				if(!Public.checkPsw(this.form.password)){
					return;
				}
				this.form.languageType=this.langType;
				const res = await fetch.post(
					utilsApi.apiLogin, this.form
				);
				// axios({
				// 	url:"http://www.mxp.com/api/author/usercenter/vi/v1.0/key/login",
				// 	methods:"POST",
				// 	headers:{
				// 		 'X-Requested-With': 'XMLHttpRequest',
        		// 		'Content-Type': 'application/x-www-form-urlencoded'
				// 	},
				// 	data:{
				// 		data:this.form
				// 	},
				// }).then(req=>{
				// 	console.log(req)
				// })
				if (res.data.code==1) {
					Toast({
						message:this.$t('login.login_7'),
						duration:3000
					});
					this.$store.commit('setUser', res.data.data[0].userId);
					this.loginbtn=true;
					this.$router.push({path:'/shouye'});
				}else{
					Toast({
						message:res.data.msg,
						duration:3000
					});
				}
			},
			changeLang(){
				if(this.langType==2){
					this.$store.commit('setType', 2);
    				this.$i18n.locale ="en"
				}else if(this.langType==1) {
					this.$store.commit('setType', 1);
    				this.$i18n.locale ="zh"
				}else if(this.langType==3) {
					this.$store.commit('setType', 3);
    				this.$i18n.locale ="han"
				}else if(this.langType==4) {
					this.$store.commit('setType', 4);
    				this.$i18n.locale ="fa"
				}else if(this.langType==5) {
					this.$store.commit('setType', 5);
    				this.$i18n.locale ="Complex"
				}else if(this.langType==6) {
					this.$store.commit('setType', 6);
    				this.$i18n.locale ="Japanese"
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	#login{
		width: 100%;
		min-height:100%;
		background:url("../../assets/login_bg.png");
		background-size:100% 100%;
    	padding-top:1px;
		position:relative;
		background-attachment: fixed;
	}
	.pc #login{
		background-size:375px 100%;
	}
	.checkLa{
		position:absolute;
		top:.1rem;
		right:.1rem;
		select{ 
			appearance:none;
			-moz-appearance:none;
			-webkit-appearance:none;
			background:url("../../assets/la.png") no-repeat center;
			background-size: .7rem;
			text-align:center;
			width: .88rem;
			height:.247rem;
			line-height:.247rem;
			border:1px solid #6f7368;
			color:#cac8c4;
			font-size:.1rem;
			padding: 0 .2rem 0 .25rem;
		}
	}
	.login_img {
		width: 100%;
		text-align: center;
		margin-top: .887rem;
		img {
			width: .7rem;
			height: .3rem;
		}
		.L_img{
			width: .7rem;
    		height: .3rem;
		}
		.e_img{
			width: 1.19rem;
			height: .3rem;
		}
		.R_img{
			width: 0.6rem;
    		height: .3rem;
		}
	}
	.login_content {
		margin-top:.477rem;
	}
	.user_input{
		background:url("../../assets/input_bg.png");
		background-size:100%;
		border-radius:.225rem;
		padding: 0 .15rem;
		box-sizing: border-box;
		width: 2.45rem;
		height: .379rem;
		display: flex;
		justify-content: space-between;
		line-height: .379rem;
		margin: 0 auto;
		margin-bottom: .2rem;
		overflow: hidden;
		.iconfont {
			font-size: .18rem;
			color: rgba(174,162,144,.5);
		}
		.inviteCode{
			color:#e4c56e;
		}
		.oInput {
			width: 2.4rem;
			height: .379rem;
			box-sizing: border-box;
			display: flex;
			input{
				width: 2.3rem;
				height: .379rem;
				line-height: .379rem;
				box-sizing: border-box;
				padding-left: .1rem;
				background: none;
				border: none;
				outline: none;
				color: rgba(255,255,255,.5);
			}
			.code_input{
				width:1.2rem;
			}
			.get_code_btn{
				width:.93rem;
				height: .36rem;
				margin-top:.01rem;
				display:inline-block;
				background:rgba(250,235,187,.4);
				color:#fcdf8b;
				text-align:center;
			}
			input::-webkit-input-placeholder {
				color: rgba(255,255,255,.5);
			}
		}
		.oInput.inviteCode_input{
			width: 1.5rem;
			input{
				width:1.5rem;
				text-align:right;
				color:#e4c56e;
			}
		}
	}
	.submit_login {
		height: .4rem;
		width: 2.46rem;
		margin:0 auto;
		margin-top: .409rem;
		background:url("../../assets/btn_bg.png") no-repeat;
		background-size:100%;
		.button_login {
			width: 100%;
			height: .38rem;
			font-size:.19rem;
			color: #734416;
			outline: none;
		}
	}
	.RightOff_register{
		width: 2.46rem;
		margin:0 auto;
		text-align:center;
		margin-top:1.484rem;
		font-size: 0.12rem;
		padding-bottom: .1rem;
		a{
			color: rgba(92,100,104,.5);
			span{
				color:rgba(255,237,175,.5);
				text-decoration:underline;
			}
		}
	}
</style>


// WEBPACK FOOTER //
// src/components/login/login.vue