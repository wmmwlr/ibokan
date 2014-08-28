$(document).ready(function(){
	   //头部滑块
		$("#e_nav a").hover(function(){
			var indexa = $("#e_nav a").index(this);
			 b = indexa*145+"px";
			$("#e_tom").animate({left:b},300);
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
		$('html,body').animate({scrollTop: '0px'}, 500);});	
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
		$("#b_footer .b_pic2b").hover(
			function(){
				$(this).removeClass("b_pic2b").addClass("b_pic2b_c");},
			function(){
				$(this).removeClass("b_pic2b_c").addClass("b_pic2b");
			})
		$("#b_footer .b_pic3b").hover(
			function(){
				$(this).removeClass("b_pic3b").addClass("b_pic3b_c");},
			function(){
				$(this).removeClass("b_pic3b_c").addClass("b_pic3b");
			})
		$("#b_footer .b_pic5b").hover(
			function(){
				$(this).removeClass("b_pic5b").addClass("b_pic5b_c");},
			function(){
				$(this).removeClass("b_pic5b_c").addClass("b_pic5b");
			})
		$("#b_footer .b_pic6b").hover(
			function(){
				$(this).removeClass("b_pic6b").addClass("b_pic6b_c");},
			function(){
				$(this).removeClass("b_pic6b_c").addClass("b_pic6b");
			})
		// $("#e_nav a").eq(2).hover(
		// 	function (){ 
		// 	$(this).removeClass("e_icon3").addClass("e_icon3_c"); 
		// 	}, 
		// 	function (){ 
		// 	$(this).removeClass("e_icon3_c").addClass("e_icon3"); 
		// 	} 
		// 	); 
			// }); 
		// $(".e_zhezhao").mouseover(function(){
		// 	$(".e_zhezhao1").animate({top:"-320px"},500);
		//     aa=parseInt($(".e_zhezhao1").css("top"));//parseInt一定得转换类型
		// 	if(aa<0){
		// 		$(".e_zhezhao1").css("display","block");
		// 		// $(".e_zhezhao1").show();
		// 	 }

		// }).mouseout(function(){
		// 	$(".e_zhezhao1").animate({top:"0px"},500);
		// 	aa=parseInt($(".e_zhezhao1").css("top"));
		// 	if(aa=0){
		// 		// $(".e_zhezhao1").animate({display:"none"},200);
		// 		$(".e_zhezhao1").css("display","none");
		// 		// $(".e_zhezhao1").hide();
		// 	 }
		// });


		// $(".e_zhezhao").mouseover(function(){
		// 	$(".e_zhezhao1").animate({marginTop:"-320px"},500);
		//     aa=parseInt($(".e_zhezhao1").css("marginTop"));//parseInt一定得转换类型
		//     	$(".e_zhezhao1").css("display","block");
		// 	// if(aa<0){
		// 	// 	$(".e_zhezhao1").css("display","block");
		// 	// 	// $(".e_zhezhao1").show();
		// 	//  }


		
		// $(".e_zhezhao3").hover(function(){
		// 	$(".e_zhezhao1").animate({top:"-320px"},500,function(){
		// 		$(".e_zhezhao1").css("display","block");
		// 	});
		// 	$(".e_zhezhao1").animate({height:"100px"},500);
		// 	$(".e_zhezhao1").animate({paddingTop:"200px"},500);

		// },function(){
		// 	$(".e_zhezhao1").animate({height:"0px"},500);
		// 	$(".e_zhezhao1").animate({paddingTop:"0px"},500);
		// 	$(".e_zhezhao1").animate({top:"0px"},500,function(){
		// 		$(".e_zhezhao1").css("display","none");
		// 	});
		// });


        //遮罩层
        $(".e_zhezhao3").hover(function(){
			$(this).children("dd").children("div").animate({top:"-320px"},500,function(){
				$(this).css("display","block");
			});
			$(this).children("dd").children("div").animate({height:"100px"},500);
			$(this).children("dd").children("div").animate({paddingTop:"200px"},500);

		},function(){
			$(this).children("dd").children("div").animate({height:"0px"},200);
			$(this).children("dd").children("div").animate({paddingTop:"0px"},200);
			$(this).children("dd").children("div").animate({top:"0px"},1000,function(){
				$(this).children("dd").children("div").css("display","none");
			});
		});


		// $(".e_zhezhao1").mouseout(function(){
		// 	$(".e_zhezhao1").animate({height:"0px"},500);
		// 	$(".e_zhezhao1").animate({paddingTop:"0px"},500);
		// 	$(".e_zhezhao1").animate({top:"0px"},500,function(){
		// 		$(".e_zhezhao1").css("display","none");
		// 	});
		// });

		//图片上下移动
		$(".e_courseQuestion a span").mouseover(function(){
			$(this).animate({top:"-70px"},500);

		}).mouseout(function(){
			$(this).animate({top:"0px"},500);
		});


		$(".e_proShowscrollimg dt").hover(function(){
			$(this).children(".e_proShowscrollimg1").animate({top:"-200px"},500);
			$(this).children(".e_proShowscrollimg1").next("img").animate({top:"0px"},500);
		},function(){
			$(this).children(".e_proShowscrollimg1").animate({top:"0px"},500);
			$(this).children(".e_proShowscrollimg1").next("img").animate({top:"500px"},500);
		})
})


// 武凌云做的切换图片
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
                // _bodies.removeClass("cur").eq(_current).addClass("cur");
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

    inner=$(".e_proShowscrollP");
	dl=$(".e_proShowscrollP dl");
	$(".e_starsscrollL").click(function(){
			inner.animate({left:"-=174px"},500);
			if(inner){
				inner.css("left","0");
			}
	})
	$(".e_starsscrollR").click(function(){
			inner.animate({left:"+=174px"},500);	
	})
});






