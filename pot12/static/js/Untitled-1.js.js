//鎷︽埅瀹夊崜鍥為€€鎸夐挳
/**history.pushState(null, null, location.href);
* window.addEventListener('popstate', function(event) {
*    history.pushState(null, null, location.href );
*    //姝ゅ鍔犲叆鍥為€€鏃朵綘瑕佹墽琛岀殑浠ｇ爜
*	//window.location.href="about:blank";
//});


//鍙樻崲鑳屾櫙棰滆壊
/**
 * 浜х敓闅忔満鏁存暟锛屽寘鍚笅闄愬€硷紝鍖呮嫭涓婇檺鍊�
 * @param {Number} lower 涓嬮檺
 * @param {Number} upper 涓婇檺
 * @return {Number} 杩斿洖鍦ㄤ笅闄愬埌涓婇檺涔嬮棿鐨勪竴涓殢鏈烘暣鏁�
 */
// function random(lower, upper) {
	// return Math.floor(Math.random() * (upper - lower+1)) + lower;
// }
//闅忔満璁剧疆鑳屾櫙鑹�
// function setBGC(){
	// var colorArr = new Array("#4395D1","#00A99D","#FBAF5D","#84871C","#9E6B52","#A186BE");
	// var i = random(0,5);
	// document.getElementById("imgBg").style.background = colorArr[i];
// }
// setInterval(setBGC,300); 


//2鍒嗛挓缁撴潫
//function closePass(){
//	document.getElementById("bodyDiv").style.display = 'none';
//	document.title = '閫氳璇佸凡澶辨晥';
//	history.pushState(null, null, location.href);
//	window.addEventListener('popstate', function(event) {
//		history.pushState(null, null, location.href );
//		//姝ゅ鍔犲叆鍥為€€鏃朵綘瑕佹墽琛岀殑浠ｇ爜
//		//window.location.href="about:blank";
//	});
//}
//setTimeout(closePass,120000);