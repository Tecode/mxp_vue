<template>
	<div class="header">
		<div class="header_box">
			<div class="register_header">
				<p class="back" @click="$router.go(-1)">    
					<i class="iconfont icon-zuojiantou"></i>
				</p>
				<p class="register_type">							
					{{text}} 										
				</p>											 
			</div>													
		</div>                                                    
		<div class="oHeight"></div>
	</div>
</template> 

<script>
	export default {
		props: ["text"]
	}
</script>

<style lang="scss" scoped>
$header_bg:#171932;
	/*撑开高度*/
	.oHeight{
		width: 100%;  
		height: .5rem; 
	}
	/*头部固定*/
	.header{
		background:url("../../assets/header_line.png") no-repeat center bottom;
		background-size:2.815rem;
		z-index: 1000;
	}
	.header_box {
		width: 100%;
		height: .5rem;
		position: fixed;
		top: 0;
		left: 0;
		background:url("../../assets/header_bg.png") no-repeat center top;
		background-size:100%;
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
		.register_type {
			position: absolute;
			top: 0;
			left: 20%;     													
			width: 60%;
			text-align: center;
			font-size: .16rem;
			font-weight: bold;
		}
	}
</style>


// WEBPACK FOOTER //
// src/components/public/header.vue