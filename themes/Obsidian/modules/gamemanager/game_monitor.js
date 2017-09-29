jQuery(function($){
var width = $(window).width();
$(window).on('resize', function(){
   if($(this).width() <= 890){
      $(".expand-child > td:nth-child(1)").attr('colspan', '3');
   }else {
	   $(".expand-child > td:nth-child(1)").attr('colspan', '4');
   }
});
});