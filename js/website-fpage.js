$(function(){
  $("#fullpage").fullpage({
/*----------------------navigation-导航----------------------*/
		//绑定菜单，设定的相关属性与anchors的值对应后，菜单可以控制滚动，默认为false。
    menu: false,
    //anchors定义锚链接，默认为[]
    anchors:[],
    //是否锁定锚链接，默认为false,设为true后链接地址不会改变
    lockAnchors: false,
    //是否显示导航，默认为false
    navigation: true,
    //导航小圆点的位置
    navigationPosition: 'right',
    //导航小圆点的提示
    navigationTooltips: ['企业网站','品牌网站','营销型网站','电商网站','行业门户','响应式网站','H5活动网站','Flash网站'],
    //是否显示当前页面的tooltip信息
    showActiveTooltip: true,
    //是否显示横向幻灯片的导航，默认为false
    slidesNavigation: false,
    //横向导航的位置，默认为bottom，可以设置为top或bottom
    slidesNavPosition: 'bottom',
    //是否包含滚动条，默认为false,若为true浏览器自带滚动条出现
    scrollBar: false,
    hybrid: false,

/*----------------------scrolling-滚动----------------------*/
		//是否使用CSS3 transforms来实现滚动效果，默认为true
    css3: true,
    //设置滚动速度，单位毫秒，默认700
    scrollingSpeed: 700,
    //是否使用插件的滚动方式，默认为true,若为false则会出现浏览器自带滚动条
    autoScrolling: true,
    //设置是否自适应整个窗口的空间，默认值：true
    fitToSection: true,
    fitToSectionDelay: 1000,
    //定义页面section滚动的动画方式，若修改此项需引入jquery.easing插件
    easing: 'easeInOutCubic',
    //定义页面section滚动的过渡效果，若修改此项需引入第三方插件
    easingcss3: 'ease',
    //滚动到最低部后是否连续滚动到顶部，默认为false
    loopBottom: false,
    //滚动到最顶部后是否连续滚动到底部，默认为false
    loopTop: false,
    //横向slide幻灯片是否循环滚动，默认为true
    loopHorizontal: true,
    //是否循环滚动，不兼容loopTop和loopBottom选项
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    //避免自动滚动，滚动时的一些元素，例如百度地图
    normalScrollElements: null,
    //内容超过满屏后是否显示滚动条，true则显示滚动条，若需滚动查看内容还需要jquery.slimscroll插件的配合
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,
    scrollOverflowOptions: null,
    //在移动设备中滑动页面的敏感性，默认为5最高100，越大越难滑动
    touchSensitivity: 5,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

/*----------------------Accessibility-可访问性----------------------*/
    //是否可以使用键盘方向键导航，默认为true
    keyboardScrolling: true,
    //锚链接是否可以控制滚动动画，默认为true,若为false则锚链接定位失效
    animateAnchor: true,
    //是否记录历史，默认为true,浏览器的前进后退可导航。若autoScrolling:false,那么这个属性将被关闭
    recordHistory: true,

/*----------------------design-设计----------------------*/
	//定义是否通过箭头来控制slide,默认true
    controlArrows: true,
    // 控制箭头颜色
    controlArrowColor: '#fff',
    //定义每一页的内容是否垂直居中，默认true
    verticalCentered: true,
    //为每个section设置background-color属性
    sectionsColor: ['orange','black','pink','red','blue','hotpink','yellow','green'],
    // 设置每一个section顶部的padding,默认为0
    paddingTop: 0,
    // 设置每一个section底部的padding,默认为0
    paddingBottom: 0,
    // 固定元素，默认为null,需要配置一个jquery选择器，在页面滚动时，fixElements设置的元素不滚动
    fixedElements: null,
    responsive: 0, //backwards compabitility with responsiveWiddth
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
    },

/*----------------------Custom selectors-选择器----------------------*/
    //section选择器。默认为.section
    sectionSelector: '.section',
    //slide选择器，默认为.slide
    slideSelector: '.slide',

    //events
    /*----------------------events-事件----------------------*/
    v2compatible: false,
    afterLoad: null,
    onLeave: null,
    afterRender: null,
    afterResize: null,
    afterReBuild: null,
    afterSlideLoad: null,
    onSlideLeave: null,
    afterResponsive: null,

    lazyLoading: true
  });
});