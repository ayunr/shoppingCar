$(function(){
	
	
	//	一级菜单,调出二级菜单
	$('.nav li').mouseenter(function(){
		$(this).addClass('show_border').siblings().removeClass('show_border');
		var index=$('#part1 .nav>li').index(this);
		$('#part1 .nav >li>dl').hide().eq(index).fadeIn();
	});
	//	part3中的右上 图书 电子书交互效果：list标题变化，和list内容变化
	$('.nav li').mouseleave(function(){
		$('li').removeClass('show_border');
		$('.nav_son').css('display','none');
	});
	$('#part3 .left_book ul.list_title li').mouseenter(function(){
		$(this).addClass('show_bgcolor').siblings().removeClass('show_bgcolor');
		var index=$('#part3 .left_book ul.list_title li').index(this);
		$('#part3 .left_book ul.right_list').hide().eq(index).fadeIn();
	});
//	新书畅销榜
	$('#part3 .right_book ul>li').mouseenter(function(){
		
	});
//		part4 的交互效果
	$('#part4 ul.list_title li').mouseenter(function(){
		$(this).addClass('show_bgcolor').siblings().removeClass('show_bgcolor');
		var index=$('#part4 ul.list_title li').index(this);
		$('#part4>div').hide().eq(index).fadeIn();
		$('#part4>div .right_list').hide().eq(index).fadeIn();
	});
//		part4_1 的交互效果
	$('#part4_1 ul.list_title li').mouseenter(function(){
		$(this).addClass('show_bgcolor').siblings().removeClass('show_bgcolor');
		var index=$('#part4_1 ul.list_title li').index(this);
		$('#part4_1>div').hide().eq(index).fadeIn();
	});
//		part5 的交互效果
	$('#part5 ul.list_title li').mouseenter(function(){
		$(this).addClass('show_bgcolor').siblings().removeClass('show_bgcolor');
		var index=$('#part5 ul.list_title li').index(this);
		$('#part5>div').hide().eq(index).fadeIn();
	});
//		part6 的交互效果
	$('#part6 ul.list_title li').mouseenter(function(){
		$(this).addClass('show_color').siblings().removeClass('show_color');
		var index=$('#part6 ul.list_title li').index(this);
		$('#part6>div').hide().eq(index).fadeIn();
	});
	$('#part6>div li').mouseenter(function(){
		$(this).addClass('show_bgcover').sibling().removeClass('show_bgcover');
	});
	$('#part6>div li').mouseleave(function(){
		$(this).removeClass('show_bgcover');
	});
	
//	点击top时回到顶部

	console.log($(window).scrollTop());
	$('#part9 img').click(function(){
		$('html,body').animate({scrollTop:0},500);
	});

//	parent10 点击按钮, 展开右侧隐藏按钮, 并跳动到相对应的板块去
	$('#part10 li').hover(function(){
		var index=$('#part10 li').index(this);
		if(index==0){
			$(this).css('background-color','#93d46f');
			$(this).siblings().css('background-color','#f2f2f2');
			$('#part10 img.active').hide().eq(0).fadeIn();
		}else if(index==1){
			$(this).css('background-color','#f65727');
			$(this).siblings().css('background-color','#f2f2f2');
			$('#part10 img.active').hide().eq(1).fadeIn();
		}
		else if(index==2){
			$(this).css('background-color','#bb9dee');
			$(this).siblings().css('background-color','#f2f2f2');
			$('#part10 img.active').hide().eq(2).fadeIn();
		}
		else if(index==3){
			$(this).css('background-color','#ff7394');
			$(this).siblings().css('background-color','#f2f2f2');
			$('#part10 img.active').hide().eq(3).fadeIn();
		}
		else if(index==4){
			$(this).css('background-color','#c2ec51');
			$(this).siblings().css('background-color','#f2f2f2');
			$('#part10 img.active').hide().eq(4).fadeIn();
		}},function(){
			$(this).css('background-color','#f2f2f2');
			$('#part10 img.active').hide();
		}
	);
	$('#part11 .second').hover(function(){
		$('#part11 .pricecode').fadeIn();
	},function(){
		$('#part11 .pricecode').hide();
	});
	
	
	
});






var opts={
			boxh:428,//盒子的高度
			w:1000,//盒子的宽度
			h:400,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:1,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:70,//控制按钮宽度
			controlsH:8,//控制按钮高度
			radius:2//控制按钮圆角度数
	};
	$("#aa").tyslide(opts);
	
	var opts={
			boxh:216,//盒子的高度
			w:330,//盒子的宽度
			h:216,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:1//控制按钮圆角度数
	};
	$("#bb1").tyslide(opts);
	
	var opts={
			boxh:216,//盒子的高度
			w:330,//盒子的宽度
			h:216,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:1//控制按钮圆角度数
	};
	$("#bb2").tyslide(opts);
	
	var opts={
			boxh:216,//盒子的高度
			w:330,//盒子的宽度
			h:216,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:1//控制按钮圆角度数
	};
	$("#bb3").tyslide(opts);
	
	var opts={
			boxh:336,//盒子的高度
			w:424,//盒子的宽度
			h:336,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:1//控制按钮圆角度数
	};
	$("#cc1").tyslide(opts);
	
	var opts={
			boxh:336,//盒子的高度
			w:424,//盒子的宽度
			h:336,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:1//控制按钮圆角度数
	};
	$("#cc2").tyslide(opts);
	
	var opts={
			boxh:336,//盒子的高度
			w:424,//盒子的宽度
			h:336,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:1//控制按钮圆角度数
	};
	$("#cc3").tyslide(opts);
//	
	var opts={
			boxh:336,//盒子的高度
			w:424,//盒子的宽度
			h:336,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:1//控制按钮圆角度数
	};
	$("#dd1").tyslide(opts);
	
	var opts={
			boxh:336,//盒子的高度
			w:424,//盒子的宽度
			h:336,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:1//控制按钮圆角度数
	};
	$("#dd2").tyslide(opts);
	
	var opts={
			boxh:336,//盒子的高度
			w:424,//盒子的宽度
			h:336,//图片的高度
			isShow:true,//是否显示控制器
			isShowBtn:true,//是否显示左右按钮
			controltop:4,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
			controlsW:22,//控制按钮宽度
			controlsH:4,//控制按钮高度
			radius:1//控制按钮圆角度数
	};
	$("#dd3").tyslide(opts);
	






