$( document ).ready(function() {

		$(".js-video-button").modalVideo({
			youtube:{
				controls:0,
				nocookie: true
			}
		});
			var scroll = new SmoothScroll('a[href*="#"]',{
				speed: 1000,
				speedAsDuration: true
			});

  $('.portfolio-slider').slick({
    dots: true,
    speed: 350,
    infiniti: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: true
  });
  jQuery(function($){
   $("#phone_input").mask("+12 (399) 9999");
});
});
