$(document).ready(function(){
	var box=$(".b_boxOfTeacher");
	var img=$(".b_boxOfTeacher .img");
	box.eq(0).css({display:"block"});
	box.eq(1).css({top:"0",left:"0px",width:"910px",height:"471px",display:"block"});
	img.eq(1).css({width:"263px",height:"460px"});
	box.eq(2).css({display:"block"});
	var x=box.length-1;
	var y=1;
	$(".js_bottom_rollleft").click(function() {
		if(y<x){
			$(".js_bottom_rollright").show();
			y++;
			box.eq(y).animate({top:"0",left:"0px",width:"910px",height:"471px"});
			img.eq(y).animate({width:"263px",height:"460px"});
			box.eq(y+1).fadeIn("slow");
			box.eq(y-1).animate({top:"0px",left:"-50px",width:"50px",height:"50px"});
			img.eq(y-1).animate({width:"50px",height:"100px"});
			box.eq(y-1).animate({display:"block"})
			console.log(y)
		}else if (y==x) {
			y=0
			box.eq(0).animate({top:"0",left:"0px",width:"910px",height:"471px"});
			img.eq(0).animate({width:"263px",height:"460px"});
			box.eq(1).fadeIn("slow");
			box.eq(6).animate({top:"0px",left:"-50px",width:"50px",height:"50px"});
			img.eq(6).animate({width:"50px",height:"100px"});
			box.eq(6).animate({display:"block"})
		}
		
	});

	$(".js_bottom_rollright").click(function() {
		if(y>0){
			$(".js_bottom_rollleft").show();
			y--;
			box.eq(y).animate({top:"0",left:"0",width:"910px",height:"471px"});
			img.eq(y).animate({width:"263px",height:"460px"});
			box.eq(y+2).fadeIn("slow");
			box.eq(y+1).animate({top:"0px",left:"-50px",width:"50px",height:"50px"});
			img.eq(y+1).animate({width:"50px",height:"100px"});
			box.eq(y-1).animate({display:"block"})
			box.eq(2).animate({display:"block"})
		}else if (y==0) {
			y=x
			box.eq(6).animate({top:"0",left:"0px",width:"910px",height:"471px"});
			img.eq(6).animate({width:"263px",height:"460px"});
			box.eq(5).fadeIn("slow");
			box.eq(0).animate({top:"0px",left:"-50px",width:"50px",height:"50px"});
			img.eq(0).animate({width:"50px",height:"100px"});
			box.eq(0).animate({display:"block"})
		}
	})
})