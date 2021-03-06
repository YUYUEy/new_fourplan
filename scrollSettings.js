define(function(require) {
	require("$UI/jrsm/js/nicescroll/jquery.nicescroll");

	var settings = {
		cursorcolor : "#949494",// 改变滚动条颜色，使用16进制颜色值
		cursoropacitymin : 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
		cursoropacitymax : 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
		cursorwidth : "6px", // 滚动条的宽度，单位：便素
		cursorborder : "", // CSS方式定义滚动条边框
		cursorborderradius : "5px", // 滚动条圆角（像素）
		zindex : "auto", // 改变滚动条的DIV的z-index值
		scrollspeed : 40, // 滚动速度
		mousescrollstep : 40, // 鼠标滚轮的滚动速度 (像素)
		touchbehavior : false, // 激活拖拽滚动
		hwacceleration : true, // 激活硬件加速
		boxzoom : false, // 激活放大box的内容
		dblclickzoom : false, // (仅当 boxzoom=true时有效)双击box时放大
		gesturezoom : false, // (仅 boxzoom=true 和触屏设备时有效)
		// 激活变焦当out/in（两个手指外张或收缩）
		grabcursorenabled : false, // (仅当 touchbehavior=true) 显示“抓住”图标display
		// "grab" icon
		autohidemode : true, // 隐藏滚动条的方式, 可用的值:true
		// ,"cursor",false,"leave","hidden","scroll"
		background : "", // 轨道的背景颜色
		iframeautoresize : true, // 在加载事件时自动重置iframe大小
		cursorminheight : 32, // 设置滚动条的最小高度 (像素)
		preservenativescrolling : true, // 你可以用鼠标滚动可滚动区域的滚动条和增加鼠标滚轮事件
		railoffset : true, // 可以使用top/left来修正位置
		bouncescroll : false, // (only hw accell) 启用滚动跳跃的内容移动
		spacebarenabled : false, // 当按下空格时使页面向下滚动
		railpadding : {
			top : 0,
			right : 0,
			left : 0,
			bottom : 0
		}, // 设置轨道的内间距
		disableoutline : true, // 当选中一个使用nicescroll的div时，chrome浏览器中禁用outline
		horizrailenabled : true, // nicescroll可以管理水平滚动
		railalign : 'right', // 对齐垂直轨道
		railvalign : 'bottom', // 对齐水平轨道
		enabletranslate3d : true, // nicescroll 可以使用CSS变型来滚动内容
		enablemousewheel : true, // nicescroll可以管理鼠标滚轮事件
		enablekeyboard : true, // nicescroll可以管理键盘事件
		smoothscroll : true, // ease动画滚动
		sensitiverail : false, // 单击轨道产生滚动
		enablemouselockapi : true, // 可以用鼠标锁定API标题 (类似对象拖动)
		cursorfixedheight : false, // 修正光标的高度（像素）
		hidecursordelay : 600, // 设置滚动条淡出的延迟时间（毫秒）
		directionlockdeadzone : 6, // 设定死区，为激活方向锁定（像素）
		nativeparentscrolling : true, // 检测内容底部便于让父级滚动
		enablescrollonselection : false, // 当选择文本时激活内容自动滚动
		cursordragspeed : 0.3, // 设置拖拽的速度
		rtlmode : "auto", // DIV的水平滚动从左边开始
		cursordragontouch : false, // 使用触屏模式来实现拖拽
		oneaxismousemode : "auto", // 当只有水平滚动时可以用鼠标滚轮来滚动，如果设为false则不支持水平滚动，如果设为auto支持双轴滚动
		scriptpath : "", // 为boxmode图片自定义路径 ("" => same script path)
		preventmultitouchscrolling : true,// 防止多触点事件引发滚动
		pagedom : false
	};
	var methods = {
		init : function(pagemodel) {
			$.extend(settings, {
				pagedom : pagemodel._rootNode
			});
		}
	};

	$.extend({
		/**
		 * 设置Div隐形滚动条
		 * 
		 * @param pagemodel
		 *            页面Model
		 * @param xid
		 *            控件xid
		 */
		setNiceScrollByXid : function(pagemodel, xid) {
			$(pagemodel.getElementByXid(xid)).niceScroll(settings);
		},
		/**
		 * 设置Grid隐形滚动条（有BUG）
		 * 
		 * @param pagemodel
		 *            页面Model
		 * @param xid
		 *            控件xid
		 */
		setNiceScrollByGrids : function(pagemodel, xid) {
			methods.init(pagemodel);
			$(pagemodel.getElementByXid(xid)).parents('div[class*="x-grid-bdiv"]').niceScroll(settings);
		},
		resizeScrollByGrids : function(pagemodel, xid) {
			methods.init(pagemodel);
			$(pagemodel.getElementByXid(xid)).parents('div[class*="x-grid-bdiv"]').getNiceScroll().resize();
		},
		resizeScrollByXid : function(pagemodel, xid) {
			$(pagemodel.getElementByXid(xid)).getNiceScroll().resize();
		},
		setNiceScrollByObj : function(obj) {
			obj.niceScroll(settings);
		},
		resizeScrollByObj : function(obj) {
			obj.getNiceScroll().resize();
		},
	});
});