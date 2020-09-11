(function($) {
    // Custom JS
	$('.modal-trigger').on('click', function(){
	  $('.modal-parimatch').fadeToggle();
	});
	$('.pari-close').on('click', function(){
	    $('.modal-parimatch').fadeOut();1
	});
	$('.first-team').on('click', function(){
		$(this).find('.left').toggleClass('selected');
		if ($(".selected")[0]){
	    	$('.submit-button').addClass('active');
		}else{
			$('.submit-button').removeClass('active');
		}
	});
	$('.second-team').on('click', function(){
		$(this).find('.right').toggleClass('selected');
		if ($(".selected")[0]){
		    $('.submit-button').addClass('active');
		}else{
			$('.submit-button').removeClass('active');
		}
	});
	$('.middle').on('click', function(){
		$(this).toggleClass('selected');
		if ($(".selected")[0]){
		    $('.submit-button').addClass('active');
		}else{
			$('.submit-button').removeClass('active');
		}
	});
})(jQuery);