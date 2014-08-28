// 左右循环滚动效果，点击开始、结束，对象指向li。
$(document).ready(function(){
	inner=$(".b_rollpic_inner");
	li=$(".b_rollpic_inner li")
	var L=5;//L为outer中显示inner内容的数量
	var x=li.length-L;
	var y=0;
	var t=null;

	$(".js_bottom_rollleft").click(function(){
		inner.animate({left:"-=163px"},500,function(){
			inner.css("left","-163px").find("li:first").appendTo(inner);
		})
	})
	$(".js_bottom_rollright").click(function(){
		inner.animate({left:"+=163px"},500,function(){
			inner.css("left","-163px").find("li:last").prependTo(inner);
		})
	})
})