<template>
	<div id="app">
		<router-view/>     
	</div>
</template>

<script>
	import axios from "axios"
	import { MessageBox,Toast  } from 'mint-ui';
	import $ from "jquery" 	
	import Vue from "vue"  
	import rem from "@/public/js/rem";
	import '@/public/css/reset.css';
	export default {
		name: 'App',
		data() {
			return {
				getColor: window.localStorage.getItem("bg_color"),
				isPC:false
			}
		},
		created: function() {
			this.operaIswuhen();
			this.operaIspc();
			window.onresize = () => {
				return (() => {
					this.operaIspc();
				})()
			}
		},
		methods:{
			operaIspc(){
				if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
					this.isPC=false;
				} else{
					document.getElementsByTagName("body")[0].classList.add("pc");
					this.isPC=true;
				}
			},
			operaIswuhen(){
				if (typeof localStorage === 'object') {
					try{
						localStorage.setItem('localStorage', 1);
						localStorage.removeItem('localStorage');
					}catch(e){
						MessageBox(this.$t('public.prompt'), this.$t('public.rules.rule_10'));
					};
				}
			}
		}
	}
</script>

<style>
	body{
		transform:translate(0,0) 
	}
	body.pc{
		width:375px;
		height:667px;
		margin:0 auto;
	}
	#app {
		width: 100%;
		min-height:100%;
		background:url("assets/bg.png");
		background-size:100% 100%;
		background-attachment: fixed;
	}
	.pc #app{
		background-size:375px;
	}
</style>


// WEBPACK FOOTER //
// src/App.vue