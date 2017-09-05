//图片tab切换
$(function(){	
$('.num li').mousemove(function(){
var index=$(this).index();
$(this).attr('class',"active").siblings('li').attr('class','act');
$('.img_content').eq(index).show(200).siblings('.img_content').hide();
});
  var t=0;
  var timer=setInterval(function(){
    if(t==$('.num li').length)t=0;
    $('.num li:eq('+t+')').click();
    t++;
  }, 5000);


   // $('.home_cate_list').mouseover(function(){
   // $('.cate_out').eq($(this).index()-2).show().siblings().hide();
   //	},
   //	function(){
   //		$('.cate_out').hide();
   //	}
   //)

$(".home_cate_list").mouseover(function(){
		var index=$(this).index();
			$(".product_list").show();
			$(".cate_out").hide().eq(index-2).show();
			
	})
	$("#content_first").mouseleave(function(){
			$(".product_list").hide();
		
	})

})


