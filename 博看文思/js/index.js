$(document).ready(function(){
	   //头部滑块
		$("#e_nav a").hover(function(){
			var indexa = $("#e_nav a").index(this);
			 b = indexa*125+"px";
			$("#e_tom").stop().animate({left:b},300);
		})
       //回到顶部
		$(window).scroll(function() {		
		if($(window).scrollTop() >= 100){
			$('.actGotop').fadeIn(300); 
		}else{    
			$('.actGotop').fadeOut(300);    
		}  
		});
		$('.actGotop').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 1500);});	

        //遮罩层
        $(".e_zhezhao3").hover(function(){
			$(this).children("dd").children("div").stop().animate({top:"0px"},500);
		},function(){
			$(this).children("dd").children("div").stop().animate({top:"300px"},500);
		});

		//图片上下移动
		$(".e_courseQuestion a span").mouseover(function(){
			$(this).stop().animate({top:"-70px"},500);

		}).mouseout(function(){
			$(this).stop().animate({top:"0px"},500);
		});


		$(".e_proShowscrollimg dt").hover(function(){
			$(this).children(".e_proShowscrollimg1").stop().animate({top:"-200px"},500);
			$(this).children(".e_proShowscrollimg1").next("img").stop().animate({top:"0px"},500);
		},function(){
			$(this).children(".e_proShowscrollimg1").stop().animate({top:"0px"},500);
			$(this).children(".e_proShowscrollimg1").next("img").stop().animate({top:"500px"},500);
		})
})


//切换图片
jQuery(function ($) {
    if ($(".e_aboutUsimgScroll .slide").length > 0) {
        var defaultOpts = { interval: 2000, fadeInTime: 500, fadeOutTime: 500 };
        var _bodies = $("ul.slide li");
        var _titles = $(".mfoc_nav li img");  
        var _count = _titles.length;
        var _current = 0;
        var _intervalID = null;

        var stop = function () { window.clearInterval(_intervalID); };
        var slide = function (opts) {
            if (opts) {
                _current = opts.current || 0;
            } else {
                _current = (_current >= (_count - 1)) ? 0 : (++_current);
            };
            _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function () {
                _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
            });
            _titles.removeClass("cur").eq(_current).addClass("cur");

        };
        var go = function () {
            stop();
            _intervalID = window.setInterval(function () { slide(); }, defaultOpts.interval);
        };
        var itemMouseOver = function (target, items) {
            stop();
            var i = $.inArray(target, items);
            slide({ current: i });
        };
        _titles.hover(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles); } else { stop(); } }, go);
        _bodies.hover(stop, go);
        go();
    }

    // 时间轴
    $(".main .year .list").each(function (e, target) {
	    var $target=  $(target),
	        $ul = $target.find("ul");
	    $target.height($ul.outerHeight()), $ul.css("position", "absolute");
	}); 
	$(".main .year>h2>a").click(function (e) {
	    e.preventDefault();
	    $(this).parents(".year").toggleClass("close");
	});

	//切换图片
    var inner=$(".e_proShowscrollPP");
	var dl=$(".e_proShowscrollPP dl");
	var inner1=$(".e_proShowscrollPPP");
	var dl1=$(".e_proShowscrollPPP dl");
	var inner2=$(".e_proShowscrollP4");
	var inner3=$(".e_proShowscrollP5");
	var dl2=$(".e_proShowscrollP4 dl");
	var a = 240;
	var a1 = 316;
	var a2 = 316;
	var a3 = 345;
	var a4 = 345;
	var	L = -240;
	var	L1 = -300;
	var	L2 = -342;
	$("#e_starsscrollL").click(function(){			
		    L-=a;
			if(L < -480){
				L = -480;
			}
				inner.animate({left:L + "px"},500);
	})
	$("#e_starsscrollR").click(function(){
			L+=a;
			if (L>0) {
		   		L = 0;
			}
			inner.animate({left:L + "px"},500);
	})
	$("#e_starsscrollL1").click(function(){			
		    L-=a;
			if(L < -480){
				L = -480;
			}
				inner1.animate({left:L + "px"},500);
	})
	$("#e_starsscrollR1").click(function(){
			L+=a;
			if (L>0) {
		   		L = 0;
			}
			inner1.animate({left:L + "px"},500);
	})
	$("#e_starsscrollL2").click(function(){			
		    L1-=a1;
			if(L1 < -936){
				L1 = -936;
			}
				inner2.animate({left:L1 + "px"},500);
	})
	$("#e_starsscrollR2").click(function(){
			L1+=a1;
			if (L1>10) {
		   		L1 = 8;
			}
			inner2.animate({left:L1 + "px"},500);
	})
	$("#e_starsscrollL3").click(function(){			
		    L2-=a3;
			if(L2 < -687){
				L2 = -687;
			}
				inner3.animate({left:L2 + "px"},500);
	})
	$("#e_starsscrollR3").click(function(){
			L2+=a4;
			if (L2>0) {
		   		L2 = 0;
			}
			inner3.animate({left:L2 + "px"},500);
	})

	var e_inner5=$(".de_sroll_left_img");
	var e_L4=-297;
	var e_a6 = 149;
	$(".dde_left_con5_iconL").click(function(){			
		    e_L4-=e_a6;
			if(e_L4 < -595){
				e_L4 = -595;
			}
			e_inner5.animate({left:e_L4 + "px"},500);
	})
	$(".dde_left_con5_iconR").click(function(){
			e_L4+=e_a6;
			if (e_L4>1) {
		   		e_L4 = 1;
			}
			e_inner5.animate({left:e_L4 + "px"},500);
	})
	var inner4=$(".d_sroll_left_img");
	var L3=-268;
	var a5 = 118;
	$("#dde_left_con5_iconL").click(function(){			
		    L3-=a5;
			if(L3 < -386){
				L3 = -386;
			}
			inner4.animate({left:L3 + "px"},500);
	})
	$("#dde_left_con5_iconR").click(function(){
			L3+=a5;
			if (L3>-32) {
		   		L3 = -32;
			}
			inner4.animate({left:L3 + "px"},500);
	})
	//开屏
	$(".e_courseimg").click(function(){
		$(".chaofan1").animate({left:"-400px"},1000);
		$(".chaofan2").animate({left:"800px"},1000);
		$(".chaofan").animate({opacity:"1"},1000);
	})

	// e_news更多活动移动图片
	var inner5=$(".b_listleft_inner");
	var L4=0;
	var a6=312;
	$(".a_listleftx3").click(function(){
		L4-=a6;
		if (L4<-624) {
			L4=-624;
		}
		inner5.animate({left:L4+"px"},500);
	})
	$(".a_listleftx4").click(function(){
		L4+=a6;
		if (L4>0) {
			L4=0;
		}
		inner5.animate({left:L4+"px"},500);
	})
	// a_projectlist移动图片
	var inner6=$(".b_listleft_inner2");
	var L5=0;
	var a7=624;
	
	$(".b_text1").click(function(){
		L5-=a7;
		if (L5<-1872) {
			L5=-1872;
		}
		inner6.animate({left:L5+"px"},500)
	})
	$(".b_text2").click(function(){
		L5+=a7;
		if (L5>0) {
			L5=0;
		}
		inner6.animate({left:L5+"px"},500)
	})
	//头部滑动改变背景
		$("#e_nav a").hover(
			function (){ 
				var e_index_c = $(this).index()+1;
				// alert(e_index_c)
			$(this).removeClass("e_icon"+e_index_c).addClass("e_icon"+e_index_c+"_c"); 
			}, 
			function (){ 
				var e_index_c = $(this).index()+1;
			$(this).removeClass("e_icon"+e_index_c+"_c").addClass("e_icon"+e_index_c); 
			} 
			); 
		//尾部改变图标
		$("#b_footer .pic2b").hover(
			function(){
				$(this).removeClass("pic2b").addClass("pic2b_c");},
			function(){
				$(this).removeClass("pic2b_c").addClass("pic2b");
			})
		$("#b_footer .pic3b").hover(
			function(){
				$(this).removeClass("pic3b").addClass("pic3b_c");},
			function(){
				$(this).removeClass("pic3b_c").addClass("pic3b");
			})
		$("#b_footer .pic5b").hover(
			function(){
				$(this).removeClass("pic5b").addClass("pic5b_c");},
			function(){
				$(this).removeClass("pic5b_c").addClass("pic5b");
			})
		$("#b_footer .pic6b").hover(
			function(){
				$(this).removeClass("pic6b").addClass("pic6b_c");},
			function(){
				$(this).removeClass("pic6b_c").addClass("pic6b");
			})

	
});

//头部轮播
jQuery(function ($) {
    if ($(".slide-pic").length > 0) {
        var defaultOpts = { interval: 2000, fadeInTime: 800, fadeOutTime: 800 };
        var _titles = $("ul.slide-txt li");
        var _titles_bg = $("ul.op li");
        var _bodies = $("ul.slide-pic li");
        var _count = _titles.length;
        var _current = 0;
        var _intervalID = null;
        var stop = function () { window.clearInterval(_intervalID); };
        var slide = function (opts) {
            if (opts) {
                _current = opts.current || 0;
            } else {
                _current = (_current >= (_count - 1)) ? 0 : (++_current);
            };
            _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function () {
                _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
                _bodies.removeClass("cur").eq(_current).addClass("cur");
            });
            _titles.removeClass("cur").eq(_current).addClass("cur");
            _titles_bg.removeClass("cur").eq(_current).addClass("cur");
        };
        var go = function () {
            stop();
            _intervalID = window.setInterval(function () { slide(); }, defaultOpts.interval);
        };
        var itemMouseOver = function (target, items) {
            stop();
            var i = $.inArray(target, items);
            slide({ current: i });
        };
        _titles.hover(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles); } else { stop(); } }, go);
        _bodies.hover(stop, go);
        go();
    }
});




