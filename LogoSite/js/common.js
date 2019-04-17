$(function() {

	// Custom JS
$('.testimonials__slider').slick({
	slidesToShow: 1,
	loop:true,
	dots: true,
	arrows:false,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
     }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         arrows: false,
      }
    }
    ]
});
jQuery(function($){
   $("#phone_input").mask("+79 (999) 9999");
});
});

