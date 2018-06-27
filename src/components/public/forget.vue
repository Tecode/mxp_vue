<template>
	<div id="forget">
		<div class="header">
			<div class="header_box">
				<div class="register_header">
					<p class="back" @click="$router.go(-1)">    
						<i class="iconfont icon-zuojiantou"></i>
					</p>										 
				</div>													
			</div>
		</div>
		<div class="login_img">	     
			<img v-show="langType==1" src="../../assets/forget_logo.png"  /> 
			<img v-show="langType==2" class="e_img" src="../../assets/forget_E_logo.png"  /> 
			<img v-show="langType==3" src="../../assets/login_han3.png"  /> 
			<img v-show="langType==4" class="e_img" src="../../assets/login_fa3.png"  /> 
			<img v-show="langType==5" src="../../assets/login_Complex3.png" /> 
			<img v-show="langType==6" class="R_img" src="../../assets/login_ri3.png"  /> 
		</div>	
		<!--手机注册-->
		<div class="phone_register">
			<div class="userAccountNumber user_input"> 
				<i class="iconfont icon-yonghu"></i>
				<!--文本框部分-->   						
				<div class="oInput">
					<input type="text" class="input" v-model="form.phoneNumber" @blur="checkMobile()" :placeholder="$t('login.login_1')" />
				</div>
			</div>
			<!--验证码-->
			<div class="userPassword user_input">
				<i class="iconfont icon-zhucedengluyanzhengma"></i>
				<!--秘密框内容-->    					
				<div class="oInput">
					<input type="text" class="input code_input" v-model="form.verifyCode" @blur="checkCode()" :placeholder="$t('register.reg_2')" />
					<button class="get_code_btn" :disabled="messagebtn" @click="operaCode()">{{getcodemessage}}</button>
				</div>
			</div>
			<div class="userPassword user_input">
				<i class="iconfont icon-mima"></i>
				<!--秘密框内容-->    					
				<div class="oInput">
					<input type="password" v-model="form.newPass1" @blur="checkPsw()" class="input" :placeholder="$t('login.login_2')"  />
				</div>
			</div>
			<!--确认密码-->
			<div class="userPassword user_input">
				<i class="iconfont icon-mima"></i>
				<!--秘密框内容-->    					
				<div class="oInput">
					<input type="password" v-model="form.newPass2" @blur="checkNpsw()" class="input"  :placeholder="$t('register.reg_3')"  />
				</div>
			</div>
			<!--按钮-->
			<div class="small_text">{{$t('register.reg_4')}}</div>
			<div class="submit_login">
				<button class="button_login" :disabled="registerbtn" @click="operaRegister()">{{$t('public.submit')}}</button>
			</div>
		</div>
	</div>
</template>

<script>
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
					verifyCode:"",
					newPass1:"",
					newPass2:"",
					type:"0"
				},
				getcodemessage:this.$t('register.reg_8'),
				messagebtn:false,
				registerbtn:false,
				langType:this.$store.state.user.type
			}
		},
		created: function() {
		},
		methods: {
			operaCode(){
				let _this = this;
				if(Public.checkMobile(this.form.phoneNumber)){
					let tem = request.operaPost(utilsApi.get_message_code, {"phoneNumber":this.form.phoneNumber,"type": "0","languageType":this.langType});
					tem.then(function(str) {
						if (str) {
							_this.settime(60);
						}
					});
				}
			},
			settime (countdown) {
				let _this = this;
                if (countdown == 0) {
					this.getcodemessage=this.$t('register.reg_9');
					this.messagebtn=false; 
                  countdown = 60;  
                  return false;  
                } else {
					this.getcodemessage=countdown+"s";
					this.messagebtn=true;
                  countdown--;  
                }
                setTimeout(function() {  
                    _this.settime(countdown);  
                },1000);  
            },
			checkMobile(){
				return Public.checkMobile(this.form.phoneNumber);
			},
			checkCode(){
				return Public.checkCode(this.form.verifyCode);
			},
			checkPsw(){
				return Public.checkPsw(this.form.newPass1);
			},
			checkNpsw(){
				return Public.checkNpsw(this.form.newPass2,this.form.newPass1);
			},
			operaRegister: async function(){
				let _this = this;
				if(!Public.checkMobile(this.form.phoneNumber)){
					return;
				}
				if(!Public.checkCode(this.form.verifyCode)){
					return;
				}
				if(!Public.checkPsw(this.form.newPass1)){
					return;
				}
				if(!Public.checkNpsw(this.form.newPass2,this.form.newPass1)){
					return;
				}
				this.form.languageType=this.langType;
				const res = await fetch.post(
					utilsApi.apifindpass, this.form
				);
				if (res.data.code==1) {
					Toast({
						message:this.$t('forget.forget_2'),
						duration:3000
					});
					_this.registerbtn=true;
					this.$router.push({path:'/login'});
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
	/*头部固定*/
	.header{
		z-index: 1000;
	}
	.header_box {
		width: 100%;
		height: .5rem;
		position: fixed;
		top: 0;
		left: 0;
	}
	
	.register_header {
		width: 100%;
		height: .5rem;
		line-height: .5rem;
		position: relative;
		color: #f5ca6c;
		.back {
			margin-left: .15rem;
			color:#756846;
		}
	}
	#forget{
		width: 100%;
		min-height:100%;
		background:url("../../assets/login_bg.png");
		background-size:100% 100%;
    	padding-top:1px;
		background-attachment: fixed;
	}
	.pc #forget{
		background-size:375px 100%;
	}
	.login_img {
		width: 100%;
		text-align: center;
		margin-top: .63rem;
		img {
			width: 1.116rem;
			height: .3rem;
		}
		.e_img{
			width: 1.744rem;
			height: .3rem;
		}
		.R_img{
			width: 0.99rem;
    		height: 0.2rem;
		}
		.f.img{
			width: 1.99rem;
    		height: 0.2rem;
		}
	}

	.phone_register{
		
		margin-top: .26rem;
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
			.input{
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

	.small_text{
		width: 2.7rem;
		margin:0 auto;
		color:#767675;
		margin-top:.1rem;
		font-size:0.1rem;
		text-align:center;
	}
	.submit_login {
		height: .4rem;
		width: 2.46rem;
		margin:0 auto;
		margin-top: .469rem;
		background:url("../../assets/btn_bg.png") no-repeat;
		background-size:100%;
		padding-bottom: .1rem;
		.button_login {
			width: 100%;
			height: .38rem;
			font-size:.19rem;
			color: #734416;
			outline: none;
		}
	}
</style>


// WEBPACK FOOTER //
// src/components/public/forget.vue