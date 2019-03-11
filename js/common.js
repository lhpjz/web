/*--------------------------点击去掉placeholder内容--------------------------*/
$(function(){
	$("input").click(function() {
		$(this).attr('placeholder', '');
	});
});
/*--------------------------屏幕右侧客服+gotop--------------------------*/
$(function(){
	$(".go-top").click(function() {
		$("html,body").animate({
			scrollTop: '0'},800);
	});

	/*监听屏幕滚动事件*/
	// function showkefu() {
	// 	var _windowScrollTop = 0; 滚动条距离顶端的距离
	// 	$(window).scroll(actionEvent).resize(actionEvent);
	// }
	function showkefu() {
		// 滚动条距离顶端的距离
		var _windowScrollTop = 0;
		$(window).scroll(fnkefu).resize(fnkefu);
	}
	function fnkefu() {
		// 屏幕高度
		var Hwindow = $(window).height();
		_windowScrollTop = $(window).scrollTop();
		$(".kefu").stop().animate({
			top: [_windowScrollTop + (Hwindow*0.3),'easeOutCirc']},2000, 'swing');
	}
	showkefu();	
});