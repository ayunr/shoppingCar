$(function(){
	$('#load_bgimg .load_msg p.first>span').mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	$('#load_bgimg .load_msg p.first>span').click(function(){
		$(this).addClass('show_wordcolor').siblings().removeClass('show_wordcolor');
		var index=$('#load_bgimg .load_msg p.first>span').index(this);
		$('#load_bgimg .load_msg>div').hide().eq(index).fadeIn();
	});
});
