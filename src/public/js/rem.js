//<script type="text/javascript"> 
			//浜嬩欢  锛� 灞忓箷鍙戠敓鏀瑰彉鏃惰Е鍙戠殑浜嬩欢        (灞忓箷瀹芥槸320px   鑻规灉4鐨勫睆)
			if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				window.onresize=window.onload=function(){
					// var width=document.getElementsByTagName("body")[0].clientWidth;//鑾峰彇鏂囨。鐨勫
					////璁剧疆鏂囨。瀛椾綋  (鏍圭洰褰曚笅璁剧疆)
					document.documentElement.style.fontSize=375/3.2+"px";  
					//1rem=100px
				}
			} else{
				window.onresize=window.onload=function(){
					var width=document.getElementsByTagName("body")[0].clientWidth;//鑾峰彇鏂囨。鐨勫
					////璁剧疆鏂囨。瀛椾綋  (鏍圭洰褰曚笅璁剧疆)
					document.documentElement.style.fontSize=width/3.2+"px";  
					//1rem=100px
				}
			}
//		</script>