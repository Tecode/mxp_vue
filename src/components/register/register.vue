<template>
	<div id="register">	
		<div class="login_img">	   
			<img v-show="langType==1" src="../../assets/login_Complex2.png"  />   
			<img v-show="langType==2" class="e_img" src="../../assets/register_E_logo.png"  /> 
			<img v-show="langType==3" src="../../assets/login_han2.png"  /> 
			<img v-show="langType==4" src="../../assets/login_fa2.png"  /> 
			<img v-show="langType==5" class="T_img" src="../../assets/login_Complex2.png"  /> 
			<img v-show="langType==6" src="../../assets/login_ri2.png"  /> 
		</div>	
		<!--手机注册-->
		<div class="phone_register">
			<div class="userAccountNumber user_input"> 
				<font class="inviteCode">{{$t('register.reg_1')}}</font>
				<!--文本框部分-->   						
				<div class="oInput inviteCode_input">
					<input type="text" class="input" v-model="form.inviteCode" @blur="checkinviteCode()" :disabled="codeEdit" :placeholder="$t('register.reg_1')" />
				</div>
			</div>
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
			<!--密码-->
			<div class="userPassword user_input">
				<i class="iconfont icon-mima"></i>
				<!--秘密框内容-->    					
				<div class="oInput">
					<input type="password" v-model="form.password1" @blur="checkPsw()" class="input" :placeholder="$t('login.login_2')"  />
				</div>
			</div>
			<!--确认密码-->
			<div class="userPassword user_input">
				<i class="iconfont icon-mima"></i>
				<!--秘密框内容-->    					
				<div class="oInput">
					<input type="password" v-model="form.password2" @blur="checkNpsw()" class="input"  :placeholder="$t('register.reg_3')"  />
				</div>
			</div>
			<!--按钮-->
			<div class="small_text">{{$t('register.reg_4')}}</div>
			<div class="submit_login">
				<button class="button_login" :disabled="registerbtn" @click="operaRegister()">{{$t('register.reg_5')}}</button>
			</div>
			<div class="gologin">
				<router-link to="/login">{{$t('register.reg_6')}} <span>{{$t('register.reg_7')}}></span></router-link>
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
		name: "pending",
		data() {
			return {
				form:{
					inviteCode:"",
					phoneNumber:"",
					verifyCode:"",
					password1:"",
					password2:""
				},
				getcodemessage:this.$t('register.reg_8'),
				messagebtn:false,
				registerbtn:false,
				langType:this.$store.state.user.type,
				codeEdit:false
			}
		},
		created: function() {
			this.getInviteCode();
		},
		methods: {
			getInviteCode(){
				let code=this.$route.query.code;
				if(code){
					this.codeEdit=true;
					this.form.inviteCode=code;
				}else{
					this.codeEdit=false;
				}
			},
			operaCode(){
				let _this = this;
				if(Public.checkMobile(this.form.phoneNumber)){
					let tem = request.operaPost(utilsApi.get_message_code, {"phoneNumber":this.form.phoneNumber,"languageType":this.langType});
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
			checkinviteCode(){
				return Public.checkRequire(this.form.inviteCode,this.$t('public.rules.rule_9'));
			},
			checkMobile(){
				return Public.checkMobile(this.form.phoneNumber);
			},
			checkCode(){
				return Public.checkCode(this.form.verifyCode);
			},
			checkPsw(){
				return Public.checkPsw(this.form.password1);
			},
			checkNpsw(){
				return Public.checkNpsw(this.form.password2,this.form.password1);
			},
			operaRegister: async function(){
				let _this = this;
				if(!Public.checkRequire(this.form.inviteCode,this.$t('public.rules.rule_9'))){
					return;
				}
				// alert(1);
				if(!Public.checkMobile(this.form.phoneNumber)){
					return;
				}
				if(!Public.checkCode(this.form.verifyCode)){
					return;
				}
				if(!Public.checkPsw(this.form.password1)){
					return;
				}
				if(!Public.checkNpsw(this.form.password2,this.form.password1)){
					return;
				}
				this.form.languageType=this.langType;
				const res = await fetch.post(
					utilsApi.apiRegister, this.form
				);
				if (res.data.code==1) {
					Toast({
						message:this.$t('register.reg_10'),
						duration:3000
					});
					this.registerbtn=true;
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

<style lang="scss">
	/*已有账号，去登录*/
	#register{
		width: 100%;
		min-height:100%;
		background:url("../../assets/login_bg.png");
		background-size:100% 100%;
    	padding-top:1px;
		background-attachment: fixed;
	}
	
	.pc #register{
		background-size:375px 100%;
	}
	
	.login_img {
		width: 100%;
		text-align: center;
		margin-top: .63rem;
		img {
			width: 0.7rem;
			height: .3rem;
		}
		.L_img{
			width: .7rem;
    		height: .3rem;
		}
		.e_img{
			width: 1.495rem;
			height: .3rem;
		}
		.T_img{
			width: .6rem;
    		height: .3rem;
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
		.button_login {
			width: 100%;
			height: .38rem;
			font-size:.19rem;
			color: #734416;
			outline: none;
		}
	}
	.gologin{
		width: 2.7rem;
		margin:0 auto;
		text-align:center;
		margin-top: 0.17rem;
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
// src/components/register/register.vue