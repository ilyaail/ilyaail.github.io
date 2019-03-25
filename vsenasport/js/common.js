$(function() {
	$('.event__slider').slick({
		dots: false,
	  	focusOnSelect: true,
	  	prevArrow:"<i class='slick-prev prev' aria-hidden='true'></i>",
        nextArrow:"<i class='slick-next next' aria-hidden='true'></i>"
	});



var countHamb = 1;
	$('#hamburger-menu').click(function() {
		if(countHamb == 1) {
			countHamb = 0;
			$('.hamburger').addClass('is-active');
			$('.header__nav').addClass('active');
			$('.head-menu').animate({width:'toggle'},350);
			
			$("body").css("overflow","hidden"); 
			
			console.log('2')

		} else if (countHamb == 0){
			countHamb = 1;
			$('.hamburger').removeClass('is-active');
			$('.head-menu').animate({width:'toggle'},350);
			$('.header__nav').removeClass('active');
			$("body").css("overflow","auto");
			console.log('1')
		}
		
	})


});

$(document).ready(function()
{
	if ($(window).width() < 440) {
		/* заменa логотипа */
		console.log('less then 440');
	$('.header__logo .mobile-logo').attr('src', 'img/mobile-logo.png');
}

  if ($(window.location.pathname == "/calendar.html") && ($(window).width() < 640) ) {
    
		/* заменa логотипа */
		console.log('less then 640');
	$('.header__logo .mobile-logo').attr('src', 'img/logo_calendar_mobile.png');
}
   
if ($(window.location.pathname == "/city.html") && ($(window).width() < 640) ) {
    
		/* заменa логотипа */
		console.log('less then 640');
	$('.header__logo .mobile-logo').attr('src', 'img/logo_calendar_mobile.png');
}
   

});

