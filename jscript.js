$(document).ready(function(){
	$('#book_pick_date, #book_off_date, #tarih3').datepicker({});
	
	$(window).scroll(function(){
		$('.section2').each(function(){
			var topEdge = $(this).offset().top;
			var windowBottom = $(window).scrollTop()+$(window).height();
			if(windowBottom > topEdge){
				$(this).animate({'opacity':'1'},1000);
			}
		})
	})
});