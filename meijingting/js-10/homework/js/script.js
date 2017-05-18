//手风琴动画效果
var _index7=0;
$(".flash4 ul li").mouseover(function(){
	_index7=$(this).index();
	$(this).stop().stop().animate({width:538},500).siblings("li").stop().animate({width:106},500);
	$(".imgCen").eq(_index7).css("display","block").siblings(".imgCen").css("display","none");
	$("p.bt_2").eq(_index7).css("display","block").siblings("p.bt_2").css("display","none");
	$(".imgTop img").eq(_index7).addClass("tm").siblings(".imgTop img").removeClass("tm");
});
$(".flash4 ul li").mouseout(function(){
	$(".imgCen").css("display","none");
	$("p.bt_2").css("display","none");
});



