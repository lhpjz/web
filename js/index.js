/*--------------------------banner图自制插件--------------------------*/
$(function(){
	// 将html中的主要元素先转化成jquery可以直接使用的，这样就不用每次都$("")了
	var Banner = $(".banner");
	var A = $(".banner a");
	var Img = $(".banner img");
	var Dots = $(".dots");
	var Arrows = $(".arrows");
	var Prev = $(".prev");
	var Next = $(".next");
	// 图片集合数组 arrImgs
	var arrImgs = [
		"images/banner1.jpg",
		"images/banner2.jpg",
		"images/banner3.jpg"
	];
	// 加dots的小圆点
	$("<span>").appendTo(Dots);
	var span = Dots.find('span');
	for (var i = 1; i < arrImgs.length; i++) {
		span.clone().appendTo(Dots);
	}
	span.addClass('active');
	var i = 0;
	// 初始化
	function fnBan() {
		if (i == arrImgs.length) {
			i = 0;
		}
		Img.attr('src', arrImgs[i]);
		$(".dots span").removeClass('active');
		$("span:eq("+i+")").addClass('active');
		i++;
	}
	var interval = window.setInterval(function(){
		fnBan();
	},2000)
	// 指示灯小点鼠标移上去效果(指哪亮哪，指啥来啥)
	$(".dots span").each(function(index) {
		$(this).hover(function() {
			clearInterval(interval);
			$(".dots span").removeClass('active');
			Img.attr('src', arrImgs[index]);
			$(".dots span:eq("+index+")").addClass('active');
		}, function() {
			i = index;
			interval = window.setInterval(function(){
				fnBan();
			},2000)
		});
	});
	// 点击左边箭头prev
	Prev.click(function() {
		// 这里执行的是一个事件函数
		// clearInterval(interval);
		function fnBan2() {
			if (i == 0) {
				i = arrImgs.length;
			}
			Img.attr('src', arrImgs[i-1]);
			$(".dots span").removeClass('active');
			$(".dots span:nth-child("+i+")").addClass('active');
			i--;
		}
		fnBan2();
	});
	// 点击右边箭头next
	Next.click(function() {
		// 这里执行的是一个事件函数
		// clearInterval(interval);
		fnBan();
	});
	// 鼠标触发箭头停止fnBan()事件
	Prev.mouseenter(function(event) {
		clearInterval(interval);
	});
	Next.mouseenter(function(event) {
		clearInterval(interval);
	});
	// 离开箭头恢复fnBan()事件
	Prev.mouseleave(function(event) {
		interval = window.setInterval(function(){
			fnBan();
		},2000)
	});
	Next.mouseleave(function(event) {
		interval = window.setInterval(function(){
			fnBan();
		},2000)
	});
});
/*--------------------------第二屏插件pro_case产品案例自制插件--------------------------*/
$(function(){
	// 转换pro_hd里的标签$
	var proc = $(".pro_case");
	var prohd = $(".pro_hd");
	var bdul = $(".pro_bd ul")
	var nowspan = prohd.find('span.active');
	// 给pro_hd里面的<i>标签设置width，通过对当前span.active的坐标.offset().left、跟当前span.active的外宽.outWidth()之和，算出此时<i>标签的宽度。
	prohd.find("i").css({
		width: nowspan.offset().left + nowspan.outerWidth()
	});
	$(".pro_bd ul:gt(0)").hide();
	// 给span点击事件，添加.active，并且算出点击span后的<i>标签随之宽度
	$(".pro_hd span").click(function(event) {
		$(".pro_hd span").removeClass('active');
		$(this).addClass('active');
		// 切换ul
		var nowindex = $(this).index();
		bdul.hide();
		bdul.eq(nowindex).stop().fadeIn(300);
		// 计算<i>的宽度
		prohd.find("i").css({
			width: $(this).offset().left + $(this).outerWidth()
		});
	});
	// 给产品案例添加图片数组集合
	var proImgs = [
		"images/proimgs/1.jpg",
		"images/proimgs/2.jpg",
		"images/proimgs/3.jpg",
		"images/proimgs/4.jpg",
		"images/proimgs/5.jpg",
		"images/proimgs/6.jpg",
		"images/proimgs/7.jpg",
		"images/proimgs/8.jpg",
		"images/proimgs/9.jpg",
		"images/proimgs/10.jpg",
		"images/proimgs/11.jpg",
		"images/proimgs/12.jpg",
		"images/proimgs/13.jpg",
		"images/proimgs/14.jpg",
		"images/proimgs/15.jpg",
		"images/proimgs/16.jpg",
		"images/proimgs/17.jpg",
		"images/proimgs/18.jpg",
		"images/proimgs/19.jpg",
		"images/proimgs/20.jpg",
		"images/proimgs/21.jpg",
		"images/proimgs/22.jpg",
		"images/proimgs/23.jpg",
		"images/proimgs/24.jpg",
		"images/proimgs/25.jpg",
		"images/proimgs/26.jpg",
		"images/proimgs/27.jpg",
		"images/proimgs/28.jpg",
		"images/proimgs/29.jpg",
		"images/proimgs/30.jpg",
		"images/proimgs/31.jpg",
		"images/proimgs/32.jpg",
		"images/proimgs/33.jpg",
		"images/proimgs/34.jpg",
		"images/proimgs/35.jpg",
		"images/proimgs/36.jpg",
		"images/proimgs/37.jpg",
		"images/proimgs/38.jpg",
		"images/proimgs/39.jpg",
		"images/proimgs/40.jpg",
		"images/proimgs/41.jpg",
		"images/proimgs/42.jpg",
		"images/proimgs/43.jpg",
		"images/proimgs/44.jpg",
		"images/proimgs/45.jpg",
		"images/proimgs/46.jpg",
		"images/proimgs/47.jpg",
		"images/proimgs/48.jpg",
		"images/proimgs/49.jpg",
		"images/proimgs/50.jpg",
		"images/proimgs/51.jpg",
		"images/proimgs/52.jpg",
		"images/proimgs/53.jpg",
		"images/proimgs/54.jpg",
		"images/proimgs/55.jpg",
		"images/proimgs/56.jpg"
	];
	// 转换pro_bd里的标签$
	var probd = $(".pro_bd");
	var proUL = $(".pro_bd ul");
	var proLI = $(".pro_bd li");
	// li标签的宽高要等比，宽设置了100%；那么高度就要随着设备的宽度变化也要做出变化
	var wWidth = $(window).width();
	proLI.each(function() {
		if (wWidth < 1200) {
			wWidth = 1200;
		}
		$(this).css('height', 367/476*(wWidth/4));
	});
	// 当调整浏览器窗口的大小时，发生 resize 事件。
	$(window).resize(function() {
		wWidth = $(window).width();
		if (wWidth < 1200) {
			wWidth = 1200;
		}
		proLI.each(function() {
			$(this).css('height',367/476*(wWidth/4));
		});
	});
	// 给每个li标签添加上各自的背景图片
	proLI.each(function(i) {
		$(".pro_bd li:eq("+i+")").css({
			background: "url("+proImgs[i]+") no-repeat center / cover",
		});	
	});
});
/*--------------------------第三屏 添加背景图片--------------------------*/
$(function(){
	var c3itembg = [
	"images/content301.png",
	"images/content302.png",
	"images/content303.png",
	"images/content304.png",
	"images/content305.png",
	"images/content306.png"
	];
	for (var i = 0; i < c3itembg.length; i++) {
		$(".content3 .flex_item:eq("+i+")").css('background', "url("+c3itembg[i]+") no-repeat right");
	}
});
/*--------------------------第四屏 左边新闻盒子切换动画--------------------------*/
/**
 * 功能分析
 * 1.让滑块滑动起来
 * 2.箭头跟随滑块切换透明度
 * 3.按钮添加鼠标触发变色
 * 4.按钮添加点击事件
 * 5.鼠标移入项目中，停止动画
 * 6.鼠标移除项目，开启动画
 * 
 */
$(function(){
	// 1.让滑块滑动起来
	// 左滑函数
	function fnl() {
		$(".slide").animate({}, 1,function(){
			$(this).css('transform', 'translate3d(-400px,0,0)');
			// 2.箭头跟随滑块切换透明度
			// 3.按钮添加鼠标触发变色
			// 左箭头
			$(".btn_l").css({
				opacity: '1',
				pointerEvents: 'auto',
				cursor: 'pointer'
			}).addClass('active');
			// 右箭头
			$(".btn_r").css({
				opacity: '.3',
				pointerEvents: 'none',
				cursor: 'none'
			}).removeClass('active');
		})
	}
	// fnl();
	// 右滑函数
	function fnr() {
		$(".slide").animate({}, 1,function(){
			$(this).css('transform', 'translate3d(0,0,0)');
			// 2.箭头跟随滑块切换透明度
			// 3.按钮添加鼠标触发变色
			// 左箭头
			$(".btn_l").css({
				opacity: '.3',
				pointerEvents: 'none',
				cursor: 'none'
			}).removeClass('active');
			// 右箭头
			$(".btn_r").css({
				opacity: '1',
				pointerEvents: 'auto',
				cursor: 'pointer'
			}).addClass('active');
		})
	}
	// 定时器规定动画执行规律
	var interval = window.setInterval(function(){
		fnl();
		var t = window.setTimeout(function(){
			fnr();
		},4000)
	},8000)
	// 4.按钮添加点击事件
	// 左箭头
	// 做点击次数判断，点击一下停止动画，点击2下，开启动画
	var num = 1;
	$(".btn_l").click(function() {
		if (num%2 == 0) {
			fnr();
			interval = window.setInterval(function(){
				fnl();
				var t = window.setTimeout(function(){
					fnr();
				},4000)
			},8000);
			num++;
		} else {
			clearInterval(interval);
			fnr();
			num++;
		}
	});
	// 右箭头
	$(".btn_r").click(function() {
		if (num%2 == 0) {
			fnl();
			interval = window.setInterval(function(){
				fnl();
				var t = window.setTimeout(function(){
					fnr();
				},4000)
			},8000);
			num++;
		} else {
			clearInterval(interval);
			fnl();	
			num++;
		}	
	});
	// 5.鼠标移入项目中，停止动画
	// 6.鼠标移除项目，开启动画
	$(".slider").mouseenter(function() {
		clearInterval(interval);
	}).mouseleave(function() {
		interval = window.setInterval(function(){
			fnl();
			var t = window.setTimeout(function(){
				fnr();
			},4000)
		},8000);
	});
	// 左边盒子标题tab点击事件
	$(".box_l .tab").click(function() {
		$(".box_l .tab").removeClass('active');
		$(this).addClass('active');
		$(".box_l .slider .slide").hide();
		var nowindex = $(this).index();
		$(".box_l .slider .slide").eq(nowindex).fadeIn(300);
	});
	// 右边盒子标题tab点击事件
	$(".box_r .tab-item").first().show();
	$(".box_r .tab").click(function() {
		$(".box_r .tab").removeClass('active');
		$(this).addClass('active');
		$(".box_r .tab-item").hide();
		var nowindex = $(this).index();
		$(".box_r .tab-item").eq(nowindex).fadeIn(300);
	});
});
/*--------------------------第四屏 底部友情链接盒子切换动画--------------------------*/
$(function(){
	// 友情链接收缩
	var num = 1;
	$(".box_b button").click(function() {
		if (num%2 == 0) {
			$(".box_b").css('height', '84px');
			$(".friend-link").css('height', '30px');
			num++;
		} else {
			$(".box_b").css('height', '170px');
			$(".friend-link").css('height', '120px');
			num++;
		}
	});
});