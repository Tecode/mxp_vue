<template>
	<div id="news">
		<Header :text="text"/>
        <div class="contenr">{{newContent.content}}</div>
	</div>	
</template>

<script>
	import Header from "@/components/public/header";
import fetch from "@/utils/fetch";
import utilsApi from "@/utils/utilsApi";
import request from "@/public/js/request";
import Public from "@/public/js/public";
import { MessageBox   } from 'mint-ui';
	export default {
        name:"news",
		components:{
			Header
		},
		data() {
			return {		  	
				text:"公告",
				newContent:{}
			} 
		},
		created: function() {
			this.operaGetNew();
		},
		methods: {  																															
			operaGetNew: async function(){
				const res = await fetch.get(
					utilsApi.apiNotice+"?type="+this.$store.state.user.type
				);
				if (res) {
					this.newContent=res.data.data;
				}
			}

		}
	}
</script>

<style lang="scss">
	.contenr{
		width: 2.909rem;
		margin:0 auto;
		margin-top: .1rem;
		border:1px solid #313330;
		background:url("../../assets/content_bg.png");
        background-size:100%;
        padding:.1rem;
        box-sizing:border-box;
        color:#b09a65;
        line-height:150%;
    }
</style>


// WEBPACK FOOTER //
// src/components/index.vue